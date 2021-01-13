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
import { Hook } from '../../generated/models';

/**
 * HooksApiService - Auto-generated
 */
export class HooksApiService extends ApiBaseService {
    /**
     * 
     * @summary Get a hook by Id
     * @param {string} hookId Unique ID of the hook to be retrieved
     */
    public async getHook(hookId: string): Promise<ApiResponse<Hook>> {
        if (hookId === null || hookId === undefined) {
            throw new ArgumentNullException('hookId', 'getHook');
        }
        
        let queryString = '';

        const requestUrl = '/hooks/{hook_id}' + (queryString? `?${queryString}` : '');

        const response = await this.get <Hook>(requestUrl.replace(`{${"hook_id"}}`, encodeURIComponent(String(hookId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Trigger a hook associated action
     * @param {string} hookId Unique ID of the hook to be triggered
     */
    public async triggerHook(hookId: string): Promise<ApiResponse<void>> {
        if (hookId === null || hookId === undefined) {
            throw new ArgumentNullException('hookId', 'triggerHook');
        }
        
        let queryString = '';

        const requestUrl = '/hooks/{hook_id}' + (queryString? `?${queryString}` : '');

        const response = await this.post <void>(requestUrl.replace(`{${"hook_id"}}`, encodeURIComponent(String(hookId))));
        return new ApiResponse(response);
    }
}