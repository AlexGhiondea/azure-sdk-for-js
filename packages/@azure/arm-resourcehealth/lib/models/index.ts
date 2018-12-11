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
 * An interface representing AvailabilityStatusPropertiesRecentlyResolvedState.
 * An annotation describing a change in the availabilityState to Available from
 * Unavailable with a reasonType of type Unplanned
 *
 */
export interface AvailabilityStatusPropertiesRecentlyResolvedState {
  /**
   * @member {Date} [unavailableOccurredTime] Timestamp for when the
   * availabilityState changed to Unavailable
   */
  unavailableOccurredTime?: Date;
  /**
   * @member {Date} [resolvedTime] Timestamp when the availabilityState changes
   * to Available.
   */
  resolvedTime?: Date;
  /**
   * @member {string} [unavailabilitySummary] Brief description of cause of the
   * resource becoming unavailable.
   */
  unavailabilitySummary?: string;
}

/**
 * @interface
 * An interface representing RecommendedAction.
 * Lists actions the user can take based on the current availabilityState of
 * the resource.
 *
 */
export interface RecommendedAction {
  /**
   * @member {string} [action] Recommended action.
   */
  action?: string;
  /**
   * @member {string} [actionUrl] Link to the action
   */
  actionUrl?: string;
  /**
   * @member {string} [actionUrlText] Substring of action, it describes which
   * text should host the action url.
   */
  actionUrlText?: string;
}

/**
 * @interface
 * An interface representing ServiceImpactingEventStatus.
 * Status of the service impacting event.
 *
 */
export interface ServiceImpactingEventStatus {
  /**
   * @member {string} [value] Current status of the event
   */
  value?: string;
}

/**
 * @interface
 * An interface representing ServiceImpactingEventIncidentProperties.
 * Properties of the service impacting event.
 *
 */
export interface ServiceImpactingEventIncidentProperties {
  /**
   * @member {string} [title] Title of the incident.
   */
  title?: string;
  /**
   * @member {string} [service] Service impacted by the event.
   */
  service?: string;
  /**
   * @member {string} [region] Region impacted by the event.
   */
  region?: string;
  /**
   * @member {string} [incidentType] Type of Event.
   */
  incidentType?: string;
}

/**
 * @interface
 * An interface representing ServiceImpactingEvent.
 * Lists the service impacting events that may be affecting the health of the
 * resource.
 *
 */
export interface ServiceImpactingEvent {
  /**
   * @member {Date} [eventStartTime] Timestamp for when the event started.
   */
  eventStartTime?: Date;
  /**
   * @member {Date} [eventStatusLastModifiedTime] Timestamp for when event was
   * submitted/detected.
   */
  eventStatusLastModifiedTime?: Date;
  /**
   * @member {string} [correlationId] Correlation id for the event
   */
  correlationId?: string;
  /**
   * @member {ServiceImpactingEventStatus} [status] Status of the service
   * impacting event.
   */
  status?: ServiceImpactingEventStatus;
  /**
   * @member {ServiceImpactingEventIncidentProperties} [incidentProperties]
   * Properties of the service impacting event.
   */
  incidentProperties?: ServiceImpactingEventIncidentProperties;
}

/**
 * @interface
 * An interface representing AvailabilityStatusProperties.
 * Properties of availability state.
 *
 */
