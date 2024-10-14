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
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Tokens<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Tokens
   * @name TokensControllerCreate
   * @summary Create a new token
   * @request POST:/tokens
   * @secure
   * @response `201` `TokensControllerCreateData` The token has been successfully created.
   * @response `400` `void` Bad Request.
   * @response `401` `void` Unauthorized.
   */
  tokensControllerCreate = (data: CreateTokenDto, params: RequestParams = {}) =>
    this.request<TokensControllerCreateData, void>({
      path: `/tokens`,
      method: 'POST',
      body: data,
      secure: true,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tokens
   * @name TokensControllerFindAll
   * @summary Get all tokens for the user
   * @request GET:/tokens
   * @secure
   * @response `200` `TokensControllerFindAllData` Return all tokens for the user.
   * @response `401` `void` Unauthorized.
   */
  tokensControllerFindAll = (params: RequestParams = {}) =>
    this.request<TokensControllerFindAllData, void>({
      path: `/tokens`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tokens
   * @name TokensControllerFindOne
   * @summary Get a specific token by ID
   * @request GET:/tokens/{id}
   * @secure
   * @response `200` `TokensControllerFindOneData` Return the token.
   * @response `401` `void` Unauthorized.
   * @response `404` `void` Token not found.
   */
  tokensControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<TokensControllerFindOneData, void>({
      path: `/tokens/${id}`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tokens
   * @name TokensControllerLaunch
   * @summary Launch a token
   * @request PUT:/tokens/{id}/launch
   * @secure
   * @response `200` `TokensControllerLaunchData` The token has been successfully launched.
   * @response `401` `void` Unauthorized.
   * @response `404` `void` Token not found.
   */
  tokensControllerLaunch = (id: string, params: RequestParams = {}) =>
    this.request<TokensControllerLaunchData, void>({
      path: `/tokens/${id}/launch`,
      method: 'PUT',
      secure: true,
      ...params,
    });
}
