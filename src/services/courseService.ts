import type { ClientType } from "../client.js";
import type { PomiError } from "../errors.js";
import type { CourseEntitySchema } from "../models.js";
import type { components } from "../openapi/specs.js";
import { ResultOK, type Result } from "../result.js";
import ResourceService from "./resourceService.js";

type CreateCourseSchema = components["schemas"]["CreateCourseBody"];
type PatchCourseSchema = components["schemas"]["PatchCourseBody"];

class CourseService extends ResourceService {
	async get(courseId: number): Promise<Result<CourseEntitySchema | null, PomiError>> {
		const { data, error, response } = await this.client.GET(`/courses/{id}`, {
			params: {
				path: {
					id: courseId,
				}
			}
		});
		if (response?.status === 404)
			return ResultOK(null);
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? null);
	}

	async list(): Promise<Result<CourseEntitySchema[], PomiError>> {
		const { data, error, response } = await this.client.GET(`/courses`, {});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data ?? []);
	}

	async create(newCourse: CreateCourseSchema): Promise<Result<CourseEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.POST(`/courses`, {
			body: newCourse,
		});
		if (error || response.status !== 201)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async update(courseId: number, updatedCourse: PatchCourseSchema): Promise<Result<CourseEntitySchema, PomiError>> {
		const { data, error, response } = await this.client.PATCH(`/courses/{id}`, {
			params: { path: { id: courseId } },
			body: updatedCourse,
		});
		if (error || response.status !== 200)
			return this.defaultError(response, error);
		return ResultOK(data!);
	}

	async delete(courseId: number): Promise<Result<boolean, PomiError>> {
		const { error, response } = await this.client.DELETE(`/courses/{id}`, {
			params: { path: { id: courseId } },
		});
		if (response?.status === 404)
			return ResultOK(false);
		if (error || response.status !== 204)
			return this.defaultError(response, error);
		return ResultOK(true);
	}
}

export default CourseService
export type { CreateCourseSchema, PatchCourseSchema }