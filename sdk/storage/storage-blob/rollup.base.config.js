// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import nodeResolve from "rollup-plugin-node-resolve";
import multiEntry from "rollup-plugin-multi-entry";
import cjs from "rollup-plugin-commonjs";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
import shim from "rollup-plugin-shim";
// import visualizer from "rollup-plugin-visualizer";

const version = require("./package.json").version;
const banner = [
  "/*!",
  ` * Azure Storage SDK for JavaScript - Blob, ${version}`,
  " * Copyright (c) Microsoft and contributors. All rights reserved.",
  " */"
].join("\n");

const pkg = require("./package.json");
const depNames = Object.keys(pkg.dependencies);
const production = process.env.NODE_ENV === "production";

export function nodeConfig(test = false) {
  const externalNodeBuiltins = ["@azure/ms-rest-js", "crypto", "fs", "events", "os", "stream"];
  const baseConfig = {
    input: "dist-esm/src/index.js",
    external: depNames.concat(externalNodeBuiltins),
    output: {
      file: "dist/index.js",
      format: "cjs",
      sourcemap: true
    },
    preserveSymlinks: false,
    plugins: [
      sourcemaps(),
      replace({
        delimiters: ["", ""],
        values: {
          // replace dynamic checks with if (true) since this is for node only.
          // Allows rollup's dead code elimination to be more aggressive.
          "if (isNode)": "if (true)"
        }
      }),
      nodeResolve({ preferBuiltins: true }),
      cjs()
    ]
  };

  if (test) {
    // entry point is every test file
    baseConfig.input = ["dist-esm/test/*.spec.js", "dist-esm/test/node/*.spec.js"];
    baseConfig.plugins.unshift(multiEntry({ exports: false }));

    // different output file
    baseConfig.output.file = "dist-test/index.node.js";

    // mark assert as external
    baseConfig.external.push("assert", "fs", "path");

    baseConfig.context = "null";

    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0, rollup started respecting
    // the "sideEffects" field in package.json.  Since our package.json sets "sideEffects=false", this also
    // applies to test code, which causes all tests to be removed by tree-shaking.
    baseConfig.treeshake = false;
  } else if (production) {
    baseConfig.plugins.push(terser());
  }

  return baseConfig;
}

export function browserConfig(test = false, production = false) {
  const baseConfig = {
    input: "dist-esm/src/index.browser.js",
    external: ["ms-rest-js"],
    output: {
      file: "browser/azure-storage-blob.js",
      banner: banner,
      format: "umd",
      name: "azblob",
      sourcemap: true
    },
    preserveSymlinks: false,
    plugins: [
      sourcemaps(),
      replace({
        delimiters: ["", ""],
        values: {
          // replace dynamic checks with if (false) since this is for
          // browser only. Rollup's dead code elimination will remove
          // any code guarded by if (isNode) { ... }
          "if (isNode)": "if (false)"
        }
      }),
      // os is not used by the browser bundle, so just shim it
      shim({
        dotenv: `export function config() { }`,
        os: `
          export const type = 1;
          export const release = 1;
        `
      }),
      nodeResolve({
        mainFields: ["module", "browser"],
        preferBuiltins: false
      }),
      cjs({
        // When "rollup-plugin-commonjs@10.0.0" is used with "resolve@1.11.1", named exports of
        // modules with built-in names must have a trailing slash.
        // https://github.com/rollup/rollup-plugin-commonjs/issues/394
        namedExports: {
          "events/": ["EventEmitter"],
          "assert/": ["ok", "deepEqual", "equal", "fail", "deepStrictEqual", "notDeepEqual"]
        }
      })
    ]
  };

  if (test) {
    baseConfig.input = ["dist-esm/test/*.spec.js", "dist-esm/test/browser/*.spec.js"];
    baseConfig.plugins.unshift(multiEntry({ exports: false }));
    baseConfig.output.file = "dist-test/index.browser.js";
    // mark fs-extra as external
    baseConfig.external = ["fs-extra"];

    baseConfig.context = "null";

    // Disable tree-shaking of test code.  In rollup-plugin-node-resolve@5.0.0, rollup started respecting
    // the "sideEffects" field in package.json.  Since our package.json sets "sideEffects=false", this also
    // applies to test code, which causes all tests to be removed by tree-shaking.
    baseConfig.treeshake = false;
  } else if (production) {
    baseConfig.output.file = "browser/azure-storage-blob.min.js";
    baseConfig.plugins.push(
      terser({
        output: {
          preamble: banner
        }
      })
      // Comment visualizer because it only works on Node.js 8+; Uncomment it to get bundle analysis report
      // visualizer({
      //   filename: "./statistics.html",
      //   sourcemap: true
      // })
    );
  }

  return baseConfig;
}
