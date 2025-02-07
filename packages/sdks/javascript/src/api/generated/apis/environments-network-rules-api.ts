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
import { NetworkRule } from '../../generated/models';
import { NetworkRuleEnvironmentCreate } from '../../generated/models';
import { NetworkRuleRelation } from '../../generated/models';

/**
 * EnvironmentsNetworkRulesApiService - Auto-generated
 */
export class EnvironmentsNetworkRulesApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a Network Rule to the given environment
     * @param {number} environmentId The ID of the environment.
     * @param {NetworkRuleEnvironmentCreate} networkRuleEnvironmentCreate A JSON object containing the resource data
     */
    public async addEnvironmentNetworkRule(environmentId: number, networkRuleEnvironmentCreate: NetworkRuleEnvironmentCreate): Promise<ApiResponse<NetworkRule>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'addEnvironmentNetworkRule');
        }
        if (networkRuleEnvironmentCreate === null || networkRuleEnvironmentCreate === undefined) {
            throw new ArgumentNullException('networkRuleEnvironmentCreate', 'addEnvironmentNetworkRule');
        }
        
        let queryString = '';

        const requestUrl = '/environments/{environment_id}/network-rules' + (queryString? `?${queryString}` : '');

        const response = await this.post <NetworkRule, NetworkRuleEnvironmentCreate>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))), networkRuleEnvironmentCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all Network Rules belonging to an environment
     * @param {number} environmentId The ID of the environment.
     * @param {number} [page] Number of the page to be retrieved
     * @param {number} [perPage] Number of items returned per page
     */
    public async listEnvironmentNetworkRules(environmentId: number, page?: number, perPage?: number): Promise<ApiResponse<Array<NetworkRuleRelation>>> {
        if (environmentId === null || environmentId === undefined) {
            throw new ArgumentNullException('environmentId', 'listEnvironmentNetworkRules');
        }
        
        let queryString = '';
        const queryParams = { page: page, per_page: perPage, } as { [key: string]: any };
        for (const key in queryParams) {
            if (queryParams[key] === undefined || queryParams[key] === null) {
                continue;
            }

            queryString += (queryString? '&' : '') + `${key}=${encodeURI(queryParams[key])}`;
        }

        const requestUrl = '/environments/{environment_id}/network-rules' + (queryString? `?${queryString}` : '');

        const response = await this.get <Array<NetworkRuleRelation>>(requestUrl.replace(`{${"environment_id"}}`, encodeURIComponent(String(environmentId))));
        return new ApiResponse(response);
    }
}
