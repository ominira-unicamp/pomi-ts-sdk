import z from "zod";
import StudyPeriodApi from "../api/StudyPeriodInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";

const getStudyPeriodInstruction    = buildinstructions(StudyPeriodApi.get, 200 as const);
const listStudyPeriodInstruction   = buildinstructions(StudyPeriodApi.list, 200 as const);
const createStudyPeriodInstruction = buildinstructions(StudyPeriodApi.create, 201 as const);
const patchStudyPeriodInstruction  = buildinstructions(StudyPeriodApi.patch, 200 as const);
const deleteStudyPeriodInstruction = buildinstructions(StudyPeriodApi.remove, 204 as const);

export type StudyPeriodEntity = z.infer<typeof StudyPeriodApi.schema>;

export type GetStudyPeriodPath = z.infer<typeof StudyPeriodApi.get.input>["path"];
export type ListStudyPeriodsQuery = z.infer<typeof StudyPeriodApi.list.input>["query"];
export type CreateStudyPeriodBody = z.infer<typeof StudyPeriodApi.create.input>["body"];
export type PatchStudyPeriodPath = z.infer<typeof StudyPeriodApi.patch.input>["path"];
export type PatchStudyPeriodBody = z.infer<typeof StudyPeriodApi.patch.input>["body"];
export type DeleteStudyPeriodPath = z.infer<typeof StudyPeriodApi.remove.input>["path"];

export type GetStudyPeriodCommand = Command<GetStudyPeriodPath, never, never>;
export type ListStudyPeriodsCommand = Command<never, ListStudyPeriodsQuery, never>;
export type CreateStudyPeriodCommand = Command<never, never, CreateStudyPeriodBody>;
export type PatchStudyPeriodCommand = Command<PatchStudyPeriodPath, never, PatchStudyPeriodBody>;
export type DeleteStudyPeriodCommand = Command<DeleteStudyPeriodPath, never, never>;

export const getStudyPeriod: CommandExecutor<GetStudyPeriodCommand, StudyPeriodEntity>
	= buildCommandExecutor(getStudyPeriodInstruction);
export const listStudyPeriods: CommandExecutor<ListStudyPeriodsCommand, StudyPeriodEntity[]>
	= buildCommandExecutor(listStudyPeriodInstruction);
export const createStudyPeriod: CommandExecutor<CreateStudyPeriodCommand, StudyPeriodEntity>
	= buildCommandExecutor(createStudyPeriodInstruction);
export const patchStudyPeriod: CommandExecutor<PatchStudyPeriodCommand, StudyPeriodEntity>
	= buildCommandExecutor(patchStudyPeriodInstruction);
export const deleteStudyPeriod: CommandExecutor<DeleteStudyPeriodCommand, void>
	= buildCommandExecutor(deleteStudyPeriodInstruction);