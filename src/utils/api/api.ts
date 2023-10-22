/* tslint:disable */
/* eslint-disable */
/**
 * spa-server-template
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface GenericError
 */
export interface GenericError {
    /**
     * 
     * @type {string}
     * @memberof GenericError
     */
    'message': string;
}
/**
 * 
 * @export
 * @interface ResponseCreateUser
 */
export interface ResponseCreateUser {
    /**
     * 
     * @type {GenericError}
     * @memberof ResponseCreateUser
     */
    'error'?: GenericError;
    /**
     * 
     * @type {ResponseCreateUserData}
     * @memberof ResponseCreateUser
     */
    'data'?: ResponseCreateUserData;
}
/**
 * 
 * @export
 * @interface ResponseCreateUserData
 */
export interface ResponseCreateUserData {
    /**
     * 
     * @type {string}
     * @memberof ResponseCreateUserData
     */
    'id': string;
}
/**
 * 
 * @export
 * @interface ResponseGetAllUser
 */
export interface ResponseGetAllUser {
    /**
     * 
     * @type {GenericError}
     * @memberof ResponseGetAllUser
     */
    'error'?: GenericError;
    /**
     * 
     * @type {Array<ResponseGetUserData>}
     * @memberof ResponseGetAllUser
     */
    'data'?: Array<ResponseGetUserData> | null;
}
/**
 * 
 * @export
 * @interface ResponseGetUser
 */
export interface ResponseGetUser {
    /**
     * 
     * @type {GenericError}
     * @memberof ResponseGetUser
     */
    'error'?: GenericError;
    /**
     * 
     * @type {ResponseGetUserData}
     * @memberof ResponseGetUser
     */
    'data'?: ResponseGetUserData;
}
/**
 * 
 * @export
 * @interface ResponseGetUserData
 */
export interface ResponseGetUserData {
    /**
     * 
     * @type {string}
     * @memberof ResponseGetUserData
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseGetUserData
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseGetUserData
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof ResponseGetUserData
     */
    'id': string;
}
/**
 * 
 * @export
 * @interface RestCreateUser
 */
export interface RestCreateUser {
    /**
     * 
     * @type {string}
     * @memberof RestCreateUser
     */
    'firstName': string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateUser
     */
    'lastName': string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateUser
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof RestCreateUser
     */
    'password': string;
}
/**
 * 
 * @export
 * @interface RestGetUser
 */
export interface RestGetUser {
    /**
     * 
     * @type {string}
     * @memberof RestGetUser
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof RestGetUser
     */
    'password': string;
}

/**
 * GetAllUsersApi - axios parameter creator
 * @export
 */
export const GetAllUsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllUsers: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/getUsers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GetAllUsersApi - functional programming interface
 * @export
 */
