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


import { VariableTarget } from './variable-target';
import { VariableType } from './variable-type';

/**
 * 
 * @export
 * @interface VariableApplicationCreate
 */
export interface VariableApplicationCreate {
    /**
     * The unique key used to identify the variable on the target.                 When variable is of type `file`, this is the relative path                 to the file within the application directory. Must not be greater than 100 characters.
     * @type {string}
     * @memberof VariableApplicationCreate
     */
    key: string;
    /**
     * The value to be assigned to this variable when deployed to its target.                 When variable is of type `file`, this is the file content. Must not be greater than 21504 characters.
     * @type {string}
     * @memberof VariableApplicationCreate
     */
    value: string;
    /**
     * A text describing the variable, provided by the end user.
     * @type {string}
     * @memberof VariableApplicationCreate
     */
    description?: string;
    /**
     * 
     * @type {VariableTarget}
     * @memberof VariableApplicationCreate
     */
    target: VariableTarget;
    /**
     * 
     * @type {VariableType}
     * @memberof VariableApplicationCreate
     */
    type: VariableType;
    /**
     * Indicates if the variable value should be visible or not in the deployment logs.
     * @type {boolean}
     * @memberof VariableApplicationCreate
     */
    hidden: boolean;
}
