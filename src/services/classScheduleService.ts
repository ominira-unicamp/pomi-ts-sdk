import type { PomiError } from "../errors.js";
import type { ClassScheduleEntitySchema } from "../models.js";
import type { components, paths } from "../openapi/specs.js";
import { ResultOK, type Result } from "../result.js";
import ResourceService from "./resourceService.js";

export type ClassScheduleListFilters = paths["/class-schedules"]["get"]["parameters"]["query"];
export type CreateClassScheduleSchema = components["schemas"]["CreateClassScheduleBody"];
export type PatchClassScheduleSchema = components["schemas"]["PatchClassScheduleBody"];

export default class ClassScheduleService extends ResourceService {
	async get(classScheduleId: number): Promise<Result<ClassScheduleEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/class-schedules/{id}`, {
			params: {
				path: {
					id: classScheduleId,
				}
			}
		});
		if (response?.status === 404)
			return ResultOK(null);
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? null);
	}

	async list(filters?: ClassScheduleListFilters): Promise<Result<ClassScheduleEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/class-schedules`, {
			params: { query: filters },
		});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? []);
	}

	async create(newClassSchedule: CreateClassScheduleSchema): Promise<Result<ClassScheduleEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.POST(`/class-schedules`, {
			body: newClassSchedule,
		});
		if (error || response.status !== 201)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async update(classScheduleId: number, updatedClassSchedule: PatchClassScheduleSchema): Promise<Result<ClassScheduleEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.PATCH(`/class-schedules/{id}`, {
			params: { path: { id: classScheduleId } },
			body: updatedClassSchedule,
		});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async delete(classScheduleId: number): Promise<Result<boolean, PomiError>> {
		const { error, response } = await this.client.DELETE(`/class-schedules/{id}`, {
			params: { path: { id: classScheduleId } },
		});
		if (response?.status === 404)
			return ResultOK(false);
		if (error || response.status !== 204)
			return this.defaultError(response, error);
		return ResultOK(true);
	}
}
