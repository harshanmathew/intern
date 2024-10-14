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

import { UploadsControllerUploadFileData, UploadsControllerUploadFilePayload } from './data-contracts';

export namespace Uploads {
  /**
   * No description
   * @tags Uploads
   * @name UploadsControllerUploadFile
   * @summary Upload file and get the file URL
   * @request POST:/uploads/file
   * @response `200` `UploadsControllerUploadFileData` File uploaded successfully and file URL returned
   */
  export namespace UploadsControllerUploadFile {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UploadsControllerUploadFilePayload;
    export type RequestHeaders = {};
    export type ResponseBody = UploadsControllerUploadFileData;
  }
}
