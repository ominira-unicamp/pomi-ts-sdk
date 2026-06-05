import z from "zod";
import catalogApi from "../api/CatalogInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";

const getCatalogInstruction    = buildinstructions(catalogApi.get, 200 as const);
const listCatalogInstruction   = buildinstructions(catalogApi.list, 200 as const);
const createCatalogInstruction = buildinstructions(catalogApi.create, 201 as const);
const patchCatalogInstruction  = buildinstructions(catalogApi.patch, 200 as const);
const deleteCatalogInstruction = buildinstructions(catalogApi.remove, 204 as const);

export type CatalogEntity = z.infer<typeof catalogApi.schemas.catalogEntitySchema>;
export type GetCatalogPath = z.infer<typeof catalogApi.get.input>["path"];
export type ListCatalogsQuery = z.infer<typeof catalogApi.list.input>["query"];
export type CreateCatalogBody = z.infer<typeof catalogApi.create.input>["body"];
export type PatchCatalogPath = z.infer<typeof catalogApi.patch.input>["path"];
export type PatchCatalogBody = z.infer<typeof catalogApi.patch.input>["body"];
export type DeleteCatalogPath = z.infer<typeof catalogApi.remove.input>["path"];

export type GetCatalogCommand = Command<GetCatalogPath, never, never>;
export type ListCatalogsCommand = Command<never, ListCatalogsQuery, never>;
export type CreateCatalogCommand = Command<never, never, CreateCatalogBody>;
export type PatchCatalogCommand = Command<PatchCatalogPath, never, PatchCatalogBody>;
export type DeleteCatalogCommand = Command<DeleteCatalogPath, never, never>;

export const getCatalog: CommandExecutor<GetCatalogCommand, CatalogEntity>
	= buildCommandExecutor(getCatalogInstruction);
export const listCatalogs: CommandExecutor<ListCatalogsCommand, CatalogEntity[]>
	= buildCommandExecutor(listCatalogInstruction);
export const createCatalog: CommandExecutor<CreateCatalogCommand, CatalogEntity>
	= buildCommandExecutor(createCatalogInstruction);
export const patchCatalog: CommandExecutor<PatchCatalogCommand, CatalogEntity>
	= buildCommandExecutor(patchCatalogInstruction);
export const deleteCatalog: CommandExecutor<DeleteCatalogCommand, void>
	= buildCommandExecutor(deleteCatalogInstruction);