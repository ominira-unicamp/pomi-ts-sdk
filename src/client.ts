import type { Client } from "openapi-fetch";
import type { paths } from "./openapi/specs.js";

export type ClientType = Client<paths>;

export type AuthData = {
	accessToken?: string;
};