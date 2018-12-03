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
import * as Mappers from "../models/migrationRecoveryPointsMappers";
import * as Parameters from "../models/parameters";
import { SiteRecoveryManagementClientContext } from "../siteRecoveryManagementClientContext";

/** Class representing a MigrationRecoveryPoints. */
export class MigrationRecoveryPoints {
  private readonly client: SiteRecoveryManagementClientContext;

  /**
   * Create a MigrationRecoveryPoints.
   * @param {SiteRecoveryManagementClientContext} client Reference to the service client.
   */
  constructor(client: SiteRecoveryManagementClientContext) {
    this.client = client;
  }

  /**
   * @summary Gets the recovery points for a migration item.
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param [options] The optional parameters
   * @returns Promise<Models.MigrationRecoveryPointsListByReplicationMigrationItemsResponse>
   */
  listByReplicationMigrationItems(fabricName: string, protectionContainerName: string, migrationItemName: string, options?: msRest.RequestOptionsBase): Promise<Models.MigrationRecoveryPointsListByReplicationMigrationItemsResponse>;
  /**
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param callback The callback
   */
  listByReplicationMigrationItems(fabricName: string, protectionContainerName: string, migrationItemName: string, callback: msRest.ServiceCallback<Models.MigrationRecoveryPointCollection>): void;
  /**
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationMigrationItems(fabricName: string, protectionContainerName: string, migrationItemName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MigrationRecoveryPointCollection>): void;
  listByReplicationMigrationItems(fabricName: string, protectionContainerName: string, migrationItemName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MigrationRecoveryPointCollection>, callback?: msRest.ServiceCallback<Models.MigrationRecoveryPointCollection>): Promise<Models.MigrationRecoveryPointsListByReplicationMigrationItemsResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        protectionContainerName,
        migrationItemName,
        options
      },
      listByReplicationMigrationItemsOperationSpec,
      callback) as Promise<Models.MigrationRecoveryPointsListByReplicationMigrationItemsResponse>;
  }

  /**
   * @summary Gets a recovery point for a migration item.
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param migrationRecoveryPointName The migration recovery point name.
   * @param [options] The optional parameters
   * @returns Promise<Models.MigrationRecoveryPointsGetResponse>
   */
  get(fabricName: string, protectionContainerName: string, migrationItemName: string, migrationRecoveryPointName: string, options?: msRest.RequestOptionsBase): Promise<Models.MigrationRecoveryPointsGetResponse>;
  /**
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param migrationRecoveryPointName The migration recovery point name.
   * @param callback The callback
   */
  get(fabricName: string, protectionContainerName: string, migrationItemName: string, migrationRecoveryPointName: string, callback: msRest.ServiceCallback<Models.MigrationRecoveryPoint>): void;
  /**
   * @param fabricName Fabric unique name.
   * @param protectionContainerName Protection container name.
   * @param migrationItemName Migration item name.
   * @param migrationRecoveryPointName The migration recovery point name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(fabricName: string, protectionContainerName: string, migrationItemName: string, migrationRecoveryPointName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MigrationRecoveryPoint>): void;
  get(fabricName: string, protectionContainerName: string, migrationItemName: string, migrationRecoveryPointName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MigrationRecoveryPoint>, callback?: msRest.ServiceCallback<Models.MigrationRecoveryPoint>): Promise<Models.MigrationRecoveryPointsGetResponse> {
    return this.client.sendOperationRequest(
      {
        fabricName,
        protectionContainerName,
        migrationItemName,
        migrationRecoveryPointName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MigrationRecoveryPointsGetResponse>;
  }

  /**
   * @summary Gets the recovery points for a migration item.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MigrationRecoveryPointsListByReplicationMigrationItemsNextResponse>
   */
  listByReplicationMigrationItemsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.MigrationRecoveryPointsListByReplicationMigrationItemsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByReplicationMigrationItemsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.MigrationRecoveryPointCollection>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByReplicationMigrationItemsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.MigrationRecoveryPointCollection>): void;
  listByReplicationMigrationItemsNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.MigrationRecoveryPointCollection>, callback?: msRest.ServiceCallback<Models.MigrationRecoveryPointCollection>): Promise<Models.MigrationRecoveryPointsListByReplicationMigrationItemsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByReplicationMigrationItemsNextOperationSpec,
      callback) as Promise<Models.MigrationRecoveryPointsListByReplicationMigrationItemsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByReplicationMigrationItemsOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/migrationRecoveryPoints",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.migrationItemName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MigrationRecoveryPointCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{resourceName}/replicationFabrics/{fabricName}/replicationProtectionContainers/{protectionContainerName}/replicationMigrationItems/{migrationItemName}/migrationRecoveryPoints/{migrationRecoveryPointName}",
  urlParameters: [
    Parameters.resourceName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.protectionContainerName,
    Parameters.migrationItemName,
    Parameters.migrationRecoveryPointName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MigrationRecoveryPoint
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByReplicationMigrationItemsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.MigrationRecoveryPointCollection
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
