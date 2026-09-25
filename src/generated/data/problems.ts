import type { components } from './openapi.js'

export const problemCatalog = {
    "urn:pomi:problem:invalid-request": {
        "schemaName": "InvalidRequestProblem",
        "type": "urn:pomi:problem:invalid-request",
        "status": 400,
        "title": "Dados da requisição inválidos",
        "hasFields": true
    },
    "urn:pomi:problem:internal-server-error": {
        "schemaName": "InternalServerErrorProblem",
        "type": "urn:pomi:problem:internal-server-error",
        "status": 500,
        "title": "Não foi possível concluir a ação",
        "hasFields": false
    },
    "urn:pomi:problem:inconsistent-resource-state": {
        "schemaName": "InconsistentResourceStateProblem",
        "type": "urn:pomi:problem:inconsistent-resource-state",
        "status": 500,
        "title": "Estado interno do recurso inconsistente",
        "hasFields": false
    },
    "urn:pomi:problem:resource-not-found": {
        "schemaName": "ResourceNotFoundProblem",
        "type": "urn:pomi:problem:resource-not-found",
        "status": 404,
        "title": "Recurso não encontrado",
        "hasFields": false
    }
} as const

export const operationProblemTypes = {
    "getCalendarEvents": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCalendarFeed": [
        "urn:pomi:problem:invalid-request"
    ],
    "getCalendarTags": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCatalogCourses": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCatalogPrograms": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCatalogs": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getClasses": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getClassSchedules": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCoauthors": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCoordinators": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCourseProfessorEvaluationSummary": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCourses": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCurriculumSuggestions": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getDailyMenus": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getDepartments": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getExchangeNotices": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getKeywords": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getLanguages": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getProfessorDataPortalProfiles": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getProfessorPositions": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getProfessors": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getPrograms": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getRooms": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getSpecializations": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getStudyPeriods": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getUnits": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "listCalendarEvents": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCalendarTags": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCatalogCourses": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCatalogPrograms": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCatalogs": [
        "urn:pomi:problem:invalid-request"
    ],
    "listClasses": [
        "urn:pomi:problem:invalid-request"
    ],
    "listClassSchedules": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCoauthors": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCoordinators": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCourseEvaluationSummaries": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCourses": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCurriculumSuggestions": [
        "urn:pomi:problem:invalid-request"
    ],
    "listDailyMenus": [
        "urn:pomi:problem:invalid-request"
    ],
    "listDepartments": [
        "urn:pomi:problem:invalid-request"
    ],
    "listExchangeNotices": [
        "urn:pomi:problem:invalid-request"
    ],
    "listExchangePlaces": [
        "urn:pomi:problem:invalid-request"
    ],
    "listKeywords": [
        "urn:pomi:problem:invalid-request"
    ],
    "listLanguages": [
        "urn:pomi:problem:invalid-request"
    ],
    "listProfessorDataPortalProfiles": [
        "urn:pomi:problem:invalid-request"
    ],
    "listProfessorEvaluationSummaries": [
        "urn:pomi:problem:invalid-request"
    ],
    "listProfessorPositions": [
        "urn:pomi:problem:invalid-request"
    ],
    "listProfessors": [
        "urn:pomi:problem:invalid-request"
    ],
    "listPrograms": [
        "urn:pomi:problem:invalid-request"
    ],
    "listRooms": [
        "urn:pomi:problem:invalid-request"
    ],
    "listSpecializations": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudyPeriods": [
        "urn:pomi:problem:invalid-request"
    ],
    "listUnits": [
        "urn:pomi:problem:invalid-request"
    ]
} as const

export type ProblemType = keyof typeof problemCatalog
export type ProblemByType = {
    "urn:pomi:problem:invalid-request": components['schemas']["InvalidRequestProblem"]
    "urn:pomi:problem:internal-server-error": components['schemas']["InternalServerErrorProblem"]
    "urn:pomi:problem:inconsistent-resource-state": components['schemas']["InconsistentResourceStateProblem"]
    "urn:pomi:problem:resource-not-found": components['schemas']["ResourceNotFoundProblem"]
}
export type AnyProblem = ProblemByType[ProblemType]
export type OperationProblem<Name extends keyof typeof operationProblemTypes> =
    ProblemByType[(typeof operationProblemTypes)[Name][number] & ProblemType]
