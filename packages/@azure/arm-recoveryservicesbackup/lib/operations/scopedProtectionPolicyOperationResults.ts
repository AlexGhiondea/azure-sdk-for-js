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
import * as Mappers from "../models/scopedProtectionPolicyOperationResultsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a ScopedProtectionPolicyOperationResults. */
export class ScopedProtectionPolicyOperationResults {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a ScopedProtectionPolicyOperationResults.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Provides the result of an operation.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName
   * @param policyName Backup policy name whose operation's result needs to be fetched.
   * @param operationId Operation ID which represents the operation whose result needs to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.ScopedProtectionPolicyOperationResultsGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, policyName: string, operationId: string, options?: msRest.RequestOptionsBase): Promise<Models.ScopedProtectionPolicyOperationResultsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName
   * @param policyName Backup policy name whose operation's result needs to be fetched.
   * @param operationId Operation ID which represents the operation whose result needs to be fetched.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, policyName: string, operationId: string, callback: msRest.ServiceCallback<Models.ProtectionPolicyResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param fabricName
   * @param policyName Backup policy name whose operation's result needs to be fetched.
   * @param operationId Operation ID which represents the operation whose result needs to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, fabricName: string, policyName: string, operationId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ProtectionPolicyResource>): void;
  get(vaultName: string, resourceGroupName: string, fabricName: string, policyName: string, operationId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ProtectionPolicyResource>, callback?: msRest.ServiceCallback<Models.ProtectionPolicyResource>): Promise<Models.ScopedProtectionPolicyOperationResultsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        fabricName,
        policyName,
        operationId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ScopedProtectionPolicyOperationResultsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/policies/{policyName}/operationResults/{operationId}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.fabricName,
    Parameters.policyName,
    Parameters.operationId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ProtectionPolicyResource
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
