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
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Uploads<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Uploads
   * @name UploadsControllerUploadFile
   * @summary Upload file and get the file URL
   * @request POST:/uploads/file
   * @response `200` `UploadsControllerUploadFileData` File uploaded successfully and file URL returned
   */
  uploadsControllerUploadFile = (data: UploadsControllerUploadFilePayload, params: RequestParams = {}) =>
    this.request<UploadsControllerUploadFileData, any>({
      path: `/uploads/file`,
      method: 'POST',
      body: data,
      type: ContentType.FormData,
      format: 'json',
      ...params,
    });
}
