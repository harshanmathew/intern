/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export type paths = {
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get current user details */
        get: operations["MeController_findMe"];
        put?: never;
        post?: never;
        /** Delete current user account */
        delete: operations["MeController_removeMe"];
        options?: never;
        head?: never;
        /** Update current user details */
        patch: operations["MeController_updateMe"];
        trace?: never;
    };
    "/auth/login": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Login with wallet address and signature */
        post: operations["AuthController_login"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/uploads/file": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        /** Upload file and get the file URL */
        post: operations["UploadsController_uploadFile"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tokens": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get all tokens for the user */
        get: operations["TokensController_findAll"];
        put?: never;
        /** Create a new token */
        post: operations["TokensController_create"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tokens/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        /** Get a specific token by ID */
        get: operations["TokensController_findOne"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tokens/{id}/launch": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        /** Launch a token */
        put: operations["TokensController_launch"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
};
export type webhooks = Record<string, never>;
export type components = {
    schemas: {
        User: {
            name: string;
            username: string;
            address: string;
            profileImage: string;
        };
        UpdateUserDto: {
            /** @example John Doe */
            name: string;
            /** @example johndoe */
            username: string;
            /** @example https://example.com/profile-image.png */
            profileImage: string;
        };
        LoginResponse: {
            /** @example true */
            isValid: boolean;
            /** @example eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI... */
            accessToken: string;
            /** @example Invalid signature */
            error: string;
            /** @example 0xAbb6c94E23cdA58BfB0ee135Eb974fAC4D0afcA7 */
            addressFromSignature: string;
        };
        CreateTokenDto: {
            /** @example My Awesome Token */
            name: string;
            /** @example MAT */
            ticker: string;
            /** @example This is a revolutionary new token for awesome people. */
            description: string;
            /** @example 0x0 */
            transactionHash: string;
            /** @example https://example.com/token-image.png */
            image: string;
            /** @example 1000000 */
            tokenSupply: number;
            /** @example 1000 */
            initialBuyAmount?: number;
            /**
             * @example beginner
             * @enum {string}
             */
            bondingCurve: "beginner" | "pro";
            /** @example https://twitter.com/myawesometoken */
            twitterLink?: string;
            /** @example https://t.me/myawesometoken */
            telegramLink?: string;
            /** @example https://myawesometoken.com */
            websiteLink?: string;
            /** @example yes */
            donate?: string;
            /** @example false */
            launched?: boolean;
        };
        Token: {
            _id: string;
            name: string;
            ticker: string;
            address: string;
            description: string;
            image: string;
            tokenSupply: number;
            initialBuyAmount: number;
            /** @enum {string} */
            bondingCurve: "beginner" | "pro";
            twitterLink: string;
            telegramLink: string;
            websiteLink: string;
            launched: boolean;
            /** @enum {string} */
            donate: "yes" | "no";
            transactionHash: string;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
};
export type $defs = Record<string, never>;
export interface operations {
    MeController_findMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Returns the current user. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
            /** @description Unauthorized. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MeController_removeMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description User deleted successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description User not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    MeController_updateMe: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateUserDto"];
            };
        };
        responses: {
            /** @description User updated successfully. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["User"];
                };
            };
        };
    };
    AuthController_login: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            default: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["LoginResponse"];
                };
            };
        };
    };
    UploadsController_uploadFile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "multipart/form-data": {
                    files?: string[];
                };
            };
        };
        responses: {
            /** @description File uploaded successfully and file URL returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        fileKey?: string;
                        uploadUrl?: string;
                    };
                };
            };
        };
    };
    TokensController_findAll: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Return all tokens for the user. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TokensController_create: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateTokenDto"];
            };
        };
        responses: {
            /** @description The token has been successfully created. */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Token"];
                };
            };
        };
    };
    TokensController_findOne: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Return the token. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Token not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    TokensController_launch: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description The token has been successfully launched. */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Unauthorized. */
            401: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Token not found. */
            404: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}
