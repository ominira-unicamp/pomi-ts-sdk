import type { AuthData, Fetcher } from "./client.js";
import {
  // Catalog
  createCatalog, deleteCatalog, getCatalog, listCatalogs, patchCatalog,
  type CreateCatalogCommand, type DeleteCatalogCommand, type GetCatalogCommand,
  type ListCatalogsCommand, type PatchCatalogCommand,

  // CatalogProgram
  createCatalogProgram, deleteCatalogProgram, getCatalogProgram, listCatalogPrograms, patchCatalogProgram,
  type CreateCatalogProgramCommand, type DeleteCatalogProgramCommand, type GetCatalogProgramCommand,
  type ListCatalogProgramsCommand, type PatchCatalogProgramCommand,

  // Class
  createClass, deleteClass, getClass, listClasss, patchClass,
  type CreateClassCommand, type DeleteClassCommand, type GetClassCommand,
  type ListClasssCommand, type PatchClassCommand,

  // Course
  createCourse, deleteCourse, getCourse, listCourses, patchCourse,
  type CreateCourseCommand, type DeleteCourseCommand, type GetCourseCommand,
  type ListCoursesCommand, type PatchCourseCommand,

  // Institute
  createInstitute, deleteInstitute, getInstitute, listInstitutes, patchInstitute,
  type CreateInstituteCommand, type DeleteInstituteCommand, type GetInstituteCommand,
  type ListInstitutesCommand, type PatchInstituteCommand,

  // Language
  createLanguage, deleteLanguage, getLanguage, listLanguages, patchLanguage,
  type CreateLanguageCommand, type DeleteLanguageCommand, type GetLanguageCommand,
  type ListLanguagesCommand, type PatchLanguageCommand,

  // Professor
  createProfessor, deleteProfessor, getProfessor, listProfessors, patchProfessor,
  type CreateProfessorCommand, type DeleteProfessorCommand, type GetProfessorCommand,
  type ListProfessorsCommand, type PatchProfessorCommand,

  // Program
  createProgram, deleteProgram, getProgram, listPrograms, patchProgram,
  type CreateProgramCommand, type DeleteProgramCommand, type GetProgramCommand,
  type ListProgramsCommand, type PatchProgramCommand,

  // Room
  createRoom, deleteRoom, getRoom, listRooms, patchRoom,
  type CreateRoomCommand, type DeleteRoomCommand, type GetRoomCommand,
  type ListRoomsCommand, type PatchRoomCommand,

  // Specialization
  createSpecialization, deleteSpecialization, getSpecialization, listSpecializations, patchSpecialization,
  type CreateSpecializationCommand, type DeleteSpecializationCommand, type GetSpecializationCommand,
  type ListSpecializationsCommand, type PatchSpecializationCommand,

  // StudyPeriod
  createStudyPeriod, deleteStudyPeriod, getStudyPeriod, listStudyPeriods, patchStudyPeriod,
  type CreateStudyPeriodCommand, type DeleteStudyPeriodCommand, type GetStudyPeriodCommand,
  type ListStudyPeriodsCommand, type PatchStudyPeriodCommand,

  // Curriculum (students)
  createCurriculum, deleteCurriculum, getCurriculum, listCurriculums, patchCurriculum,
  type CreateCurriculumCommand, type DeleteCurriculumCommand, type GetCurriculumCommand,
  type ListCurriculumsCommand, type PatchCurriculumCommand,

  // PeriodPlan (students)
  createPeriodPlan, deletePeriodPlan, getPeriodPlan, listPeriodPlans, patchPeriodPlan,
  type CreatePeriodPlanCommand, type DeletePeriodPlanCommand, type GetPeriodPlanCommand,
  type ListPeriodPlansCommand, type PatchPeriodPlanCommand,

  // Student (students)
  createStudent, deleteStudent, getStudent, listStudents, patchStudent,
  type CreateStudentCommand, type DeleteStudentCommand, type GetStudentCommand,
  type ListStudentsCommand, type PatchStudentCommand,

  // StudentCourse (students)
  createStudentCourse, deleteStudentCourse, getStudentCourse, listStudentCourses, patchStudentCourse,
  type CreateStudentCourseCommand, type DeleteStudentCourseCommand, type GetStudentCourseCommand,
  type ListStudentCoursesCommand, type PatchStudentCourseCommand,
} from "./index.js";

export type PomiClientOptions = {
  baseUrl: string;
  accessToken?: string;
};

// =============================================================================
// Client classes (CRUD wrappers)
// =============================================================================

export class CatalogClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetCatalogCommand) => getCatalog(this.pomiClient.fetch, command);
  list = (command: ListCatalogsCommand) => listCatalogs(this.pomiClient.fetch, command);
  create = (command: CreateCatalogCommand) => createCatalog(this.pomiClient.fetch, command);
  patch = (command: PatchCatalogCommand) => patchCatalog(this.pomiClient.fetch, command);
  delete = (command: DeleteCatalogCommand) => deleteCatalog(this.pomiClient.fetch, command);
}

