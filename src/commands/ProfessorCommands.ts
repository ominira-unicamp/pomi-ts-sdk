import z from "zod";
import ProfessorApi from "../api/ProfessorInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";
import type { Paginated } from "../pagination.js";

const getProfessorInstruction    = buildinstructions(ProfessorApi.get, 200 as const);
const listProfessorInstruction   = buildinstructions(ProfessorApi.list, 200 as const);
const createProfessorInstruction = buildinstructions(ProfessorApi.create, 201 as const);
const patchProfessorInstruction  = buildinstructions(ProfessorApi.patch, 200 as const);
const deleteProfessorInstruction = buildinstructions(ProfessorApi.remove, 204 as const);

export type ProfessorEntity = z.infer<typeof ProfessorApi.schema>;
export type PaginatedProfessorEntity = Paginated<ProfessorEntity>;

export type GetProfessorPath = z.infer<typeof ProfessorApi.get.input>["path"];
export type ListProfessorsQuery = z.infer<typeof ProfessorApi.list.input>["query"];
export type CreateProfessorBody = z.infer<typeof ProfessorApi.create.input>["body"];
export type PatchProfessorPath = z.infer<typeof ProfessorApi.patch.input>["path"];
export type PatchProfessorBody = z.infer<typeof ProfessorApi.patch.input>["body"];
export type DeleteProfessorPath = z.infer<typeof ProfessorApi.remove.input>["path"];

export type GetProfessorCommand = Command<GetProfessorPath, never, never>;
export type ListProfessorsCommand = Command<never, ListProfessorsQuery, never>;
export type CreateProfessorCommand = Command<never, never, CreateProfessorBody>;
export type PatchProfessorCommand = Command<PatchProfessorPath, never, PatchProfessorBody>;
export type DeleteProfessorCommand = Command<DeleteProfessorPath, never, never>;

export const getProfessor: CommandExecutor<GetProfessorCommand, ProfessorEntity>
	= buildCommandExecutor(getProfessorInstruction);
export const listProfessors: CommandExecutor<ListProfessorsCommand, PaginatedProfessorEntity>
	= buildCommandExecutor(listProfessorInstruction);
export const createProfessor: CommandExecutor<CreateProfessorCommand, ProfessorEntity>
	= buildCommandExecutor(createProfessorInstruction);
export const patchProfessor: CommandExecutor<PatchProfessorCommand, ProfessorEntity>
	= buildCommandExecutor(patchProfessorInstruction);
export const deleteProfessor: CommandExecutor<DeleteProfessorCommand, void>
	= buildCommandExecutor(deleteProfessorInstruction);