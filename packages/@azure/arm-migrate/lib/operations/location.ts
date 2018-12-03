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
import * as Mappers from "../models/locationMappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateContext } from "../azureMigrateContext";

/** Class representing a Location. */
export class Location {
  private readonly client: AzureMigrateContext;

  /**
   * Create a Location.
   * @param {AzureMigrateContext} client Reference to the service client.
   */
  constructor(client: AzureMigrateContext) {
    this.client = client;
  }

  /**
   * Checks whether the project name is available in the specified region.
   * @param locationName The desired region for the name check.
   * @param parameters Properties needed to check the availability of a name.
   * @param [options] The optional parameters
   * @returns Promise<Models.LocationCheckNameAvailabilityResponse>
   */
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase): Promise<Models.LocationCheckNameAvailabilityResponse>;
  /**
   * @param locationName The desired region for the name check.
   * @param parameters Properties needed to check the availability of a name.
   * @param callback The callback
   */
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityParameters, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  /**
   * @param locationName The desired region for the name check.
   * @param parameters Properties needed to check the availability of a name.
   * @param options The optional parameters
   * @param callback The callback
   */
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityParameters, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): void;
  checkNameAvailability(locationName: string, parameters: Models.CheckNameAvailabilityParameters, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.CheckNameAvailabilityResult>, callback?: msRest.ServiceCallback<Models.CheckNameAvailabilityResult>): Promise<Models.LocationCheckNameAvailabilityResponse> {
    return this.client.sendOperationRequest(
      {
        locationName,
        parameters,
        options
      },
      checkNameAvailabilityOperationSpec,
      callback) as Promise<Models.LocationCheckNameAvailabilityResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const checkNameAvailabilityOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Migrate/locations/{locationName}/checkNameAvailability",
  urlParameters: [
    Parameters.locationName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.CheckNameAvailabilityParameters,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.CheckNameAvailabilityResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