export class CatalogProgramClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetCatalogProgramCommand) => getCatalogProgram(this.pomiClient.fetch, command);
  list = (command: ListCatalogProgramsCommand) => listCatalogPrograms(this.pomiClient.fetch, command);
  create = (command: CreateCatalogProgramCommand) => createCatalogProgram(this.pomiClient.fetch, command);
  patch = (command: PatchCatalogProgramCommand) => patchCatalogProgram(this.pomiClient.fetch, command);
  delete = (command: DeleteCatalogProgramCommand) => deleteCatalogProgram(this.pomiClient.fetch, command);
}

export class ClassClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetClassCommand) => getClass(this.pomiClient.fetch, command);
  list = (command: ListClasssCommand) => listClasss(this.pomiClient.fetch, command);
  create = (command: CreateClassCommand) => createClass(this.pomiClient.fetch, command);
  patch = (command: PatchClassCommand) => patchClass(this.pomiClient.fetch, command);
  delete = (command: DeleteClassCommand) => deleteClass(this.pomiClient.fetch, command);
}

export class CourseClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetCourseCommand) => getCourse(this.pomiClient.fetch, command);
  list = (command: ListCoursesCommand) => listCourses(this.pomiClient.fetch, command);
  create = (command: CreateCourseCommand) => createCourse(this.pomiClient.fetch, command);
  patch = (command: PatchCourseCommand) => patchCourse(this.pomiClient.fetch, command);
  delete = (command: DeleteCourseCommand) => deleteCourse(this.pomiClient.fetch, command);
}

export class InstituteClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetInstituteCommand) => getInstitute(this.pomiClient.fetch, command);
  list = (command: ListInstitutesCommand) => listInstitutes(this.pomiClient.fetch, command);
  create = (command: CreateInstituteCommand) => createInstitute(this.pomiClient.fetch, command);
  patch = (command: PatchInstituteCommand) => patchInstitute(this.pomiClient.fetch, command);
  delete = (command: DeleteInstituteCommand) => deleteInstitute(this.pomiClient.fetch, command);
}

export class LanguageClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetLanguageCommand) => getLanguage(this.pomiClient.fetch, command);
  list = (command: ListLanguagesCommand) => listLanguages(this.pomiClient.fetch, command);
  create = (command: CreateLanguageCommand) => createLanguage(this.pomiClient.fetch, command);
  patch = (command: PatchLanguageCommand) => patchLanguage(this.pomiClient.fetch, command);
  delete = (command: DeleteLanguageCommand) => deleteLanguage(this.pomiClient.fetch, command);
}

export class ProfessorClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetProfessorCommand) => getProfessor(this.pomiClient.fetch, command);
  list = (command: ListProfessorsCommand) => listProfessors(this.pomiClient.fetch, command);
  create = (command: CreateProfessorCommand) => createProfessor(this.pomiClient.fetch, command);
  patch = (command: PatchProfessorCommand) => patchProfessor(this.pomiClient.fetch, command);
  delete = (command: DeleteProfessorCommand) => deleteProfessor(this.pomiClient.fetch, command);
}

export class ProgramClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetProgramCommand) => getProgram(this.pomiClient.fetch, command);
  list = (command: ListProgramsCommand) => listPrograms(this.pomiClient.fetch, command);
  create = (command: CreateProgramCommand) => createProgram(this.pomiClient.fetch, command);
  patch = (command: PatchProgramCommand) => patchProgram(this.pomiClient.fetch, command);
  delete = (command: DeleteProgramCommand) => deleteProgram(this.pomiClient.fetch, command);
}

export class RoomClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetRoomCommand) => getRoom(this.pomiClient.fetch, command);
  list = (command: ListRoomsCommand) => listRooms(this.pomiClient.fetch, command);
  create = (command: CreateRoomCommand) => createRoom(this.pomiClient.fetch, command);
  patch = (command: PatchRoomCommand) => patchRoom(this.pomiClient.fetch, command);
  delete = (command: DeleteRoomCommand) => deleteRoom(this.pomiClient.fetch, command);
}

export class SpecializationClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetSpecializationCommand) => getSpecialization(this.pomiClient.fetch, command);
  list = (command: ListSpecializationsCommand) => listSpecializations(this.pomiClient.fetch, command);
  create = (command: CreateSpecializationCommand) => createSpecialization(this.pomiClient.fetch, command);
  patch = (command: PatchSpecializationCommand) => patchSpecialization(this.pomiClient.fetch, command);
  delete = (command: DeleteSpecializationCommand) => deleteSpecialization(this.pomiClient.fetch, command);
}

