/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/locationBasedPerformanceTierMappers";
import * as Parameters from "../models/parameters";
import { MariaDBManagementClientContext } from "../mariaDBManagementClientContext";

/** Class representing a LocationBasedPerformanceTier. */
export class LocationBasedPerformanceTier {
  private readonly client: MariaDBManagementClientContext;

  /**
   * Create a LocationBasedPerformanceTier.
   * @param {MariaDBManagementClientContext} client Reference to the service client.
   */
  constructor(client: MariaDBManagementClientContext) {
    this.client = client;
  }

  /**
   * List all the performance tiers at specified location in a given subscription.
   * @param locationName The name of the location.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationBasedPerformanceTierListResponse>
   */
  list(locationName: string, options?: msRest.RequestOptionsBase): Promise<Models.LocationBasedPerformanceTierListResponse>;
  /**
   * @param locationName The name of the location.
   * @param callback The callback
   */
  list(locationName: string, callback: msRest.ServiceCallback<Models.PerformanceTierListResult>): void;
  /**
   * @param locationName The name of the location.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(locationName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PerformanceTierListResult>): void;
  list(locationName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PerformanceTierListResult>, callback?: msRest.ServiceCallback<Models.PerformanceTierListResult>): Promise<Models.LocationBasedPerformanceTierListResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.LocationBasedPerformanceTierListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DBforMariaDB/locations/{locationName}/performanceTiers",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PerformanceTierListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
