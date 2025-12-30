import type { ClientType } from "../client.js";
import type { PomiError } from "../errors.js";
import type { InstituteEntitySchema } from "../models.js";
import type { components } from "../openapi/specs.js";
import { ResultOK, type Result } from "../result.js";
import ResourceService from "./resourceService.js";

type CreateInstituteSchema = components["schemas"]["CreateInstituteBody"];
type PatchInstituteSchema = components["schemas"]["PatchInstituteBody"];

class InstituteService extends ResourceService {
	async get(instituteId: number): Promise<Result<InstituteEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/institutes/{id}`, {
			params: {
				path: {
					id: instituteId,
				}
			}
		});
		if (response?.status === 404)
			return ResultOK(null);
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? null);
	}

	async list(): Promise<Result<InstituteEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/institutes`, {});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? []);
	}

	async create(newInstitute: CreateInstituteSchema): Promise<Result<InstituteEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.POST(`/institutes`, {
			body: newInstitute,
		});
		if (error || response.status !== 201)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async update(instituteId: number, updatedInstitute: PatchInstituteSchema): Promise<Result<InstituteEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.PATCH(`/institutes/{id}`, {
			params: { path: { id: instituteId } },
			body: updatedInstitute,
		});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async delete(instituteId: number): Promise<Result<boolean, PomiError>> {
		const { error, response } = await this.client.DELETE(`/institutes/{id}`, {
			params: { path: { id: instituteId } },
		});
		if (response?.status === 404)
			return ResultOK(false);
		if (error || response.status !== 204)
			return this.defaultError(response, error);
		return ResultOK(true);
	}
}

export default InstituteService
export type { CreateInstituteSchema, PatchInstituteSchema }