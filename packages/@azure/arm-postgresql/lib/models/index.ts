/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ProxyResource.
 * Resource properties.
 *
 * @extends BaseResource
 */
export interface ProxyResource extends BaseResource {
  /**
   * @member {string} [id] Resource ID
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
}

/**
 * @interface
 * An interface representing TrackedResource.
 * Resource properties including location and tags for track resources.
 *
 * @extends ProxyResource
 */
export interface TrackedResource extends ProxyResource {
  /**
   * @member {string} location The location the resource resides in.
   */
  location: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Application-specific
   * metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing StorageProfile.
 * Storage Profile properties of a server
 *
 */
export interface StorageProfile {
  /**
   * @member {number} [backupRetentionDays] Backup retention days for the
   * server.
   */
  backupRetentionDays?: number;
  /**
   * @member {GeoRedundantBackup} [geoRedundantBackup] Enable Geo-redundant or
   * not for server backup. Possible values include: 'Enabled', 'Disabled'
   */
  geoRedundantBackup?: GeoRedundantBackup;
  /**
   * @member {number} [storageMB] Max storage allowed for a server.
   */
  storageMB?: number;
}

/**
 * Contains the possible cases for ServerPropertiesForCreate.
 */
export type ServerPropertiesForCreateUnion = ServerPropertiesForCreate | ServerPropertiesForDefaultCreate | ServerPropertiesForRestore | ServerPropertiesForGeoRestore;

/**
 * @interface
 * An interface representing ServerPropertiesForCreate.
 * The properties used to create a new server.
 *
 */
export interface ServerPropertiesForCreate {
  /**
   * @member {string} createMode Polymorphic Discriminator
   */
  createMode: "ServerPropertiesForCreate";
  /**
   * @member {ServerVersion} [version] Server version. Possible values include:
   * '9.5', '9.6', '10', '10.0', '10.2'
   */
  version?: ServerVersion;
  /**
   * @member {SslEnforcementEnum} [sslEnforcement] Enable ssl enforcement or
   * not when connect to server. Possible values include: 'Enabled', 'Disabled'
   */
  sslEnforcement?: SslEnforcementEnum;
  /**
   * @member {StorageProfile} [storageProfile] Storage profile of a server.
   */
  storageProfile?: StorageProfile;
}

/**
 * @interface
 * An interface representing ServerPropertiesForDefaultCreate.
 * The properties used to create a new server.
 *
 */
export interface ServerPropertiesForDefaultCreate {
  /**
   * @member {string} createMode Polymorphic Discriminator
   */
  createMode: "Default";
  /**
   * @member {ServerVersion} [version] Server version. Possible values include:
   * '9.5', '9.6', '10', '10.0', '10.2'
   */
  version?: ServerVersion;
  /**
   * @member {SslEnforcementEnum} [sslEnforcement] Enable ssl enforcement or
   * not when connect to server. Possible values include: 'Enabled', 'Disabled'
   */
  sslEnforcement?: SslEnforcementEnum;
  /**
   * @member {StorageProfile} [storageProfile] Storage profile of a server.
   */
  storageProfile?: StorageProfile;
  /**
   * @member {string} administratorLogin The administrator's login name of a
   * server. Can only be specified when the server is being created (and is
   * required for creation).
   */
  administratorLogin: string;
  /**
   * @member {string} administratorLoginPassword The password of the
   * administrator login.
   */
  administratorLoginPassword: string;
}

/**
 * @interface
 * An interface representing ServerPropertiesForRestore.
 * The properties used to create a new server by restoring from a backup.
 *
 */
export interface ServerPropertiesForRestore {
  /**
   * @member {string} createMode Polymorphic Discriminator
   */
  createMode: "PointInTimeRestore";
  /**
   * @member {ServerVersion} [version] Server version. Possible values include:
   * '9.5', '9.6', '10', '10.0', '10.2'
   */
  version?: ServerVersion;
  /**
   * @member {SslEnforcementEnum} [sslEnforcement] Enable ssl enforcement or
   * not when connect to server. Possible values include: 'Enabled', 'Disabled'
   */
  sslEnforcement?: SslEnforcementEnum;
  /**
   * @member {StorageProfile} [storageProfile] Storage profile of a server.
   */
  storageProfile?: StorageProfile;
  /**
   * @member {string} sourceServerId The source server id to restore from.
   */
  sourceServerId: string;
  /**
   * @member {Date} restorePointInTime Restore point creation time (ISO8601
   * format), specifying the time to restore from.
   */
  restorePointInTime: Date;
}

/**
 * @interface
 * An interface representing ServerPropertiesForGeoRestore.
 * The properties used to create a new server by restoring to a different
 * region from a geo replicated backup.
 *
 */
export interface ServerPropertiesForGeoRestore {
  /**
   * @member {string} createMode Polymorphic Discriminator
   */
  createMode: "GeoRestore";
  /**
   * @member {ServerVersion} [version] Server version. Possible values include:
   * '9.5', '9.6', '10', '10.0', '10.2'
   */
  version?: ServerVersion;
  /**
   * @member {SslEnforcementEnum} [sslEnforcement] Enable ssl enforcement or
   * not when connect to server. Possible values include: 'Enabled', 'Disabled'
   */
  sslEnforcement?: SslEnforcementEnum;
  /**
   * @member {StorageProfile} [storageProfile] Storage profile of a server.
   */
  storageProfile?: StorageProfile;
  /**
   * @member {string} sourceServerId The source server id to restore from.
   */
  sourceServerId: string;
}

/**
 * @interface
 * An interface representing Sku.
 * Billing information related properties of a server.
 *
 */
export interface Sku {
  /**
   * @member {string} [name] The name of the sku, typically, tier + family +
   * cores, e.g. B_Gen4_1, GP_Gen5_8.
   */
  name?: string;
  /**
   * @member {SkuTier} [tier] The tier of the particular SKU, e.g. Basic.
   * Possible values include: 'Basic', 'GeneralPurpose', 'MemoryOptimized'
   */
  tier?: SkuTier;
  /**
   * @member {number} [capacity] The scale up/out capacity, representing
   * server's compute units.
   */
  capacity?: number;
  /**
   * @member {string} [size] The size code, to be interpreted by resource as
   * appropriate.
   */
  size?: string;
  /**
   * @member {string} [family] The family of hardware.
   */
  family?: string;
}

/**
 * @interface
 * An interface representing Server.
 * Represents a server.
 *
 * @extends TrackedResource
 */
export interface Server extends TrackedResource {
  /**
   * @member {Sku} [sku] The SKU (pricing tier) of the server.
   */
  sku?: Sku;
  /**
   * @member {string} [administratorLogin] The administrator's login name of a
   * server. Can only be specified when the server is being created (and is
   * required for creation).
   */
  administratorLogin?: string;
  /**
   * @member {ServerVersion} [version] Server version. Possible values include:
   * '9.5', '9.6', '10', '10.0', '10.2'
   */
  version?: ServerVersion;
  /**
   * @member {SslEnforcementEnum} [sslEnforcement] Enable ssl enforcement or
   * not when connect to server. Possible values include: 'Enabled', 'Disabled'
   */
  sslEnforcement?: SslEnforcementEnum;
  /**
   * @member {ServerState} [userVisibleState] A state of a server that is
   * visible to user. Possible values include: 'Ready', 'Dropping', 'Disabled'
   */
  userVisibleState?: ServerState;
  /**
   * @member {string} [fullyQualifiedDomainName] The fully qualified domain
   * name of a server.
   */
  fullyQualifiedDomainName?: string;
  /**
   * @member {Date} [earliestRestoreDate] Earliest restore point creation time
   * (ISO8601 format)
   */
  earliestRestoreDate?: Date;
  /**
   * @member {StorageProfile} [storageProfile] Storage profile of a server.
   */
  storageProfile?: StorageProfile;
}

/**
 * @interface
 * An interface representing ServerForCreate.
 * Represents a server to be created.
 *
 */
export interface ServerForCreate {
  /**
   * @member {Sku} [sku] The SKU (pricing tier) of the server.
   */
  sku?: Sku;
  /**
   * @member {ServerPropertiesForCreateUnion} properties Properties of the
   * server.
   */
  properties: ServerPropertiesForCreateUnion;
  /**
   * @member {string} location The location the resource resides in.
   */
  location: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Application-specific
   * metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing ServerUpdateParameters.
 * Parameters allowed to update for a server.
 *
 */
export interface ServerUpdateParameters {
  /**
   * @member {Sku} [sku] The SKU (pricing tier) of the server.
   */
  sku?: Sku;
  /**
   * @member {StorageProfile} [storageProfile] Storage profile of a server.
   */
  storageProfile?: StorageProfile;
  /**
   * @member {string} [administratorLoginPassword] The password of the
   * administrator login.
   */
  administratorLoginPassword?: string;
  /**
   * @member {ServerVersion} [version] The version of a server. Possible values
   * include: '9.5', '9.6', '10', '10.0', '10.2'
   */
  version?: ServerVersion;
  /**
   * @member {SslEnforcementEnum} [sslEnforcement] Enable ssl enforcement or
   * not when connect to server. Possible values include: 'Enabled', 'Disabled'
   */
  sslEnforcement?: SslEnforcementEnum;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Application-specific
   * metadata in the form of key-value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing FirewallRule.
 * Represents a server firewall rule.
 *
 * @extends ProxyResource
 */
export interface FirewallRule extends ProxyResource {
  /**
   * @member {string} startIpAddress The start IP address of the server
   * firewall rule. Must be IPv4 format.
   */
  startIpAddress: string;
  /**
   * @member {string} endIpAddress The end IP address of the server firewall
   * rule. Must be IPv4 format.
   */
  endIpAddress: string;
}

/**
 * @interface
 * An interface representing VirtualNetworkRule.
 * A virtual network rule.
 *
 * @extends ProxyResource
 */
export interface VirtualNetworkRule extends ProxyResource {
  /**
   * @member {string} virtualNetworkSubnetId The ARM resource id of the virtual
   * network subnet.
   */
  virtualNetworkSubnetId: string;
  /**
   * @member {boolean} [ignoreMissingVnetServiceEndpoint] Create firewall rule
   * before the virtual network has vnet service endpoint enabled.
   */
  ignoreMissingVnetServiceEndpoint?: boolean;
  /**
   * @member {VirtualNetworkRuleState} [state] Virtual Network Rule State.
   * Possible values include: 'Initializing', 'InProgress', 'Ready',
   * 'Deleting', 'Unknown'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly state?: VirtualNetworkRuleState;
}

/**
 * @interface
 * An interface representing Database.
 * Represents a Database.
 *
 * @extends ProxyResource
 */
export interface Database extends ProxyResource {
  /**
   * @member {string} [charset] The charset of the database.
   */
  charset?: string;
  /**
   * @member {string} [collation] The collation of the database.
   */
  collation?: string;
}

/**
 * @interface
 * An interface representing Configuration.
 * Represents a Configuration.
 *
 * @extends ProxyResource
 */
export interface Configuration extends ProxyResource {
  /**
   * @member {string} [value] Value of the configuration.
   */
  value?: string;
  /**
   * @member {string} [description] Description of the configuration.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly description?: string;
  /**
   * @member {string} [defaultValue] Default value of the configuration.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly defaultValue?: string;
  /**
   * @member {string} [dataType] Data type of the configuration.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly dataType?: string;
  /**
   * @member {string} [allowedValues] Allowed values of the configuration.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly allowedValues?: string;
  /**
   * @member {string} [source] Source of the configuration.
   */
  source?: string;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * Display metadata associated with the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Operation resource provider name.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly resource?: string;
  /**
   * @member {string} [operation] Localized friendly name for the operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly operation?: string;
  /**
   * @member {string} [description] Operation description.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * REST API operation definition.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] The name of the operation being performed on this
   * particular object.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {OperationDisplay} [display] The localized display information for
   * this particular operation or action.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly display?: OperationDisplay;
  /**
   * @member {OperationOrigin} [origin] The intended executor of the operation.
   * Possible values include: 'NotSpecified', 'user', 'system'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly origin?: OperationOrigin;
  /**
   * @member {{ [propertyName: string]: any }} [properties] Additional
   * descriptions for the operation.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly properties?: { [propertyName: string]: any };
}

/**
 * @interface
 * An interface representing OperationListResult.
 * A list of resource provider operations.
 *
 */
export interface OperationListResult {
  /**
   * @member {Operation[]} [value] The list of resource provider operations.
   */
  value?: Operation[];
}

/**
 * @interface
 * An interface representing LogFile.
 * Represents a log file.
 *
 * @extends ProxyResource
 */
export interface LogFile extends ProxyResource {
  /**
   * @member {number} [sizeInKB] Size of the log file.
   */
  sizeInKB?: number;
  /**
   * @member {Date} [createdTime] Creation timestamp of the log file.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdTime?: Date;
  /**
   * @member {Date} [lastModifiedTime] Last modified timestamp of the log file.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly lastModifiedTime?: Date;
  /**
   * @member {string} [logFileType] Type of the log file.
   */
  logFileType?: string;
  /**
   * @member {string} [url] The url to download the log file from.
   */
  url?: string;
}

/**
 * @interface
 * An interface representing PerformanceTierServiceLevelObjectives.
 * Service level objectives for performance tier.
 *
 */
export interface PerformanceTierServiceLevelObjectives {
  /**
   * @member {string} [id] ID for the service level objective.
   */
  id?: string;
  /**
   * @member {string} [edition] Edition of the performance tier.
   */
  edition?: string;
  /**
   * @member {number} [vCore] vCore associated with the service level objective
   */
  vCore?: number;
  /**
   * @member {string} [hardwareGeneration] Hardware generation associated with
   * the service level objective
   */
  hardwareGeneration?: string;
  /**
   * @member {number} [maxBackupRetentionDays] Maximum Backup retention in days
   * for the performance tier edition
   */
  maxBackupRetentionDays?: number;
  /**
   * @member {number} [minBackupRetentionDays] Minimum Backup retention in days
   * for the performance tier edition
   */
  minBackupRetentionDays?: number;
  /**
   * @member {number} [maxStorageMB] Max storage allowed for a server.
   */
  maxStorageMB?: number;
  /**
   * @member {number} [minStorageMB] Max storage allowed for a server.
   */
  minStorageMB?: number;
}

/**
 * @interface
 * An interface representing PerformanceTierProperties.
 * Performance tier properties
 *
 */
export interface PerformanceTierProperties {
  /**
   * @member {string} [id] ID of the performance tier.
   */
  id?: string;
  /**
   * @member {PerformanceTierServiceLevelObjectives[]} [serviceLevelObjectives]
   * Service level objectives associated with the performance tier
   */
  serviceLevelObjectives?: PerformanceTierServiceLevelObjectives[];
}

/**
 * @interface
 * An interface representing NameAvailabilityRequest.
 * Request from client to check resource name availability.
 *
 */
export interface NameAvailabilityRequest {
  /**
   * @member {string} name Resource name to verify.
   */
  name: string;
  /**
   * @member {string} [type] Resource type used for verification.
   */
  type?: string;
}

/**
 * @interface
 * An interface representing NameAvailability.
 * Represents a resource name availability.
 *
 */
export interface NameAvailability {
  /**
   * @member {string} [message] Error Message.
   */
  message?: string;
  /**
   * @member {boolean} [nameAvailable] Indicates whether the resource name is
   * available.
   */
  nameAvailable?: boolean;
  /**
   * @member {string} [reason] Reason for name being unavailable.
   */
  reason?: string;
}

/**
 * @interface
 * An interface representing ServerSecurityAlertPolicy.
 * A server security alert policy.
 *
 * @extends ProxyResource
 */
export interface ServerSecurityAlertPolicy extends ProxyResource {
  /**
   * @member {ServerSecurityAlertPolicyState} state Specifies the state of the
   * policy, whether it is enabled or disabled. Possible values include:
   * 'Enabled', 'Disabled'
   */
  state: ServerSecurityAlertPolicyState;
  /**
   * @member {string[]} [disabledAlerts] Specifies an array of alerts that are
   * disabled. Allowed values are: Sql_Injection, Sql_Injection_Vulnerability,
   * Access_Anomaly
   */
  disabledAlerts?: string[];
  /**
   * @member {string[]} [emailAddresses] Specifies an array of e-mail addresses
   * to which the alert is sent.
   */
  emailAddresses?: string[];
  /**
   * @member {boolean} [emailAccountAdmins] Specifies that the alert is sent to
   * the account administrators.
   */
  emailAccountAdmins?: boolean;
  /**
   * @member {string} [storageEndpoint] Specifies the blob storage endpoint
   * (e.g. https://MyAccount.blob.core.windows.net). This blob storage will
   * hold all Threat Detection audit logs.
   */
  storageEndpoint?: string;
  /**
   * @member {string} [storageAccountAccessKey] Specifies the identifier key of
   * the Threat Detection audit storage account.
   */
  storageAccountAccessKey?: string;
  /**
   * @member {number} [retentionDays] Specifies the number of days to keep in
   * the Threat Detection audit logs.
   */
  retentionDays?: number;
}

/**
 * @interface
 * An interface representing PostgreSQLManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface PostgreSQLManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the ServerListResult.
 * A list of servers.
 *
 * @extends Array<Server>
 */
export interface ServerListResult extends Array<Server> {
}

/**
 * @interface
 * An interface representing the FirewallRuleListResult.
 * A list of firewall rules.
 *
 * @extends Array<FirewallRule>
 */
export interface FirewallRuleListResult extends Array<FirewallRule> {
}

/**
 * @interface
 * An interface representing the VirtualNetworkRuleListResult.
 * A list of virtual network rules.
 *
 * @extends Array<VirtualNetworkRule>
 */
export interface VirtualNetworkRuleListResult extends Array<VirtualNetworkRule> {
  /**
   * @member {string} [nextLink] Link to retrieve next page of results.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly nextLink?: string;
}

/**
 * @interface
 * An interface representing the DatabaseListResult.
 * A List of databases.
 *
 * @extends Array<Database>
 */
export interface DatabaseListResult extends Array<Database> {
}

/**
 * @interface
 * An interface representing the ConfigurationListResult.
 * A list of server configurations.
 *
 * @extends Array<Configuration>
 */
export interface ConfigurationListResult extends Array<Configuration> {
}

/**
 * @interface
 * An interface representing the LogFileListResult.
 * A list of log files.
 *
 * @extends Array<LogFile>
 */
export interface LogFileListResult extends Array<LogFile> {
}

/**
 * @interface
 * An interface representing the PerformanceTierListResult.
 * A list of performance tiers.
 *
 * @extends Array<PerformanceTierProperties>
 */
export interface PerformanceTierListResult extends Array<PerformanceTierProperties> {
}

/**
 * Defines values for ServerVersion.
 * Possible values include: '9.5', '9.6', '10', '10.0', '10.2'
 * @readonly
 * @enum {string}
 */
export type ServerVersion = '9.5' | '9.6' | '10' | '10.0' | '10.2';

/**
 * Defines values for SslEnforcementEnum.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type SslEnforcementEnum = 'Enabled' | 'Disabled';

/**
 * Defines values for ServerState.
 * Possible values include: 'Ready', 'Dropping', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type ServerState = 'Ready' | 'Dropping' | 'Disabled';

/**
 * Defines values for GeoRedundantBackup.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type GeoRedundantBackup = 'Enabled' | 'Disabled';

/**
 * Defines values for SkuTier.
 * Possible values include: 'Basic', 'GeneralPurpose', 'MemoryOptimized'
 * @readonly
 * @enum {string}
 */
export type SkuTier = 'Basic' | 'GeneralPurpose' | 'MemoryOptimized';

/**
 * Defines values for VirtualNetworkRuleState.
 * Possible values include: 'Initializing', 'InProgress', 'Ready', 'Deleting', 'Unknown'
 * @readonly
 * @enum {string}
 */
export type VirtualNetworkRuleState = 'Initializing' | 'InProgress' | 'Ready' | 'Deleting' | 'Unknown';

/**
 * Defines values for OperationOrigin.
 * Possible values include: 'NotSpecified', 'user', 'system'
 * @readonly
 * @enum {string}
 */
export type OperationOrigin = 'NotSpecified' | 'user' | 'system';

/**
 * Defines values for ServerSecurityAlertPolicyState.
 * Possible values include: 'Enabled', 'Disabled'
 * @readonly
 * @enum {string}
 */
export type ServerSecurityAlertPolicyState = 'Enabled' | 'Disabled';

/**
 * Contains response data for the create operation.
 */
export type ServersCreateResponse = Server & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Server;
    };
};

/**
 * Contains response data for the update operation.
 */
export type ServersUpdateResponse = Server & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Server;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ServersGetResponse = Server & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Server;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ServersListByResourceGroupResponse = ServerListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ServerListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ServersListResponse = ServerListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ServerListResult;
    };
};

/**
 * Contains response data for the beginCreate operation.
 */
export type ServersBeginCreateResponse = Server & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Server;
    };
};

/**
 * Contains response data for the beginUpdate operation.
 */
export type ServersBeginUpdateResponse = Server & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Server;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type FirewallRulesCreateOrUpdateResponse = FirewallRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallRule;
    };
};

