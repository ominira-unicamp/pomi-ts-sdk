import type { components } from "./openapi/specs.js";

type ClassEntitySchema = components["schemas"]["ClassEntity"];
type ClassScheduleEntitySchema = components["schemas"]["ClassScheduleEntity"];
type CourseEntitySchema = components["schemas"]["CourseEntity"];
type CourseOfferingEntitySchema = components["schemas"]["CourseOfferingEntity"];
type InstituteEntitySchema = components["schemas"]["InstituteEntity"];
type ProfessorEntitySchema = components["schemas"]["ProfessorEntity"];
type RoomEntitySchema = components["schemas"]["RoomEntity"];
type StudyPeriodEntitySchema = components["schemas"]["StudyPeriodEntity"];

export type {
	ClassEntitySchema,
	ClassScheduleEntitySchema,
	CourseEntitySchema,
	CourseOfferingEntitySchema,
	InstituteEntitySchema,
	ProfessorEntitySchema,
	RoomEntitySchema,
	StudyPeriodEntitySchema,
};
