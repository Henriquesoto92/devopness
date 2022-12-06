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


import { CloudProviderService } from './cloud-provider-service';
import { CloudProviderSettingsList } from './cloud-provider-settings-list';
import { StaticCloudProviderCode } from './static-cloud-provider-code';

/**
 * 
 * @export
 * @interface CloudProviderOptionsRelation
 */
export interface CloudProviderOptionsRelation {
    /**
     * 
     * @type {StaticCloudProviderCode}
     * @memberof CloudProviderOptionsRelation
     */
    code: StaticCloudProviderCode;
    /**
     * Cloud provider name
     * @type {string}
     * @memberof CloudProviderOptionsRelation
     */
    name: string;
    /**
     * Text describing what is the provider
     * @type {string}
     * @memberof CloudProviderOptionsRelation
     */
    hint: string;
    /**
     * The provider\'s logo URL
     * @type {string}
     * @memberof CloudProviderOptionsRelation
     */
    logo_url: string;
    /**
     * 
     * @type {Array<CloudProviderService>}
     * @memberof CloudProviderOptionsRelation
     */
    cloud_services: Array<CloudProviderService>;
    /**
     * 
     * @type {CloudProviderSettingsList}
     * @memberof CloudProviderOptionsRelation
     */
    settings: CloudProviderSettingsList;
}
