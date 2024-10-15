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

export namespace Me {
  /**
   * No description
   * @tags Me
   * @name MeControllerFindMe
   * @summary Get current user details
   * @request GET:/me
   * @secure
   * @response `200` `MeControllerFindMeData` Returns the current user.
   * @response `401` `void` Unauthorized.
   */
  export namespace MeControllerFindMe {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeControllerFindMeData;
  }

  /**
   * No description
   * @tags Me
   * @name MeControllerUpdateMe
   * @summary Update current user details
   * @request PATCH:/me
   * @secure
   * @response `200` `MeControllerUpdateMeData` User updated successfully.
   * @response `401` `void` Unauthorized.
   * @response `404` `void` User not found.
   */
  export namespace MeControllerUpdateMe {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = MeControllerUpdateMeData;
  }

  /**
   * No description
   * @tags Me
   * @name MeControllerRemoveMe
   * @summary Delete current user account
   * @request DELETE:/me
   * @secure
   * @response `200` `MeControllerRemoveMeData` User deleted successfully.
   * @response `401` `void` Unauthorized.
   * @response `404` `void` User not found.
   */
  export namespace MeControllerRemoveMe {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = MeControllerRemoveMeData;
  }
}
