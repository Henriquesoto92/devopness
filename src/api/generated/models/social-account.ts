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
 * @interface SocialAccount
 */
export interface SocialAccount {
    /**
     * The name of the Social Authentication provider
     * @type {string}
     * @memberof SocialAccount
     */
    provider?: SocialAccountProviderEnum;
    /**
     * The name of the user on the Social Authentication provider
     * @type {string}
     * @memberof SocialAccount
     */
    provider_user_name?: string;
    /**
     * Tells if the social account provider is a Source Code Provider/Version Control System. e.g. false for Facebook, true for Github
     * @type {boolean}
     * @memberof SocialAccount
     */
    is_vcs?: boolean;
    /**
     * The current user\'s id
     * @type {number}
     * @memberof SocialAccount
     */
    user_id?: number;
    /**
     * The date and time when the record was created
     * @type {string}
     * @memberof SocialAccount
     */
    created_at?: string;
    /**
     * The date and time when the record was last updated
     * @type {string}
     * @memberof SocialAccount
     */
    updated_at?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SocialAccountProviderEnum {
    Bitbucket = 'bitbucket',
    Facebook = 'facebook',
    Github = 'github',
    Gitlab = 'gitlab',
    Google = 'google',
    Linkedin = 'linkedin'
}


