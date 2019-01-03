/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

export {
  discriminators,
  ProtectionIntentResourceList,
  ResourceList,
  ProtectionIntentResource,
  Resource,
  BaseResource,
  ProtectionIntent,
  CloudError,
  GenericBackupFabricResource,
  GenericBackupFabric,
  GenericBackupFabricResourceList,
  ProtectedItemResource,
  ProtectedItem,
  ProtectedItemResourceList,
  ProtectionContainerResource,
  ProtectionContainer,
  ProtectionContainerResourceList,
  ProtectionPolicyResource,
  ProtectionPolicy,
  ProtectionPolicyResourceList,
  AzureRecoveryServiceVaultProtectionIntent,
  AzureResourceProtectionIntent,
  AzureWorkloadAutoProtectionIntent,
  AzureWorkloadSQLAutoProtectionIntent,
  JobResource,
  Job,
  JobResourceList,
  MabJob,
  MabErrorInfo,
  MabJobExtendedInfo,
  MabJobTaskDetails,
  BackupEngineBaseResource,
  BackupEngineBase,
  BackupEngineExtendedInfo,
  BackupEngineBaseResourceList,
  BackupRequestResource,
  BackupRequest,
  BackupResourceConfigResource,
  BackupResourceConfig,
  BackupResourceVaultConfigResource,
  BackupResourceVaultConfig,
  DpmBackupEngine,
  IaasVMBackupRequest,
  ILRRequestResource,
  ILRRequest,
  ProtectableContainerResource,
  ProtectableContainer,
  ProtectableContainerResourceList,
  RecoveryPointResource,
  RecoveryPoint,
  RecoveryPointResourceList,
  RestoreRequestResource,
  RestoreRequest,
  WorkloadItemResource,
  WorkloadItem,
  WorkloadItemResourceList,
  WorkloadProtectableItemResource,
  WorkloadProtectableItem,
  WorkloadProtectableItemResourceList,
  AzureFileshareProtectedItem,
  AzureFileshareProtectedItemExtendedInfo,
  AzureFileShareProtectionPolicy,
  SchedulePolicy,
  RetentionPolicy,
  AzureIaaSVMProtectedItem,
  AzureIaaSVMHealthDetails,
  AzureIaaSVMProtectedItemExtendedInfo,
  AzureIaaSVMProtectionPolicy,
  AzureSqlContainer,
  AzureSqlProtectedItem,
  AzureSqlProtectedItemExtendedInfo,
  AzureSqlProtectionPolicy,
  AzureStorageContainer,
  AzureVmWorkloadProtectedItem,
  ErrorDetail,
  AzureVmWorkloadProtectedItemExtendedInfo,
  AzureVmWorkloadProtectionPolicy,
  Settings,
  SubProtectionPolicy,
  AzureVmWorkloadSAPAseDatabaseProtectedItem,
  AzureVmWorkloadSAPHanaDatabaseProtectedItem,
  AzureVmWorkloadSQLDatabaseProtectedItem,
  AzureWorkloadContainer,
  AzureWorkloadContainerExtendedInfo,
  InquiryInfo,
  WorkloadInquiryDetails,
  InquiryValidation,
  DistributedNodesInfo,
  DpmContainer,
  DPMContainerExtendedInfo,
  DPMProtectedItem,
  DPMProtectedItemExtendedInfo,
  GenericContainer,
  GenericContainerExtendedInfo,
  ContainerIdentityInfo,
  GenericProtectedItem,
  GenericProtectionPolicy,
  IaaSVMContainer,
  LogSchedulePolicy,
  LongTermRetentionPolicy,
  DailyRetentionSchedule,
  RetentionDuration,
  WeeklyRetentionSchedule,
  MonthlyRetentionSchedule,
  DailyRetentionFormat,
  Day,
  WeeklyRetentionFormat,
  YearlyRetentionSchedule,
  LongTermSchedulePolicy,
  MabContainer,
  MabContainerExtendedInfo,
  MABContainerHealthDetails,
  MabFileFolderProtectedItem,
  MabFileFolderProtectedItemExtendedInfo,
  MabProtectionPolicy,
  SimpleRetentionPolicy,
  SimpleSchedulePolicy,
  AzureFileShareRestoreRequest,
  RestoreFileSpecs,
  TargetAFSRestoreInfo,
  AzureIaaSVMJob,
  AzureIaaSVMErrorInfo,
  AzureIaaSVMJobExtendedInfo,
  AzureIaaSVMJobTaskDetails,
  AzureStorageJob,
  AzureStorageErrorInfo,
  AzureStorageJobExtendedInfo,
  AzureStorageJobTaskDetails,
  AzureWorkloadJob,
  AzureWorkloadErrorInfo,
  AzureWorkloadJobExtendedInfo,
  AzureWorkloadJobTaskDetails,
  AzureWorkloadRestoreRequest,
  TargetRestoreInfo,
  AzureWorkloadSAPHanaRestoreRequest,
  AzureWorkloadSQLRestoreRequest,
  SQLDataDirectoryMapping,
  DpmJob,
  DpmErrorInfo,
  DpmJobExtendedInfo,
  DpmJobTaskDetails,
  IaasVMRestoreRequest,
  EncryptionDetails,
  AzureBackupServerEngine,
  AzureFileShareBackupRequest,
  AzureFileShareProtectableItem,
  AzureFileShareRecoveryPoint,
  AzureStorageProtectableContainer,
  AzureVMAppContainerProtectableContainer,
  AzureVmWorkloadItem,
  AzureVmWorkloadProtectableItem,
  PreBackupValidation,
  AzureVmWorkloadSAPAseDatabaseProtectableItem,
  AzureVmWorkloadSAPAseDatabaseWorkloadItem,
  AzureVmWorkloadSAPAseSystemProtectableItem,
  AzureVmWorkloadSAPAseSystemWorkloadItem,
  AzureVmWorkloadSAPHanaDatabaseProtectableItem,
  AzureVmWorkloadSAPHanaDatabaseWorkloadItem,
  AzureVmWorkloadSAPHanaSystemProtectableItem,
  AzureVmWorkloadSAPHanaSystemWorkloadItem,
  AzureVmWorkloadSQLAvailabilityGroupProtectableItem,
  AzureVmWorkloadSQLDatabaseProtectableItem,
  AzureVmWorkloadSQLDatabaseWorkloadItem,
  AzureVmWorkloadSQLInstanceProtectableItem,
  AzureVmWorkloadSQLInstanceWorkloadItem,
  SQLDataDirectory,
  AzureWorkloadBackupRequest,
  AzureWorkloadRecoveryPoint,
  AzureWorkloadSAPHanaRecoveryPoint,
  AzureWorkloadSQLRecoveryPoint,
  AzureWorkloadSQLRecoveryPointExtendedInfo,
  GenericRecoveryPoint,
  IaasVMILRRegistrationRequest,
  IaaSVMProtectableItem,
  IaasVMRecoveryPoint,
  KeyAndSecretDetails,
  KEKDetails,
  BEKDetails,
  RecoveryPointTierInformation,
  AzureBackupServerContainer,
  AzureIaaSClassicComputeVMContainer,
  AzureIaaSClassicComputeVMProtectedItem,
  AzureIaaSComputeVMContainer,
  AzureIaaSComputeVMProtectedItem,
  AzureSQLAGWorkloadContainerProtectionContainer,
  AzureVMAppContainerProtectionContainer,
  AzureWorkloadPointInTimeRestoreRequest,
  AzureWorkloadSAPHanaPointInTimeRestoreRequest,
  AzureWorkloadSQLPointInTimeRestoreRequest,
  AzureIaaSClassicComputeVMProtectableItem,
  AzureIaaSComputeVMProtectableItem,
  AzureWorkloadPointInTimeRecoveryPoint,
  PointInTimeRange,
  AzureWorkloadSAPHanaPointInTimeRecoveryPoint,
  AzureWorkloadSQLPointInTimeRecoveryPoint
} from "../models/mappers";