export const GetAllUsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GetAllUsersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllUsers(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseGetAllUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllUsers(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GetAllUsersApi - factory interface
 * @export
 */
export const GetAllUsersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GetAllUsersApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllUsers(options?: AxiosRequestConfig): AxiosPromise<ResponseGetAllUser> {
            return localVarFp.getAllUsers(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GetAllUsersApi - object-oriented interface
 * @export
 * @class GetAllUsersApi
 * @extends {BaseAPI}
 */
export class GetAllUsersApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GetAllUsersApi
     */
    public getAllUsers(options?: AxiosRequestConfig) {
        return GetAllUsersApiFp(this.configuration).getAllUsers(options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * GetUserApi - axios parameter creator
 * @export
 */
export const GetUserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {RestCreateUser} restCreateUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser: async (restCreateUser: RestCreateUser, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'restCreateUser' is not null or undefined
            assertParamExists('createUser', 'restCreateUser', restCreateUser)
            const localVarPath = `/user/create`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(restCreateUser, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {RestGetUser} restGetUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser: async (restGetUser: RestGetUser, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'restGetUser' is not null or undefined
            assertParamExists('getUser', 'restGetUser', restGetUser)
            const localVarPath = `/user/getUser`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(restGetUser, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GetUserApi - functional programming interface
 * @export
 */
export const GetUserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GetUserApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {RestCreateUser} restCreateUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createUser(restCreateUser: RestCreateUser, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseCreateUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createUser(restCreateUser, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {RestGetUser} restGetUser 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUser(restGetUser: RestGetUser, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseGetUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUser(restGetUser, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GetUserApi - factory interface
 * @export
 */
export const GetUserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GetUserApiFp(configuration)
    return {
        /**
         * 
         * @param {GetUserApiCreateUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createUser(requestParameters: GetUserApiCreateUserRequest, options?: AxiosRequestConfig): AxiosPromise<ResponseCreateUser> {
            return localVarFp.createUser(requestParameters.restCreateUser, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {GetUserApiGetUserRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUser(requestParameters: GetUserApiGetUserRequest, options?: AxiosRequestConfig): AxiosPromise<ResponseGetUser> {
            return localVarFp.getUser(requestParameters.restGetUser, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createUser operation in GetUserApi.
 * @export
 * @interface GetUserApiCreateUserRequest
 */
export interface GetUserApiCreateUserRequest {
    /**
     * 
     * @type {RestCreateUser}
     * @memberof GetUserApiCreateUser
     */
    readonly restCreateUser: RestCreateUser
}

/**
 * Request parameters for getUser operation in GetUserApi.
 * @export
 * @interface GetUserApiGetUserRequest
 */
export interface GetUserApiGetUserRequest {
    /**
     * 
     * @type {RestGetUser}
     * @memberof GetUserApiGetUser
     */
    readonly restGetUser: RestGetUser
}

/**
 * GetUserApi - object-oriented interface
 * @export
 * @class GetUserApi
 * @extends {BaseAPI}
 */
export class GetUserApi extends BaseAPI {
    /**
     * 
     * @param {GetUserApiCreateUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GetUserApi
     */
    public createUser(requestParameters: GetUserApiCreateUserRequest, options?: AxiosRequestConfig) {
        return GetUserApiFp(this.configuration).createUser(requestParameters.restCreateUser, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {GetUserApiGetUserRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GetUserApi
     */
    public getUser(requestParameters: GetUserApiGetUserRequest, options?: AxiosRequestConfig) {
        return GetUserApiFp(this.configuration).getUser(requestParameters.restGetUser, options).then((request) => request(this.axios, this.basePath));
    }
}



/**
 * GetUserByIdApi - axios parameter creator
 * @export
 */
export const GetUserByIdApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getUserById', 'id', id)
            const localVarPath = `/user/getUserById`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication jwt required

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GetUserByIdApi - functional programming interface
 * @export
 */
export const GetUserByIdApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GetUserByIdApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserById(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ResponseGetUser>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GetUserByIdApi - factory interface
 * @export
 */
export const GetUserByIdApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GetUserByIdApiFp(configuration)
    return {
        /**
         * 
         * @param {GetUserByIdApiGetUserByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserById(requestParameters: GetUserByIdApiGetUserByIdRequest, options?: AxiosRequestConfig): AxiosPromise<ResponseGetUser> {
            return localVarFp.getUserById(requestParameters.id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getUserById operation in GetUserByIdApi.
 * @export
 * @interface GetUserByIdApiGetUserByIdRequest
 */
export interface GetUserByIdApiGetUserByIdRequest {
    /**
     * 
     * @type {string}
     * @memberof GetUserByIdApiGetUserById
     */
    readonly id: string
}

/**
 * GetUserByIdApi - object-oriented interface
 * @export
 * @class GetUserByIdApi
 * @extends {BaseAPI}
 */
export class GetUserByIdApi extends BaseAPI {
    /**
     * 
     * @param {GetUserByIdApiGetUserByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GetUserByIdApi
     */
    public getUserById(requestParameters: GetUserByIdApiGetUserByIdRequest, options?: AxiosRequestConfig) {
        return GetUserByIdApiFp(this.configuration).getUserById(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }
}


