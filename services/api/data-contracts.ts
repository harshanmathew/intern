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

export type AuthControllerLoginData = any;

export interface AuthControllerLoginPayload {
  /**
   * Wallet address
   * @example "0xAbb6c94E23cdA58BfB0ee135Eb974fAC4D0afcA7"
   */
  address?: string;
  /**
   * Message that was signed
   * @example "Signing this message at : <replace with timestamp>"
   */
  message?: string;
  /**
   * Signature
   * @example "0xc68245bb2cf6993a3ee9d14f3ebeb25e28bf207b02ea53bae9d506bb9457634306027368eb9db7ad44bec38cf1516afecbe68c6165d9e87e20d4e0309d0d8e121b"
   */
  signature?: string;
}

export type CreateTokenDto = object;

export type MeControllerFindMeData = any;

export type MeControllerRemoveMeData = any;

export type MeControllerUpdateMeData = any;

export type TokensControllerCreateData = any;

export type TokensControllerFindAllData = any;

export type TokensControllerFindOneData = any;

export type TokensControllerLaunchData = any;

export type UpdateUserDto = object;

export interface UploadsControllerUploadFileData {
  fileKey?: string;
  uploadUrl?: string;
}

export interface UploadsControllerUploadFilePayload {
  files?: File[];
}
