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
   * @request POST:/tokens
   * @response `201` `TokensControllerCreateData`
   */
  tokensControllerCreate = (data: CreateTokenDto, params: RequestParams = {}) =>
    this.request<TokensControllerCreateData, any>({
      path: `/tokens`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Tokens
   * @name TokensControllerFindAll
   * @request GET:/tokens
   * @response `200` `TokensControllerFindAllData`
   */
  tokensControllerFindAll = (params: RequestParams = {}) =>
    this.request<TokensControllerFindAllData, any>({
      path: `/tokens`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tokens
   * @name TokensControllerFindOne
   * @request GET:/tokens/{id}
   * @response `200` `TokensControllerFindOneData`
   */
  tokensControllerFindOne = (id: string, params: RequestParams = {}) =>
    this.request<TokensControllerFindOneData, any>({
      path: `/tokens/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags Tokens
   * @name TokensControllerLaunch
   * @request PUT:/tokens/{id}/launch
   * @response `200` `TokensControllerLaunchData`
   */
  tokensControllerLaunch = (id: string, params: RequestParams = {}) =>
    this.request<TokensControllerLaunchData, any>({
      path: `/tokens/${id}/launch`,
      method: 'PUT',
      ...params,
    });
}
