import z from "zod";
import InstituteApi from "../api/InstituteInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";
import type { Paginated } from "../pagination.js";

const getInstituteInstruction    = buildinstructions(InstituteApi.get, 200 as const);
const listInstituteInstruction   = buildinstructions(InstituteApi.list, 200 as const);
const createInstituteInstruction = buildinstructions(InstituteApi.create, 201 as const);
const patchInstituteInstruction  = buildinstructions(InstituteApi.patch, 200 as const);
const deleteInstituteInstruction = buildinstructions(InstituteApi.remove, 204 as const);

export type InstituteEntity = z.infer<typeof InstituteApi.schema>;
export type PaginatedInstituteEntity = Paginated<InstituteEntity>;

export type GetInstitutePath = z.infer<typeof InstituteApi.get.input>["path"];
export type ListInstitutesQuery = z.infer<typeof InstituteApi.list.input>["query"];
export type CreateInstituteBody = z.infer<typeof InstituteApi.create.input>["body"];
export type PatchInstitutePath = z.infer<typeof InstituteApi.patch.input>["path"];
export type PatchInstituteBody = z.infer<typeof InstituteApi.patch.input>["body"];
export type DeleteInstitutePath = z.infer<typeof InstituteApi.remove.input>["path"];

export type GetInstituteCommand = Command<GetInstitutePath, never, never>;
export type ListInstitutesCommand = Command<never, ListInstitutesQuery, never>;
export type CreateInstituteCommand = Command<never, never, CreateInstituteBody>;
export type PatchInstituteCommand = Command<PatchInstitutePath, never, PatchInstituteBody>;
export type DeleteInstituteCommand = Command<DeleteInstitutePath, never, never>;

export const getInstitute: CommandExecutor<GetInstituteCommand, InstituteEntity>
	= buildCommandExecutor(getInstituteInstruction);
export const listInstitutes: CommandExecutor<ListInstitutesCommand, InstituteEntity[]>
	= buildCommandExecutor(listInstituteInstruction);
export const createInstitute: CommandExecutor<CreateInstituteCommand, InstituteEntity>
	= buildCommandExecutor(createInstituteInstruction);
export const patchInstitute: CommandExecutor<PatchInstituteCommand, InstituteEntity>
	= buildCommandExecutor(patchInstituteInstruction);
export const deleteInstitute: CommandExecutor<DeleteInstituteCommand, void>
	= buildCommandExecutor(deleteInstituteInstruction);