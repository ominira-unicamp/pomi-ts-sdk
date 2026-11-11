export type { SortDirection, SortInput, SortTerm } from '../../runtime/sorting.js'
import type { listAuthIdentitiesInput, listBotGrantsInput, listBotsInput, listCategoriesInput, listCourseEvaluationSummariesInput, listCourseTagsInput, listCurriculumsInput, listFeedbackReportsInput, listPendingProfessorEvaluationsInput, listPeriodPlansInput, listProfessorEvaluationSummariesInput, listPublicSharedPeriodPlansInput, listStudentCourseAttemptsInput, listStudentsInput, listTagCoursesInput, listTagsInput, listUserAbsencesInput, listUserFeedbackReportsInput, listUserFriendshipsInput, listUserInterestsInput, listUserPeopleInput, listUserSharedPeriodPlansInput } from './operations.js'

export type listAuthIdentitiesSort = NonNullable<listAuthIdentitiesInput['sort']>
export type listBotGrantsSort = NonNullable<listBotGrantsInput['sort']>
export type listBotsSort = NonNullable<listBotsInput['sort']>
export type listCategoriesSort = NonNullable<listCategoriesInput['sort']>
export type listCourseEvaluationSummariesSort = NonNullable<listCourseEvaluationSummariesInput['sort']>
export type listCourseTagsSort = NonNullable<listCourseTagsInput['sort']>
export type listCurriculumsSort = NonNullable<listCurriculumsInput['sort']>
export type listFeedbackReportsSort = NonNullable<listFeedbackReportsInput['sort']>
export type listPendingProfessorEvaluationsSort = NonNullable<listPendingProfessorEvaluationsInput['sort']>
export type listPeriodPlansSort = NonNullable<listPeriodPlansInput['sort']>
export type listProfessorEvaluationSummariesSort = NonNullable<listProfessorEvaluationSummariesInput['sort']>
export type listPublicSharedPeriodPlansSort = NonNullable<listPublicSharedPeriodPlansInput['sort']>
export type listStudentCourseAttemptsSort = NonNullable<listStudentCourseAttemptsInput['sort']>
export type listStudentsSort = NonNullable<listStudentsInput['sort']>
export type listTagCoursesSort = NonNullable<listTagCoursesInput['sort']>
export type listTagsSort = NonNullable<listTagsInput['sort']>
export type listUserAbsencesSort = NonNullable<listUserAbsencesInput['sort']>
export type listUserFeedbackReportsSort = NonNullable<listUserFeedbackReportsInput['sort']>
export type listUserFriendshipsSort = NonNullable<listUserFriendshipsInput['sort']>
export type listUserInterestsSort = NonNullable<listUserInterestsInput['sort']>
export type listUserPeopleSort = NonNullable<listUserPeopleInput['sort']>
export type listUserSharedPeriodPlansSort = NonNullable<listUserSharedPeriodPlansInput['sort']>

export const sortCapabilities = {
    "listAuthIdentities": {
        "version": 1,
        "fields": [
            "id",
            "displayName",
            "email",
            "status"
        ],
        "default": "id:asc"
    },
    "listBotGrants": {
        "version": 1,
        "fields": [
            "createdAt",
            "capability",
            "botDisplayName"
        ],
        "default": "createdAt:desc"
    },
    "listBots": {
        "version": 1,
        "fields": [
            "displayName"
        ],
        "default": "displayName:asc"
    },
    "listCategories": {
        "version": 1,
        "fields": [
            "name"
        ],
        "default": "name:asc"
    },
    "listCourseEvaluationSummaries": {
        "version": 1,
        "fields": [
            "course.code",
            "course.name",
            "responseCount",
            "wouldTakeAgain",
            "fairness",
            "clarity",
            "difficulty"
        ],
        "default": "course.code:asc"
    },
    "listCourseTags": {
        "version": 1,
        "fields": [
            "name",
            "categoryId"
        ],
        "default": "name:asc"
    },
    "listCurriculums": {
        "version": 1,
        "fields": [
            "isFavorite",
            "updatedAt",
            "name"
        ],
        "default": "isFavorite:desc,updatedAt:desc"
    },
    "listFeedbackReports": {
        "version": 1,
        "fields": [
            "createdAt",
            "updatedAt",
            "status",
            "kind",
            "title"
        ],
        "default": "createdAt:desc"
    },
    "listPendingProfessorEvaluations": {
        "version": 1,
        "fields": [
            "courseCode",
            "courseName",
            "classCode",
            "professorName"
        ],
        "default": "courseCode:asc,classCode:asc,professorName:asc"
    },
    "listPeriodPlans": {
        "version": 1,
        "fields": [
            "updatedAt",
            "name",
            "studyPeriodYear",
            "studyPeriodYearPeriod",
            "visibility"
        ],
        "default": "updatedAt:desc"
    },
    "listProfessorEvaluationSummaries": {
        "version": 1,
        "fields": [
            "professor.name",
            "responseCount",
            "wouldTakeAgain",
            "fairness",
            "clarity",
            "difficulty"
        ],
        "default": "professor.name:asc"
    },
    "listPublicSharedPeriodPlans": {
        "version": 1,
        "fields": [
            "updatedAt",
            "name",
            "studyPeriodYear"
        ],
        "default": "updatedAt:desc"
    },
    "listStudentCourseAttempts": {
        "version": 1,
        "fields": [
            "createdAt",
            "updatedAt",
            "courseCode",
            "status",
            "grade"
        ],
        "default": "createdAt:desc"
    },
    "listStudents": {
        "version": 1,
        "fields": [
            "id",
            "ra",
            "name",
            "entryYear"
        ],
        "default": "id:asc"
    },
    "listTagCourses": {
        "version": 1,
        "fields": [
            "code",
            "name",
            "credits"
        ],
        "default": "code:asc"
    },
    "listTags": {
        "version": 1,
        "fields": [
            "name",
            "categoryId"
        ],
        "default": "name:asc"
    },
    "listUserAbsences": {
        "version": 1,
        "fields": [
            "date",
            "courseCode",
            "classCode",
            "start",
            "createdAt"
        ],
        "default": "date:desc"
    },
    "listUserFeedbackReports": {
        "version": 1,
        "fields": [
            "createdAt",
            "updatedAt",
            "status",
            "kind",
            "title"
        ],
        "default": "createdAt:desc"
    },
    "listUserFriendships": {
        "version": 1,
        "fields": [
            "updatedAt",
            "status"
        ],
        "default": "updatedAt:desc"
    },
    "listUserInterests": {
        "version": 1,
        "fields": [
            "name"
        ],
        "default": "name:asc"
    },
    "listUserPeople": {
        "version": 1,
        "fields": [
            "displayName"
        ],
        "default": "displayName:asc"
    },
    "listUserSharedPeriodPlans": {
        "version": 1,
        "fields": [
            "updatedAt",
            "name",
            "studyPeriodYear"
        ],
        "default": "updatedAt:desc"
    }
} as const