/**
 * Contains response data for the get operation.
 */
export type FirewallRulesGetResponse = FirewallRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallRule;
    };
};

/**
 * Contains response data for the listByServer operation.
 */
export type FirewallRulesListByServerResponse = FirewallRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallRuleListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type FirewallRulesBeginCreateOrUpdateResponse = FirewallRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FirewallRule;
    };
};

/**
 * Contains response data for the get operation.
 */
export type VirtualNetworkRulesGetResponse = VirtualNetworkRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VirtualNetworkRule;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type VirtualNetworkRulesCreateOrUpdateResponse = VirtualNetworkRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VirtualNetworkRule;
    };
};

/**
 * Contains response data for the listByServer operation.
 */
export type VirtualNetworkRulesListByServerResponse = VirtualNetworkRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VirtualNetworkRuleListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type VirtualNetworkRulesBeginCreateOrUpdateResponse = VirtualNetworkRule & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VirtualNetworkRule;
    };
};

/**
 * Contains response data for the listByServerNext operation.
 */
export type VirtualNetworkRulesListByServerNextResponse = VirtualNetworkRuleListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: VirtualNetworkRuleListResult;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type DatabasesCreateOrUpdateResponse = Database & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Database;
    };
};

/**
 * Contains response data for the get operation.
 */
