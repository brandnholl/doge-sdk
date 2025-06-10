// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Savings extends APIResource {
  /**
   * Get contract savings
   */
  listContracts(
    query: SavingListContractsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SavingListContractsResponse> {
    return this._client.get('/savings/contracts', { query, ...options });
  }

  /**
   * Get grant savings
   */
  listGrants(
    query: SavingListGrantsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SavingListGrantsResponse> {
    return this._client.get('/savings/grants', { query, ...options });
  }

  /**
   * Get lease savings
   */
  listLeases(
    query: SavingListLeasesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SavingListLeasesResponse> {
    return this._client.get('/savings/leases', { query, ...options });
  }
}

export interface SavingListContractsResponse {
  meta: SavingListContractsResponse.Meta;

  result: SavingListContractsResponse.Result;

  success: boolean;
}

export namespace SavingListContractsResponse {
  export interface Meta {
    /**
     * The total amount of pages at current per_page limit
     */
    pages: number;

    /**
     * The total amount of results
     */
    total_results: number;
  }

  export interface Result {
    contracts: Array<Result.Contract>;
  }

  export namespace Result {
    export interface Contract {
      /**
       * The agency of the contract
       */
      agency: string;

      /**
       * The date the contract was deleted
       */
      deleted_date: string | null;

      /**
       * The description of the contract
       */
      description: string | null;

      /**
       * The link to the contract in FPDS
       */
      fpds_link: string | null;

      /**
       * The status of the contract in FPDS
       */
      fpds_status: string | null;

      /**
       * The PIID of the contract
       */
      piid: string;

      /**
       * The savings of the contract
       */
      savings: number;

      /**
       * The value of the contract
       */
      value: number;

      /**
       * The vendor of the contract
       */
      vendor: string;
    }
  }
}

export interface SavingListGrantsResponse {
  meta: SavingListGrantsResponse.Meta;

  result: SavingListGrantsResponse.Result;

  success: boolean;
}

export namespace SavingListGrantsResponse {
  export interface Meta {
    /**
     * The total amount of pages at current per_page limit
     */
    pages: number;

    /**
     * The total amount of results
     */
    total_results: number;
  }

  export interface Result {
    grants: Array<Result.Grant>;
  }

  export namespace Result {
    export interface Grant {
      /**
       * The agency of the grant
       */
      agency: string;

      /**
       * The cancellation date of the grant
       */
      date: string;

      /**
       * The description of the grant
       */
      description: string | null;

      /**
       * The link to the grant on usaspending.gov
       */
      link: string | null;

      /**
       * The recipient of the grant
       */
      recipient: string;

      /**
       * The savings on the grant
       */
      savings: number;

      /**
       * The dollar value of the grant
       */
      value: number;
    }
  }
}

export interface SavingListLeasesResponse {
  meta: SavingListLeasesResponse.Meta;

  result: SavingListLeasesResponse.Result;

  success: boolean;
}

export namespace SavingListLeasesResponse {
  export interface Meta {
    /**
     * The total amount of pages at current per_page limit
     */
    pages: number;

    /**
     * The total amount of results
     */
    total_results: number;
  }

  export interface Result {
    leases: Array<Result.Lease>;
  }

  export namespace Result {
    export interface Lease {
      /**
       * The agency using the property
       */
      agency: string;

      /**
       * The cancelled date of the lease
       */
      date: string;

      /**
       * The description of the status of the lease
       */
      description: string | null;

      /**
       * The rough city and state of the lease
       */
      location: string;

      /**
       * The dollar value remaining on the lease at the time cancellation is effective
       */
      savings: number;

      /**
       * The square footage of the property
       */
      sq_ft: number;

      /**
       * The dollar value of the lease for the next year
       */
      value: number;
    }
  }
}

export interface SavingListContractsParams {
  /**
   * The page number to check
   */
  page?: number;

  /**
   * The number of items per page from 1 to 500
   */
  per_page?: number;

  /**
   * The field to sort by
   */
  sort_by?: 'savings' | 'value' | 'date';

  /**
   * The order to sort by
   */
  sort_order?: 'asc' | 'desc';
}

export interface SavingListGrantsParams {
  /**
   * The page number to check
   */
  page?: number;

  /**
   * The number of items per page from 1 to 500
   */
  per_page?: number;

  /**
   * The field to sort by
   */
  sort_by?: 'savings' | 'value' | 'date';

  /**
   * The order to sort by
   */
  sort_order?: 'asc' | 'desc';
}

export interface SavingListLeasesParams {
  /**
   * The page number to check
   */
  page?: number;

  /**
   * The number of items per page from 1 to 500
   */
  per_page?: number;

  /**
   * The field to sort by
   */
  sort_by?: 'savings' | 'value' | 'date';

  /**
   * The order to sort by
   */
  sort_order?: 'asc' | 'desc';
}

export declare namespace Savings {
  export {
    type SavingListContractsResponse as SavingListContractsResponse,
    type SavingListGrantsResponse as SavingListGrantsResponse,
    type SavingListLeasesResponse as SavingListLeasesResponse,
    type SavingListContractsParams as SavingListContractsParams,
    type SavingListGrantsParams as SavingListGrantsParams,
    type SavingListLeasesParams as SavingListLeasesParams,
  };
}
