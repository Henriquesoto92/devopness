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
import { CronJob } from '../../generated/models';
import { CronJobCreate } from '../../generated/models';

/**
 * ProjectsCronJobsApiService - Auto-generated
 */
export class ProjectsCronJobsApiService extends ApiBaseService {
    /**
     * 
     * @summary Add a Cron Job to the given project
     * @param {number} projectId The project numeric Id
     * @param {CronJobCreate} cronJobCreate A JSON object containing cron job data
     */
    public async addCronJobToProject(projectId: number, cronJobCreate: CronJobCreate): Promise<ApiResponse<CronJob>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'addCronJobToProject');
        }
        if (cronJobCreate === null || cronJobCreate === undefined) {
            throw new ArgumentNullException('cronJobCreate', 'addCronJobToProject');
        }
        const response = await this.post <CronJob, CronJobCreate>(`/projects/{project_id}/tasks`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))), cronJobCreate);
        return new ApiResponse(response);
    }

    /**
     * 
     * @summary Return a list of all Cron Jobs belonging to a project
     * @param {number} projectId Numeric ID of the project to get cron jobs from
     */
    public async listProjectCronJobs(projectId: number): Promise<ApiResponse<Array<CronJob>>> {
        if (projectId === null || projectId === undefined) {
            throw new ArgumentNullException('projectId', 'listProjectCronJobs');
        }
        const response = await this.get <Array<CronJob>>(`/projects/{project_id}/tasks`.replace(`{${"project_id"}}`, encodeURIComponent(String(projectId))));
        return new ApiResponse(response);
    }
}