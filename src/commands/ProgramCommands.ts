import z from "zod";
import ProgramApi from "../api/ProgramInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";
import type { Paginated } from "../pagination.js";

const getProgramInstruction    = buildinstructions(ProgramApi.get, 200 as const);
const listProgramInstruction   = buildinstructions(ProgramApi.list, 200 as const);
const createProgramInstruction = buildinstructions(ProgramApi.create, 201 as const);
const patchProgramInstruction  = buildinstructions(ProgramApi.patch, 200 as const);
const deleteProgramInstruction = buildinstructions(ProgramApi.remove, 204 as const);

export type ProgramEntity = z.infer<typeof ProgramApi.schema>;

export type GetProgramPath = z.infer<typeof ProgramApi.get.input>["path"];
export type ListProgramsQuery = z.infer<typeof ProgramApi.list.input>["query"];
export type CreateProgramBody = z.infer<typeof ProgramApi.create.input>["body"];
export type PatchProgramPath = z.infer<typeof ProgramApi.patch.input>["path"];
export type PatchProgramBody = z.infer<typeof ProgramApi.patch.input>["body"];
export type DeleteProgramPath = z.infer<typeof ProgramApi.remove.input>["path"];

export type GetProgramCommand = Command<GetProgramPath, never, never>;
export type ListProgramsCommand = Command<never, ListProgramsQuery, never>;
export type CreateProgramCommand = Command<never, never, CreateProgramBody>;
export type PatchProgramCommand = Command<PatchProgramPath, never, PatchProgramBody>;
export type DeleteProgramCommand = Command<DeleteProgramPath, never, never>;

export const getProgram: CommandExecutor<GetProgramCommand, ProgramEntity>
	= buildCommandExecutor(getProgramInstruction);
export const listPrograms: CommandExecutor<ListProgramsCommand, ProgramEntity[]>
	= buildCommandExecutor(listProgramInstruction);
export const createProgram: CommandExecutor<CreateProgramCommand, ProgramEntity>
	= buildCommandExecutor(createProgramInstruction);
export const patchProgram: CommandExecutor<PatchProgramCommand, ProgramEntity>
	= buildCommandExecutor(patchProgramInstruction);
export const deleteProgram: CommandExecutor<DeleteProgramCommand, void>
	= buildCommandExecutor(deleteProgramInstruction);