/* eslint-disable */
/**
 * devopness API
 * Devopness API - Painless essential DevOps to everyone 
 *
 * The version of the OpenAPI document: latest
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ApiBaseService } from "../../../services/ApiBaseService";
import { ApiResponse } from "../../../common/ApiResponse";
import { ArgumentNullException } from "../../../common/Exceptions";
import { ApiError } from '../../generated/models';
import { Application } from '../../generated/models';
import { ApplicationUpdate } from '../../generated/models';

/**
 * ApplicationsApiService - Auto-generated
 */
export class ApplicationsApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given application
     * @param {number} applicationId The ID of the application.
     */
    public async deleteApplication(applicationId: number): Promise<ApiResponse<void>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'deleteApplication');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}' + (queryString? `?${queryString}` : '');

        const response = await this.delete <void>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get an application by ID
     * @param {number} applicationId The ID of the application.
     */
    public async getApplication(applicationId: number): Promise<ApiResponse<Application>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'getApplication');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Application>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Update an existing application
     * @param {number} applicationId The ID of the application.
     * @param {ApplicationUpdate} applicationUpdate A JSON object containing the resource data
     */
    public async updateApplication(applicationId: number, applicationUpdate: ApplicationUpdate): Promise<ApiResponse<void>> {
        if (applicationId === null || applicationId === undefined) {
            throw new ArgumentNullException('applicationId', 'updateApplication');
        }
        if (applicationUpdate === null || applicationUpdate === undefined) {
            throw new ArgumentNullException('applicationUpdate', 'updateApplication');
        }
        
        let queryString = '';

        const requestUrl = '/applications/{application_id}' + (queryString? `?${queryString}` : '');

        const response = await this.put <void, ApplicationUpdate>(requestUrl.replace(`{${"application_id"}}`, encodeURIComponent(String(applicationId))), applicationUpdate);
        return new ApiResponse(response);
    }
}