export type DatabasesGetResponse = Database & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Database;
    };
};

/**
 * Contains response data for the listByServer operation.
 */
export type DatabasesListByServerResponse = DatabaseListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: DatabaseListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type DatabasesBeginCreateOrUpdateResponse = Database & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Database;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ConfigurationsCreateOrUpdateResponse = Configuration & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Configuration;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ConfigurationsGetResponse = Configuration & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Configuration;
    };
};

/**
 * Contains response data for the listByServer operation.
 */
export type ConfigurationsListByServerResponse = ConfigurationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ConfigurationListResult;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type ConfigurationsBeginCreateOrUpdateResponse = Configuration & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: Configuration;
    };
};

/**
 * Contains response data for the listByServer operation.
 */
export type LogFilesListByServerResponse = LogFileListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: LogFileListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type LocationBasedPerformanceTierListResponse = PerformanceTierListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PerformanceTierListResult;
    };
};

/**
 * Contains response data for the execute operation.
 */
export type CheckNameAvailabilityExecuteResponse = NameAvailability & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: NameAvailability;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ServerSecurityAlertPoliciesGetResponse = ServerSecurityAlertPolicy & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ServerSecurityAlertPolicy;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ServerSecurityAlertPoliciesCreateOrUpdateResponse = ServerSecurityAlertPolicy & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ServerSecurityAlertPolicy;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type ServerSecurityAlertPoliciesBeginCreateOrUpdateResponse = ServerSecurityAlertPolicy & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ServerSecurityAlertPolicy;
    };
};

/**
 * Contains response data for the list operation.
 */
export type OperationsListResponse = OperationListResult & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: OperationListResult;
    };
};
