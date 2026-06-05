import z from "zod";
import RoomApi from "../api/RoomInterface.js";
import { buildinstructions, buildCommandExecutor, type Command, type CommandExecutor } from "../commands.js";

const getRoomInstruction    = buildinstructions(RoomApi.get, 200 as const);
const listRoomInstruction   = buildinstructions(RoomApi.list, 200 as const);
const createRoomInstruction = buildinstructions(RoomApi.create, 201 as const);
const patchRoomInstruction  = buildinstructions(RoomApi.patch, 200 as const);
const deleteRoomInstruction = buildinstructions(RoomApi.remove, 204 as const);

export type RoomEntity = z.infer<typeof RoomApi.schema>;

export type GetRoomPath = z.infer<typeof RoomApi.get.input>["path"];
export type ListRoomsQuery = z.infer<typeof RoomApi.list.input>["query"];
export type CreateRoomBody = z.infer<typeof RoomApi.create.input>["body"];
export type PatchRoomPath = z.infer<typeof RoomApi.patch.input>["path"];
export type PatchRoomBody = z.infer<typeof RoomApi.patch.input>["body"];
export type DeleteRoomPath = z.infer<typeof RoomApi.remove.input>["path"];

export type GetRoomCommand = Command<GetRoomPath, never, never>;
export type ListRoomsCommand = Command<never, ListRoomsQuery, never>;
export type CreateRoomCommand = Command<never, never, CreateRoomBody>;
export type PatchRoomCommand = Command<PatchRoomPath, never, PatchRoomBody>;
export type DeleteRoomCommand = Command<DeleteRoomPath, never, never>;

export const getRoom: CommandExecutor<GetRoomCommand, RoomEntity>
	= buildCommandExecutor(getRoomInstruction);
export const listRooms: CommandExecutor<ListRoomsCommand, RoomEntity[]>
	= buildCommandExecutor(listRoomInstruction);
export const createRoom: CommandExecutor<CreateRoomCommand, RoomEntity>
	= buildCommandExecutor(createRoomInstruction);
export const patchRoom: CommandExecutor<PatchRoomCommand, RoomEntity>
	= buildCommandExecutor(patchRoomInstruction);
export const deleteRoom: CommandExecutor<DeleteRoomCommand, void>
	= buildCommandExecutor(deleteRoomInstruction);