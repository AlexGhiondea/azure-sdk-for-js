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
import * as Mappers from "../models/elasticPoolActivitiesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a ElasticPoolActivities. */
export class ElasticPoolActivities {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a ElasticPoolActivities.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns elastic pool activities.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool for which to get the current activity.
   * @param [options] The optional parameters
   * @returns Promise<Models.ElasticPoolActivitiesListByElasticPoolResponse>
   */
  listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.ElasticPoolActivitiesListByElasticPoolResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool for which to get the current activity.
   * @param callback The callback
   */
  listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, callback: msRest.ServiceCallback<Models.ElasticPoolActivityListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool for which to get the current activity.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ElasticPoolActivityListResult>): void;
  listByElasticPool(resourceGroupName: string, serverName: string, elasticPoolName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ElasticPoolActivityListResult>): Promise<Models.ElasticPoolActivitiesListByElasticPoolResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        elasticPoolName,
        options
      },
      listByElasticPoolOperationSpec,
      callback) as Promise<Models.ElasticPoolActivitiesListByElasticPoolResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByElasticPoolOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/elasticPoolActivity",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolActivityListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};