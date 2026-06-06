import z from "zod";
import CurriculumApi from "../../api/students/CurriculumInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../../commands.js";

const getCurriculumInstruction    = buildinstructions(CurriculumApi.get, 200 as const);
const listCurriculumInstruction   = buildinstructions(CurriculumApi.list, 200 as const);
const createCurriculumInstruction = buildinstructions(CurriculumApi.create, 201 as const);
const patchCurriculumInstruction  = buildinstructions(CurriculumApi.patch, 200 as const);
const deleteCurriculumInstruction = buildinstructions(CurriculumApi.remove, 204 as const);

export type CurriculumEntity = z.infer<typeof CurriculumApi.schema>;
export type GetCurriculumPath = z.infer<typeof CurriculumApi.get.input>["path"];
export type ListCurriculaPath = z.infer<typeof CurriculumApi.list.input>["path"];
export type CreateCurriculumPath = z.infer<typeof CurriculumApi.create.input>["path"];
export type PatchCurriculumPath = z.infer<typeof CurriculumApi.patch.input>["path"];
export type PatchCurriculumBody = z.infer<typeof CurriculumApi.patch.input>["body"];
export type DeleteCurriculumPath = z.infer<typeof CurriculumApi.remove.input>["path"];

export type GetCurriculumCommand = Command<GetCurriculumPath, never, never>;
export type ListCurriculaCommand = Command<ListCurriculaPath, never, never>;
export type CreateCurriculumCommand = Command<CreateCurriculumPath, never, never>;
export type PatchCurriculumCommand = Command<PatchCurriculumPath, never, PatchCurriculumBody>;
export type DeleteCurriculumCommand = Command<DeleteCurriculumPath, never, never>;

export const getCurriculum: CommandExecutor<GetCurriculumCommand, CurriculumEntity>
	= buildCommandExecutor(getCurriculumInstruction);
export const listCurricula: CommandExecutor<ListCurriculaCommand, CurriculumEntity[]>
	= buildCommandExecutor(listCurriculumInstruction);
export const createCurriculum: CommandExecutor<CreateCurriculumCommand, CurriculumEntity>
	= buildCommandExecutor(createCurriculumInstruction);
export const patchCurriculum: CommandExecutor<PatchCurriculumCommand, CurriculumEntity>
	= buildCommandExecutor(patchCurriculumInstruction);
export const deleteCurriculum: CommandExecutor<DeleteCurriculumCommand, void>
	= buildCommandExecutor(deleteCurriculumInstruction);