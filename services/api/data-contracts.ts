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

export interface CreateTokenDto {
  /** @example "beginner" */
  bondingCurve: CreateTokenDtoBondingCurveEnum;
  /** @example "This is a revolutionary new token for awesome people." */
  description: string;
  /** @example "https://example.com/token-image.png" */
  image: string;
  /** @example 1000 */
  initialBuyAmount?: number;
  /** @example false */
  launched?: boolean;
  /** @example "My Awesome Token" */
  name: string;
  /** @example "https://t.me/myawesometoken" */
  telegramLink?: string;
  /** @example "MAT" */
  ticker: string;
  /** @example 1000000 */
  tokenSupply: number;
  /** @example "https://twitter.com/myawesometoken" */
  twitterLink?: string;
  /** @example "https://myawesometoken.com" */
  websiteLink?: string;
}

/** @example "beginner" */
export type CreateTokenDtoBondingCurveEnum = 'beginner' | 'pro';

export type MeControllerFindMeData = any;

export type MeControllerRemoveMeData = any;

export type MeControllerUpdateMeData = any;

export interface Token {
  _id: string;
  bondingCurve: TokenBondingCurveEnum;
  description: string;
  image: string;
  initialBuyAmount: number;
  launched: boolean;
  name: string;
  telegramLink: string;
  ticker: string;
  tokenSupply: number;
  twitterLink: string;
  websiteLink: string;
}

export type TokenBondingCurveEnum = 'beginner' | 'pro';

export type TokensControllerCreateData = Token;

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
