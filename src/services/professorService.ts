import type { PomiError } from "../errors.js";
import type { ProfessorEntitySchema } from "../models.js";
import type { components, paths } from "../openapi/specs.js";
import { ResultOK, type Result } from "../result.js";
import ResourceService from "./resourceService.js";

export type ProfessorListFilters = paths["/professors"]["get"]["parameters"]["query"];
export type CreateProfessorSchema = components["schemas"]["CreateProfessorBody"];
export type PatchProfessorSchema = components["schemas"]["PatchProfessorBody"];

export default class ProfessorService extends ResourceService {
	async get(professorId: number): Promise<Result<ProfessorEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/professors/{id}`, {
			params: { path: { id: professorId } },
		});
		if (response?.status === 404)
			return ResultOK(null);
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? null);
	}

	async list(filters?: ProfessorListFilters): Promise<Result<ProfessorEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/professors`, {
			params: { query: filters },
		});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? []);
	}

	async create(data: CreateProfessorSchema): Promise<Result<ProfessorEntitySchema, PomiError>> {
		const { data: result, error, response } = await this.client.POST(`/professors`, {
			body: data,
		});
		if (error || response.status !== 201)
			return this.defaultError(response, error);
		return ResultOK(result!);
	}

	async update(professorId: number, data: PatchProfessorSchema): Promise<Result<ProfessorEntitySchema, PomiError>> {
		const { data: result, error, response } = await this.client.PATCH(`/professors/{id}`, {
			params: { path: { id: professorId } },
			body: data,
		});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(result!);
	}

	async delete(professorId: number): Promise<Result<boolean, PomiError>> {
		const { error, response } = await this.client.DELETE(`/professors/{id}`, {
			params: { path: { id: professorId } },
		});
		if (response?.status === 404)
			return ResultOK(false);
		if (error || response.status !== 204)
			return this.defaultError(response, error);
		return ResultOK(true);
	}
}