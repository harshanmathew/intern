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
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name AuthControllerLogin
   * @summary Login with wallet address and signature
   * @request POST:/auth/login
   * @response `201` `AuthControllerLoginData`
   */
  authControllerLogin = (data: AuthControllerLoginPayload, params: RequestParams = {}) =>
    this.request<AuthControllerLoginData, any>({
      path: `/auth/login`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
}