export interface AvailabilityStatusProperties {
  /**
   * @member {AvailabilityStateValues} [availabilityState] Availability status
   * of the resource. When it is null, this availabilityStatus object
   * represents an availability impacting event. Possible values include:
   * 'Available', 'Unavailable', 'Unknown'
   */
  availabilityState?: AvailabilityStateValues;
  /**
   * @member {string} [summary] Summary description of the availability status.
   */
  summary?: string;
  /**
   * @member {string} [detailedStatus] Details of the availability status.
   */
  detailedStatus?: string;
  /**
   * @member {string} [reasonType] When the resource's availabilityState is
   * Unavailable, it describes where the health impacting event was originated.
   * Examples are planned, unplanned, user initiated or an outage etc.
   */
  reasonType?: string;
  /**
   * @member {Date} [rootCauseAttributionTime] When the resource's
   * availabilityState is Unavailable, it provides the Timestamp for when the
   * health impacting event was received.
   */
  rootCauseAttributionTime?: Date;
  /**
   * @member {string} [healthEventType] In case of an availability impacting
   * event, it describes when the health impacting event was originated.
   * Examples are Lifecycle, Downtime, Fault Analysis etc.
   */
  healthEventType?: string;
  /**
   * @member {string} [healthEventCause] In case of an availability impacting
   * event, it describes where the health impacting event was originated.
   * Examples are PlatformInitiated, UserInitiated etc.
   */
  healthEventCause?: string;
  /**
   * @member {string} [healthEventCategory] In case of an availability
   * impacting event, it describes the category of a PlatformInitiated health
   * impacting event. Examples are Planned, Unplanned etc.
   */
  healthEventCategory?: string;
  /**
   * @member {string} [healthEventId] It is a unique Id that identifies the
   * event
   */
  healthEventId?: string;
  /**
   * @member {Date} [resolutionETA] When the resource's availabilityState is
   * Unavailable and the reasonType is not User Initiated, it provides the date
   * and time for when the issue is expected to be resolved.
   */
  resolutionETA?: Date;
  /**
   * @member {Date} [occuredTime] Timestamp for when last change in health
   * status occurred.
   */
  occuredTime?: Date;
  /**
   * @member {ReasonChronicityTypes} [reasonChronicity] Chronicity of the
   * availability transition. Possible values include: 'Transient',
   * 'Persistent'
   */
  reasonChronicity?: ReasonChronicityTypes;
  /**
   * @member {Date} [reportedTime] Timestamp for when the health was last
   * checked.
   */
  reportedTime?: Date;
  /**
   * @member {AvailabilityStatusPropertiesRecentlyResolvedState}
   * [recentlyResolvedState] An annotation describing a change in the
   * availabilityState to Available from Unavailable with a reasonType of type
   * Unplanned
   */
  recentlyResolvedState?: AvailabilityStatusPropertiesRecentlyResolvedState;
  /**
   * @member {RecommendedAction[]} [recommendedActions] Lists actions the user
   * can take based on the current availabilityState of the resource.
   */
  recommendedActions?: RecommendedAction[];
  /**
   * @member {ServiceImpactingEvent[]} [serviceImpactingEvents] Lists the
   * service impacting events that may be affecting the health of the resource.
   */
  serviceImpactingEvents?: ServiceImpactingEvent[];
}

/**
 * @interface
 * An interface representing AvailabilityStatus.
 * availabilityStatus of a resource.
 *
 */
export interface AvailabilityStatus {
  /**
   * @member {string} [id] Azure Resource Manager Identity for the
   * availabilityStatuses resource.
   */
  id?: string;
  /**
   * @member {string} [name] current.
   */
  name?: string;
  /**
   * @member {string} [type] Microsoft.ResourceHealth/AvailabilityStatuses.
   */
  type?: string;
  /**
   * @member {string} [location] Azure Resource Manager geo location of the
   * resource.
   */
  location?: string;
  /**
   * @member {AvailabilityStatusProperties} [properties] Properties of
   * availability state.
   */
  properties?: AvailabilityStatusProperties;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * Properties of the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Provider name.
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource name.
   */
  resource?: string;
  /**
   * @member {string} [operation] Operation name.
   */
  operation?: string;
  /**
   * @member {string} [description] Description of the operation.
   */
  description?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Operation available in the resourcehealth resource provider.
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Name of the operation.
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] Properties of the operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing OperationListResult.
 * Lists the operations response.
 *
 */
