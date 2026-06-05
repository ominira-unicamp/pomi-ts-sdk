import z from "zod";
import LanguageApi from "../api/LanguageInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";
import type { Paginated } from "../pagination.js";

const getLanguageInstruction    = buildinstructions(LanguageApi.get, 200 as const);
const listLanguageInstruction   = buildinstructions(LanguageApi.list, 200 as const);
const createLanguageInstruction = buildinstructions(LanguageApi.create, 201 as const);
const patchLanguageInstruction  = buildinstructions(LanguageApi.patch, 200 as const);
const deleteLanguageInstruction = buildinstructions(LanguageApi.remove, 204 as const);

export type LanguageEntity = z.infer<typeof LanguageApi.schema>;
export type PaginatedLanguageEntity = Paginated<LanguageEntity>;

export type GetLanguagePath = z.infer<typeof LanguageApi.get.input>["path"];
export type ListLanguagesQuery = z.infer<typeof LanguageApi.list.input>["query"];
export type CreateLanguageBody = z.infer<typeof LanguageApi.create.input>["body"];
export type PatchLanguagePath = z.infer<typeof LanguageApi.patch.input>["path"];
export type PatchLanguageBody = z.infer<typeof LanguageApi.patch.input>["body"];
export type DeleteLanguagePath = z.infer<typeof LanguageApi.remove.input>["path"];

export type GetLanguageCommand = Command<GetLanguagePath, never, never>;
export type ListLanguagesCommand = Command<never, ListLanguagesQuery, never>;
export type CreateLanguageCommand = Command<never, never, CreateLanguageBody>;
export type PatchLanguageCommand = Command<PatchLanguagePath, never, PatchLanguageBody>;
export type DeleteLanguageCommand = Command<DeleteLanguagePath, never, never>;

export const getLanguage: CommandExecutor<GetLanguageCommand, LanguageEntity>
	= buildCommandExecutor(getLanguageInstruction);
export const listLanguages: CommandExecutor<ListLanguagesCommand, LanguageEntity[]>
	= buildCommandExecutor(listLanguageInstruction);
export const createLanguage: CommandExecutor<CreateLanguageCommand, LanguageEntity>
	= buildCommandExecutor(createLanguageInstruction);
export const patchLanguage: CommandExecutor<PatchLanguageCommand, LanguageEntity>
	= buildCommandExecutor(patchLanguageInstruction);
export const deleteLanguage: CommandExecutor<DeleteLanguageCommand, void>
	= buildCommandExecutor(deleteLanguageInstruction);