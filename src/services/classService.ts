import type { ClientType } from "../client.js";
import type { PomiError } from "../errors.js";
import type { ClassEntitySchema } from "../models.js";
import type { paths, components } from "../openapi/specs.js";
import { ResultOK, type Result } from "../result.js";
import ResourceService from "./resourceService.js";

type ListFilters = paths["/classes"]["get"]["parameters"]["query"];
type CreateClassSchema = components["schemas"]["CreateClassBody"];
type PatchClassSchema = components["schemas"]["PatchClassBody"];

class ClassService extends ResourceService {
	async get(classId: number): Promise<Result<ClassEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/classes/{id}`, {
			params: {
				path: {
					id: classId,
				}
			}
		});
		if (response?.status === 404)
			return ResultOK(null);
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? null);
	}

	async list(listFilters?: ListFilters): Promise<Result<ClassEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/classes`, {
			params: {
				query: listFilters,
			}
		});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? []);
	}

	async create(newClass: CreateClassSchema): Promise<Result<ClassEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.POST(`/classes`, {
			body: newClass,
		});
		if (error || response.status !== 201)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async update(classId: number, updatedClass: PatchClassSchema): Promise<Result<ClassEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.PATCH(`/classes/{id}`, {
			params: { path: { id: classId } },
			body: updatedClass,
		});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async delete(classId: number): Promise<Result<boolean, PomiError>> {
		const { error, response } = await this.client.DELETE(`/classes/{id}`, {
			params: { path: { id: classId } },
		});
		if (response?.status === 404)
			return ResultOK(false);
		if (error || response.status !== 204)
			return this.defaultError(response, error);
		return ResultOK(true);
	}
}

export default ClassService
export type { ListFilters as ClassListFilters, CreateClassSchema, PatchClassSchema }