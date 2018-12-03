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
import * as Mappers from "../models/assessedMachinesMappers";
import * as Parameters from "../models/parameters";
import { AzureMigrateContext } from "../azureMigrateContext";

/** Class representing a AssessedMachines. */
export class AssessedMachines {
  private readonly client: AzureMigrateContext;

  /**
   * Create a AssessedMachines.
   * @param {AzureMigrateContext} client Reference to the service client.
   */
  constructor(client: AzureMigrateContext) {
    this.client = client;
  }

  /**
   * Get list of machines that assessed as part of the specified assessment. Returns a json array of
   * objects of type 'assessedMachine' as specified in the Models section.
   *
   * Whenever an assessment is created or updated, it goes under computation. During this phase, the
   * 'status' field of Assessment object reports 'Computing'.
   * During the period when the assessment is under computation, the list of assessed machines is
   * empty and no assessed machines are returned by this call.
   * @summary Get assessed machines for assessment.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessedMachinesListByAssessmentResponse>
   */
  listByAssessment(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessedMachinesListByAssessmentResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param callback The callback
   */
  listByAssessment(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, callback: msRest.ServiceCallback<Models.AssessedMachineResultList>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByAssessment(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssessedMachineResultList>): void;
  listByAssessment(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssessedMachineResultList>, callback?: msRest.ServiceCallback<Models.AssessedMachineResultList>): Promise<Models.AssessedMachinesListByAssessmentResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        options
      },
      listByAssessmentOperationSpec,
      callback) as Promise<Models.AssessedMachinesListByAssessmentResponse>;
  }

  /**
   * Get an assessed machine with its size & cost estimate that was evaluated in the specified
   * assessment.
   * @summary Get an assessed machine.
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param assessedMachineName Unique name of an assessed machine evaluated as part of an
   * assessment.
   * @param [options] The optional parameters
   * @returns Promise<Models.AssessedMachinesGetResponse>
   */
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, assessedMachineName: string, options?: msRest.RequestOptionsBase): Promise<Models.AssessedMachinesGetResponse>;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param assessedMachineName Unique name of an assessed machine evaluated as part of an
   * assessment.
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, assessedMachineName: string, callback: msRest.ServiceCallback<Models.AssessedMachine>): void;
  /**
   * @param resourceGroupName Name of the Azure Resource Group that project is part of.
   * @param projectName Name of the Azure Migrate project.
   * @param groupName Unique name of a group within a project.
   * @param assessmentName Unique name of an assessment within a project.
   * @param assessedMachineName Unique name of an assessed machine evaluated as part of an
   * assessment.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, assessedMachineName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AssessedMachine>): void;
  get(resourceGroupName: string, projectName: string, groupName: string, assessmentName: string, assessedMachineName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AssessedMachine>, callback?: msRest.ServiceCallback<Models.AssessedMachine>): Promise<Models.AssessedMachinesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        projectName,
        groupName,
        assessmentName,
        assessedMachineName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.AssessedMachinesGetResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByAssessmentOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AssessedMachineResultList,
      headersMapper: Mappers.AssessedMachinesListByAssessmentHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}/assessedMachines/{assessedMachineName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.projectName,
    Parameters.groupName,
    Parameters.assessmentName,
    Parameters.assessedMachineName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AssessedMachine,
      headersMapper: Mappers.AssessedMachinesGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
