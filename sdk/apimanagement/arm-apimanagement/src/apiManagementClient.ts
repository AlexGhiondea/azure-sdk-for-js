/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { ApiManagementClientContext } from "./apiManagementClientContext";


class ApiManagementClient extends ApiManagementClientContext {
  // Operation groups
  policy: operations.Policy;
  policySnippets: operations.PolicySnippets;
  regions: operations.Regions;
  api: operations.Api;
  apiRevisions: operations.ApiRevisions;
  apiRelease: operations.ApiRelease;
  apiOperation: operations.ApiOperation;
  apiOperationPolicy: operations.ApiOperationPolicy;
  apiProduct: operations.ApiProduct;
  apiPolicy: operations.ApiPolicy;
  apiSchema: operations.ApiSchema;
  apiDiagnostic: operations.ApiDiagnostic;
  apiDiagnosticLogger: operations.ApiDiagnosticLogger;
  apiIssue: operations.ApiIssue;
  apiIssueComment: operations.ApiIssueComment;
  apiIssueAttachment: operations.ApiIssueAttachment;
  authorizationServer: operations.AuthorizationServer;
  backend: operations.Backend;
  certificate: operations.Certificate;
  apiManagementOperations: operations.ApiManagementOperations;
  apiManagementService: operations.ApiManagementService;
  diagnostic: operations.Diagnostic;
  diagnosticLogger: operations.DiagnosticLogger;
  emailTemplate: operations.EmailTemplate;
  group: operations.Group;
  groupUser: operations.GroupUser;
  identityProvider: operations.IdentityProvider;
  logger: operations.Logger;
  notification: operations.Notification;
  notificationRecipientUser: operations.NotificationRecipientUser;
  notificationRecipientEmail: operations.NotificationRecipientEmail;
  networkStatus: operations.NetworkStatus;
  openIdConnectProvider: operations.OpenIdConnectProvider;
  signInSettings: operations.SignInSettings;
  signUpSettings: operations.SignUpSettings;
  delegationSettings: operations.DelegationSettings;
  product: operations.Product;
  productApi: operations.ProductApi;
  productGroup: operations.ProductGroup;
  productSubscriptions: operations.ProductSubscriptions;
  productPolicy: operations.ProductPolicy;
  property: operations.Property;
  quotaByCounterKeys: operations.QuotaByCounterKeys;
  quotaByPeriodKeys: operations.QuotaByPeriodKeys;
  reports: operations.Reports;
  subscription: operations.Subscription;
  tagResource: operations.TagResource;
  tag: operations.Tag;
  tagDescription: operations.TagDescription;
  operation: operations.OperationOperations;
  tenantAccess: operations.TenantAccess;
  tenantAccessGit: operations.TenantAccessGit;
  tenantConfiguration: operations.TenantConfiguration;
  user: operations.User;
  userGroup: operations.UserGroup;
  userSubscription: operations.UserSubscription;
  userIdentities: operations.UserIdentities;
  apiVersionSet: operations.ApiVersionSet;
  apiExport: operations.ApiExport;

  /**
   * Initializes a new instance of the ApiManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.ApiManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.policy = new operations.Policy(this);
    this.policySnippets = new operations.PolicySnippets(this);
    this.regions = new operations.Regions(this);
    this.api = new operations.Api(this);
    this.apiRevisions = new operations.ApiRevisions(this);
    this.apiRelease = new operations.ApiRelease(this);
    this.apiOperation = new operations.ApiOperation(this);
    this.apiOperationPolicy = new operations.ApiOperationPolicy(this);
    this.apiProduct = new operations.ApiProduct(this);
    this.apiPolicy = new operations.ApiPolicy(this);
    this.apiSchema = new operations.ApiSchema(this);
    this.apiDiagnostic = new operations.ApiDiagnostic(this);
    this.apiDiagnosticLogger = new operations.ApiDiagnosticLogger(this);
    this.apiIssue = new operations.ApiIssue(this);
    this.apiIssueComment = new operations.ApiIssueComment(this);
    this.apiIssueAttachment = new operations.ApiIssueAttachment(this);
    this.authorizationServer = new operations.AuthorizationServer(this);
    this.backend = new operations.Backend(this);
    this.certificate = new operations.Certificate(this);
    this.apiManagementOperations = new operations.ApiManagementOperations(this);
    this.apiManagementService = new operations.ApiManagementService(this);
    this.diagnostic = new operations.Diagnostic(this);
    this.diagnosticLogger = new operations.DiagnosticLogger(this);
    this.emailTemplate = new operations.EmailTemplate(this);
    this.group = new operations.Group(this);
    this.groupUser = new operations.GroupUser(this);
    this.identityProvider = new operations.IdentityProvider(this);
    this.logger = new operations.Logger(this);
    this.notification = new operations.Notification(this);
    this.notificationRecipientUser = new operations.NotificationRecipientUser(this);
    this.notificationRecipientEmail = new operations.NotificationRecipientEmail(this);
    this.networkStatus = new operations.NetworkStatus(this);
    this.openIdConnectProvider = new operations.OpenIdConnectProvider(this);
    this.signInSettings = new operations.SignInSettings(this);
    this.signUpSettings = new operations.SignUpSettings(this);
    this.delegationSettings = new operations.DelegationSettings(this);
    this.product = new operations.Product(this);
    this.productApi = new operations.ProductApi(this);
    this.productGroup = new operations.ProductGroup(this);
    this.productSubscriptions = new operations.ProductSubscriptions(this);
    this.productPolicy = new operations.ProductPolicy(this);
    this.property = new operations.Property(this);
    this.quotaByCounterKeys = new operations.QuotaByCounterKeys(this);
    this.quotaByPeriodKeys = new operations.QuotaByPeriodKeys(this);
    this.reports = new operations.Reports(this);
    this.subscription = new operations.Subscription(this);
    this.tagResource = new operations.TagResource(this);
    this.tag = new operations.Tag(this);
    this.tagDescription = new operations.TagDescription(this);
    this.operation = new operations.OperationOperations(this);
    this.tenantAccess = new operations.TenantAccess(this);
    this.tenantAccessGit = new operations.TenantAccessGit(this);
    this.tenantConfiguration = new operations.TenantConfiguration(this);
    this.user = new operations.User(this);
    this.userGroup = new operations.UserGroup(this);
    this.userSubscription = new operations.UserSubscription(this);
    this.userIdentities = new operations.UserIdentities(this);
    this.apiVersionSet = new operations.ApiVersionSet(this);
    this.apiExport = new operations.ApiExport(this);
  }
}

// Operation Specifications

export {
  ApiManagementClient,
  ApiManagementClientContext,
  Models as ApiManagementModels,
  Mappers as ApiManagementMappers
};
export * from "./operations";