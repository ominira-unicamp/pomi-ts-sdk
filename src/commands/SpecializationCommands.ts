import z from "zod";
import SpecializationApi from "../api/SpecializationInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";

const getSpecializationInstruction    = buildinstructions(SpecializationApi.get, 200 as const);
const listSpecializationInstruction   = buildinstructions(SpecializationApi.list, 200 as const);
const createSpecializationInstruction = buildinstructions(SpecializationApi.create, 201 as const);
const patchSpecializationInstruction  = buildinstructions(SpecializationApi.patch, 200 as const);
const deleteSpecializationInstruction = buildinstructions(SpecializationApi.remove, 204 as const);

export type SpecializationEntity = z.infer<typeof SpecializationApi.schema>;

export type GetSpecializationPath = z.infer<typeof SpecializationApi.get.input>["path"];
export type ListSpecializationsQuery = z.infer<typeof SpecializationApi.list.input>["query"];
export type CreateSpecializationBody = z.infer<typeof SpecializationApi.create.input>["body"];
export type PatchSpecializationPath = z.infer<typeof SpecializationApi.patch.input>["path"];
export type PatchSpecializationBody = z.infer<typeof SpecializationApi.patch.input>["body"];
export type DeleteSpecializationPath = z.infer<typeof SpecializationApi.remove.input>["path"];

export type GetSpecializationCommand = Command<GetSpecializationPath, never, never>;
export type ListSpecializationsCommand = Command<never, ListSpecializationsQuery, never>;
export type CreateSpecializationCommand = Command<never, never, CreateSpecializationBody>;
export type PatchSpecializationCommand = Command<PatchSpecializationPath, never, PatchSpecializationBody>;
export type DeleteSpecializationCommand = Command<DeleteSpecializationPath, never, never>;

export const getSpecialization: CommandExecutor<GetSpecializationCommand, SpecializationEntity>
	= buildCommandExecutor(getSpecializationInstruction);
export const listSpecializations: CommandExecutor<ListSpecializationsCommand, SpecializationEntity[]>
	= buildCommandExecutor(listSpecializationInstruction);
export const createSpecialization: CommandExecutor<CreateSpecializationCommand, SpecializationEntity>
	= buildCommandExecutor(createSpecializationInstruction);
export const patchSpecialization: CommandExecutor<PatchSpecializationCommand, SpecializationEntity>
	= buildCommandExecutor(patchSpecializationInstruction);
export const deleteSpecialization: CommandExecutor<DeleteSpecializationCommand, void>
	= buildCommandExecutor(deleteSpecializationInstruction);