export class StudyPeriodClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetStudyPeriodCommand) => getStudyPeriod(this.pomiClient.fetch, command);
  list = (command: ListStudyPeriodsCommand) => listStudyPeriods(this.pomiClient.fetch, command);
  create = (command: CreateStudyPeriodCommand) => createStudyPeriod(this.pomiClient.fetch, command);
  patch = (command: PatchStudyPeriodCommand) => patchStudyPeriod(this.pomiClient.fetch, command);
  delete = (command: DeleteStudyPeriodCommand) => deleteStudyPeriod(this.pomiClient.fetch, command);
}

export class CurriculumClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetCurriculumCommand) => getCurriculum(this.pomiClient.fetch, command);
  list = (command: ListCurriculumsCommand) => listCurriculums(this.pomiClient.fetch, command);
  create = (command: CreateCurriculumCommand) => createCurriculum(this.pomiClient.fetch, command);
  patch = (command: PatchCurriculumCommand) => patchCurriculum(this.pomiClient.fetch, command);
  delete = (command: DeleteCurriculumCommand) => deleteCurriculum(this.pomiClient.fetch, command);
}

export class PeriodPlanClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetPeriodPlanCommand) => getPeriodPlan(this.pomiClient.fetch, command);
  list = (command: ListPeriodPlansCommand) => listPeriodPlans(this.pomiClient.fetch, command);
  create = (command: CreatePeriodPlanCommand) => createPeriodPlan(this.pomiClient.fetch, command);
  patch = (command: PatchPeriodPlanCommand) => patchPeriodPlan(this.pomiClient.fetch, command);
  delete = (command: DeletePeriodPlanCommand) => deletePeriodPlan(this.pomiClient.fetch, command);
}

export class StudentClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetStudentCommand) => getStudent(this.pomiClient.fetch, command);
  list = (command: ListStudentsCommand) => listStudents(this.pomiClient.fetch, command);
  create = (command: CreateStudentCommand) => createStudent(this.pomiClient.fetch, command);
  patch = (command: PatchStudentCommand) => patchStudent(this.pomiClient.fetch, command);
  delete = (command: DeleteStudentCommand) => deleteStudent(this.pomiClient.fetch, command);
}

export class StudentCourseClient {
  constructor(private pomiClient: PomiClient) {}
  get = (command: GetStudentCourseCommand) => getStudentCourse(this.pomiClient.fetch, command);
  list = (command: ListStudentCoursesCommand) => listStudentCourses(this.pomiClient.fetch, command);
  create = (command: CreateStudentCourseCommand) => createStudentCourse(this.pomiClient.fetch, command);
  patch = (command: PatchStudentCourseCommand) => patchStudentCourse(this.pomiClient.fetch, command);
  delete = (command: DeleteStudentCourseCommand) => deleteStudentCourse(this.pomiClient.fetch, command);
}

// =============================================================================
// PomiClient (main entry point)
// =============================================================================

export class PomiClient {
  private fetcher: Fetcher;
  private authData: AuthData;
  private baseUrl: string;

  // CRUD clients
  public readonly catalogs: CatalogClient;
  public readonly catalogPrograms: CatalogProgramClient;
  public readonly classes: ClassClient;
  public readonly courses: CourseClient;
  public readonly institutes: InstituteClient;
  public readonly languages: LanguageClient;
  public readonly professors: ProfessorClient;
  public readonly programs: ProgramClient;
  public readonly rooms: RoomClient;
  public readonly specializations: SpecializationClient;
  public readonly studyPeriods: StudyPeriodClient;
  public readonly curriculums: CurriculumClient;
  public readonly periodPlans: PeriodPlanClient;
  public readonly students: StudentClient;
  public readonly studentCourses: StudentCourseClient;

  constructor(options: PomiClientOptions) {
    this.baseUrl = options.baseUrl.replace(/\/+$/, "");
    this.authData = { accessToken: options.accessToken };

    this.fetcher = (input, init) => {
      const url =
        typeof input === "string" || input instanceof URL
          ? new URL(input.toString(), this.baseUrl)
          : new URL(String(input), this.baseUrl);

      const headers = new Headers(init?.headers);
      if (this.authData.accessToken && !headers.has("Authorization")) {
        headers.set("Authorization", `Bearer ${this.authData.accessToken}`);
      }

      return fetch(url.toString(), {
        ...init,
        headers,
      });
    };

    // Initialize clients

    this.catalogs = new CatalogClient(this);
    this.catalogPrograms = new CatalogProgramClient(this);
    this.classes = new ClassClient(this);
    this.courses = new CourseClient(this);
    this.institutes = new InstituteClient(this);
    this.languages = new LanguageClient(this);
    this.professors = new ProfessorClient(this);
    this.programs = new ProgramClient(this);
    this.rooms = new RoomClient(this);
    this.specializations = new SpecializationClient(this);
    this.studyPeriods = new StudyPeriodClient(this);
    this.curriculums = new CurriculumClient(this);
    this.periodPlans = new PeriodPlanClient(this);
    this.students = new StudentClient(this);
    this.studentCourses = new StudentCourseClient(this);
  }

  get fetch(): Fetcher {
    return this.fetcher;
  }

  get auth(): AuthData {
    return this.authData;
  }
}