export interface OperationListResult {
  /**
   * @member {Operation[]} value List of operations available in the
   * resourcehealth resource provider.
   */
  value: Operation[];
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Error details.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} [code] The error code.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly code?: string;
  /**
   * @member {string} [message] The error message.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly message?: string;
  /**
   * @member {string} [details] The error details.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly details?: string;
}

/**
 * @interface
 * An interface representing AvailabilityStatusesListBySubscriptionIdOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AvailabilityStatusesListBySubscriptionIdOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation. For more
   * information please see
   * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
   */
  filter?: string;
  /**
   * @member {string} [expand] Setting $expand=recommendedactions in url query
   * expands the recommendedactions in the response.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing AvailabilityStatusesListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AvailabilityStatusesListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation. For more
   * information please see
   * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
   */
  filter?: string;
  /**
   * @member {string} [expand] Setting $expand=recommendedactions in url query
   * expands the recommendedactions in the response.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing AvailabilityStatusesGetByResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AvailabilityStatusesGetByResourceOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation. For more
   * information please see
   * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
   */
  filter?: string;
  /**
   * @member {string} [expand] Setting $expand=recommendedactions in url query
   * expands the recommendedactions in the response.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing AvailabilityStatusesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AvailabilityStatusesListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation. For more
   * information please see
   * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
   */
  filter?: string;
  /**
   * @member {string} [expand] Setting $expand=recommendedactions in url query
   * expands the recommendedactions in the response.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing ChildAvailabilityStatusesGetByResourceOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ChildAvailabilityStatusesGetByResourceOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation. For more
   * information please see
   * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
   */
  filter?: string;
  /**
   * @member {string} [expand] Setting $expand=recommendedactions in url query
   * expands the recommendedactions in the response.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing ChildAvailabilityStatusesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ChildAvailabilityStatusesListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation. For more
   * information please see
   * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
   */
  filter?: string;
  /**
   * @member {string} [expand] Setting $expand=recommendedactions in url query
   * expands the recommendedactions in the response.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing ChildResourcesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface ChildResourcesListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [filter] The filter to apply on the operation. For more
   * information please see
   * https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN
   */
  filter?: string;
  /**
   * @member {string} [expand] Setting $expand=recommendedactions in url query
   * expands the recommendedactions in the response.
   */
  expand?: string;
}

/**
 * @interface
 * An interface representing MicrosoftResourceHealthOptions.
 * @extends AzureServiceClientOptions
 */
export interface MicrosoftResourceHealthOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the AvailabilityStatusListResult.
 * The List availabilityStatus operation response.
 *
 * @extends Array<AvailabilityStatus>
 */
export interface AvailabilityStatusListResult extends Array<AvailabilityStatus> {
  /**
   * @member {string} [nextLink] The URI to fetch the next page of
   * availabilityStatuses. Call ListNext() with this URI to fetch the next page
   * of availabilityStatuses.
   */
  nextLink?: string;
}

/**
 * Defines values for AvailabilityStateValues.
 * Possible values include: 'Available', 'Unavailable', 'Unknown'
 * @readonly
 * @enum {string}
 */
export type AvailabilityStateValues = 'Available' | 'Unavailable' | 'Unknown';

/**
 * Defines values for ReasonChronicityTypes.
 * Possible values include: 'Transient', 'Persistent'
 * @readonly
 * @enum {string}
 */
export type ReasonChronicityTypes = 'Transient' | 'Persistent';

/**
 * Contains response data for the listBySubscriptionId operation.
 */
export type AvailabilityStatusesListBySubscriptionIdResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type AvailabilityStatusesListByResourceGroupResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
    };
};

/**
 * Contains response data for the getByResource operation.
 */
export type AvailabilityStatusesGetByResourceResponse = AvailabilityStatus & {
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
      parsedBody: AvailabilityStatus;
    };
};

/**
 * Contains response data for the list operation.
 */
export type AvailabilityStatusesListResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
    };
};

/**
 * Contains response data for the listBySubscriptionIdNext operation.
 */
export type AvailabilityStatusesListBySubscriptionIdNextResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type AvailabilityStatusesListByResourceGroupNextResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type AvailabilityStatusesListNextResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
    };
};

/**
 * Contains response data for the getByResource operation.
 */
export type ChildAvailabilityStatusesGetByResourceResponse = AvailabilityStatus & {
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
      parsedBody: AvailabilityStatus;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ChildAvailabilityStatusesListResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ChildAvailabilityStatusesListNextResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
    };
};

/**
 * Contains response data for the list operation.
 */
export type ChildResourcesListResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type ChildResourcesListNextResponse = AvailabilityStatusListResult & {
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
      parsedBody: AvailabilityStatusListResult;
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
