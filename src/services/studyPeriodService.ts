import type { ClientType } from "../client.js";
import type { PomiError } from "../errors.js";
import type { StudyPeriodEntitySchema } from "../models.js";
import type { components } from "../openapi/specs.js";
import { ResultOK, type Result } from "../result.js";
import ResourceService from "./resourceService.js";

type CreateStudyPeriodSchema = components["schemas"]["CreateStudyPeriodBody"];
type PatchStudyPeriodSchema = components["schemas"]["PatchStudyPeriodBody"];

class StudyPeriodService extends ResourceService {
	async get(studyPeriodId: number): Promise<Result<StudyPeriodEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/study-periods/{id}`, {
			params: {
				path: {
					id: studyPeriodId,
				}
			}
		});
		if (response?.status === 404)
			return ResultOK(null);
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? null);
	}

	async list(): Promise<Result<StudyPeriodEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/study-periods`, {});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? []);
	}

	async create(newStudyPeriod: CreateStudyPeriodSchema): Promise<Result<StudyPeriodEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.POST(`/study-periods`, {
			body: newStudyPeriod,
		});
		if (error || response.status !== 201)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async update(studyPeriodId: number, updatedStudyPeriod: PatchStudyPeriodSchema): Promise<Result<StudyPeriodEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.PATCH(`/study-periods/{id}`, {
			params: { path: { id: studyPeriodId } },
			body: updatedStudyPeriod,
		});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async delete(studyPeriodId: number): Promise<Result<boolean, PomiError>> {
		const { error, response } = await this.client.DELETE(`/study-periods/{id}`, {
			params: { path: { id: studyPeriodId } },
		});
		if (response?.status === 404)
			return ResultOK(false);
		if (error || response.status !== 204)
			return this.defaultError(response, error);
		return ResultOK(true);
	}
}

export default StudyPeriodService
export type { CreateStudyPeriodSchema, PatchStudyPeriodSchema }