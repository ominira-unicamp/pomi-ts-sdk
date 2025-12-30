import { PomiClient } from "./pomiClient.js";


// =============================================================================
// Type Exports
// =============================================================================


// Entity Types
export type {
	ClassEntitySchema,
	ClassScheduleEntitySchema,
	CourseEntitySchema,
	InstituteEntitySchema,
	ProfessorEntitySchema,
	RoomEntitySchema,
	StudyPeriodEntitySchema,
} from "./models.js";

// Create/Update Schemas
export type { CreateClassScheduleSchema, PatchClassScheduleSchema } from "./services/classScheduleService.js";
export type { CreateClassSchema, PatchClassSchema } from "./services/classService.js";
export type { CreateCourseSchema, PatchCourseSchema } from "./services/courseService.js";
export type { CreateInstituteSchema, PatchInstituteSchema } from "./services/instituteService.js";
export type { CreateProfessorSchema, PatchProfessorSchema } from "./services/professorService.js";
export type { CreateStudyPeriodSchema, PatchStudyPeriodSchema } from "./services/studyPeriodService.js";

// List Filters
export type { ClassScheduleListFilters } from "./services/classScheduleService.js";
export type { ClassListFilters } from "./services/classService.js";
export type { ProfessorListFilters } from "./services/professorService.js";

// Error & Result Types
export type { PomiError } from "./errors.js";
export type { Result } from "./result.js";
export { ResultOK, ResultErr } from "./result.js";

// =============================================================================
// PomiClient
// =============================================================================

export type { PomiClientOptions } from "./pomiClient.js";

export { PomiClient } from "./pomiClient.js";
export default PomiClient;
