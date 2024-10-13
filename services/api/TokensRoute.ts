/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  CreateTokenDto,
  TokensControllerCreateData,
  TokensControllerFindAllData,
  TokensControllerFindOneData,
  TokensControllerLaunchData,
} from './data-contracts';

export namespace Tokens {
  /**
   * No description
   * @tags Tokens
   * @name TokensControllerCreate
   * @request POST:/tokens
   * @response `201` `TokensControllerCreateData`
   */
  export namespace TokensControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTokenDto;
    export type RequestHeaders = {};
    export type ResponseBody = TokensControllerCreateData;
  }

  /**
   * No description
   * @tags Tokens
   * @name TokensControllerFindAll
   * @request GET:/tokens
   * @response `200` `TokensControllerFindAllData`
   */
  export namespace TokensControllerFindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokensControllerFindAllData;
  }

  /**
   * No description
   * @tags Tokens
   * @name TokensControllerFindOne
   * @request GET:/tokens/{id}
   * @response `200` `TokensControllerFindOneData`
   */
  export namespace TokensControllerFindOne {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokensControllerFindOneData;
  }

  /**
   * No description
   * @tags Tokens
   * @name TokensControllerLaunch
   * @request PUT:/tokens/{id}/launch
   * @response `200` `TokensControllerLaunchData`
   */
  export namespace TokensControllerLaunch {
    export type RequestParams = {
      id: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TokensControllerLaunchData;
  }
}
