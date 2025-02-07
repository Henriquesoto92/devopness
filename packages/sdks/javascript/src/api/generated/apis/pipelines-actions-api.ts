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
import { Action } from '../../generated/models';
import { ActionPipelineCreate } from '../../generated/models';
import { ApiError } from '../../generated/models';

/**
 * PipelinesActionsApiService - Auto-generated
 */
export class PipelinesActionsApiService extends ApiBaseService {
    /**
     * 
     * @summary Create an action to run a Pipeline
     * @param {number} pipelineId The ID of the pipeline that will be executed by the created action
     * @param {ActionPipelineCreate} actionPipelineCreate A JSON object containing the resource data
     */
    public async addPipelineAction(pipelineId: number, actionPipelineCreate: ActionPipelineCreate): Promise<ApiResponse<Action>> {
        if (pipelineId === null || pipelineId === undefined) {
            throw new ArgumentNullException('pipelineId', 'addPipelineAction');
        }
        if (actionPipelineCreate === null || actionPipelineCreate === undefined) {
            throw new ArgumentNullException('actionPipelineCreate', 'addPipelineAction');
        }
        
        let queryString = '';

        const requestUrl = '/pipelines/{pipeline_id}/actions' + (queryString? `?${queryString}` : '');

        const response = await this.post <Action, ActionPipelineCreate>(requestUrl.replace(`{${"pipeline_id"}}`, encodeURIComponent(String(pipelineId))), actionPipelineCreate);
        return new ApiResponse(response);
    }
}
