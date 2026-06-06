import z from "zod";
import CourseApi from "../api/CourseInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";
import type { Paginated } from "../pagination.js";

const getCourseInstruction    = buildinstructions(CourseApi.get, 200 as const);
const listCourseInstruction   = buildinstructions(CourseApi.list, 200 as const);
const createCourseInstruction = buildinstructions(CourseApi.create, 201 as const);
const patchCourseInstruction  = buildinstructions(CourseApi.patch, 200 as const);
const deleteCourseInstruction = buildinstructions(CourseApi.remove, 204 as const);

export type CourseEntity = z.infer<typeof CourseApi.schema>;
export type PaginatedCourseEntity = Paginated<CourseEntity>;

export type GetCoursePath = z.infer<typeof CourseApi.get.input>["path"];
export type ListCoursesQuery = z.infer<typeof CourseApi.list.input>["query"];
export type CreateCourseBody = z.infer<typeof CourseApi.create.input>["body"];
export type PatchCoursePath = z.infer<typeof CourseApi.patch.input>["path"];
export type PatchCourseBody = z.infer<typeof CourseApi.patch.input>["body"];
export type DeleteCoursePath = z.infer<typeof CourseApi.remove.input>["path"];

export type GetCourseCommand = Command<GetCoursePath, never, never>;
export type ListCoursesCommand = Command<never, ListCoursesQuery, never>;
export type CreateCourseCommand = Command<never, never, CreateCourseBody>;
export type PatchCourseCommand = Command<PatchCoursePath, never, PatchCourseBody>;
export type DeleteCourseCommand = Command<DeleteCoursePath, never, never>;

export const getCourse: CommandExecutor<GetCourseCommand, CourseEntity>
    = buildCommandExecutor(getCourseInstruction);
export const listCourses: CommandExecutor<ListCoursesCommand, PaginatedCourseEntity>
    = buildCommandExecutor(listCourseInstruction);
export const createCourse: CommandExecutor<CreateCourseCommand, CourseEntity>
    = buildCommandExecutor(createCourseInstruction);
export const patchCourse: CommandExecutor<PatchCourseCommand, CourseEntity>
    = buildCommandExecutor(patchCourseInstruction);
export const deleteCourse: CommandExecutor<DeleteCourseCommand, void>
    = buildCommandExecutor(deleteCourseInstruction);