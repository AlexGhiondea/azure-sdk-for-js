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
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/invoicePricesheetMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a InvoicePricesheet. */
export class InvoicePricesheet {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a InvoicePricesheet.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Get pricesheet data for invoice id (invoiceName).
   * @param billingAccountId Azure Billing Account ID.
   * @param invoiceName The name of an invoice resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.InvoicePricesheetDownloadResponse>
   */
  download(billingAccountId: string, invoiceName: string, options?: msRest.RequestOptionsBase): Promise<Models.InvoicePricesheetDownloadResponse> {
    return this.beginDownload(billingAccountId,invoiceName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.InvoicePricesheetDownloadResponse>;
  }

  /**
   * Get pricesheet data for invoice id (invoiceName).
   * @param billingAccountId Azure Billing Account ID.
   * @param invoiceName The name of an invoice resource.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDownload(billingAccountId: string, invoiceName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        billingAccountId,
        invoiceName,
        options
      },
      beginDownloadOperationSpec,
      options);
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const beginDownloadOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountId}/invoices/{invoiceName}/pricesheet/default/download",
  urlParameters: [
    Parameters.billingAccountId,
    Parameters.invoiceName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.DownloadUrl,
      headersMapper: Mappers.InvoicePricesheetDownloadHeaders
    },
    202: {
      headersMapper: Mappers.InvoicePricesheetDownloadHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
