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
import * as Mappers from "../models/consumerGroupsMappers";
import * as Parameters from "../models/parameters";
import { EventHubManagementClientContext } from "../eventHubManagementClientContext";

/** Class representing a ConsumerGroups. */
export class ConsumerGroups {
  private readonly client: EventHubManagementClientContext;

  /**
   * Create a ConsumerGroups.
   * @param {EventHubManagementClientContext} client Reference to the service client.
   */
  constructor(client: EventHubManagementClientContext) {
    this.client = client;
  }

  /**
   * Creates or updates an Event Hubs consumer group as a nested resource within a Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param consumerGroupName The consumer group name
   * @param parameters Parameters supplied to create or update a consumer group resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConsumerGroupsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, parameters: Models.ConsumerGroup, options?: msRest.RequestOptionsBase): Promise<Models.ConsumerGroupsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param consumerGroupName The consumer group name
   * @param parameters Parameters supplied to create or update a consumer group resource.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, parameters: Models.ConsumerGroup, callback: msRest.ServiceCallback<Models.ConsumerGroup>): void;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param consumerGroupName The consumer group name
   * @param parameters Parameters supplied to create or update a consumer group resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, parameters: Models.ConsumerGroup, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConsumerGroup>): void;
  createOrUpdate(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, parameters: Models.ConsumerGroup, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConsumerGroup>, callback?: msRest.ServiceCallback<Models.ConsumerGroup>): Promise<Models.ConsumerGroupsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        eventHubName,
        consumerGroupName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.ConsumerGroupsCreateOrUpdateResponse>;
  }

  /**
   * Deletes a consumer group from the specified Event Hub and resource group.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param consumerGroupName The consumer group name
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param consumerGroupName The consumer group name
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param consumerGroupName The consumer group name
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        eventHubName,
        consumerGroupName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets a description for the specified consumer group.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param consumerGroupName The consumer group name
   * @param [options] The optional parameters
   * @returns Promise<Models.ConsumerGroupsGetResponse>
   */
  get(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.ConsumerGroupsGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param consumerGroupName The consumer group name
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, callback: msRest.ServiceCallback<Models.ConsumerGroup>): void;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param consumerGroupName The consumer group name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConsumerGroup>): void;
  get(resourceGroupName: string, namespaceName: string, eventHubName: string, consumerGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConsumerGroup>, callback?: msRest.ServiceCallback<Models.ConsumerGroup>): Promise<Models.ConsumerGroupsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        eventHubName,
        consumerGroupName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ConsumerGroupsGetResponse>;
  }

  /**
   * Gets all the consumer groups in a Namespace. An empty feed is returned if no consumer group
   * exists in the Namespace.
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param [options] The optional parameters
   * @returns Promise<Models.ConsumerGroupsListByEventHubResponse>
   */
  listByEventHub(resourceGroupName: string, namespaceName: string, eventHubName: string, options?: Models.ConsumerGroupsListByEventHubOptionalParams): Promise<Models.ConsumerGroupsListByEventHubResponse>;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param callback The callback
   */
  listByEventHub(resourceGroupName: string, namespaceName: string, eventHubName: string, callback: msRest.ServiceCallback<Models.ConsumerGroupListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group within the azure subscription.
   * @param namespaceName The Namespace name
   * @param eventHubName The Event Hub name
   * @param options The optional parameters
   * @param callback The callback
   */
  listByEventHub(resourceGroupName: string, namespaceName: string, eventHubName: string, options: Models.ConsumerGroupsListByEventHubOptionalParams, callback: msRest.ServiceCallback<Models.ConsumerGroupListResult>): void;
  listByEventHub(resourceGroupName: string, namespaceName: string, eventHubName: string, options?: Models.ConsumerGroupsListByEventHubOptionalParams | msRest.ServiceCallback<Models.ConsumerGroupListResult>, callback?: msRest.ServiceCallback<Models.ConsumerGroupListResult>): Promise<Models.ConsumerGroupsListByEventHubResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        namespaceName,
        eventHubName,
        options
      },
      listByEventHubOperationSpec,
      callback) as Promise<Models.ConsumerGroupsListByEventHubResponse>;
  }

  /**
   * Gets all the consumer groups in a Namespace. An empty feed is returned if no consumer group
   * exists in the Namespace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ConsumerGroupsListByEventHubNextResponse>
   */
  listByEventHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ConsumerGroupsListByEventHubNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByEventHubNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ConsumerGroupListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByEventHubNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ConsumerGroupListResult>): void;
  listByEventHubNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ConsumerGroupListResult>, callback?: msRest.ServiceCallback<Models.ConsumerGroupListResult>): Promise<Models.ConsumerGroupsListByEventHubNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByEventHubNextOperationSpec,
      callback) as Promise<Models.ConsumerGroupsListByEventHubNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups/{consumerGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.eventHubName,
    Parameters.consumerGroupName,
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
      ...Mappers.ConsumerGroup,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ConsumerGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups/{consumerGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.eventHubName,
    Parameters.consumerGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups/{consumerGroupName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.eventHubName,
    Parameters.consumerGroupName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConsumerGroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByEventHubOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventHub/namespaces/{namespaceName}/eventhubs/{eventHubName}/consumergroups",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.namespaceName,
    Parameters.eventHubName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.skip,
    Parameters.top
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ConsumerGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listByEventHubNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ConsumerGroupListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
