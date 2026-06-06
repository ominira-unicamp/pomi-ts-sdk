import z from "zod";
import StudentApi from "../../api/students/StudentInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../../commands.js";

const getStudentInstruction    = buildinstructions(StudentApi.get, 200 as const);
const listStudentInstruction   = buildinstructions(StudentApi.list, 200 as const);
const createStudentInstruction = buildinstructions(StudentApi.create, 201 as const);
const patchStudentInstruction  = buildinstructions(StudentApi.patch, 200 as const);
const deleteStudentInstruction = buildinstructions(StudentApi.remove, 204 as const);

export type StudentEntity = z.infer<typeof StudentApi.schema>;
export type GetStudentPath = z.infer<typeof StudentApi.get.input>["path"];
export type ListStudentsQuery = z.infer<typeof StudentApi.list.input>["query"];
export type CreateStudentBody = z.infer<typeof StudentApi.create.input>["body"];
export type PatchStudentPath = z.infer<typeof StudentApi.patch.input>["path"];
export type PatchStudentBody = z.infer<typeof StudentApi.patch.input>["body"];
export type DeleteStudentPath = z.infer<typeof StudentApi.remove.input>["path"];

export type GetStudentCommand = Command<GetStudentPath, never, never>;
export type ListStudentsCommand = Command<never, ListStudentsQuery, never>;
export type CreateStudentCommand = Command<never, never, CreateStudentBody>;
export type PatchStudentCommand = Command<PatchStudentPath, never, PatchStudentBody>;
export type DeleteStudentCommand = Command<DeleteStudentPath, never, never>;

export const getStudent: CommandExecutor<GetStudentCommand, StudentEntity>
	= buildCommandExecutor(getStudentInstruction);
export const listStudents: CommandExecutor<ListStudentsCommand, StudentEntity[]>
	= buildCommandExecutor(listStudentInstruction);
export const createStudent: CommandExecutor<CreateStudentCommand, StudentEntity>
	= buildCommandExecutor(createStudentInstruction);
export const patchStudent: CommandExecutor<PatchStudentCommand, StudentEntity>
	= buildCommandExecutor(patchStudentInstruction);
export const deleteStudent: CommandExecutor<DeleteStudentCommand, void>
	= buildCommandExecutor(deleteStudentInstruction);