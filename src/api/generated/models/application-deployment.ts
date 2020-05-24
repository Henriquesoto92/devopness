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



/**
 * 
 * @export
 * @interface ApplicationDeployment
 */
export interface ApplicationDeployment {
    /**
     * The type of the deployment being triggered
     * @type {string}
     * @memberof ApplicationDeployment
     */
    type: ApplicationDeploymentTypeEnum;
    /**
     * The name of the branch from which the source code should be retrieved and deployed
     * @type {string}
     * @memberof ApplicationDeployment
     */
    branch: string;
    /**
     * The commit\'s full hash that uniquely identify a commit. Required when re-deploying
     * @type {string}
     * @memberof ApplicationDeployment
     */
    hash?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ApplicationDeploymentTypeEnum {
    Deploy = 'deploy',
    Redeploy = 'redeploy',
    Rollback = 'rollback'
}


