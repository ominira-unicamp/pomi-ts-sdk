import z from "zod";
import ClassScheduleApi from "../api/ClassScheduleInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";
import type { Paginated } from "../pagination.js";

const getClassScheduleInstruction    = buildinstructions(ClassScheduleApi.get, 200 as const);
const listClassScheduleInstruction   = buildinstructions(ClassScheduleApi.list, 200 as const);
const createClassScheduleInstruction = buildinstructions(ClassScheduleApi.create, 201 as const);
const patchClassScheduleInstruction  = buildinstructions(ClassScheduleApi.patch, 200 as const);
const deleteClassScheduleInstruction = buildinstructions(ClassScheduleApi.remove, 204 as const);

export type ClassScheduleEntity = z.infer<typeof ClassScheduleApi.schema>;
export type PaginatedClassScheduleEntity = Paginated<ClassScheduleEntity>;

export type GetClassSchedulePath = z.infer<typeof ClassScheduleApi.get.input>["path"];
export type ListClassSchedulesQuery = z.infer<typeof ClassScheduleApi.list.input>["query"];
export type CreateClassScheduleBody = z.infer<typeof ClassScheduleApi.create.input>["body"];
export type PatchClassSchedulePath = z.infer<typeof ClassScheduleApi.patch.input>["path"];
export type PatchClassScheduleBody = z.infer<typeof ClassScheduleApi.patch.input>["body"];
export type DeleteClassSchedulePath = z.infer<typeof ClassScheduleApi.remove.input>["path"];

export type GetClassScheduleCommand = Command<GetClassSchedulePath, never, never>;
export type ListClassSchedulesCommand = Command<never, ListClassSchedulesQuery, never>;
export type CreateClassScheduleCommand = Command<never, never, CreateClassScheduleBody>;
export type PatchClassScheduleCommand = Command<PatchClassSchedulePath, never, PatchClassScheduleBody>;
export type DeleteClassScheduleCommand = Command<DeleteClassSchedulePath, never, never>;

export const getClassSchedule: CommandExecutor<GetClassScheduleCommand, ClassScheduleEntity>
    = buildCommandExecutor(getClassScheduleInstruction);
export const listClassSchedules: CommandExecutor<ListClassSchedulesCommand, PaginatedClassScheduleEntity>
    = buildCommandExecutor(listClassScheduleInstruction);
export const createClassSchedule: CommandExecutor<CreateClassScheduleCommand, ClassScheduleEntity>
    = buildCommandExecutor(createClassScheduleInstruction);
export const patchClassSchedule: CommandExecutor<PatchClassScheduleCommand, ClassScheduleEntity>
    = buildCommandExecutor(patchClassScheduleInstruction);
export const deleteClassSchedule: CommandExecutor<DeleteClassScheduleCommand, void>
    = buildCommandExecutor(deleteClassScheduleInstruction);