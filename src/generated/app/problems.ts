import type { components } from './openapi.js'

export const problemCatalog = {
    "urn:pomi:problem:invalid-request": {
        "schemaName": "InvalidRequestProblem",
        "type": "urn:pomi:problem:invalid-request",
        "status": 400,
        "title": "Dados da requisição inválidos",
        "hasFields": true
    },
    "urn:pomi:problem:unauthenticated": {
        "schemaName": "UnauthenticatedProblem",
        "type": "urn:pomi:problem:unauthenticated",
        "status": 401,
        "title": "Autenticação necessária",
        "hasFields": false
    },
    "urn:pomi:problem:forbidden": {
        "schemaName": "ForbiddenProblem",
        "type": "urn:pomi:problem:forbidden",
        "status": 403,
        "title": "Acesso não permitido",
        "hasFields": false
    },
    "urn:pomi:problem:resource-not-found": {
        "schemaName": "ResourceNotFoundProblem",
        "type": "urn:pomi:problem:resource-not-found",
        "status": 404,
        "title": "Recurso não encontrado",
        "hasFields": false
    },
    "urn:pomi:problem:conflict": {
        "schemaName": "ConflictProblem",
        "type": "urn:pomi:problem:conflict",
        "status": 409,
        "title": "Conflito ao concluir a ação",
        "hasFields": false
    },
    "urn:pomi:problem:payload-too-large": {
        "schemaName": "PayloadTooLargeProblem",
        "type": "urn:pomi:problem:payload-too-large",
        "status": 413,
        "title": "Corpo da requisição muito grande",
        "hasFields": false
    },
    "urn:pomi:problem:unprocessable-entity": {
        "schemaName": "UnprocessableEntityProblem",
        "type": "urn:pomi:problem:unprocessable-entity",
        "status": 422,
        "title": "Não foi possível concluir a ação",
        "hasFields": true
    },
    "urn:pomi:problem:media-upload-rate-limit": {
        "schemaName": "MediaUploadRateLimitProblem",
        "type": "urn:pomi:problem:media-upload-rate-limit",
        "status": 429,
        "title": "Muitos uploads de imagem",
        "hasFields": false
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
    "urn:pomi:problem:service-unavailable": {
        "schemaName": "ServiceUnavailableProblem",
        "type": "urn:pomi:problem:service-unavailable",
        "status": 503,
        "title": "Serviço indisponível",
        "hasFields": false
    },
    "urn:pomi:problem:admin-identity-managed-by-cli": {
        "schemaName": "AdminIdentityManagedByCliProblem",
        "type": "urn:pomi:problem:admin-identity-managed-by-cli",
        "status": 403,
        "title": "Identidade administrada pela linha de comando",
        "hasFields": false
    },
    "urn:pomi:problem:unique-constraint-conflict": {
        "schemaName": "UniqueConstraintConflictProblem",
        "type": "urn:pomi:problem:unique-constraint-conflict",
        "status": 409,
        "title": "Informação já utilizada",
        "hasFields": true
    },
    "urn:pomi:problem:reference-not-found": {
        "schemaName": "ReferenceNotFoundProblem",
        "type": "urn:pomi:problem:reference-not-found",
        "status": 422,
        "title": "Referência não encontrada",
        "hasFields": true
    },
    "urn:pomi:problem:invalid-student-profile": {
        "schemaName": "InvalidStudentProfileProblem",
        "type": "urn:pomi:problem:invalid-student-profile",
        "status": 422,
        "title": "Perfil de aluno inválido",
        "hasFields": true
    },
    "urn:pomi:problem:invalid-curriculum": {
        "schemaName": "InvalidCurriculumProblem",
        "type": "urn:pomi:problem:invalid-curriculum",
        "status": 422,
        "title": "Planejamento curricular inválido",
        "hasFields": true
    },
    "urn:pomi:problem:invalid-period-plan": {
        "schemaName": "InvalidPeriodPlanProblem",
        "type": "urn:pomi:problem:invalid-period-plan",
        "status": 422,
        "title": "Planejamento de semestre inválido",
        "hasFields": true
    },
    "urn:pomi:problem:invalid-professor-evaluation": {
        "schemaName": "InvalidProfessorEvaluationProblem",
        "type": "urn:pomi:problem:invalid-professor-evaluation",
        "status": 422,
        "title": "Avaliação de professor inválida",
        "hasFields": true
    },
    "urn:pomi:problem:invalid-student-course-attempt": {
        "schemaName": "InvalidStudentCourseAttemptProblem",
        "type": "urn:pomi:problem:invalid-student-course-attempt",
        "status": 422,
        "title": "Tentativa de disciplina inválida",
        "hasFields": true
    },
    "urn:pomi:problem:invalid-student-history-import": {
        "schemaName": "InvalidStudentHistoryImportProblem",
        "type": "urn:pomi:problem:invalid-student-history-import",
        "status": 422,
        "title": "Importação de histórico escolar inválida",
        "hasFields": true
    },
    "urn:pomi:problem:invalid-student-absence": {
        "schemaName": "InvalidStudentAbsenceProblem",
        "type": "urn:pomi:problem:invalid-student-absence",
        "status": 422,
        "title": "Falta inválida",
        "hasFields": true
    },
    "urn:pomi:problem:invalid-feedback-report": {
        "schemaName": "InvalidFeedbackReportProblem",
        "type": "urn:pomi:problem:invalid-feedback-report",
        "status": 422,
        "title": "Feedback inválido",
        "hasFields": true
    },
    "urn:pomi:problem:feedback-rate-limit": {
        "schemaName": "FeedbackRateLimitProblem",
        "type": "urn:pomi:problem:feedback-rate-limit",
        "status": 429,
        "title": "Muitos envios de feedback",
        "hasFields": false
    }
} as const

export const operationProblemTypes = {
    "acceptGroupInvitation": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "acceptStudentFriendship": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:unique-constraint-conflict"
    ],
    "addCourseTag": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:reference-not-found"
    ],
    "archiveGroup": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "cancelGroupEvent": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "createAuthUser": [
        "urn:pomi:problem:invalid-request"
    ],
    "createCategory": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unique-constraint-conflict"
    ],
    "createFeedbackReport": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-feedback-report",
        "urn:pomi:problem:feedback-rate-limit"
    ],
    "createGroup": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:reference-not-found"
    ],
    "createGroupEvent": [
        "urn:pomi:problem:invalid-request"
    ],
    "createGroupInvitation": [
        "urn:pomi:problem:invalid-request"
    ],
    "createGroupRole": [
        "urn:pomi:problem:invalid-request"
    ],
    "createStudentAbsences": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unique-constraint-conflict",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-student-absence"
    ],
    "createStudentCourseAttempts": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unique-constraint-conflict",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-student-course-attempt"
    ],
    "createStudentCurricula": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-curriculum"
    ],
    "createStudentFeedbackReport": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-feedback-report"
    ],
    "createStudentFriendship": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:unique-constraint-conflict"
    ],
    "createStudentHistory": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:invalid-student-history-import"
    ],
    "createStudentPeriodPlannings": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-period-plan"
    ],
    "createStudents": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unique-constraint-conflict",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-student-profile"
    ],
    "createTag": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unique-constraint-conflict",
        "urn:pomi:problem:reference-not-found"
    ],
    "declineGroupInvitation": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "deleteCategory": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:unique-constraint-conflict"
    ],
    "deleteGroupAvatar": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unauthenticated",
        "urn:pomi:problem:forbidden",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:conflict"
    ],
    "deleteGroupRole": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "deleteStudentAbsences": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "deleteStudentAvatar": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unauthenticated",
        "urn:pomi:problem:forbidden",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:conflict"
    ],
    "deleteStudentCourseAttempts": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "deleteStudentCurricula": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "deleteStudentFriendship": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "deleteStudentPeriodPlannings": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "deleteStudents": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:invalid-student-profile"
    ],
    "deleteStudentTagInterest": [
        "urn:pomi:problem:invalid-request"
    ],
    "deleteTag": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:unique-constraint-conflict"
    ],
    "getCategory": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCourseProfessorEvaluationSummary": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getCurrentUser": [
        "urn:pomi:problem:invalid-request"
    ],
    "getExchangeNoticeSubscription": [
        "urn:pomi:problem:invalid-request"
    ],
    "getGroup": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getGroupEvent": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getImageVariant": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unauthenticated",
        "urn:pomi:problem:forbidden",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:service-unavailable"
    ],
    "getProfessorEvaluation": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-professor-evaluation"
    ],
    "getPublicGroupMembership": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getPublicSharedPeriodPlanning": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getStudentCourseAttempts": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getStudentCurricula": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getStudentGroupMembership": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getStudentPeriodPlannings": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getStudentPerson": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getStudentPublicProfile": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getStudents": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getStudentSharedPeriodPlanning": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "getTag": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "listAuthUsers": [
        "urn:pomi:problem:invalid-request"
    ],
    "listBotGrants": [
        "urn:pomi:problem:invalid-request"
    ],
    "listBots": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCategories": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCourseEvaluationSummaries": [
        "urn:pomi:problem:invalid-request"
    ],
    "listCourseTags": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "listFeedbackReports": [
        "urn:pomi:problem:invalid-request"
    ],
    "listGroupEvents": [
        "urn:pomi:problem:invalid-request"
    ],
    "listGroupInvitations": [
        "urn:pomi:problem:invalid-request"
    ],
    "listGroupRoles": [
        "urn:pomi:problem:invalid-request"
    ],
    "listGroups": [
        "urn:pomi:problem:invalid-request"
    ],
    "listManagedGroupEvents": [
        "urn:pomi:problem:invalid-request"
    ],
    "listManagedGroupInvitations": [
        "urn:pomi:problem:invalid-request"
    ],
    "listManagedGroupMemberships": [
        "urn:pomi:problem:invalid-request"
    ],
    "listPendingProfessorEvaluations": [
        "urn:pomi:problem:invalid-request"
    ],
    "listProfessorEvaluationSummaries": [
        "urn:pomi:problem:invalid-request"
    ],
    "listPublicGroupMemberships": [
        "urn:pomi:problem:invalid-request"
    ],
    "listPublicSharedPeriodPlannings": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentAbsences": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentCourseAttempts": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentCurricula": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentFeedbackReports": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentFriendships": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentGroupMemberships": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentPeople": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentPeriodPlannings": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudents": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentSharedPeriodPlannings": [
        "urn:pomi:problem:invalid-request"
    ],
    "listStudentTagInterests": [
        "urn:pomi:problem:invalid-request"
    ],
    "listTagCourses": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "listTags": [
        "urn:pomi:problem:invalid-request"
    ],
    "publishGroupEvent": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "putGroupAvatar": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unauthenticated",
        "urn:pomi:problem:forbidden",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:conflict",
        "urn:pomi:problem:payload-too-large",
        "urn:pomi:problem:unprocessable-entity",
        "urn:pomi:problem:media-upload-rate-limit",
        "urn:pomi:problem:service-unavailable"
    ],
    "putStudentAvatar": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:unauthenticated",
        "urn:pomi:problem:forbidden",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:conflict",
        "urn:pomi:problem:payload-too-large",
        "urn:pomi:problem:unprocessable-entity",
        "urn:pomi:problem:media-upload-rate-limit",
        "urn:pomi:problem:service-unavailable"
    ],
    "removeCourseTag": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:reference-not-found"
    ],
    "replaceBotGrant": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "unsubscribeExchangeNotices": [
        "urn:pomi:problem:invalid-request"
    ],
    "updateAuthUser": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:admin-identity-managed-by-cli",
        "urn:pomi:problem:resource-not-found"
    ],
    "updateCategory": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:unique-constraint-conflict"
    ],
    "updateExchangeNoticeSubscription": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:reference-not-found"
    ],
    "updateFeedbackReport": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "updateGroup": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:reference-not-found"
    ],
    "updateGroupEvent": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "updateGroupRole": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "updateManagedGroupMembership": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "updateProfessorEvaluation": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-professor-evaluation"
    ],
    "updateStudentCourseAttempts": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:unique-constraint-conflict",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-student-course-attempt"
    ],
    "updateStudentCurricula": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-curriculum"
    ],
    "updateStudentGroupMembership": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "updateStudentPeriodPlannings": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-period-plan"
    ],
    "updateStudentPublicProfile": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found"
    ],
    "updateStudents": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:reference-not-found",
        "urn:pomi:problem:invalid-student-profile"
    ],
    "updateStudentTagInterest": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:reference-not-found"
    ],
    "updateTag": [
        "urn:pomi:problem:invalid-request",
        "urn:pomi:problem:resource-not-found",
        "urn:pomi:problem:unique-constraint-conflict",
        "urn:pomi:problem:reference-not-found"
    ]
} as const

