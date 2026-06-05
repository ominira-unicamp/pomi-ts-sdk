import z from "zod";
import CatalogProgramApi from "../api/CatalogProgramInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";

const getCatalogProgramInstruction    = buildinstructions(CatalogProgramApi.get, 200 as const);
const listCatalogProgramInstruction   = buildinstructions(CatalogProgramApi.list, 200 as const);
const createCatalogProgramInstruction = buildinstructions(CatalogProgramApi.create, 201 as const);
const patchCatalogProgramInstruction  = buildinstructions(CatalogProgramApi.patch, 200 as const);
const deleteCatalogProgramInstruction = buildinstructions(CatalogProgramApi.remove, 204 as const);

export type CatalogProgramEntity = z.infer<typeof CatalogProgramApi.schemas.catalogProgramEntity>;
export type GetCatalogProgramPath = z.infer<typeof CatalogProgramApi.get.input>["path"];
export type ListCatalogProgramsQuery = z.infer<typeof CatalogProgramApi.list.input>["query"];
export type CreateCatalogProgramBody = z.infer<typeof CatalogProgramApi.create.input>["body"];
export type PatchCatalogProgramPath = z.infer<typeof CatalogProgramApi.patch.input>["path"];
export type PatchCatalogProgramBody = z.infer<typeof CatalogProgramApi.patch.input>["body"];
export type DeleteCatalogProgramPath = z.infer<typeof CatalogProgramApi.remove.input>["path"];

export type GetCatalogProgramCommand = Command<GetCatalogProgramPath, never, never>;
export type ListCatalogProgramsCommand = Command<never, ListCatalogProgramsQuery, never>;
export type CreateCatalogProgramCommand = Command<never, never, CreateCatalogProgramBody>;
export type PatchCatalogProgramCommand = Command<PatchCatalogProgramPath, never, PatchCatalogProgramBody>;
export type DeleteCatalogProgramCommand = Command<DeleteCatalogProgramPath, never, never>;

export const getCatalogProgram: CommandExecutor<GetCatalogProgramCommand, CatalogProgramEntity>
	= buildCommandExecutor(getCatalogProgramInstruction);
export const listCatalogPrograms: CommandExecutor<ListCatalogProgramsCommand, CatalogProgramEntity[]>
	= buildCommandExecutor(listCatalogProgramInstruction);
export const createCatalogProgram: CommandExecutor<CreateCatalogProgramCommand, CatalogProgramEntity>
	= buildCommandExecutor(createCatalogProgramInstruction);
export const patchCatalogProgram: CommandExecutor<PatchCatalogProgramCommand, CatalogProgramEntity>
	= buildCommandExecutor(patchCatalogProgramInstruction);
export const deleteCatalogProgram: CommandExecutor<DeleteCatalogProgramCommand, void>
	= buildCommandExecutor(deleteCatalogProgramInstruction);