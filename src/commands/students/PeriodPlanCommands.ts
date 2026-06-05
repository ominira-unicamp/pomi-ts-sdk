import z from "zod";
import PeriodPlanApi from "../../api/students/PeriodPlanInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../../commands.js";

const getPeriodPlanInstruction    = buildinstructions(PeriodPlanApi.get, 200 as const);
const listPeriodPlanInstruction   = buildinstructions(PeriodPlanApi.list, 200 as const);
const createPeriodPlanInstruction = buildinstructions(PeriodPlanApi.create, 201 as const);
const patchPeriodPlanInstruction  = buildinstructions(PeriodPlanApi.patch, 200 as const);
const deletePeriodPlanInstruction = buildinstructions(PeriodPlanApi.remove, 204 as const);

export type PeriodPlanEntity = z.infer<typeof PeriodPlanApi.schema>;
export type GetPeriodPlanPath = z.infer<typeof PeriodPlanApi.get.input>["path"];
export type ListPeriodPlansPath = z.infer<typeof PeriodPlanApi.list.input>["path"];
export type CreatePeriodPlanPath = z.infer<typeof PeriodPlanApi.create.input>["path"];
export type CreatePeriodPlanBody = z.infer<typeof PeriodPlanApi.create.input>["body"];
export type PatchPeriodPlanPath = z.infer<typeof PeriodPlanApi.patch.input>["path"];
export type PatchPeriodPlanBody = z.infer<typeof PeriodPlanApi.patch.input>["body"];
export type DeletePeriodPlanPath = z.infer<typeof PeriodPlanApi.remove.input>["path"];

export type GetPeriodPlanCommand = Command<GetPeriodPlanPath, never, never>;
export type ListPeriodPlansCommand = Command<ListPeriodPlansPath, never, never>;
export type CreatePeriodPlanCommand = Command<CreatePeriodPlanPath, never, CreatePeriodPlanBody>;
export type PatchPeriodPlanCommand = Command<PatchPeriodPlanPath, never, PatchPeriodPlanBody>;
export type DeletePeriodPlanCommand = Command<DeletePeriodPlanPath, never, never>;

export const getPeriodPlan: CommandExecutor<GetPeriodPlanCommand, PeriodPlanEntity>
	= buildCommandExecutor(getPeriodPlanInstruction);
export const listPeriodPlans: CommandExecutor<ListPeriodPlansCommand, PeriodPlanEntity[]>
	= buildCommandExecutor(listPeriodPlanInstruction);
export const createPeriodPlan: CommandExecutor<CreatePeriodPlanCommand, PeriodPlanEntity>
	= buildCommandExecutor(createPeriodPlanInstruction);
export const patchPeriodPlan: CommandExecutor<PatchPeriodPlanCommand, PeriodPlanEntity>
	= buildCommandExecutor(patchPeriodPlanInstruction);
export const deletePeriodPlan: CommandExecutor<DeletePeriodPlanCommand, void>
	= buildCommandExecutor(deletePeriodPlanInstruction);