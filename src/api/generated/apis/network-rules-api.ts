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
import { NetworkRule } from '../../generated/models';

/**
 * NetworkRulesApiService - Auto-generated
 */
export class NetworkRulesApiService extends ApiBaseService {
    /**
     * 
     * @summary Delete a given network rule
     * @param {number} ruleId Numeric ID of the rule to be deleted
     */
    public async deleteNetworkRule(ruleId: number): Promise<ApiResponse<void>> {
        if (ruleId === null || ruleId === undefined) {
            throw new ArgumentNullException('ruleId', 'deleteNetworkRule');
        }
        const response = await this.delete <void>(`/network-rules/{rule_id}`.replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId))));
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Get a network rule by ID
     * @param {number} ruleId Numeric ID of the rule to get
     */
    public async getNetworkRule(ruleId: number): Promise<ApiResponse<NetworkRule>> {
        if (ruleId === null || ruleId === undefined) {
            throw new ArgumentNullException('ruleId', 'getNetworkRule');
        }
        const response = await this.get <NetworkRule>(`/network-rules/{rule_id}`.replace(`{${"rule_id"}}`, encodeURIComponent(String(ruleId))));
        return new ApiResponse(response);
    }
}