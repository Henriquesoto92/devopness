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
import { Environment } from '../../generated/models';
import { EnvironmentCreate } from '../../generated/models';

/**
 * ProjectsEnvironmentsApiService - Auto-generated
 */
export class ProjectsEnvironmentsApiService extends ApiBaseService {
    /**
     * 
     * @summary Create a new environment, on the current project
     * @param {number} projectId Numeric ID of the project to which an environment will be added
     * @param {EnvironmentCreate} environmentCreate A JSON object containing environment data
     */
    public async addEnvironmentToProject(projectId: number, environmentCreate: EnvironmentCreate): Promise<ApiResponse<void>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addEnvironmentToProject');
        }
        if (environmentCreate === null || environmentCreate === undefined) {
            throw new ArgumentNullException('environmentCreate', 'addEnvironmentToProject');
        }
        const response = await this.post <void, EnvironmentCreate>(`/projects/{project_id}/environments`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), environmentCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Returns a list of all environments belonging to a project
     * @param {number} projectId Numeric ID of the project to get environments from
     */
    public async listProjectEnvironments(projectId: number): Promise<ApiResponse<Array<Environment>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectEnvironments');
        }
        const response = await this.get <Array<Environment>>(`/projects/{project_id}/environments`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}
