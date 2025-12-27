// Client
import createClient from "openapi-fetch";
import type { paths } from "./openapi/specs.js";
import type { ClientType } from "./client.js";

// Services
import ClassScheduleService from "./services/classScheduleService.js";
import ClassService from "./services/classService.js";
import CourseService from "./services/courseService.js";
import CourseOfferingService from "./services/courseOfferingService.js";
import InstituteService from "./services/instituteService.js";
import ProfessorService from "./services/professorService.js";
import StudyPeriodService from "./services/studyPeriodService.js";

// Types
export type { ClassScheduleListFilters } from "./services/classScheduleService.js";
export type { ClassListFilters } from "./services/classService.js";
export type {
	ClassEntitySchema,
	ClassScheduleEntitySchema,
	CourseEntitySchema,
	CourseOfferingEntitySchema,
	InstituteEntitySchema,
	ProfessorEntitySchema,
	RoomEntitySchema,
	StudyPeriodEntitySchema,
} from "./models.js";
export type { PomiError } from "./errors.js";
export type { Result } from "./result.js";
export { ResultOK, ResultErr } from "./result.js";

export type PomiClientOptions = {
	baseUrl: string;
};

class PomiClient {
	private client: ClientType;

	institutes: InstituteService;
	courseOfferings: CourseOfferingService;
	courses: CourseService;
	classes: ClassService;
	classSchedules: ClassScheduleService;
	professors: ProfessorService;
	studyPeriods: StudyPeriodService;

	constructor(options: PomiClientOptions) {
		this.client = createClient<paths>({ baseUrl: options.baseUrl });

		this.institutes = new InstituteService(this.client);
		this.courseOfferings = new CourseOfferingService(this.client);
		this.courses = new CourseService(this.client);
		this.classes = new ClassService(this.client);
		this.classSchedules = new ClassScheduleService(this.client);
		this.professors = new ProfessorService(this.client);
		this.studyPeriods = new StudyPeriodService(this.client);
	}
}

export { PomiClient };
export default PomiClient;