export type ProblemType = keyof typeof problemCatalog
export type ProblemByType = {
    "urn:pomi:problem:invalid-request": components['schemas']["InvalidRequestProblem"]
    "urn:pomi:problem:unauthenticated": components['schemas']["UnauthenticatedProblem"]
    "urn:pomi:problem:forbidden": components['schemas']["ForbiddenProblem"]
    "urn:pomi:problem:resource-not-found": components['schemas']["ResourceNotFoundProblem"]
    "urn:pomi:problem:conflict": components['schemas']["ConflictProblem"]
    "urn:pomi:problem:payload-too-large": components['schemas']["PayloadTooLargeProblem"]
    "urn:pomi:problem:unprocessable-entity": components['schemas']["UnprocessableEntityProblem"]
    "urn:pomi:problem:media-upload-rate-limit": components['schemas']["MediaUploadRateLimitProblem"]
    "urn:pomi:problem:internal-server-error": components['schemas']["InternalServerErrorProblem"]
    "urn:pomi:problem:inconsistent-resource-state": components['schemas']["InconsistentResourceStateProblem"]
    "urn:pomi:problem:service-unavailable": components['schemas']["ServiceUnavailableProblem"]
    "urn:pomi:problem:admin-identity-managed-by-cli": components['schemas']["AdminIdentityManagedByCliProblem"]
    "urn:pomi:problem:unique-constraint-conflict": components['schemas']["UniqueConstraintConflictProblem"]
    "urn:pomi:problem:reference-not-found": components['schemas']["ReferenceNotFoundProblem"]
    "urn:pomi:problem:invalid-student-profile": components['schemas']["InvalidStudentProfileProblem"]
    "urn:pomi:problem:invalid-curriculum": components['schemas']["InvalidCurriculumProblem"]
    "urn:pomi:problem:invalid-period-plan": components['schemas']["InvalidPeriodPlanProblem"]
    "urn:pomi:problem:invalid-professor-evaluation": components['schemas']["InvalidProfessorEvaluationProblem"]
    "urn:pomi:problem:invalid-student-course-attempt": components['schemas']["InvalidStudentCourseAttemptProblem"]
    "urn:pomi:problem:invalid-student-history-import": components['schemas']["InvalidStudentHistoryImportProblem"]
    "urn:pomi:problem:invalid-student-absence": components['schemas']["InvalidStudentAbsenceProblem"]
    "urn:pomi:problem:invalid-feedback-report": components['schemas']["InvalidFeedbackReportProblem"]
    "urn:pomi:problem:feedback-rate-limit": components['schemas']["FeedbackRateLimitProblem"]
}
export type AnyProblem = ProblemByType[ProblemType]
export type OperationProblem<Name extends keyof typeof operationProblemTypes> =
    ProblemByType[(typeof operationProblemTypes)[Name][number] & ProblemType]
