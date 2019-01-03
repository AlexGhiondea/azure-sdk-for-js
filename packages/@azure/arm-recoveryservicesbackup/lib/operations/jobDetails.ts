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
import * as Mappers from "../models/jobDetailsMappers";
import * as Parameters from "../models/parameters";
import { RecoveryServicesBackupClientContext } from "../recoveryServicesBackupClientContext";

/** Class representing a JobDetails. */
export class JobDetails {
  private readonly client: RecoveryServicesBackupClientContext;

  /**
   * Create a JobDetails.
   * @param {RecoveryServicesBackupClientContext} client Reference to the service client.
   */
  constructor(client: RecoveryServicesBackupClientContext) {
    this.client = client;
  }

  /**
   * Gets exteded information associated with the job.
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param jobName Name of the job whose details are to be fetched.
   * @param [options] The optional parameters
   * @returns Promise<Models.JobDetailsGetResponse>
   */
  get(vaultName: string, resourceGroupName: string, jobName: string, options?: msRest.RequestOptionsBase): Promise<Models.JobDetailsGetResponse>;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param jobName Name of the job whose details are to be fetched.
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, jobName: string, callback: msRest.ServiceCallback<Models.JobResource>): void;
  /**
   * @param vaultName The name of the recovery services vault.
   * @param resourceGroupName The name of the resource group where the recovery services vault is
   * present.
   * @param jobName Name of the job whose details are to be fetched.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(vaultName: string, resourceGroupName: string, jobName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.JobResource>): void;
  get(vaultName: string, resourceGroupName: string, jobName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.JobResource>, callback?: msRest.ServiceCallback<Models.JobResource>): Promise<Models.JobDetailsGetResponse> {
    return this.client.sendOperationRequest(
      {
        vaultName,
        resourceGroupName,
        jobName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.JobDetailsGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupJobs/{jobName}",
  urlParameters: [
    Parameters.vaultName,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.jobName
  ],
  queryParameters: [
    Parameters.apiVersion2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.JobResource
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
