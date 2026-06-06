import z from "zod";
import ClassApi from "../api/ClassInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";
import type { Paginated } from "../pagination.js";

const getClassInstruction    = buildinstructions(ClassApi.get, 200 as const);
const listClassInstruction   = buildinstructions(ClassApi.list, 200 as const);
const createClassInstruction = buildinstructions(ClassApi.create, 201 as const);
const patchClassInstruction  = buildinstructions(ClassApi.patch, 200 as const);
const deleteClassInstruction = buildinstructions(ClassApi.remove, 204 as const);

export type ClassEntity = z.infer<typeof ClassApi.schema>;
export type PaginatedClassEntity = Paginated<ClassEntity>;

export type GetClassPath = z.infer<typeof ClassApi.get.input>["path"];
export type ListClasssQuery = z.infer<typeof ClassApi.list.input>["query"];
export type CreateClassBody = z.infer<typeof ClassApi.create.input>["body"];
export type PatchClassPath = z.infer<typeof ClassApi.patch.input>["path"];
export type PatchClassBody = z.infer<typeof ClassApi.patch.input>["body"];
export type DeleteClassPath = z.infer<typeof ClassApi.remove.input>["path"];

export type GetClassCommand = Command<GetClassPath, never, never>;
export type ListClasssCommand = Command<never, ListClasssQuery, never>;
export type CreateClassCommand = Command<never, never, CreateClassBody>;
export type PatchClassCommand = Command<PatchClassPath, never, PatchClassBody>;
export type DeleteClassCommand = Command<DeleteClassPath, never, never>;

export const getClass: CommandExecutor<GetClassCommand, ClassEntity>
    = buildCommandExecutor(getClassInstruction);
export const listClasss: CommandExecutor<ListClasssCommand, PaginatedClassEntity>
    = buildCommandExecutor(listClassInstruction);
export const createClass: CommandExecutor<CreateClassCommand, ClassEntity>
    = buildCommandExecutor(createClassInstruction);
export const patchClass: CommandExecutor<PatchClassCommand, ClassEntity>
    = buildCommandExecutor(patchClassInstruction);
export const deleteClass: CommandExecutor<DeleteClassCommand, void>
    = buildCommandExecutor(deleteClassInstruction);