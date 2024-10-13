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

import { AuthControllerLoginData, AuthControllerLoginPayload } from './data-contracts';

export namespace Auth {
  /**
   * No description
   * @tags Auth
   * @name AuthControllerLogin
   * @summary Login with wallet address and signature
   * @request POST:/auth/login
   * @response `201` `AuthControllerLoginData`
   */
  export namespace AuthControllerLogin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AuthControllerLoginPayload;
    export type RequestHeaders = {};
    export type ResponseBody = AuthControllerLoginData;
  }
}
