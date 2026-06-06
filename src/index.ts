import { PomiClient } from "./pomiClient.js";

// =============================================================================
// Type Exports
// =============================================================================

export type {
	CatalogEntity,
	GetCatalogPath,
	ListCatalogsQuery,
	CreateCatalogBody,
	PatchCatalogPath,
	PatchCatalogBody,
	DeleteCatalogPath,
	GetCatalogCommand,
	ListCatalogsCommand,
	CreateCatalogCommand,
	PatchCatalogCommand,
	DeleteCatalogCommand
} from "./commands/CatalogCommands.js";

export type {
	CatalogProgramEntity,
	GetCatalogProgramPath,
	ListCatalogProgramsQuery,
	CreateCatalogProgramBody,
	PatchCatalogProgramPath,
	PatchCatalogProgramBody,
	DeleteCatalogProgramPath,
	GetCatalogProgramCommand,
	ListCatalogProgramsCommand,
	CreateCatalogProgramCommand,
	PatchCatalogProgramCommand,
	DeleteCatalogProgramCommand
} from "./commands/CatalogProgramCommands.js";

export type {
	ClassEntity,
	GetClassPath,
	ListClasssQuery,
	CreateClassBody,
	PatchClassPath,
	PatchClassBody,
	DeleteClassPath,
	GetClassCommand,
	ListClasssCommand,
	CreateClassCommand,
	PatchClassCommand,
	DeleteClassCommand
} from "./commands/ClassCommands.js";

export type {
	ClassScheduleEntity,
	GetClassSchedulePath,
	ListClassSchedulesQuery,
	CreateClassScheduleBody,
	PatchClassSchedulePath,
	PatchClassScheduleBody,
	DeleteClassSchedulePath,
	GetClassScheduleCommand,
	ListClassSchedulesCommand,
	CreateClassScheduleCommand,
	PatchClassScheduleCommand,
	DeleteClassScheduleCommand
} from "./commands/ClassScheduleCommands.js";

export type {
	CourseEntity,
	GetCoursePath,
	ListCoursesQuery,
	CreateCourseBody,
	PatchCoursePath,
	PatchCourseBody,
	DeleteCoursePath,
	GetCourseCommand,
	ListCoursesCommand,
	CreateCourseCommand,
	PatchCourseCommand,
	DeleteCourseCommand
} from "./commands/CourseCommands.js";

export type {
	InstituteEntity,
	GetInstitutePath,
	ListInstitutesQuery,
	CreateInstituteBody,
	PatchInstitutePath,
	PatchInstituteBody,
	DeleteInstitutePath,
	GetInstituteCommand,
	ListInstitutesCommand,
	CreateInstituteCommand,
	PatchInstituteCommand,
	DeleteInstituteCommand
} from "./commands/InstituteCommands.js";

export type {
	LanguageEntity,
	GetLanguagePath,
	ListLanguagesQuery,
	CreateLanguageBody,
	PatchLanguagePath,
	PatchLanguageBody,
	DeleteLanguagePath,
	GetLanguageCommand,
	ListLanguagesCommand,
	CreateLanguageCommand,
	PatchLanguageCommand,
	DeleteLanguageCommand
} from "./commands/LanguageCommands.js";

export type {
	ProfessorEntity,
	GetProfessorPath,
	ListProfessorsQuery,
	CreateProfessorBody,
	PatchProfessorPath,
	PatchProfessorBody,
	DeleteProfessorPath,
	GetProfessorCommand,
	ListProfessorsCommand,
	CreateProfessorCommand,
	PatchProfessorCommand,
	DeleteProfessorCommand
} from "./commands/ProfessorCommands.js";

export type {
	ProgramEntity,
	GetProgramPath,
	ListProgramsQuery,
	CreateProgramBody,
	PatchProgramPath,
	PatchProgramBody,
	DeleteProgramPath,
	GetProgramCommand,
	ListProgramsCommand,
	CreateProgramCommand,
	PatchProgramCommand,
	DeleteProgramCommand
} from "./commands/ProgramCommands.js";

export type {
	RoomEntity,
	GetRoomPath,
	ListRoomsQuery,
	CreateRoomBody,
	PatchRoomPath,
	PatchRoomBody,
	DeleteRoomPath,
	GetRoomCommand,
	ListRoomsCommand,
	CreateRoomCommand,
	PatchRoomCommand,
	DeleteRoomCommand
} from "./commands/RoomCommands.js";

export type {
	SpecializationEntity,
	GetSpecializationPath,
	ListSpecializationsQuery,
	CreateSpecializationBody,
	PatchSpecializationPath,
	PatchSpecializationBody,
	DeleteSpecializationPath,
	GetSpecializationCommand,
	ListSpecializationsCommand,
	CreateSpecializationCommand,
	PatchSpecializationCommand,
	DeleteSpecializationCommand
} from "./commands/SpecializationCommands.js";

export type {
	StudyPeriodEntity,
	GetStudyPeriodPath,
	ListStudyPeriodsQuery,
	CreateStudyPeriodBody,
	PatchStudyPeriodPath,
	PatchStudyPeriodBody,
	DeleteStudyPeriodPath,
	GetStudyPeriodCommand,
	ListStudyPeriodsCommand,
	CreateStudyPeriodCommand,
	PatchStudyPeriodCommand,
	DeleteStudyPeriodCommand
} from "./commands/StudyPeriodInterface.js";

