import z from "zod";
import StudentCourseApi from "../../api/students/StudentCourseInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../../commands.js";

const getStudentCourseInstruction    = buildinstructions(StudentCourseApi.get, 200 as const);
const listStudentCourseInstruction   = buildinstructions(StudentCourseApi.list, 200 as const);
const createStudentCourseInstruction = buildinstructions(StudentCourseApi.create, 201 as const);
const patchStudentCourseInstruction  = buildinstructions(StudentCourseApi.patch, 200 as const);
const deleteStudentCourseInstruction = buildinstructions(StudentCourseApi.remove, 204 as const);

export type StudentCourseEntity = z.infer<typeof StudentCourseApi.schema>;
export type GetStudentCoursePath = z.infer<typeof StudentCourseApi.get.input>["path"];
export type ListStudentCoursesPath = z.infer<typeof StudentCourseApi.list.input>["path"];
export type ListStudentCoursesQuery = z.infer<typeof StudentCourseApi.list.input>["query"];
export type CreateStudentCoursePath = z.infer<typeof StudentCourseApi.create.input>["path"];
export type CreateStudentCourseBody = z.infer<typeof StudentCourseApi.create.input>["body"];
export type PatchStudentCoursePath = z.infer<typeof StudentCourseApi.patch.input>["path"];
export type PatchStudentCourseBody = z.infer<typeof StudentCourseApi.patch.input>["body"];
export type DeleteStudentCoursePath = z.infer<typeof StudentCourseApi.remove.input>["path"];

export type GetStudentCourseCommand = Command<GetStudentCoursePath, never, never>;
export type ListStudentCoursesCommand = Command<ListStudentCoursesPath, ListStudentCoursesQuery, never>;
export type CreateStudentCourseCommand = Command<CreateStudentCoursePath, never, CreateStudentCourseBody>;
export type PatchStudentCourseCommand = Command<PatchStudentCoursePath, never, PatchStudentCourseBody>;
export type DeleteStudentCourseCommand = Command<DeleteStudentCoursePath, never, never>;

export const getStudentCourse: CommandExecutor<GetStudentCourseCommand, StudentCourseEntity>
	= buildCommandExecutor(getStudentCourseInstruction);
export const listStudentCourses: CommandExecutor<ListStudentCoursesCommand, StudentCourseEntity[]>
	= buildCommandExecutor(listStudentCourseInstruction);
export const createStudentCourse: CommandExecutor<CreateStudentCourseCommand, StudentCourseEntity>
	= buildCommandExecutor(createStudentCourseInstruction);
export const patchStudentCourse: CommandExecutor<PatchStudentCourseCommand, StudentCourseEntity>
	= buildCommandExecutor(patchStudentCourseInstruction);
export const deleteStudentCourse: CommandExecutor<DeleteStudentCourseCommand, void>
	= buildCommandExecutor(deleteStudentCourseInstruction);