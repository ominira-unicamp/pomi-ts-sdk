import createClient from "openapi-fetch";
import type { ClientType } from "./client.js";
import ClassScheduleService from "./services/classScheduleService.js";
import ClassService from "./services/classService.js";
import CourseService from "./services/courseService.js";
import InstituteService from "./services/instituteService.js";
import ProfessorService from "./services/professorService.js";
import StudyPeriodService from "./services/studyPeriodService.js";
import type { paths } from "./openapi/specs.js";


export type PomiClientOptions = {
	baseUrl: string;
	accessToken?: string;
};

export class PomiClient {
	private client: ClientType;

	readonly institutes: InstituteService;
	readonly courses: CourseService;
	readonly classes: ClassService;
	readonly classSchedules: ClassScheduleService;
	readonly professors: ProfessorService;
	readonly studyPeriods: StudyPeriodService;

	constructor(options: PomiClientOptions) {
		this.client = createClient<paths>({ baseUrl: options.baseUrl });
		
		const authData = { accessToken: options.accessToken };

		if (authData.accessToken) {
			this.client.use({
				onRequest: ({ request }) => {
					request.headers.set("Authorization", `Bearer ${authData.accessToken}`);
				}
			});
		}

		this.institutes = new InstituteService(this.client, authData);
		this.courses = new CourseService(this.client, authData);
		this.classes = new ClassService(this.client, authData);
		this.classSchedules = new ClassScheduleService(this.client, authData);
		this.professors = new ProfessorService(this.client, authData);
		this.studyPeriods = new StudyPeriodService(this.client, authData);
	}
}
