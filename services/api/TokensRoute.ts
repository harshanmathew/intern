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
   * @summary Create a new token
   * @request POST:/tokens
   * @secure
   * @response `201` `TokensControllerCreateData` The token has been successfully created.
   * @response `400` `void` Bad Request.
   * @response `401` `void` Unauthorized.
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
   * @summary Get all tokens for the user
   * @request GET:/tokens
   * @secure
   * @response `200` `TokensControllerFindAllData` Return all tokens for the user.
   * @response `401` `void` Unauthorized.
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
   * @summary Get a specific token by ID
   * @request GET:/tokens/{id}
   * @secure
   * @response `200` `TokensControllerFindOneData` Return the token.
   * @response `401` `void` Unauthorized.
   * @response `404` `void` Token not found.
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
   * @summary Launch a token
   * @request PUT:/tokens/{id}/launch
   * @secure
   * @response `200` `TokensControllerLaunchData` The token has been successfully launched.
   * @response `401` `void` Unauthorized.
   * @response `404` `void` Token not found.
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
