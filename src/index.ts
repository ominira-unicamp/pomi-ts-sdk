import createClient from "openapi-fetch";
import type { paths } from "./openapi/specs";
import ClassScheduleService from "./services/classScheduleService";
const client = createClient<paths>({ baseUrl: "http://localhost:3000/" });

const data = await new ClassScheduleService(client).get(1);
console.log(data);

