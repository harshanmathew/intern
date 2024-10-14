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
  MeControllerFindMeData,
  MeControllerRemoveMeData,
  MeControllerUpdateMeData,
  UpdateUserDto,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Me<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Me
   * @name MeControllerFindMe
   * @summary Get current user details
   * @request GET:/me
   * @secure
   * @response `200` `MeControllerFindMeData` Returns the current user.
   * @response `401` `void` Unauthorized.
   */
  meControllerFindMe = (params: RequestParams = {}) =>
    this.request<MeControllerFindMeData, void>({
      path: `/me`,
      method: 'GET',
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Me
   * @name MeControllerUpdateMe
   * @summary Update current user details
   * @request PATCH:/me
   * @secure
   * @response `200` `MeControllerUpdateMeData` User updated successfully.
   * @response `401` `void` Unauthorized.
   * @response `404` `void` User not found.
   */
  meControllerUpdateMe = (data: UpdateUserDto, params: RequestParams = {}) =>
    this.request<MeControllerUpdateMeData, void>({
      path: `/me`,
      method: 'PATCH',
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags Me
   * @name MeControllerRemoveMe
   * @summary Delete current user account
   * @request DELETE:/me
   * @secure
   * @response `200` `MeControllerRemoveMeData` User deleted successfully.
   * @response `401` `void` Unauthorized.
   * @response `404` `void` User not found.
   */
  meControllerRemoveMe = (params: RequestParams = {}) =>
    this.request<MeControllerRemoveMeData, void>({
      path: `/me`,
      method: 'DELETE',
      secure: true,
      ...params,
    });
}