export type {
	CurriculumEntity,
	GetCurriculumPath,
	ListCurriculaPath,
	CreateCurriculumPath,
	PatchCurriculumPath,
	PatchCurriculumBody,
	DeleteCurriculumPath,
	GetCurriculumCommand,
	ListCurriculaCommand,
	CreateCurriculumCommand,
	PatchCurriculumCommand,
	DeleteCurriculumCommand,
} from "./commands/students/CurriculumCommands.js";

export type {
	PeriodPlanEntity,
	GetPeriodPlanPath,
	ListPeriodPlansPath,
	CreatePeriodPlanPath,
	CreatePeriodPlanBody,
	PatchPeriodPlanPath,
	PatchPeriodPlanBody,
	DeletePeriodPlanPath,
	GetPeriodPlanCommand,
	ListPeriodPlansCommand,
	CreatePeriodPlanCommand,
	PatchPeriodPlanCommand,
	DeletePeriodPlanCommand
} from "./commands/students/PeriodPlanCommands.js";

export type {
	StudentEntity,
	GetStudentPath,
	ListStudentsQuery,
	CreateStudentBody,
	PatchStudentPath,
	PatchStudentBody,
	DeleteStudentPath,
	GetStudentCommand,
	ListStudentsCommand,
	CreateStudentCommand,
	PatchStudentCommand,
	DeleteStudentCommand
} from "./commands/students/StudentCommands.js";

export type {
	StudentCourseEntity,
	GetStudentCoursePath,
	ListStudentCoursesQuery,
	CreateStudentCourseBody,
	PatchStudentCoursePath,
	PatchStudentCourseBody,
	DeleteStudentCoursePath,
	GetStudentCourseCommand,
	ListStudentCoursesCommand,
	CreateStudentCourseCommand,
	PatchStudentCourseCommand,
	DeleteStudentCourseCommand
} from "./commands/students/StudentCourseCommands.js";

// Error & Result Types
export type { PomiError } from "./errors.js";
export type { Result } from "./result.js";
export { ResultOK, ResultErr } from "./result.js";


// =============================================================================
// Commands
// =============================================================================

export type { Command, CommandExecutor } from "./commands.js";

export {
	getCatalog,
	listCatalogs,
	createCatalog,
	patchCatalog,
	deleteCatalog
} from "./commands/CatalogCommands.js";
export {
	getCatalogProgram,
	listCatalogPrograms,
	createCatalogProgram,
	patchCatalogProgram,
	deleteCatalogProgram
} from "./commands/CatalogProgramCommands.js";
export {
	getClass,
	listClasss,
	createClass,
	patchClass,
	deleteClass
} from "./commands/ClassCommands.js";
export {
	getClassSchedule,
	listClassSchedules,
	createClassSchedule,
	patchClassSchedule,
	deleteClassSchedule
} from "./commands/ClassScheduleCommands.js";
export {
	getCourse,
	listCourses,
	createCourse,
	patchCourse,
	deleteCourse
} from "./commands/CourseCommands.js";
export {
	getInstitute,
	listInstitutes,
	createInstitute,
	patchInstitute,
	deleteInstitute
} from "./commands/InstituteCommands.js";
export {
	getLanguage,
	listLanguages,
	createLanguage,
	patchLanguage,
	deleteLanguage
} from "./commands/LanguageCommands.js";
export {
	getProfessor,
	listProfessors,
	createProfessor,
	patchProfessor,
	deleteProfessor
} from "./commands/ProfessorCommands.js";
export {
	getProgram,
	listPrograms,
	createProgram,
	patchProgram,
	deleteProgram
} from "./commands/ProgramCommands.js";
export {
	getRoom,
	listRooms,
	createRoom,
	patchRoom,
	deleteRoom
} from "./commands/RoomCommands.js";
export {
	getSpecialization,
	listSpecializations,
	createSpecialization,
	patchSpecialization,
	deleteSpecialization
} from "./commands/SpecializationCommands.js";
export {
	getStudyPeriod,
	listStudyPeriods,
	createStudyPeriod,
	patchStudyPeriod,
	deleteStudyPeriod
} from "./commands/StudyPeriodInterface.js";
export {
	getCurriculum,
	listCurricula,
	createCurriculum,
	patchCurriculum,
	deleteCurriculum
} from "./commands/students/CurriculumCommands.js";
export {
	getPeriodPlan,
	listPeriodPlans,
	createPeriodPlan,
	patchPeriodPlan,
	deletePeriodPlan
} from "./commands/students/PeriodPlanCommands.js";
export {
	getStudent,
	listStudents,
	createStudent,
	patchStudent,
	deleteStudent
} from "./commands/students/StudentCommands.js";
export {
	getStudentCourse,
	listStudentCourses,
	createStudentCourse,
	patchStudentCourse,
	deleteStudentCourse
} from "./commands/students/StudentCourseCommands.js";

// =============================================================================
// PomiClient
// =============================================================================

export type { PomiClientOptions } from "./pomiClient.js";

export { PomiClient } from "./pomiClient.js";
export default PomiClient;