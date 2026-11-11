import type { SortInput } from '../../runtime/sorting.js'
import type { operations } from './openapi.js'
import type { GeneratedOperationDefinition } from '../../runtime/operation.js'

type ParameterRecord<T> = [NonNullable<T>] extends [never] ? {} : NonNullable<T>
type RequestBodyOf<T> = T extends { requestBody: { content: infer Content } }
    ? 'multipart/form-data' extends keyof Content
    ? FormData
    : Content[keyof Content]
    : never
type BodyInput<Body, Required extends boolean> = [Body] extends [never]
    ? {}
    : Required extends true
    ? { body: Body }
    : { body?: Body }
type HeaderInput<Header> = [NonNullable<Header>] extends [never]
    ? {}
    : { headers?: NonNullable<Header> }
type SortQuery<Query, SortField extends string> = ParameterRecord<Query> extends infer Parameters
    ? Parameters extends { sort: unknown }
    ? Omit<Parameters, 'sort'> & { sort: SortInput<SortField> }
    : Omit<Parameters, 'sort'> & { sort?: SortInput<SortField> }
    : never
type OperationInput<Path, Query, Header, Body, BodyRequired extends boolean> =
    ParameterRecord<Path> & ParameterRecord<Query> & HeaderInput<Header> & BodyInput<Body, BodyRequired>

export type acceptGroupInvitationInput = OperationInput<operations["acceptGroupInvitation"]['parameters']['path'], operations["acceptGroupInvitation"]['parameters']['query'], operations["acceptGroupInvitation"]['parameters']['header'], RequestBodyOf<operations["acceptGroupInvitation"]>, false>
export type acceptGroupInvitationOutput = import('./domain.js').OwnGroupMembership
export type acceptGroupInvitationProblem = operations["acceptGroupInvitation"]['responses'][400]['content']["application/problem+json"] | operations["acceptGroupInvitation"]['responses'][404]['content']["application/problem+json"] | operations["acceptGroupInvitation"]['responses'][500]['content']["application/problem+json"]
export type acceptUserFriendshipInput = OperationInput<operations["acceptUserFriendship"]['parameters']['path'], operations["acceptUserFriendship"]['parameters']['query'], operations["acceptUserFriendship"]['parameters']['header'], RequestBodyOf<operations["acceptUserFriendship"]>, false>
export type acceptUserFriendshipOutput = import('./domain.js').UserFriendship
export type acceptUserFriendshipProblem = operations["acceptUserFriendship"]['responses'][400]['content']["application/problem+json"] | operations["acceptUserFriendship"]['responses'][404]['content']["application/problem+json"] | operations["acceptUserFriendship"]['responses'][409]['content']["application/problem+json"] | operations["acceptUserFriendship"]['responses'][500]['content']["application/problem+json"]
export type addCourseTagInput = OperationInput<operations["addCourseTag"]['parameters']['path'], operations["addCourseTag"]['parameters']['query'], operations["addCourseTag"]['parameters']['header'], RequestBodyOf<operations["addCourseTag"]>, false>
export type addCourseTagOutput = void
export type addCourseTagProblem = operations["addCourseTag"]['responses'][400]['content']["application/problem+json"] | operations["addCourseTag"]['responses'][422]['content']["application/problem+json"] | operations["addCourseTag"]['responses'][500]['content']["application/problem+json"]
export type archiveGroupInput = OperationInput<operations["archiveGroup"]['parameters']['path'], operations["archiveGroup"]['parameters']['query'], operations["archiveGroup"]['parameters']['header'], RequestBodyOf<operations["archiveGroup"]>, false>
export type archiveGroupOutput = void
export type archiveGroupProblem = operations["archiveGroup"]['responses'][400]['content']["application/problem+json"] | operations["archiveGroup"]['responses'][404]['content']["application/problem+json"] | operations["archiveGroup"]['responses'][500]['content']["application/problem+json"]
export type cancelGroupEventInput = OperationInput<operations["cancelGroupEvent"]['parameters']['path'], operations["cancelGroupEvent"]['parameters']['query'], operations["cancelGroupEvent"]['parameters']['header'], RequestBodyOf<operations["cancelGroupEvent"]>, false>
export type cancelGroupEventOutput = import('./domain.js').ManagedGroupEvent
export type cancelGroupEventProblem = operations["cancelGroupEvent"]['responses'][400]['content']["application/problem+json"] | operations["cancelGroupEvent"]['responses'][404]['content']["application/problem+json"] | operations["cancelGroupEvent"]['responses'][500]['content']["application/problem+json"]
export type createAuthIdentityInput = OperationInput<operations["createAuthIdentity"]['parameters']['path'], operations["createAuthIdentity"]['parameters']['query'], operations["createAuthIdentity"]['parameters']['header'], RequestBodyOf<operations["createAuthIdentity"]>, true>
export type createAuthIdentityOutput = import('./domain.js').AuthIdentity
export type createAuthIdentityProblem = operations["createAuthIdentity"]['responses'][400]['content']["application/problem+json"] | operations["createAuthIdentity"]['responses'][500]['content']["application/problem+json"]
export type createCategoryInput = OperationInput<operations["createCategory"]['parameters']['path'], operations["createCategory"]['parameters']['query'], operations["createCategory"]['parameters']['header'], RequestBodyOf<operations["createCategory"]>, true>
export type createCategoryOutput = import('./domain.js').Category
export type createCategoryProblem = operations["createCategory"]['responses'][400]['content']["application/problem+json"] | operations["createCategory"]['responses'][409]['content']["application/problem+json"] | operations["createCategory"]['responses'][500]['content']["application/problem+json"]
export type createCurriculumsInput = OperationInput<operations["createCurriculums"]['parameters']['path'], operations["createCurriculums"]['parameters']['query'], operations["createCurriculums"]['parameters']['header'], RequestBodyOf<operations["createCurriculums"]>, true>
export type createCurriculumsOutput = import('./domain.js').Curriculum
export type createCurriculumsProblem = operations["createCurriculums"]['responses'][400]['content']["application/problem+json"] | operations["createCurriculums"]['responses'][422]['content']["application/problem+json"] | operations["createCurriculums"]['responses'][500]['content']["application/problem+json"]
export type createFeedbackReportInput = OperationInput<operations["createFeedbackReport"]['parameters']['path'], operations["createFeedbackReport"]['parameters']['query'], operations["createFeedbackReport"]['parameters']['header'], RequestBodyOf<operations["createFeedbackReport"]>, true>
export type createFeedbackReportOutput = import('./domain.js').FeedbackReportAccepted
export type createFeedbackReportProblem = operations["createFeedbackReport"]['responses'][400]['content']["application/problem+json"] | operations["createFeedbackReport"]['responses'][404]['content']["application/problem+json"] | operations["createFeedbackReport"]['responses'][422]['content']["application/problem+json"] | operations["createFeedbackReport"]['responses'][429]['content']["application/problem+json"] | operations["createFeedbackReport"]['responses'][500]['content']["application/problem+json"]
export type createGroupInput = OperationInput<operations["createGroup"]['parameters']['path'], operations["createGroup"]['parameters']['query'], operations["createGroup"]['parameters']['header'], RequestBodyOf<operations["createGroup"]>, true>
export type createGroupOutput = import('./domain.js').Group
export type createGroupProblem = operations["createGroup"]['responses'][400]['content']["application/problem+json"] | operations["createGroup"]['responses'][422]['content']["application/problem+json"] | operations["createGroup"]['responses'][500]['content']["application/problem+json"]
export type createGroupEventInput = OperationInput<operations["createGroupEvent"]['parameters']['path'], operations["createGroupEvent"]['parameters']['query'], operations["createGroupEvent"]['parameters']['header'], RequestBodyOf<operations["createGroupEvent"]>, true>
export type createGroupEventOutput = import('./domain.js').ManagedGroupEvent
export type createGroupEventProblem = operations["createGroupEvent"]['responses'][400]['content']["application/problem+json"] | operations["createGroupEvent"]['responses'][500]['content']["application/problem+json"]
export type createGroupInvitationInput = OperationInput<operations["createGroupInvitation"]['parameters']['path'], operations["createGroupInvitation"]['parameters']['query'], operations["createGroupInvitation"]['parameters']['header'], RequestBodyOf<operations["createGroupInvitation"]>, true>
export type createGroupInvitationOutput = import('./domain.js').GroupInvitation
export type createGroupInvitationProblem = operations["createGroupInvitation"]['responses'][400]['content']["application/problem+json"] | operations["createGroupInvitation"]['responses'][500]['content']["application/problem+json"]
export type createGroupRoleInput = OperationInput<operations["createGroupRole"]['parameters']['path'], operations["createGroupRole"]['parameters']['query'], operations["createGroupRole"]['parameters']['header'], RequestBodyOf<operations["createGroupRole"]>, true>
export type createGroupRoleOutput = import('./domain.js').GroupRole
export type createGroupRoleProblem = operations["createGroupRole"]['responses'][400]['content']["application/problem+json"] | operations["createGroupRole"]['responses'][500]['content']["application/problem+json"]
export type createPeriodPlansInput = OperationInput<operations["createPeriodPlans"]['parameters']['path'], operations["createPeriodPlans"]['parameters']['query'], operations["createPeriodPlans"]['parameters']['header'], RequestBodyOf<operations["createPeriodPlans"]>, true>
export type createPeriodPlansOutput = import('./domain.js').PeriodPlanning
export type createPeriodPlansProblem = operations["createPeriodPlans"]['responses'][400]['content']["application/problem+json"] | operations["createPeriodPlans"]['responses'][422]['content']["application/problem+json"] | operations["createPeriodPlans"]['responses'][500]['content']["application/problem+json"]
export type createStudentAbsencesInput = OperationInput<operations["createStudentAbsences"]['parameters']['path'], operations["createStudentAbsences"]['parameters']['query'], operations["createStudentAbsences"]['parameters']['header'], RequestBodyOf<operations["createStudentAbsences"]>, true>
export type createStudentAbsencesOutput = import('./domain.js').StudentAbsence
export type createStudentAbsencesProblem = operations["createStudentAbsences"]['responses'][400]['content']["application/problem+json"] | operations["createStudentAbsences"]['responses'][404]['content']["application/problem+json"] | operations["createStudentAbsences"]['responses'][409]['content']["application/problem+json"] | operations["createStudentAbsences"]['responses'][422]['content']["application/problem+json"] | operations["createStudentAbsences"]['responses'][500]['content']["application/problem+json"]
export type createStudentCourseAttemptsInput = OperationInput<operations["createStudentCourseAttempts"]['parameters']['path'], operations["createStudentCourseAttempts"]['parameters']['query'], operations["createStudentCourseAttempts"]['parameters']['header'], RequestBodyOf<operations["createStudentCourseAttempts"]>, true>
export type createStudentCourseAttemptsOutput = import('./domain.js').StudentCourseAttempt
export type createStudentCourseAttemptsProblem = operations["createStudentCourseAttempts"]['responses'][400]['content']["application/problem+json"] | operations["createStudentCourseAttempts"]['responses'][409]['content']["application/problem+json"] | operations["createStudentCourseAttempts"]['responses'][422]['content']["application/problem+json"] | operations["createStudentCourseAttempts"]['responses'][500]['content']["application/problem+json"]
export type createStudentHistoryInput = OperationInput<operations["createStudentHistory"]['parameters']['path'], operations["createStudentHistory"]['parameters']['query'], operations["createStudentHistory"]['parameters']['header'], RequestBodyOf<operations["createStudentHistory"]>, true>
export type createStudentHistoryOutput = import('./domain.js').StudentHistoryImportSummary
export type createStudentHistoryProblem = operations["createStudentHistory"]['responses'][400]['content']["application/problem+json"] | operations["createStudentHistory"]['responses'][404]['content']["application/problem+json"] | operations["createStudentHistory"]['responses'][422]['content']["application/problem+json"] | operations["createStudentHistory"]['responses'][500]['content']["application/problem+json"]
export type createStudentsInput = OperationInput<operations["createStudents"]['parameters']['path'], operations["createStudents"]['parameters']['query'], operations["createStudents"]['parameters']['header'], RequestBodyOf<operations["createStudents"]>, true>
export type createStudentsOutput = import('./domain.js').Student
export type createStudentsProblem = operations["createStudents"]['responses'][400]['content']["application/problem+json"] | operations["createStudents"]['responses'][409]['content']["application/problem+json"] | operations["createStudents"]['responses'][422]['content']["application/problem+json"] | operations["createStudents"]['responses'][500]['content']["application/problem+json"]
export type createTagInput = OperationInput<operations["createTag"]['parameters']['path'], operations["createTag"]['parameters']['query'], operations["createTag"]['parameters']['header'], RequestBodyOf<operations["createTag"]>, true>
export type createTagOutput = import('./domain.js').Tag
export type createTagProblem = operations["createTag"]['responses'][400]['content']["application/problem+json"] | operations["createTag"]['responses'][409]['content']["application/problem+json"] | operations["createTag"]['responses'][422]['content']["application/problem+json"] | operations["createTag"]['responses'][500]['content']["application/problem+json"]
export type createUserFeedbackReportInput = OperationInput<operations["createUserFeedbackReport"]['parameters']['path'], operations["createUserFeedbackReport"]['parameters']['query'], operations["createUserFeedbackReport"]['parameters']['header'], RequestBodyOf<operations["createUserFeedbackReport"]>, true>
export type createUserFeedbackReportOutput = import('./domain.js').FeedbackReportAccepted
export type createUserFeedbackReportProblem = operations["createUserFeedbackReport"]['responses'][400]['content']["application/problem+json"] | operations["createUserFeedbackReport"]['responses'][404]['content']["application/problem+json"] | operations["createUserFeedbackReport"]['responses'][422]['content']["application/problem+json"] | operations["createUserFeedbackReport"]['responses'][500]['content']["application/problem+json"]
export type createUserFriendshipInput = OperationInput<operations["createUserFriendship"]['parameters']['path'], operations["createUserFriendship"]['parameters']['query'], operations["createUserFriendship"]['parameters']['header'], RequestBodyOf<operations["createUserFriendship"]>, true>
export type createUserFriendshipOutput = import('./domain.js').UserFriendship
export type createUserFriendshipProblem = operations["createUserFriendship"]['responses'][400]['content']["application/problem+json"] | operations["createUserFriendship"]['responses'][404]['content']["application/problem+json"] | operations["createUserFriendship"]['responses'][409]['content']["application/problem+json"] | operations["createUserFriendship"]['responses'][500]['content']["application/problem+json"]
export type declineGroupInvitationInput = OperationInput<operations["declineGroupInvitation"]['parameters']['path'], operations["declineGroupInvitation"]['parameters']['query'], operations["declineGroupInvitation"]['parameters']['header'], RequestBodyOf<operations["declineGroupInvitation"]>, false>
export type declineGroupInvitationOutput = void
export type declineGroupInvitationProblem = operations["declineGroupInvitation"]['responses'][400]['content']["application/problem+json"] | operations["declineGroupInvitation"]['responses'][404]['content']["application/problem+json"] | operations["declineGroupInvitation"]['responses'][500]['content']["application/problem+json"]
export type deleteCategoryInput = OperationInput<operations["deleteCategory"]['parameters']['path'], operations["deleteCategory"]['parameters']['query'], operations["deleteCategory"]['parameters']['header'], RequestBodyOf<operations["deleteCategory"]>, false>
export type deleteCategoryOutput = void
export type deleteCategoryProblem = operations["deleteCategory"]['responses'][400]['content']["application/problem+json"] | operations["deleteCategory"]['responses'][404]['content']["application/problem+json"] | operations["deleteCategory"]['responses'][409]['content']["application/problem+json"] | operations["deleteCategory"]['responses'][500]['content']["application/problem+json"]
export type deleteCurriculumsInput = OperationInput<operations["deleteCurriculums"]['parameters']['path'], operations["deleteCurriculums"]['parameters']['query'], operations["deleteCurriculums"]['parameters']['header'], RequestBodyOf<operations["deleteCurriculums"]>, false>
export type deleteCurriculumsOutput = void
export type deleteCurriculumsProblem = operations["deleteCurriculums"]['responses'][400]['content']["application/problem+json"] | operations["deleteCurriculums"]['responses'][404]['content']["application/problem+json"] | operations["deleteCurriculums"]['responses'][500]['content']["application/problem+json"]
export type deleteGroupAvatarInput = OperationInput<operations["deleteGroupAvatar"]['parameters']['path'], operations["deleteGroupAvatar"]['parameters']['query'], operations["deleteGroupAvatar"]['parameters']['header'], RequestBodyOf<operations["deleteGroupAvatar"]>, false>
export type deleteGroupAvatarOutput = void
export type deleteGroupAvatarProblem = operations["deleteGroupAvatar"]['responses'][400]['content']["application/problem+json"] | operations["deleteGroupAvatar"]['responses'][401]['content']["application/problem+json"] | operations["deleteGroupAvatar"]['responses'][403]['content']["application/problem+json"] | operations["deleteGroupAvatar"]['responses'][404]['content']["application/problem+json"] | operations["deleteGroupAvatar"]['responses'][409]['content']["application/problem+json"] | operations["deleteGroupAvatar"]['responses'][500]['content']["application/problem+json"]
export type deleteGroupRoleInput = OperationInput<operations["deleteGroupRole"]['parameters']['path'], operations["deleteGroupRole"]['parameters']['query'], operations["deleteGroupRole"]['parameters']['header'], RequestBodyOf<operations["deleteGroupRole"]>, false>
export type deleteGroupRoleOutput = void
export type deleteGroupRoleProblem = operations["deleteGroupRole"]['responses'][400]['content']["application/problem+json"] | operations["deleteGroupRole"]['responses'][404]['content']["application/problem+json"] | operations["deleteGroupRole"]['responses'][500]['content']["application/problem+json"]
export type deletePeriodPlansInput = OperationInput<operations["deletePeriodPlans"]['parameters']['path'], operations["deletePeriodPlans"]['parameters']['query'], operations["deletePeriodPlans"]['parameters']['header'], RequestBodyOf<operations["deletePeriodPlans"]>, false>
export type deletePeriodPlansOutput = void
export type deletePeriodPlansProblem = operations["deletePeriodPlans"]['responses'][400]['content']["application/problem+json"] | operations["deletePeriodPlans"]['responses'][404]['content']["application/problem+json"] | operations["deletePeriodPlans"]['responses'][500]['content']["application/problem+json"]
export type deleteStudentAbsencesInput = OperationInput<operations["deleteStudentAbsences"]['parameters']['path'], operations["deleteStudentAbsences"]['parameters']['query'], operations["deleteStudentAbsences"]['parameters']['header'], RequestBodyOf<operations["deleteStudentAbsences"]>, false>
export type deleteStudentAbsencesOutput = void
export type deleteStudentAbsencesProblem = operations["deleteStudentAbsences"]['responses'][400]['content']["application/problem+json"] | operations["deleteStudentAbsences"]['responses'][404]['content']["application/problem+json"] | operations["deleteStudentAbsences"]['responses'][500]['content']["application/problem+json"]
export type deleteStudentCourseAttemptsInput = OperationInput<operations["deleteStudentCourseAttempts"]['parameters']['path'], operations["deleteStudentCourseAttempts"]['parameters']['query'], operations["deleteStudentCourseAttempts"]['parameters']['header'], RequestBodyOf<operations["deleteStudentCourseAttempts"]>, false>
export type deleteStudentCourseAttemptsOutput = void
export type deleteStudentCourseAttemptsProblem = operations["deleteStudentCourseAttempts"]['responses'][400]['content']["application/problem+json"] | operations["deleteStudentCourseAttempts"]['responses'][404]['content']["application/problem+json"] | operations["deleteStudentCourseAttempts"]['responses'][500]['content']["application/problem+json"]
export type deleteStudentsInput = OperationInput<operations["deleteStudents"]['parameters']['path'], operations["deleteStudents"]['parameters']['query'], operations["deleteStudents"]['parameters']['header'], RequestBodyOf<operations["deleteStudents"]>, true>
export type deleteStudentsOutput = void
export type deleteStudentsProblem = operations["deleteStudents"]['responses'][400]['content']["application/problem+json"] | operations["deleteStudents"]['responses'][404]['content']["application/problem+json"] | operations["deleteStudents"]['responses'][422]['content']["application/problem+json"] | operations["deleteStudents"]['responses'][500]['content']["application/problem+json"]
export type deleteTagInput = OperationInput<operations["deleteTag"]['parameters']['path'], operations["deleteTag"]['parameters']['query'], operations["deleteTag"]['parameters']['header'], RequestBodyOf<operations["deleteTag"]>, false>
export type deleteTagOutput = void
export type deleteTagProblem = operations["deleteTag"]['responses'][400]['content']["application/problem+json"] | operations["deleteTag"]['responses'][404]['content']["application/problem+json"] | operations["deleteTag"]['responses'][409]['content']["application/problem+json"] | operations["deleteTag"]['responses'][500]['content']["application/problem+json"]
export type deleteUserAvatarInput = OperationInput<operations["deleteUserAvatar"]['parameters']['path'], operations["deleteUserAvatar"]['parameters']['query'], operations["deleteUserAvatar"]['parameters']['header'], RequestBodyOf<operations["deleteUserAvatar"]>, false>
export type deleteUserAvatarOutput = void
export type deleteUserAvatarProblem = operations["deleteUserAvatar"]['responses'][400]['content']["application/problem+json"] | operations["deleteUserAvatar"]['responses'][401]['content']["application/problem+json"] | operations["deleteUserAvatar"]['responses'][403]['content']["application/problem+json"] | operations["deleteUserAvatar"]['responses'][404]['content']["application/problem+json"] | operations["deleteUserAvatar"]['responses'][409]['content']["application/problem+json"] | operations["deleteUserAvatar"]['responses'][500]['content']["application/problem+json"]
export type deleteUserFriendshipInput = OperationInput<operations["deleteUserFriendship"]['parameters']['path'], operations["deleteUserFriendship"]['parameters']['query'], operations["deleteUserFriendship"]['parameters']['header'], RequestBodyOf<operations["deleteUserFriendship"]>, false>
export type deleteUserFriendshipOutput = void
export type deleteUserFriendshipProblem = operations["deleteUserFriendship"]['responses'][400]['content']["application/problem+json"] | operations["deleteUserFriendship"]['responses'][404]['content']["application/problem+json"] | operations["deleteUserFriendship"]['responses'][500]['content']["application/problem+json"]
export type deleteUserInterestInput = OperationInput<operations["deleteUserInterest"]['parameters']['path'], operations["deleteUserInterest"]['parameters']['query'], operations["deleteUserInterest"]['parameters']['header'], RequestBodyOf<operations["deleteUserInterest"]>, false>
export type deleteUserInterestOutput = void
export type deleteUserInterestProblem = operations["deleteUserInterest"]['responses'][400]['content']["application/problem+json"] | operations["deleteUserInterest"]['responses'][500]['content']["application/problem+json"]
export type getCategoryInput = OperationInput<operations["getCategory"]['parameters']['path'], operations["getCategory"]['parameters']['query'], operations["getCategory"]['parameters']['header'], RequestBodyOf<operations["getCategory"]>, false>
export type getCategoryOutput = import('./domain.js').Category
export type getCategoryProblem = operations["getCategory"]['responses'][400]['content']["application/problem+json"] | operations["getCategory"]['responses'][404]['content']["application/problem+json"] | operations["getCategory"]['responses'][500]['content']["application/problem+json"]
export type getCourseProfessorEvaluationSummaryInput = OperationInput<operations["getCourseProfessorEvaluationSummary"]['parameters']['path'], operations["getCourseProfessorEvaluationSummary"]['parameters']['query'], operations["getCourseProfessorEvaluationSummary"]['parameters']['header'], RequestBodyOf<operations["getCourseProfessorEvaluationSummary"]>, false>
export type getCourseProfessorEvaluationSummaryOutput = import('./domain.js').CourseProfessorEvaluationSummary
export type getCourseProfessorEvaluationSummaryProblem = operations["getCourseProfessorEvaluationSummary"]['responses'][400]['content']["application/problem+json"] | operations["getCourseProfessorEvaluationSummary"]['responses'][404]['content']["application/problem+json"] | operations["getCourseProfessorEvaluationSummary"]['responses'][500]['content']["application/problem+json"]
export type getCurrentUserInput = OperationInput<operations["getCurrentUser"]['parameters']['path'], operations["getCurrentUser"]['parameters']['query'], operations["getCurrentUser"]['parameters']['header'], RequestBodyOf<operations["getCurrentUser"]>, false>
export type getCurrentUserOutput = import('./domain.js').CurrentUser
export type getCurrentUserProblem = operations["getCurrentUser"]['responses'][400]['content']["application/problem+json"] | operations["getCurrentUser"]['responses'][500]['content']["application/problem+json"]
export type getCurriculumsInput = OperationInput<operations["getCurriculums"]['parameters']['path'], operations["getCurriculums"]['parameters']['query'], operations["getCurriculums"]['parameters']['header'], RequestBodyOf<operations["getCurriculums"]>, false>
export type getCurriculumsOutput = import('./domain.js').Curriculum
export type getCurriculumsProblem = operations["getCurriculums"]['responses'][400]['content']["application/problem+json"] | operations["getCurriculums"]['responses'][404]['content']["application/problem+json"] | operations["getCurriculums"]['responses'][500]['content']["application/problem+json"]
export type getExchangeNoticeSubscriptionInput = OperationInput<operations["getExchangeNoticeSubscription"]['parameters']['path'], operations["getExchangeNoticeSubscription"]['parameters']['query'], operations["getExchangeNoticeSubscription"]['parameters']['header'], RequestBodyOf<operations["getExchangeNoticeSubscription"]>, false>
export type getExchangeNoticeSubscriptionOutput = import('./domain.js').ExchangeNoticeSubscription
export type getExchangeNoticeSubscriptionProblem = operations["getExchangeNoticeSubscription"]['responses'][400]['content']["application/problem+json"] | operations["getExchangeNoticeSubscription"]['responses'][500]['content']["application/problem+json"]
export type getGroupInput = OperationInput<operations["getGroup"]['parameters']['path'], operations["getGroup"]['parameters']['query'], operations["getGroup"]['parameters']['header'], RequestBodyOf<operations["getGroup"]>, false>
export type getGroupOutput = import('./domain.js').Group
export type getGroupProblem = operations["getGroup"]['responses'][400]['content']["application/problem+json"] | operations["getGroup"]['responses'][404]['content']["application/problem+json"] | operations["getGroup"]['responses'][500]['content']["application/problem+json"]
export type getGroupEventInput = OperationInput<operations["getGroupEvent"]['parameters']['path'], operations["getGroupEvent"]['parameters']['query'], operations["getGroupEvent"]['parameters']['header'], RequestBodyOf<operations["getGroupEvent"]>, false>
export type getGroupEventOutput = import('./domain.js').GroupEvent
export type getGroupEventProblem = operations["getGroupEvent"]['responses'][400]['content']["application/problem+json"] | operations["getGroupEvent"]['responses'][404]['content']["application/problem+json"] | operations["getGroupEvent"]['responses'][500]['content']["application/problem+json"]
export type getImageVariantInput = OperationInput<operations["getImageVariant"]['parameters']['path'], operations["getImageVariant"]['parameters']['query'], operations["getImageVariant"]['parameters']['header'], RequestBodyOf<operations["getImageVariant"]>, false>
export type getImageVariantOutput = Blob
export type getImageVariantProblem = operations["getImageVariant"]['responses'][400]['content']["application/problem+json"] | operations["getImageVariant"]['responses'][401]['content']["application/problem+json"] | operations["getImageVariant"]['responses'][403]['content']["application/problem+json"] | operations["getImageVariant"]['responses'][404]['content']["application/problem+json"] | operations["getImageVariant"]['responses'][500]['content']["application/problem+json"] | operations["getImageVariant"]['responses'][503]['content']["application/problem+json"]
export type getPeriodPlansInput = OperationInput<operations["getPeriodPlans"]['parameters']['path'], operations["getPeriodPlans"]['parameters']['query'], operations["getPeriodPlans"]['parameters']['header'], RequestBodyOf<operations["getPeriodPlans"]>, false>
export type getPeriodPlansOutput = import('./domain.js').PeriodPlanning
export type getPeriodPlansProblem = operations["getPeriodPlans"]['responses'][400]['content']["application/problem+json"] | operations["getPeriodPlans"]['responses'][404]['content']["application/problem+json"] | operations["getPeriodPlans"]['responses'][500]['content']["application/problem+json"]
export type getProfessorEvaluationInput = OperationInput<operations["getProfessorEvaluation"]['parameters']['path'], operations["getProfessorEvaluation"]['parameters']['query'], operations["getProfessorEvaluation"]['parameters']['header'], RequestBodyOf<operations["getProfessorEvaluation"]>, false>
export type getProfessorEvaluationOutput = import('./domain.js').ProfessorEvaluationEligibility
export type getProfessorEvaluationProblem = operations["getProfessorEvaluation"]['responses'][400]['content']["application/problem+json"] | operations["getProfessorEvaluation"]['responses'][422]['content']["application/problem+json"] | operations["getProfessorEvaluation"]['responses'][500]['content']["application/problem+json"]
export type getPublicGroupMembershipInput = OperationInput<operations["getPublicGroupMembership"]['parameters']['path'], operations["getPublicGroupMembership"]['parameters']['query'], operations["getPublicGroupMembership"]['parameters']['header'], RequestBodyOf<operations["getPublicGroupMembership"]>, false>
export type getPublicGroupMembershipOutput = import('./domain.js').PublicGroupMembership
export type getPublicGroupMembershipProblem = operations["getPublicGroupMembership"]['responses'][400]['content']["application/problem+json"] | operations["getPublicGroupMembership"]['responses'][404]['content']["application/problem+json"] | operations["getPublicGroupMembership"]['responses'][500]['content']["application/problem+json"]
export type getPublicSharedPeriodPlanInput = OperationInput<operations["getPublicSharedPeriodPlan"]['parameters']['path'], operations["getPublicSharedPeriodPlan"]['parameters']['query'], operations["getPublicSharedPeriodPlan"]['parameters']['header'], RequestBodyOf<operations["getPublicSharedPeriodPlan"]>, false>
export type getPublicSharedPeriodPlanOutput = import('./domain.js').SharedPeriodPlanning
export type getPublicSharedPeriodPlanProblem = operations["getPublicSharedPeriodPlan"]['responses'][400]['content']["application/problem+json"] | operations["getPublicSharedPeriodPlan"]['responses'][404]['content']["application/problem+json"] | operations["getPublicSharedPeriodPlan"]['responses'][500]['content']["application/problem+json"]
export type getStudentCourseAttemptsInput = OperationInput<operations["getStudentCourseAttempts"]['parameters']['path'], operations["getStudentCourseAttempts"]['parameters']['query'], operations["getStudentCourseAttempts"]['parameters']['header'], RequestBodyOf<operations["getStudentCourseAttempts"]>, false>
export type getStudentCourseAttemptsOutput = import('./domain.js').StudentCourseAttempt
export type getStudentCourseAttemptsProblem = operations["getStudentCourseAttempts"]['responses'][400]['content']["application/problem+json"] | operations["getStudentCourseAttempts"]['responses'][404]['content']["application/problem+json"] | operations["getStudentCourseAttempts"]['responses'][500]['content']["application/problem+json"]
export type getStudentsInput = OperationInput<operations["getStudents"]['parameters']['path'], operations["getStudents"]['parameters']['query'], operations["getStudents"]['parameters']['header'], RequestBodyOf<operations["getStudents"]>, false>
export type getStudentsOutput = import('./domain.js').Student
export type getStudentsProblem = operations["getStudents"]['responses'][400]['content']["application/problem+json"] | operations["getStudents"]['responses'][404]['content']["application/problem+json"] | operations["getStudents"]['responses'][500]['content']["application/problem+json"]
export type getTagInput = OperationInput<operations["getTag"]['parameters']['path'], operations["getTag"]['parameters']['query'], operations["getTag"]['parameters']['header'], RequestBodyOf<operations["getTag"]>, false>
export type getTagOutput = import('./domain.js').Tag
export type getTagProblem = operations["getTag"]['responses'][400]['content']["application/problem+json"] | operations["getTag"]['responses'][404]['content']["application/problem+json"] | operations["getTag"]['responses'][500]['content']["application/problem+json"]
export type getUserInput = OperationInput<operations["getUser"]['parameters']['path'], operations["getUser"]['parameters']['query'], operations["getUser"]['parameters']['header'], RequestBodyOf<operations["getUser"]>, false>
export type getUserOutput = import('./domain.js').User
export type getUserProblem = operations["getUser"]['responses'][400]['content']["application/problem+json"] | operations["getUser"]['responses'][404]['content']["application/problem+json"] | operations["getUser"]['responses'][500]['content']["application/problem+json"]
export type getUserGroupMembershipInput = OperationInput<operations["getUserGroupMembership"]['parameters']['path'], operations["getUserGroupMembership"]['parameters']['query'], operations["getUserGroupMembership"]['parameters']['header'], RequestBodyOf<operations["getUserGroupMembership"]>, false>
export type getUserGroupMembershipOutput = import('./domain.js').OwnGroupMembership
export type getUserGroupMembershipProblem = operations["getUserGroupMembership"]['responses'][400]['content']["application/problem+json"] | operations["getUserGroupMembership"]['responses'][404]['content']["application/problem+json"] | operations["getUserGroupMembership"]['responses'][500]['content']["application/problem+json"]
export type getUserPersonInput = OperationInput<operations["getUserPerson"]['parameters']['path'], operations["getUserPerson"]['parameters']['query'], operations["getUserPerson"]['parameters']['header'], RequestBodyOf<operations["getUserPerson"]>, false>
export type getUserPersonOutput = import('./domain.js').UserPublicPerson
export type getUserPersonProblem = operations["getUserPerson"]['responses'][400]['content']["application/problem+json"] | operations["getUserPerson"]['responses'][404]['content']["application/problem+json"] | operations["getUserPerson"]['responses'][500]['content']["application/problem+json"]
export type getUserPreferencesInput = OperationInput<operations["getUserPreferences"]['parameters']['path'], operations["getUserPreferences"]['parameters']['query'], operations["getUserPreferences"]['parameters']['header'], RequestBodyOf<operations["getUserPreferences"]>, false>
export type getUserPreferencesOutput = import('./domain.js').UserPreferences
export type getUserPreferencesProblem = operations["getUserPreferences"]['responses'][400]['content']["application/problem+json"] | operations["getUserPreferences"]['responses'][404]['content']["application/problem+json"] | operations["getUserPreferences"]['responses'][500]['content']["application/problem+json"]
export type getUserProfileInput = OperationInput<operations["getUserProfile"]['parameters']['path'], operations["getUserProfile"]['parameters']['query'], operations["getUserProfile"]['parameters']['header'], RequestBodyOf<operations["getUserProfile"]>, false>
export type getUserProfileOutput = import('./domain.js').UserProfile
export type getUserProfileProblem = operations["getUserProfile"]['responses'][400]['content']["application/problem+json"] | operations["getUserProfile"]['responses'][404]['content']["application/problem+json"] | operations["getUserProfile"]['responses'][500]['content']["application/problem+json"]
export type getUserSharedPeriodPlanInput = OperationInput<operations["getUserSharedPeriodPlan"]['parameters']['path'], operations["getUserSharedPeriodPlan"]['parameters']['query'], operations["getUserSharedPeriodPlan"]['parameters']['header'], RequestBodyOf<operations["getUserSharedPeriodPlan"]>, false>
export type getUserSharedPeriodPlanOutput = import('./domain.js').SharedPeriodPlanning
export type getUserSharedPeriodPlanProblem = operations["getUserSharedPeriodPlan"]['responses'][400]['content']["application/problem+json"] | operations["getUserSharedPeriodPlan"]['responses'][404]['content']["application/problem+json"] | operations["getUserSharedPeriodPlan"]['responses'][500]['content']["application/problem+json"]
export type listAuthIdentitiesInput = OperationInput<operations["listAuthIdentities"]['parameters']['path'], SortQuery<operations["listAuthIdentities"]['parameters']['query'], "id" | "displayName" | "email" | "status">, operations["listAuthIdentities"]['parameters']['header'], RequestBodyOf<operations["listAuthIdentities"]>, false>
export type listAuthIdentitiesOutput = import('./domain.js').Page<import('./domain.js').AuthIdentity>
export type listAuthIdentitiesProblem = operations["listAuthIdentities"]['responses'][400]['content']["application/problem+json"] | operations["listAuthIdentities"]['responses'][500]['content']["application/problem+json"]
export type listBotGrantsInput = OperationInput<operations["listBotGrants"]['parameters']['path'], SortQuery<operations["listBotGrants"]['parameters']['query'], "createdAt" | "capability" | "botDisplayName">, operations["listBotGrants"]['parameters']['header'], RequestBodyOf<operations["listBotGrants"]>, false>
export type listBotGrantsOutput = import('./domain.js').Page<import('./domain.js').BotGrant>
export type listBotGrantsProblem = operations["listBotGrants"]['responses'][400]['content']["application/problem+json"] | operations["listBotGrants"]['responses'][500]['content']["application/problem+json"]
export type listBotsInput = OperationInput<operations["listBots"]['parameters']['path'], SortQuery<operations["listBots"]['parameters']['query'], "displayName">, operations["listBots"]['parameters']['header'], RequestBodyOf<operations["listBots"]>, false>
export type listBotsOutput = import('./domain.js').Page<import('./domain.js').BotIdentity>
export type listBotsProblem = operations["listBots"]['responses'][400]['content']["application/problem+json"] | operations["listBots"]['responses'][500]['content']["application/problem+json"]
export type listCategoriesInput = OperationInput<operations["listCategories"]['parameters']['path'], SortQuery<operations["listCategories"]['parameters']['query'], "name">, operations["listCategories"]['parameters']['header'], RequestBodyOf<operations["listCategories"]>, false>
export type listCategoriesOutput = import('./domain.js').Page<import('./domain.js').Category>
export type listCategoriesProblem = operations["listCategories"]['responses'][400]['content']["application/problem+json"] | operations["listCategories"]['responses'][500]['content']["application/problem+json"]
export type listCourseEvaluationSummariesInput = OperationInput<operations["listCourseEvaluationSummaries"]['parameters']['path'], SortQuery<operations["listCourseEvaluationSummaries"]['parameters']['query'], "course.code" | "course.name" | "responseCount" | "wouldTakeAgain" | "fairness" | "clarity" | "difficulty">, operations["listCourseEvaluationSummaries"]['parameters']['header'], RequestBodyOf<operations["listCourseEvaluationSummaries"]>, false>
export type listCourseEvaluationSummariesOutput = import('./domain.js').Page<import('./domain.js').CourseEvaluationSummary>
export type listCourseEvaluationSummariesProblem = operations["listCourseEvaluationSummaries"]['responses'][400]['content']["application/problem+json"] | operations["listCourseEvaluationSummaries"]['responses'][500]['content']["application/problem+json"]
export type listCourseTagsInput = OperationInput<operations["listCourseTags"]['parameters']['path'], SortQuery<operations["listCourseTags"]['parameters']['query'], "name" | "categoryId">, operations["listCourseTags"]['parameters']['header'], RequestBodyOf<operations["listCourseTags"]>, false>
export type listCourseTagsOutput = import('./domain.js').Page<import('./domain.js').Tag>
export type listCourseTagsProblem = operations["listCourseTags"]['responses'][400]['content']["application/problem+json"] | operations["listCourseTags"]['responses'][404]['content']["application/problem+json"] | operations["listCourseTags"]['responses'][500]['content']["application/problem+json"]
export type listCurriculumsInput = OperationInput<operations["listCurriculums"]['parameters']['path'], SortQuery<operations["listCurriculums"]['parameters']['query'], "isFavorite" | "updatedAt" | "name">, operations["listCurriculums"]['parameters']['header'], RequestBodyOf<operations["listCurriculums"]>, false>
export type listCurriculumsOutput = import('./domain.js').Page<import('./domain.js').CurriculumSummary>
export type listCurriculumsProblem = operations["listCurriculums"]['responses'][400]['content']["application/problem+json"] | operations["listCurriculums"]['responses'][500]['content']["application/problem+json"]
export type listFeedbackReportsInput = OperationInput<operations["listFeedbackReports"]['parameters']['path'], SortQuery<operations["listFeedbackReports"]['parameters']['query'], "createdAt" | "updatedAt" | "status" | "kind" | "title">, operations["listFeedbackReports"]['parameters']['header'], RequestBodyOf<operations["listFeedbackReports"]>, false>
export type listFeedbackReportsOutput = import('./domain.js').Page<import('./domain.js').FeedbackReport>
export type listFeedbackReportsProblem = operations["listFeedbackReports"]['responses'][400]['content']["application/problem+json"] | operations["listFeedbackReports"]['responses'][500]['content']["application/problem+json"]
export type listGroupEventsInput = OperationInput<operations["listGroupEvents"]['parameters']['path'], operations["listGroupEvents"]['parameters']['query'], operations["listGroupEvents"]['parameters']['header'], RequestBodyOf<operations["listGroupEvents"]>, false>
export type listGroupEventsOutput = import('./domain.js').Page<import('./domain.js').GroupEvent>
export type listGroupEventsProblem = operations["listGroupEvents"]['responses'][400]['content']["application/problem+json"] | operations["listGroupEvents"]['responses'][500]['content']["application/problem+json"]
export type listGroupInvitationsInput = OperationInput<operations["listGroupInvitations"]['parameters']['path'], operations["listGroupInvitations"]['parameters']['query'], operations["listGroupInvitations"]['parameters']['header'], RequestBodyOf<operations["listGroupInvitations"]>, false>
export type listGroupInvitationsOutput = import('./domain.js').Page<import('./domain.js').GroupInvitation>
export type listGroupInvitationsProblem = operations["listGroupInvitations"]['responses'][400]['content']["application/problem+json"] | operations["listGroupInvitations"]['responses'][500]['content']["application/problem+json"]
export type listGroupRolesInput = OperationInput<operations["listGroupRoles"]['parameters']['path'], operations["listGroupRoles"]['parameters']['query'], operations["listGroupRoles"]['parameters']['header'], RequestBodyOf<operations["listGroupRoles"]>, false>
export type listGroupRolesOutput = import('./domain.js').Page<import('./domain.js').GroupRole>
export type listGroupRolesProblem = operations["listGroupRoles"]['responses'][400]['content']["application/problem+json"] | operations["listGroupRoles"]['responses'][500]['content']["application/problem+json"]
export type listGroupsInput = OperationInput<operations["listGroups"]['parameters']['path'], operations["listGroups"]['parameters']['query'], operations["listGroups"]['parameters']['header'], RequestBodyOf<operations["listGroups"]>, false>
export type listGroupsOutput = import('./domain.js').Page<import('./domain.js').Group>
export type listGroupsProblem = operations["listGroups"]['responses'][400]['content']["application/problem+json"] | operations["listGroups"]['responses'][500]['content']["application/problem+json"]
export type listManagedGroupEventsInput = OperationInput<operations["listManagedGroupEvents"]['parameters']['path'], operations["listManagedGroupEvents"]['parameters']['query'], operations["listManagedGroupEvents"]['parameters']['header'], RequestBodyOf<operations["listManagedGroupEvents"]>, false>
export type listManagedGroupEventsOutput = import('./domain.js').Page<import('./domain.js').ManagedGroupEvent>
export type listManagedGroupEventsProblem = operations["listManagedGroupEvents"]['responses'][400]['content']["application/problem+json"] | operations["listManagedGroupEvents"]['responses'][500]['content']["application/problem+json"]
export type listManagedGroupInvitationsInput = OperationInput<operations["listManagedGroupInvitations"]['parameters']['path'], operations["listManagedGroupInvitations"]['parameters']['query'], operations["listManagedGroupInvitations"]['parameters']['header'], RequestBodyOf<operations["listManagedGroupInvitations"]>, false>
export type listManagedGroupInvitationsOutput = import('./domain.js').Page<import('./domain.js').ManagedGroupInvitation>
export type listManagedGroupInvitationsProblem = operations["listManagedGroupInvitations"]['responses'][400]['content']["application/problem+json"] | operations["listManagedGroupInvitations"]['responses'][500]['content']["application/problem+json"]
export type listManagedGroupMembershipsInput = OperationInput<operations["listManagedGroupMemberships"]['parameters']['path'], operations["listManagedGroupMemberships"]['parameters']['query'], operations["listManagedGroupMemberships"]['parameters']['header'], RequestBodyOf<operations["listManagedGroupMemberships"]>, false>
export type listManagedGroupMembershipsOutput = import('./domain.js').Page<import('./domain.js').ManagedGroupMembership>
export type listManagedGroupMembershipsProblem = operations["listManagedGroupMemberships"]['responses'][400]['content']["application/problem+json"] | operations["listManagedGroupMemberships"]['responses'][500]['content']["application/problem+json"]
export type listPendingProfessorEvaluationsInput = OperationInput<operations["listPendingProfessorEvaluations"]['parameters']['path'], SortQuery<operations["listPendingProfessorEvaluations"]['parameters']['query'], "courseCode" | "courseName" | "classCode" | "professorName">, operations["listPendingProfessorEvaluations"]['parameters']['header'], RequestBodyOf<operations["listPendingProfessorEvaluations"]>, false>
export type listPendingProfessorEvaluationsOutput = import('./domain.js').Page<import('./domain.js').PendingProfessorEvaluation>
export type listPendingProfessorEvaluationsProblem = operations["listPendingProfessorEvaluations"]['responses'][400]['content']["application/problem+json"] | operations["listPendingProfessorEvaluations"]['responses'][500]['content']["application/problem+json"]
export type listPeriodPlansInput = OperationInput<operations["listPeriodPlans"]['parameters']['path'], SortQuery<operations["listPeriodPlans"]['parameters']['query'], "updatedAt" | "name" | "studyPeriodYear" | "studyPeriodYearPeriod" | "visibility">, operations["listPeriodPlans"]['parameters']['header'], RequestBodyOf<operations["listPeriodPlans"]>, false>
export type listPeriodPlansOutput = import('./domain.js').Page<import('./domain.js').PeriodPlanning>
export type listPeriodPlansProblem = operations["listPeriodPlans"]['responses'][400]['content']["application/problem+json"] | operations["listPeriodPlans"]['responses'][500]['content']["application/problem+json"]
export type listProfessorEvaluationSummariesInput = OperationInput<operations["listProfessorEvaluationSummaries"]['parameters']['path'], SortQuery<operations["listProfessorEvaluationSummaries"]['parameters']['query'], "professor.name" | "responseCount" | "wouldTakeAgain" | "fairness" | "clarity" | "difficulty">, operations["listProfessorEvaluationSummaries"]['parameters']['header'], RequestBodyOf<operations["listProfessorEvaluationSummaries"]>, false>
export type listProfessorEvaluationSummariesOutput = import('./domain.js').Page<import('./domain.js').ProfessorEvaluationSummary>
export type listProfessorEvaluationSummariesProblem = operations["listProfessorEvaluationSummaries"]['responses'][400]['content']["application/problem+json"] | operations["listProfessorEvaluationSummaries"]['responses'][500]['content']["application/problem+json"]
export type listPublicGroupMembershipsInput = OperationInput<operations["listPublicGroupMemberships"]['parameters']['path'], operations["listPublicGroupMemberships"]['parameters']['query'], operations["listPublicGroupMemberships"]['parameters']['header'], RequestBodyOf<operations["listPublicGroupMemberships"]>, false>
export type listPublicGroupMembershipsOutput = import('./domain.js').Page<import('./domain.js').PublicGroupMembership>
export type listPublicGroupMembershipsProblem = operations["listPublicGroupMemberships"]['responses'][400]['content']["application/problem+json"] | operations["listPublicGroupMemberships"]['responses'][500]['content']["application/problem+json"]
export type listPublicSharedPeriodPlansInput = OperationInput<operations["listPublicSharedPeriodPlans"]['parameters']['path'], SortQuery<operations["listPublicSharedPeriodPlans"]['parameters']['query'], "updatedAt" | "name" | "studyPeriodYear">, operations["listPublicSharedPeriodPlans"]['parameters']['header'], RequestBodyOf<operations["listPublicSharedPeriodPlans"]>, false>
export type listPublicSharedPeriodPlansOutput = import('./domain.js').Page<import('./domain.js').SharedPeriodPlanning>
export type listPublicSharedPeriodPlansProblem = operations["listPublicSharedPeriodPlans"]['responses'][400]['content']["application/problem+json"] | operations["listPublicSharedPeriodPlans"]['responses'][500]['content']["application/problem+json"]
export type listStudentCourseAttemptsInput = OperationInput<operations["listStudentCourseAttempts"]['parameters']['path'], SortQuery<operations["listStudentCourseAttempts"]['parameters']['query'], "createdAt" | "updatedAt" | "courseCode" | "status" | "grade">, operations["listStudentCourseAttempts"]['parameters']['header'], RequestBodyOf<operations["listStudentCourseAttempts"]>, false>
export type listStudentCourseAttemptsOutput = import('./domain.js').Page<import('./domain.js').StudentCourseAttempt>
export type listStudentCourseAttemptsProblem = operations["listStudentCourseAttempts"]['responses'][400]['content']["application/problem+json"] | operations["listStudentCourseAttempts"]['responses'][500]['content']["application/problem+json"]
export type listStudentsInput = OperationInput<operations["listStudents"]['parameters']['path'], SortQuery<operations["listStudents"]['parameters']['query'], "id" | "ra" | "name" | "entryYear">, operations["listStudents"]['parameters']['header'], RequestBodyOf<operations["listStudents"]>, false>
export type listStudentsOutput = import('./domain.js').Page<import('./domain.js').Student>
export type listStudentsProblem = operations["listStudents"]['responses'][400]['content']["application/problem+json"] | operations["listStudents"]['responses'][500]['content']["application/problem+json"]
export type listTagCoursesInput = OperationInput<operations["listTagCourses"]['parameters']['path'], SortQuery<operations["listTagCourses"]['parameters']['query'], "code" | "name" | "credits">, operations["listTagCourses"]['parameters']['header'], RequestBodyOf<operations["listTagCourses"]>, false>
export type listTagCoursesOutput = import('./domain.js').Page<import('./domain.js').TagRelatedCourse>
export type listTagCoursesProblem = operations["listTagCourses"]['responses'][400]['content']["application/problem+json"] | operations["listTagCourses"]['responses'][404]['content']["application/problem+json"] | operations["listTagCourses"]['responses'][500]['content']["application/problem+json"]
export type listTagsInput = OperationInput<operations["listTags"]['parameters']['path'], SortQuery<operations["listTags"]['parameters']['query'], "name" | "categoryId">, operations["listTags"]['parameters']['header'], RequestBodyOf<operations["listTags"]>, false>
export type listTagsOutput = import('./domain.js').Page<import('./domain.js').Tag>
export type listTagsProblem = operations["listTags"]['responses'][400]['content']["application/problem+json"] | operations["listTags"]['responses'][500]['content']["application/problem+json"]
export type listUserAbsencesInput = OperationInput<operations["listUserAbsences"]['parameters']['path'], SortQuery<operations["listUserAbsences"]['parameters']['query'], "date" | "courseCode" | "classCode" | "start" | "createdAt">, operations["listUserAbsences"]['parameters']['header'], RequestBodyOf<operations["listUserAbsences"]>, false>
export type listUserAbsencesOutput = import('./domain.js').Page<import('./domain.js').StudentAbsence>
export type listUserAbsencesProblem = operations["listUserAbsences"]['responses'][400]['content']["application/problem+json"] | operations["listUserAbsences"]['responses'][404]['content']["application/problem+json"] | operations["listUserAbsences"]['responses'][500]['content']["application/problem+json"]
export type listUserFeedbackReportsInput = OperationInput<operations["listUserFeedbackReports"]['parameters']['path'], SortQuery<operations["listUserFeedbackReports"]['parameters']['query'], "createdAt" | "updatedAt" | "status" | "kind" | "title">, operations["listUserFeedbackReports"]['parameters']['header'], RequestBodyOf<operations["listUserFeedbackReports"]>, false>
export type listUserFeedbackReportsOutput = import('./domain.js').Page<import('./domain.js').FeedbackReport>
export type listUserFeedbackReportsProblem = operations["listUserFeedbackReports"]['responses'][400]['content']["application/problem+json"] | operations["listUserFeedbackReports"]['responses'][500]['content']["application/problem+json"]
export type listUserFriendshipsInput = OperationInput<operations["listUserFriendships"]['parameters']['path'], SortQuery<operations["listUserFriendships"]['parameters']['query'], "updatedAt" | "status">, operations["listUserFriendships"]['parameters']['header'], RequestBodyOf<operations["listUserFriendships"]>, false>
export type listUserFriendshipsOutput = import('./domain.js').Page<import('./domain.js').UserFriendship>
export type listUserFriendshipsProblem = operations["listUserFriendships"]['responses'][400]['content']["application/problem+json"] | operations["listUserFriendships"]['responses'][500]['content']["application/problem+json"]
export type listUserGroupMembershipsInput = OperationInput<operations["listUserGroupMemberships"]['parameters']['path'], operations["listUserGroupMemberships"]['parameters']['query'], operations["listUserGroupMemberships"]['parameters']['header'], RequestBodyOf<operations["listUserGroupMemberships"]>, false>
export type listUserGroupMembershipsOutput = import('./domain.js').Page<import('./domain.js').OwnGroupMembership>
export type listUserGroupMembershipsProblem = operations["listUserGroupMemberships"]['responses'][400]['content']["application/problem+json"] | operations["listUserGroupMemberships"]['responses'][500]['content']["application/problem+json"]
export type listUserInterestsInput = OperationInput<operations["listUserInterests"]['parameters']['path'], SortQuery<operations["listUserInterests"]['parameters']['query'], "name">, operations["listUserInterests"]['parameters']['header'], RequestBodyOf<operations["listUserInterests"]>, false>
export type listUserInterestsOutput = import('./domain.js').Page<import('./domain.js').UserInterest>
export type listUserInterestsProblem = operations["listUserInterests"]['responses'][400]['content']["application/problem+json"] | operations["listUserInterests"]['responses'][500]['content']["application/problem+json"]
export type listUserPeopleInput = OperationInput<operations["listUserPeople"]['parameters']['path'], SortQuery<operations["listUserPeople"]['parameters']['query'], "displayName">, operations["listUserPeople"]['parameters']['header'], RequestBodyOf<operations["listUserPeople"]>, false>
export type listUserPeopleOutput = import('./domain.js').Page<import('./domain.js').UserPublicPerson>
export type listUserPeopleProblem = operations["listUserPeople"]['responses'][400]['content']["application/problem+json"] | operations["listUserPeople"]['responses'][500]['content']["application/problem+json"]
export type listUserSharedPeriodPlansInput = OperationInput<operations["listUserSharedPeriodPlans"]['parameters']['path'], SortQuery<operations["listUserSharedPeriodPlans"]['parameters']['query'], "updatedAt" | "name" | "studyPeriodYear">, operations["listUserSharedPeriodPlans"]['parameters']['header'], RequestBodyOf<operations["listUserSharedPeriodPlans"]>, false>
export type listUserSharedPeriodPlansOutput = import('./domain.js').Page<import('./domain.js').SharedPeriodPlanning>
export type listUserSharedPeriodPlansProblem = operations["listUserSharedPeriodPlans"]['responses'][400]['content']["application/problem+json"] | operations["listUserSharedPeriodPlans"]['responses'][500]['content']["application/problem+json"]
export type publishGroupEventInput = OperationInput<operations["publishGroupEvent"]['parameters']['path'], operations["publishGroupEvent"]['parameters']['query'], operations["publishGroupEvent"]['parameters']['header'], RequestBodyOf<operations["publishGroupEvent"]>, false>
export type publishGroupEventOutput = import('./domain.js').ManagedGroupEvent
export type publishGroupEventProblem = operations["publishGroupEvent"]['responses'][400]['content']["application/problem+json"] | operations["publishGroupEvent"]['responses'][404]['content']["application/problem+json"] | operations["publishGroupEvent"]['responses'][500]['content']["application/problem+json"]
export type putGroupAvatarInput = OperationInput<operations["putGroupAvatar"]['parameters']['path'], operations["putGroupAvatar"]['parameters']['query'], operations["putGroupAvatar"]['parameters']['header'], RequestBodyOf<operations["putGroupAvatar"]>, true>
export type putGroupAvatarOutput = operations["putGroupAvatar"]['responses'][200]['content']["application/json"]
export type putGroupAvatarProblem = operations["putGroupAvatar"]['responses'][400]['content']["application/problem+json"] | operations["putGroupAvatar"]['responses'][401]['content']["application/problem+json"] | operations["putGroupAvatar"]['responses'][403]['content']["application/problem+json"] | operations["putGroupAvatar"]['responses'][404]['content']["application/problem+json"] | operations["putGroupAvatar"]['responses'][409]['content']["application/problem+json"] | operations["putGroupAvatar"]['responses'][413]['content']["application/problem+json"] | operations["putGroupAvatar"]['responses'][422]['content']["application/problem+json"] | operations["putGroupAvatar"]['responses'][429]['content']["application/problem+json"] | operations["putGroupAvatar"]['responses'][500]['content']["application/problem+json"] | operations["putGroupAvatar"]['responses'][503]['content']["application/problem+json"]
export type putUserAvatarInput = OperationInput<operations["putUserAvatar"]['parameters']['path'], operations["putUserAvatar"]['parameters']['query'], operations["putUserAvatar"]['parameters']['header'], RequestBodyOf<operations["putUserAvatar"]>, true>
export type putUserAvatarOutput = operations["putUserAvatar"]['responses'][200]['content']["application/json"]
export type putUserAvatarProblem = operations["putUserAvatar"]['responses'][400]['content']["application/problem+json"] | operations["putUserAvatar"]['responses'][401]['content']["application/problem+json"] | operations["putUserAvatar"]['responses'][403]['content']["application/problem+json"] | operations["putUserAvatar"]['responses'][404]['content']["application/problem+json"] | operations["putUserAvatar"]['responses'][409]['content']["application/problem+json"] | operations["putUserAvatar"]['responses'][413]['content']["application/problem+json"] | operations["putUserAvatar"]['responses'][422]['content']["application/problem+json"] | operations["putUserAvatar"]['responses'][429]['content']["application/problem+json"] | operations["putUserAvatar"]['responses'][500]['content']["application/problem+json"] | operations["putUserAvatar"]['responses'][503]['content']["application/problem+json"]
export type removeCourseTagInput = OperationInput<operations["removeCourseTag"]['parameters']['path'], operations["removeCourseTag"]['parameters']['query'], operations["removeCourseTag"]['parameters']['header'], RequestBodyOf<operations["removeCourseTag"]>, false>
export type removeCourseTagOutput = void
export type removeCourseTagProblem = operations["removeCourseTag"]['responses'][400]['content']["application/problem+json"] | operations["removeCourseTag"]['responses'][422]['content']["application/problem+json"] | operations["removeCourseTag"]['responses'][500]['content']["application/problem+json"]
export type replaceBotGrantInput = OperationInput<operations["replaceBotGrant"]['parameters']['path'], operations["replaceBotGrant"]['parameters']['query'], operations["replaceBotGrant"]['parameters']['header'], RequestBodyOf<operations["replaceBotGrant"]>, true>
export type replaceBotGrantOutput = void
export type replaceBotGrantProblem = operations["replaceBotGrant"]['responses'][400]['content']["application/problem+json"] | operations["replaceBotGrant"]['responses'][404]['content']["application/problem+json"] | operations["replaceBotGrant"]['responses'][500]['content']["application/problem+json"]
export type unsubscribeExchangeNoticesInput = OperationInput<operations["unsubscribeExchangeNotices"]['parameters']['path'], operations["unsubscribeExchangeNotices"]['parameters']['query'], operations["unsubscribeExchangeNotices"]['parameters']['header'], RequestBodyOf<operations["unsubscribeExchangeNotices"]>, false>
export type unsubscribeExchangeNoticesOutput = operations["unsubscribeExchangeNotices"]['responses'][200]['content']["application/json"]
export type unsubscribeExchangeNoticesProblem = operations["unsubscribeExchangeNotices"]['responses'][400]['content']["application/problem+json"] | operations["unsubscribeExchangeNotices"]['responses'][500]['content']["application/problem+json"]
export type updateAuthIdentityInput = OperationInput<operations["updateAuthIdentity"]['parameters']['path'], operations["updateAuthIdentity"]['parameters']['query'], operations["updateAuthIdentity"]['parameters']['header'], RequestBodyOf<operations["updateAuthIdentity"]>, true>
export type updateAuthIdentityOutput = import('./domain.js').AuthIdentity
export type updateAuthIdentityProblem = operations["updateAuthIdentity"]['responses'][400]['content']["application/problem+json"] | operations["updateAuthIdentity"]['responses'][403]['content']["application/problem+json"] | operations["updateAuthIdentity"]['responses'][404]['content']["application/problem+json"] | operations["updateAuthIdentity"]['responses'][500]['content']["application/problem+json"]
export type updateCategoryInput = OperationInput<operations["updateCategory"]['parameters']['path'], operations["updateCategory"]['parameters']['query'], operations["updateCategory"]['parameters']['header'], RequestBodyOf<operations["updateCategory"]>, true>
export type updateCategoryOutput = import('./domain.js').Category
export type updateCategoryProblem = operations["updateCategory"]['responses'][400]['content']["application/problem+json"] | operations["updateCategory"]['responses'][404]['content']["application/problem+json"] | operations["updateCategory"]['responses'][409]['content']["application/problem+json"] | operations["updateCategory"]['responses'][500]['content']["application/problem+json"]
export type updateCurriculumsInput = OperationInput<operations["updateCurriculums"]['parameters']['path'], operations["updateCurriculums"]['parameters']['query'], operations["updateCurriculums"]['parameters']['header'], RequestBodyOf<operations["updateCurriculums"]>, true>
export type updateCurriculumsOutput = import('./domain.js').Curriculum
export type updateCurriculumsProblem = operations["updateCurriculums"]['responses'][400]['content']["application/problem+json"] | operations["updateCurriculums"]['responses'][404]['content']["application/problem+json"] | operations["updateCurriculums"]['responses'][422]['content']["application/problem+json"] | operations["updateCurriculums"]['responses'][500]['content']["application/problem+json"]
export type updateExchangeNoticeSubscriptionInput = OperationInput<operations["updateExchangeNoticeSubscription"]['parameters']['path'], operations["updateExchangeNoticeSubscription"]['parameters']['query'], operations["updateExchangeNoticeSubscription"]['parameters']['header'], RequestBodyOf<operations["updateExchangeNoticeSubscription"]>, true>
export type updateExchangeNoticeSubscriptionOutput = import('./domain.js').ExchangeNoticeSubscription
export type updateExchangeNoticeSubscriptionProblem = operations["updateExchangeNoticeSubscription"]['responses'][400]['content']["application/problem+json"] | operations["updateExchangeNoticeSubscription"]['responses'][422]['content']["application/problem+json"] | operations["updateExchangeNoticeSubscription"]['responses'][500]['content']["application/problem+json"]
export type updateFeedbackReportInput = OperationInput<operations["updateFeedbackReport"]['parameters']['path'], operations["updateFeedbackReport"]['parameters']['query'], operations["updateFeedbackReport"]['parameters']['header'], RequestBodyOf<operations["updateFeedbackReport"]>, true>
export type updateFeedbackReportOutput = import('./domain.js').FeedbackReport
export type updateFeedbackReportProblem = operations["updateFeedbackReport"]['responses'][400]['content']["application/problem+json"] | operations["updateFeedbackReport"]['responses'][404]['content']["application/problem+json"] | operations["updateFeedbackReport"]['responses'][500]['content']["application/problem+json"]
export type updateGroupInput = OperationInput<operations["updateGroup"]['parameters']['path'], operations["updateGroup"]['parameters']['query'], operations["updateGroup"]['parameters']['header'], RequestBodyOf<operations["updateGroup"]>, true>
export type updateGroupOutput = import('./domain.js').Group
export type updateGroupProblem = operations["updateGroup"]['responses'][400]['content']["application/problem+json"] | operations["updateGroup"]['responses'][404]['content']["application/problem+json"] | operations["updateGroup"]['responses'][422]['content']["application/problem+json"] | operations["updateGroup"]['responses'][500]['content']["application/problem+json"]
export type updateGroupEventInput = OperationInput<operations["updateGroupEvent"]['parameters']['path'], operations["updateGroupEvent"]['parameters']['query'], operations["updateGroupEvent"]['parameters']['header'], RequestBodyOf<operations["updateGroupEvent"]>, true>
export type updateGroupEventOutput = import('./domain.js').ManagedGroupEvent
export type updateGroupEventProblem = operations["updateGroupEvent"]['responses'][400]['content']["application/problem+json"] | operations["updateGroupEvent"]['responses'][404]['content']["application/problem+json"] | operations["updateGroupEvent"]['responses'][500]['content']["application/problem+json"]
export type updateGroupRoleInput = OperationInput<operations["updateGroupRole"]['parameters']['path'], operations["updateGroupRole"]['parameters']['query'], operations["updateGroupRole"]['parameters']['header'], RequestBodyOf<operations["updateGroupRole"]>, true>
export type updateGroupRoleOutput = import('./domain.js').GroupRole
export type updateGroupRoleProblem = operations["updateGroupRole"]['responses'][400]['content']["application/problem+json"] | operations["updateGroupRole"]['responses'][404]['content']["application/problem+json"] | operations["updateGroupRole"]['responses'][500]['content']["application/problem+json"]
export type updateManagedGroupMembershipInput = OperationInput<operations["updateManagedGroupMembership"]['parameters']['path'], operations["updateManagedGroupMembership"]['parameters']['query'], operations["updateManagedGroupMembership"]['parameters']['header'], RequestBodyOf<operations["updateManagedGroupMembership"]>, true>
export type updateManagedGroupMembershipOutput = import('./domain.js').ManagedGroupMembership
export type updateManagedGroupMembershipProblem = operations["updateManagedGroupMembership"]['responses'][400]['content']["application/problem+json"] | operations["updateManagedGroupMembership"]['responses'][404]['content']["application/problem+json"] | operations["updateManagedGroupMembership"]['responses'][500]['content']["application/problem+json"]
export type updatePeriodPlansInput = OperationInput<operations["updatePeriodPlans"]['parameters']['path'], operations["updatePeriodPlans"]['parameters']['query'], operations["updatePeriodPlans"]['parameters']['header'], RequestBodyOf<operations["updatePeriodPlans"]>, true>
export type updatePeriodPlansOutput = import('./domain.js').PeriodPlanning
export type updatePeriodPlansProblem = operations["updatePeriodPlans"]['responses'][400]['content']["application/problem+json"] | operations["updatePeriodPlans"]['responses'][404]['content']["application/problem+json"] | operations["updatePeriodPlans"]['responses'][422]['content']["application/problem+json"] | operations["updatePeriodPlans"]['responses'][500]['content']["application/problem+json"]
export type updateProfessorEvaluationInput = OperationInput<operations["updateProfessorEvaluation"]['parameters']['path'], operations["updateProfessorEvaluation"]['parameters']['query'], operations["updateProfessorEvaluation"]['parameters']['header'], RequestBodyOf<operations["updateProfessorEvaluation"]>, true>
export type updateProfessorEvaluationOutput = import('./domain.js').ProfessorEvaluation
export type updateProfessorEvaluationProblem = operations["updateProfessorEvaluation"]['responses'][400]['content']["application/problem+json"] | operations["updateProfessorEvaluation"]['responses'][422]['content']["application/problem+json"] | operations["updateProfessorEvaluation"]['responses'][500]['content']["application/problem+json"]
export type updateStudentCourseAttemptsInput = OperationInput<operations["updateStudentCourseAttempts"]['parameters']['path'], operations["updateStudentCourseAttempts"]['parameters']['query'], operations["updateStudentCourseAttempts"]['parameters']['header'], RequestBodyOf<operations["updateStudentCourseAttempts"]>, true>
export type updateStudentCourseAttemptsOutput = import('./domain.js').StudentCourseAttempt
export type updateStudentCourseAttemptsProblem = operations["updateStudentCourseAttempts"]['responses'][400]['content']["application/problem+json"] | operations["updateStudentCourseAttempts"]['responses'][404]['content']["application/problem+json"] | operations["updateStudentCourseAttempts"]['responses'][409]['content']["application/problem+json"] | operations["updateStudentCourseAttempts"]['responses'][422]['content']["application/problem+json"] | operations["updateStudentCourseAttempts"]['responses'][500]['content']["application/problem+json"]
export type updateStudentsInput = OperationInput<operations["updateStudents"]['parameters']['path'], operations["updateStudents"]['parameters']['query'], operations["updateStudents"]['parameters']['header'], RequestBodyOf<operations["updateStudents"]>, true>
export type updateStudentsOutput = import('./domain.js').Student
export type updateStudentsProblem = operations["updateStudents"]['responses'][400]['content']["application/problem+json"] | operations["updateStudents"]['responses'][404]['content']["application/problem+json"] | operations["updateStudents"]['responses'][422]['content']["application/problem+json"] | operations["updateStudents"]['responses'][500]['content']["application/problem+json"]
export type updateTagInput = OperationInput<operations["updateTag"]['parameters']['path'], operations["updateTag"]['parameters']['query'], operations["updateTag"]['parameters']['header'], RequestBodyOf<operations["updateTag"]>, true>
export type updateTagOutput = import('./domain.js').Tag
export type updateTagProblem = operations["updateTag"]['responses'][400]['content']["application/problem+json"] | operations["updateTag"]['responses'][404]['content']["application/problem+json"] | operations["updateTag"]['responses'][409]['content']["application/problem+json"] | operations["updateTag"]['responses'][422]['content']["application/problem+json"] | operations["updateTag"]['responses'][500]['content']["application/problem+json"]
export type updateUserInput = OperationInput<operations["updateUser"]['parameters']['path'], operations["updateUser"]['parameters']['query'], operations["updateUser"]['parameters']['header'], RequestBodyOf<operations["updateUser"]>, true>
export type updateUserOutput = import('./domain.js').User
export type updateUserProblem = operations["updateUser"]['responses'][400]['content']["application/problem+json"] | operations["updateUser"]['responses'][404]['content']["application/problem+json"] | operations["updateUser"]['responses'][500]['content']["application/problem+json"]
export type updateUserGroupMembershipInput = OperationInput<operations["updateUserGroupMembership"]['parameters']['path'], operations["updateUserGroupMembership"]['parameters']['query'], operations["updateUserGroupMembership"]['parameters']['header'], RequestBodyOf<operations["updateUserGroupMembership"]>, true>
export type updateUserGroupMembershipOutput = import('./domain.js').OwnGroupMembership
export type updateUserGroupMembershipProblem = operations["updateUserGroupMembership"]['responses'][400]['content']["application/problem+json"] | operations["updateUserGroupMembership"]['responses'][404]['content']["application/problem+json"] | operations["updateUserGroupMembership"]['responses'][500]['content']["application/problem+json"]
export type updateUserInterestInput = OperationInput<operations["updateUserInterest"]['parameters']['path'], operations["updateUserInterest"]['parameters']['query'], operations["updateUserInterest"]['parameters']['header'], RequestBodyOf<operations["updateUserInterest"]>, false>
export type updateUserInterestOutput = void
export type updateUserInterestProblem = operations["updateUserInterest"]['responses'][400]['content']["application/problem+json"] | operations["updateUserInterest"]['responses'][422]['content']["application/problem+json"] | operations["updateUserInterest"]['responses'][500]['content']["application/problem+json"]
export type updateUserPreferencesInput = OperationInput<operations["updateUserPreferences"]['parameters']['path'], operations["updateUserPreferences"]['parameters']['query'], operations["updateUserPreferences"]['parameters']['header'], RequestBodyOf<operations["updateUserPreferences"]>, true>
export type updateUserPreferencesOutput = import('./domain.js').UserPreferences
export type updateUserPreferencesProblem = operations["updateUserPreferences"]['responses'][400]['content']["application/problem+json"] | operations["updateUserPreferences"]['responses'][404]['content']["application/problem+json"] | operations["updateUserPreferences"]['responses'][500]['content']["application/problem+json"]
export type updateUserProfileInput = OperationInput<operations["updateUserProfile"]['parameters']['path'], operations["updateUserProfile"]['parameters']['query'], operations["updateUserProfile"]['parameters']['header'], RequestBodyOf<operations["updateUserProfile"]>, true>
export type updateUserProfileOutput = import('./domain.js').UserProfile
export type updateUserProfileProblem = operations["updateUserProfile"]['responses'][400]['content']["application/problem+json"] | operations["updateUserProfile"]['responses'][404]['content']["application/problem+json"] | operations["updateUserProfile"]['responses'][500]['content']["application/problem+json"]

export interface OperationInputs {
    acceptGroupInvitation: acceptGroupInvitationInput
    acceptUserFriendship: acceptUserFriendshipInput
    addCourseTag: addCourseTagInput
    archiveGroup: archiveGroupInput
    cancelGroupEvent: cancelGroupEventInput
    createAuthIdentity: createAuthIdentityInput
    createCategory: createCategoryInput
    createCurriculums: createCurriculumsInput
    createFeedbackReport: createFeedbackReportInput
    createGroup: createGroupInput
    createGroupEvent: createGroupEventInput
    createGroupInvitation: createGroupInvitationInput
    createGroupRole: createGroupRoleInput
    createPeriodPlans: createPeriodPlansInput
    createStudentAbsences: createStudentAbsencesInput
    createStudentCourseAttempts: createStudentCourseAttemptsInput
    createStudentHistory: createStudentHistoryInput
    createStudents: createStudentsInput
    createTag: createTagInput
    createUserFeedbackReport: createUserFeedbackReportInput
    createUserFriendship: createUserFriendshipInput
    declineGroupInvitation: declineGroupInvitationInput
    deleteCategory: deleteCategoryInput
    deleteCurriculums: deleteCurriculumsInput
    deleteGroupAvatar: deleteGroupAvatarInput
    deleteGroupRole: deleteGroupRoleInput
    deletePeriodPlans: deletePeriodPlansInput
    deleteStudentAbsences: deleteStudentAbsencesInput
    deleteStudentCourseAttempts: deleteStudentCourseAttemptsInput
    deleteStudents: deleteStudentsInput
    deleteTag: deleteTagInput
    deleteUserAvatar: deleteUserAvatarInput
    deleteUserFriendship: deleteUserFriendshipInput
    deleteUserInterest: deleteUserInterestInput
    getCategory: getCategoryInput
    getCourseProfessorEvaluationSummary: getCourseProfessorEvaluationSummaryInput
    getCurrentUser: getCurrentUserInput
    getCurriculums: getCurriculumsInput
    getExchangeNoticeSubscription: getExchangeNoticeSubscriptionInput
    getGroup: getGroupInput
    getGroupEvent: getGroupEventInput
    getImageVariant: getImageVariantInput
    getPeriodPlans: getPeriodPlansInput
    getProfessorEvaluation: getProfessorEvaluationInput
    getPublicGroupMembership: getPublicGroupMembershipInput
    getPublicSharedPeriodPlan: getPublicSharedPeriodPlanInput
    getStudentCourseAttempts: getStudentCourseAttemptsInput
    getStudents: getStudentsInput
    getTag: getTagInput
    getUser: getUserInput
    getUserGroupMembership: getUserGroupMembershipInput
    getUserPerson: getUserPersonInput
    getUserPreferences: getUserPreferencesInput
    getUserProfile: getUserProfileInput
    getUserSharedPeriodPlan: getUserSharedPeriodPlanInput
    listAuthIdentities: listAuthIdentitiesInput
    listBotGrants: listBotGrantsInput
    listBots: listBotsInput
    listCategories: listCategoriesInput
    listCourseEvaluationSummaries: listCourseEvaluationSummariesInput
    listCourseTags: listCourseTagsInput
    listCurriculums: listCurriculumsInput
    listFeedbackReports: listFeedbackReportsInput
    listGroupEvents: listGroupEventsInput
    listGroupInvitations: listGroupInvitationsInput
    listGroupRoles: listGroupRolesInput
    listGroups: listGroupsInput
    listManagedGroupEvents: listManagedGroupEventsInput
    listManagedGroupInvitations: listManagedGroupInvitationsInput
    listManagedGroupMemberships: listManagedGroupMembershipsInput
    listPendingProfessorEvaluations: listPendingProfessorEvaluationsInput
    listPeriodPlans: listPeriodPlansInput
    listProfessorEvaluationSummaries: listProfessorEvaluationSummariesInput
    listPublicGroupMemberships: listPublicGroupMembershipsInput
    listPublicSharedPeriodPlans: listPublicSharedPeriodPlansInput
    listStudentCourseAttempts: listStudentCourseAttemptsInput
    listStudents: listStudentsInput
    listTagCourses: listTagCoursesInput
    listTags: listTagsInput
    listUserAbsences: listUserAbsencesInput
    listUserFeedbackReports: listUserFeedbackReportsInput
    listUserFriendships: listUserFriendshipsInput
    listUserGroupMemberships: listUserGroupMembershipsInput
    listUserInterests: listUserInterestsInput
    listUserPeople: listUserPeopleInput
    listUserSharedPeriodPlans: listUserSharedPeriodPlansInput
    publishGroupEvent: publishGroupEventInput
    putGroupAvatar: putGroupAvatarInput
    putUserAvatar: putUserAvatarInput
    removeCourseTag: removeCourseTagInput
    replaceBotGrant: replaceBotGrantInput
    unsubscribeExchangeNotices: unsubscribeExchangeNoticesInput
    updateAuthIdentity: updateAuthIdentityInput
    updateCategory: updateCategoryInput
    updateCurriculums: updateCurriculumsInput
    updateExchangeNoticeSubscription: updateExchangeNoticeSubscriptionInput
    updateFeedbackReport: updateFeedbackReportInput
    updateGroup: updateGroupInput
    updateGroupEvent: updateGroupEventInput
    updateGroupRole: updateGroupRoleInput
    updateManagedGroupMembership: updateManagedGroupMembershipInput
    updatePeriodPlans: updatePeriodPlansInput
    updateProfessorEvaluation: updateProfessorEvaluationInput
    updateStudentCourseAttempts: updateStudentCourseAttemptsInput
    updateStudents: updateStudentsInput
    updateTag: updateTagInput
    updateUser: updateUserInput
    updateUserGroupMembership: updateUserGroupMembershipInput
    updateUserInterest: updateUserInterestInput
    updateUserPreferences: updateUserPreferencesInput
    updateUserProfile: updateUserProfileInput
}

export interface OperationOutputs {
    acceptGroupInvitation: acceptGroupInvitationOutput
    acceptUserFriendship: acceptUserFriendshipOutput
    addCourseTag: addCourseTagOutput
    archiveGroup: archiveGroupOutput
    cancelGroupEvent: cancelGroupEventOutput
    createAuthIdentity: createAuthIdentityOutput
    createCategory: createCategoryOutput
    createCurriculums: createCurriculumsOutput
    createFeedbackReport: createFeedbackReportOutput
    createGroup: createGroupOutput
    createGroupEvent: createGroupEventOutput
    createGroupInvitation: createGroupInvitationOutput
    createGroupRole: createGroupRoleOutput
    createPeriodPlans: createPeriodPlansOutput
    createStudentAbsences: createStudentAbsencesOutput
    createStudentCourseAttempts: createStudentCourseAttemptsOutput
    createStudentHistory: createStudentHistoryOutput
    createStudents: createStudentsOutput
    createTag: createTagOutput
    createUserFeedbackReport: createUserFeedbackReportOutput
    createUserFriendship: createUserFriendshipOutput
    declineGroupInvitation: declineGroupInvitationOutput
    deleteCategory: deleteCategoryOutput
    deleteCurriculums: deleteCurriculumsOutput
    deleteGroupAvatar: deleteGroupAvatarOutput
    deleteGroupRole: deleteGroupRoleOutput
    deletePeriodPlans: deletePeriodPlansOutput
    deleteStudentAbsences: deleteStudentAbsencesOutput
    deleteStudentCourseAttempts: deleteStudentCourseAttemptsOutput
    deleteStudents: deleteStudentsOutput
    deleteTag: deleteTagOutput
    deleteUserAvatar: deleteUserAvatarOutput
    deleteUserFriendship: deleteUserFriendshipOutput
    deleteUserInterest: deleteUserInterestOutput
    getCategory: getCategoryOutput
    getCourseProfessorEvaluationSummary: getCourseProfessorEvaluationSummaryOutput
    getCurrentUser: getCurrentUserOutput
    getCurriculums: getCurriculumsOutput
    getExchangeNoticeSubscription: getExchangeNoticeSubscriptionOutput
    getGroup: getGroupOutput
    getGroupEvent: getGroupEventOutput
    getImageVariant: getImageVariantOutput
    getPeriodPlans: getPeriodPlansOutput
    getProfessorEvaluation: getProfessorEvaluationOutput
    getPublicGroupMembership: getPublicGroupMembershipOutput
    getPublicSharedPeriodPlan: getPublicSharedPeriodPlanOutput
    getStudentCourseAttempts: getStudentCourseAttemptsOutput
    getStudents: getStudentsOutput
    getTag: getTagOutput
    getUser: getUserOutput
    getUserGroupMembership: getUserGroupMembershipOutput
    getUserPerson: getUserPersonOutput
    getUserPreferences: getUserPreferencesOutput
    getUserProfile: getUserProfileOutput
    getUserSharedPeriodPlan: getUserSharedPeriodPlanOutput
    listAuthIdentities: listAuthIdentitiesOutput
    listBotGrants: listBotGrantsOutput
    listBots: listBotsOutput
    listCategories: listCategoriesOutput
    listCourseEvaluationSummaries: listCourseEvaluationSummariesOutput
    listCourseTags: listCourseTagsOutput
    listCurriculums: listCurriculumsOutput
    listFeedbackReports: listFeedbackReportsOutput
    listGroupEvents: listGroupEventsOutput
    listGroupInvitations: listGroupInvitationsOutput
    listGroupRoles: listGroupRolesOutput
    listGroups: listGroupsOutput
    listManagedGroupEvents: listManagedGroupEventsOutput
    listManagedGroupInvitations: listManagedGroupInvitationsOutput
    listManagedGroupMemberships: listManagedGroupMembershipsOutput
    listPendingProfessorEvaluations: listPendingProfessorEvaluationsOutput
    listPeriodPlans: listPeriodPlansOutput
    listProfessorEvaluationSummaries: listProfessorEvaluationSummariesOutput
    listPublicGroupMemberships: listPublicGroupMembershipsOutput
    listPublicSharedPeriodPlans: listPublicSharedPeriodPlansOutput
    listStudentCourseAttempts: listStudentCourseAttemptsOutput
    listStudents: listStudentsOutput
    listTagCourses: listTagCoursesOutput
    listTags: listTagsOutput
    listUserAbsences: listUserAbsencesOutput
    listUserFeedbackReports: listUserFeedbackReportsOutput
    listUserFriendships: listUserFriendshipsOutput
    listUserGroupMemberships: listUserGroupMembershipsOutput
    listUserInterests: listUserInterestsOutput
    listUserPeople: listUserPeopleOutput
    listUserSharedPeriodPlans: listUserSharedPeriodPlansOutput
    publishGroupEvent: publishGroupEventOutput
    putGroupAvatar: putGroupAvatarOutput
    putUserAvatar: putUserAvatarOutput
    removeCourseTag: removeCourseTagOutput
    replaceBotGrant: replaceBotGrantOutput
    unsubscribeExchangeNotices: unsubscribeExchangeNoticesOutput
    updateAuthIdentity: updateAuthIdentityOutput
    updateCategory: updateCategoryOutput
    updateCurriculums: updateCurriculumsOutput
    updateExchangeNoticeSubscription: updateExchangeNoticeSubscriptionOutput
    updateFeedbackReport: updateFeedbackReportOutput
    updateGroup: updateGroupOutput
    updateGroupEvent: updateGroupEventOutput
    updateGroupRole: updateGroupRoleOutput
    updateManagedGroupMembership: updateManagedGroupMembershipOutput
    updatePeriodPlans: updatePeriodPlansOutput
    updateProfessorEvaluation: updateProfessorEvaluationOutput
    updateStudentCourseAttempts: updateStudentCourseAttemptsOutput
    updateStudents: updateStudentsOutput
    updateTag: updateTagOutput
    updateUser: updateUserOutput
    updateUserGroupMembership: updateUserGroupMembershipOutput
    updateUserInterest: updateUserInterestOutput
    updateUserPreferences: updateUserPreferencesOutput
    updateUserProfile: updateUserProfileOutput
}

export interface OperationProblems {
    acceptGroupInvitation: acceptGroupInvitationProblem
    acceptUserFriendship: acceptUserFriendshipProblem
    addCourseTag: addCourseTagProblem
    archiveGroup: archiveGroupProblem
    cancelGroupEvent: cancelGroupEventProblem
    createAuthIdentity: createAuthIdentityProblem
    createCategory: createCategoryProblem
    createCurriculums: createCurriculumsProblem
    createFeedbackReport: createFeedbackReportProblem
    createGroup: createGroupProblem
    createGroupEvent: createGroupEventProblem
    createGroupInvitation: createGroupInvitationProblem
    createGroupRole: createGroupRoleProblem
    createPeriodPlans: createPeriodPlansProblem
    createStudentAbsences: createStudentAbsencesProblem
    createStudentCourseAttempts: createStudentCourseAttemptsProblem
    createStudentHistory: createStudentHistoryProblem
    createStudents: createStudentsProblem
    createTag: createTagProblem
    createUserFeedbackReport: createUserFeedbackReportProblem
    createUserFriendship: createUserFriendshipProblem
    declineGroupInvitation: declineGroupInvitationProblem
    deleteCategory: deleteCategoryProblem
    deleteCurriculums: deleteCurriculumsProblem
    deleteGroupAvatar: deleteGroupAvatarProblem
    deleteGroupRole: deleteGroupRoleProblem
    deletePeriodPlans: deletePeriodPlansProblem
    deleteStudentAbsences: deleteStudentAbsencesProblem
    deleteStudentCourseAttempts: deleteStudentCourseAttemptsProblem
    deleteStudents: deleteStudentsProblem
    deleteTag: deleteTagProblem
    deleteUserAvatar: deleteUserAvatarProblem
    deleteUserFriendship: deleteUserFriendshipProblem
    deleteUserInterest: deleteUserInterestProblem
    getCategory: getCategoryProblem
    getCourseProfessorEvaluationSummary: getCourseProfessorEvaluationSummaryProblem
    getCurrentUser: getCurrentUserProblem
    getCurriculums: getCurriculumsProblem
    getExchangeNoticeSubscription: getExchangeNoticeSubscriptionProblem
    getGroup: getGroupProblem
    getGroupEvent: getGroupEventProblem
    getImageVariant: getImageVariantProblem
    getPeriodPlans: getPeriodPlansProblem
    getProfessorEvaluation: getProfessorEvaluationProblem
    getPublicGroupMembership: getPublicGroupMembershipProblem
    getPublicSharedPeriodPlan: getPublicSharedPeriodPlanProblem
    getStudentCourseAttempts: getStudentCourseAttemptsProblem
    getStudents: getStudentsProblem
    getTag: getTagProblem
    getUser: getUserProblem
    getUserGroupMembership: getUserGroupMembershipProblem
    getUserPerson: getUserPersonProblem
    getUserPreferences: getUserPreferencesProblem
    getUserProfile: getUserProfileProblem
    getUserSharedPeriodPlan: getUserSharedPeriodPlanProblem
    listAuthIdentities: listAuthIdentitiesProblem
    listBotGrants: listBotGrantsProblem
    listBots: listBotsProblem
    listCategories: listCategoriesProblem
    listCourseEvaluationSummaries: listCourseEvaluationSummariesProblem
    listCourseTags: listCourseTagsProblem
    listCurriculums: listCurriculumsProblem
    listFeedbackReports: listFeedbackReportsProblem
    listGroupEvents: listGroupEventsProblem
    listGroupInvitations: listGroupInvitationsProblem
    listGroupRoles: listGroupRolesProblem
    listGroups: listGroupsProblem
    listManagedGroupEvents: listManagedGroupEventsProblem
    listManagedGroupInvitations: listManagedGroupInvitationsProblem
    listManagedGroupMemberships: listManagedGroupMembershipsProblem
    listPendingProfessorEvaluations: listPendingProfessorEvaluationsProblem
    listPeriodPlans: listPeriodPlansProblem
    listProfessorEvaluationSummaries: listProfessorEvaluationSummariesProblem
    listPublicGroupMemberships: listPublicGroupMembershipsProblem
    listPublicSharedPeriodPlans: listPublicSharedPeriodPlansProblem
    listStudentCourseAttempts: listStudentCourseAttemptsProblem
    listStudents: listStudentsProblem
    listTagCourses: listTagCoursesProblem
    listTags: listTagsProblem
    listUserAbsences: listUserAbsencesProblem
    listUserFeedbackReports: listUserFeedbackReportsProblem
    listUserFriendships: listUserFriendshipsProblem
    listUserGroupMemberships: listUserGroupMembershipsProblem
    listUserInterests: listUserInterestsProblem
    listUserPeople: listUserPeopleProblem
    listUserSharedPeriodPlans: listUserSharedPeriodPlansProblem
    publishGroupEvent: publishGroupEventProblem
    putGroupAvatar: putGroupAvatarProblem
    putUserAvatar: putUserAvatarProblem
    removeCourseTag: removeCourseTagProblem
    replaceBotGrant: replaceBotGrantProblem
    unsubscribeExchangeNotices: unsubscribeExchangeNoticesProblem
    updateAuthIdentity: updateAuthIdentityProblem
    updateCategory: updateCategoryProblem
    updateCurriculums: updateCurriculumsProblem
    updateExchangeNoticeSubscription: updateExchangeNoticeSubscriptionProblem
    updateFeedbackReport: updateFeedbackReportProblem
    updateGroup: updateGroupProblem
    updateGroupEvent: updateGroupEventProblem
    updateGroupRole: updateGroupRoleProblem
    updateManagedGroupMembership: updateManagedGroupMembershipProblem
    updatePeriodPlans: updatePeriodPlansProblem
    updateProfessorEvaluation: updateProfessorEvaluationProblem
    updateStudentCourseAttempts: updateStudentCourseAttemptsProblem
    updateStudents: updateStudentsProblem
    updateTag: updateTagProblem
    updateUser: updateUserProblem
    updateUserGroupMembership: updateUserGroupMembershipProblem
    updateUserInterest: updateUserInterestProblem
    updateUserPreferences: updateUserPreferencesProblem
    updateUserProfile: updateUserProfileProblem
}

export const operationDefinitions = {
    "acceptGroupInvitation": {
        "operationId": "acceptGroupInvitation",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/group-invitations/{id}/accept",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "acceptGroupInvitation",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/OwnGroupMembership"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "acceptGroupInvitation",
            "action": "create",
            "pathParameters": {
                "userId": "userId",
                "id": "id"
            }
        },
        "pagination": null
    },
    "acceptUserFriendship": {
        "operationId": "acceptUserFriendship",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/friendships/{id}/accept",
        "authentication": "required",
        "tags": [
            "student-social"
        ],
        "summary": "acceptUserFriendship",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserFriendship"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userSocial",
            "method": "acceptFriendship",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "id": "friendshipId"
            }
        },
        "pagination": null
    },
    "addCourseTag": {
        "operationId": "addCourseTag",
        "target": "app",
        "method": "PUT",
        "path": "/courses/{courseId}/tags/{tagId}",
        "authentication": "required",
        "tags": [
            "course-tags"
        ],
        "summary": "addCourseTag",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "courseId",
            "tagId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "courseTags",
            "method": "add",
            "action": "update",
            "pathParameters": {
                "courseId": "courseId",
                "tagId": "tagId"
            }
        },
        "pagination": null
    },
    "archiveGroup": {
        "operationId": "archiveGroup",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/groups/{groupId}/archive",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "archiveGroup",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "groupId",
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groups",
            "method": "archive",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            }
        },
        "pagination": null
    },
    "cancelGroupEvent": {
        "operationId": "cancelGroupEvent",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/groups/{groupId}/events/{eventId}/cancel",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "cancelGroupEvent",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId",
            "eventId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/ManagedGroupEvent"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "cancelGroupEvent",
            "action": "create",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId",
                "eventId": "eventId"
            }
        },
        "pagination": null
    },
    "createAuthIdentity": {
        "operationId": "createAuthIdentity",
        "target": "app",
        "method": "POST",
        "path": "/admin/auth-identities",
        "authentication": "required",
        "tags": [
            "auth-identities"
        ],
        "summary": "Create AuthIdentity",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/CreateBotAuthIdentityBody"
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/AuthIdentityEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "authIdentities",
            "method": "create",
            "action": "create"
        },
        "pagination": null
    },
    "createCategory": {
        "operationId": "createCategory",
        "target": "app",
        "method": "POST",
        "path": "/categories",
        "authentication": "required",
        "tags": [
            "categories"
        ],
        "summary": "Create Category",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1
                    }
                },
                "required": [
                    "name"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/Category"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "categories",
            "method": "create",
            "action": "create"
        },
        "pagination": null
    },
    "createCurriculums": {
        "operationId": "createCurriculums",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/curriculums",
        "authentication": "required",
        "tags": [
            "curriculums"
        ],
        "summary": "Create Curriculums",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1
                    },
                    "selection": {
                        "type": "object",
                        "properties": {
                            "catalogProgramId": {
                                "type": "integer",
                                "nullable": true
                            },
                            "catalogProgramVariantId": {
                                "type": "integer",
                                "nullable": true
                            },
                            "languageId": {
                                "type": "integer",
                                "nullable": true
                            }
                        },
                        "additionalProperties": false
                    },
                    "planningStart": {
                        "type": "object",
                        "nullable": true,
                        "properties": {
                            "year": {
                                "type": "integer"
                            },
                            "semester": {
                                "anyOf": [
                                    {
                                        "type": "number",
                                        "enum": [
                                            1
                                        ]
                                    },
                                    {
                                        "type": "number",
                                        "enum": [
                                            2
                                        ]
                                    }
                                ]
                            },
                            "semesterNumber": {
                                "type": "integer",
                                "minimum": 0,
                                "exclusiveMinimum": true
                            }
                        },
                        "required": [
                            "year",
                            "semester",
                            "semesterNumber"
                        ],
                        "additionalProperties": false
                    },
                    "currentPeriodId": {
                        "type": "integer",
                        "nullable": true
                    },
                    "periods": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "position": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            },
                            "required": [
                                "position"
                            ],
                            "additionalProperties": false
                        }
                    },
                    "courses": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "courseId": {
                                    "type": "integer"
                                },
                                "periodId": {
                                    "type": "integer",
                                    "nullable": true
                                }
                            },
                            "required": [
                                "courseId",
                                "periodId"
                            ],
                            "additionalProperties": false
                        }
                    }
                },
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/CurriculumEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidCurriculumProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-curriculum": "#/components/schemas/InvalidCurriculumProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-curriculum"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "curriculums",
            "method": "create",
            "action": "create",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "createFeedbackReport": {
        "operationId": "createFeedbackReport",
        "target": "app",
        "method": "POST",
        "path": "/feedback-reports",
        "authentication": "public",
        "tags": [
            "feedback-reports"
        ],
        "summary": "Create FeedbackReport",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/CreateFeedbackReportBody"
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/FeedbackReportAccepted"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidFeedbackReportProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-feedback-report": "#/components/schemas/InvalidFeedbackReportProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-feedback-report"
                ]
            },
            {
                "status": 429,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/FeedbackRateLimitProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:feedback-rate-limit"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "feedbackReports",
            "method": "create",
            "action": "create"
        },
        "pagination": null
    },
    "createGroup": {
        "operationId": "createGroup",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/groups",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Create Group",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 160
                    },
                    "description": {
                        "type": "string",
                        "nullable": true
                    },
                    "contacts": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "type": {
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 40
                                },
                                "label": {
                                    "type": "string",
                                    "nullable": true,
                                    "maxLength": 80
                                },
                                "value": {
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 320
                                },
                                "sortOrder": {
                                    "type": "integer"
                                }
                            },
                            "required": [
                                "type",
                                "value"
                            ],
                            "additionalProperties": false
                        }
                    },
                    "externalLinks": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "label": {
                                    "type": "string",
                                    "minLength": 1,
                                    "maxLength": 80
                                },
                                "url": {
                                    "type": "string",
                                    "maxLength": 2048,
                                    "format": "uri"
                                },
                                "sortOrder": {
                                    "type": "integer"
                                }
                            },
                            "required": [
                                "label",
                                "url"
                            ],
                            "additionalProperties": false
                        }
                    },
                    "tagIds": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "minimum": 0,
                            "exclusiveMinimum": true
                        }
                    }
                },
                "required": [
                    "name"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/Group"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groups",
            "method": "create",
            "action": "create",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "createGroupEvent": {
        "operationId": "createGroupEvent",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/groups/{groupId}/events",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Create GroupEvent",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 160
                    },
                    "description": {
                        "type": "string"
                    },
                    "startsAt": {
                        "type": "string",
                        "nullable": true,
                        "format": "date-time"
                    },
                    "endsAt": {
                        "type": "string",
                        "nullable": true,
                        "format": "date-time"
                    },
                    "location": {
                        "type": "string",
                        "nullable": true,
                        "maxLength": 320
                    },
                    "tagIds": {
                        "type": "array",
                        "items": {
                            "type": "integer",
                            "minimum": 0,
                            "exclusiveMinimum": true
                        }
                    }
                },
                "required": [
                    "name",
                    "description"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/ManagedGroupEvent"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "createGroupEvent",
            "action": "create",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            }
        },
        "pagination": null
    },
    "createGroupInvitation": {
        "operationId": "createGroupInvitation",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/groups/{groupId}/invitations",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Create GroupInvitation",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "recipientPublicId": {
                        "type": "string",
                        "format": "uuid"
                    }
                },
                "required": [
                    "recipientPublicId"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/GroupInvitation"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "createGroupInvitation",
            "action": "create",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            }
        },
        "pagination": null
    },
    "createGroupRole": {
        "operationId": "createGroupRole",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/groups/{groupId}/roles",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Create GroupRole",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 80
                    },
                    "permissions": {
                        "type": "array",
                        "items": {
                            "type": "string",
                            "enum": [
                                "GROUP_EDIT",
                                "GROUP_TAG_MANAGE",
                                "MEMBER_MANAGE",
                                "ROLE_MANAGE",
                                "EVENT_CREATE",
                                "EVENT_EDIT",
                                "EVENT_PUBLISH"
                            ]
                        }
                    }
                },
                "required": [
                    "name"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/GroupRole"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "createGroupRole",
            "action": "create",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            }
        },
        "pagination": null
    },
    "createPeriodPlans": {
        "operationId": "createPeriodPlans",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/period-plans",
        "authentication": "required",
        "tags": [
            "period-plans"
        ],
        "summary": "Create PeriodPlans",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/CreatePeriodPlanningInput"
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/PeriodPlanningEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidPeriodPlanProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-period-plan": "#/components/schemas/InvalidPeriodPlanProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-period-plan"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "periodPlans",
            "action": "create",
            "method": "create",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "createStudentAbsences": {
        "operationId": "createStudentAbsences",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/course-attempts/{attemptId}/absences",
        "authentication": "required",
        "tags": [
            "student-absences"
        ],
        "summary": "Create StudentAbsences",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "attemptId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/CreateStudentAbsenceBody"
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/StudentAbsence"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidStudentAbsenceProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-student-absence": "#/components/schemas/InvalidStudentAbsenceProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-student-absence"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "studentAbsences",
            "method": "create",
            "action": "create",
            "pathParameters": {
                "userId": "userId",
                "attemptId": "courseAttemptId"
            }
        },
        "pagination": null
    },
    "createStudentCourseAttempts": {
        "operationId": "createStudentCourseAttempts",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/course-attempts",
        "authentication": "required",
        "tags": [
            "student-course-attempts"
        ],
        "summary": "Create StudentCourseAttempts",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/CreateStudentCourseAttemptInput"
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/StudentCourseAttempt"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidStudentCourseAttemptProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-student-course-attempt": "#/components/schemas/InvalidStudentCourseAttemptProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-student-course-attempt"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "courseAttempts",
            "action": "create",
            "method": "create",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "createStudentHistory": {
        "operationId": "createStudentHistory",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/course-history",
        "authentication": "required",
        "tags": [
            "student-course-history"
        ],
        "summary": "Create StudentHistory",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/StudentHistoryImportBody"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/StudentHistoryImportSummary"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidStudentHistoryImportProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-student-history-import"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "studentHistory",
            "method": "create",
            "action": "create",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "createStudents": {
        "operationId": "createStudents",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/student",
        "authentication": "required",
        "tags": [
            "students"
        ],
        "summary": "Create Students",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/CreateStudentBody"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/StudentEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/StudentEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidStudentProfileProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-student-profile": "#/components/schemas/InvalidStudentProfileProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-student-profile"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "students",
            "method": "create",
            "action": "create",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "createTag": {
        "operationId": "createTag",
        "target": "app",
        "method": "POST",
        "path": "/tags",
        "authentication": "required",
        "tags": [
            "tags"
        ],
        "summary": "Create Tag",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1
                    },
                    "categoryId": {
                        "type": "integer",
                        "minimum": 0,
                        "exclusiveMinimum": true
                    },
                    "parentTagId": {
                        "type": "integer",
                        "nullable": true,
                        "minimum": 0,
                        "exclusiveMinimum": true
                    }
                },
                "required": [
                    "name",
                    "categoryId",
                    "parentTagId"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/Tag"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "tags",
            "method": "create",
            "action": "create"
        },
        "pagination": null
    },
    "createUserFeedbackReport": {
        "operationId": "createUserFeedbackReport",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/feedback-reports",
        "authentication": "required",
        "tags": [
            "feedback-reports"
        ],
        "summary": "Create UserFeedbackReport",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/CreateFeedbackReportBody"
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/FeedbackReportAccepted"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidFeedbackReportProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-feedback-report": "#/components/schemas/InvalidFeedbackReportProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-feedback-report"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "feedbackReports",
            "method": "createForUser",
            "action": "create",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "createUserFriendship": {
        "operationId": "createUserFriendship",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/friendships",
        "authentication": "required",
        "tags": [
            "student-social"
        ],
        "summary": "Create UserFriendship",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "targetPublicId": {
                        "type": "string",
                        "format": "uuid"
                    }
                },
                "required": [
                    "targetPublicId"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 201,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserFriendship"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userSocial",
            "method": "createFriendship",
            "action": "create",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "declineGroupInvitation": {
        "operationId": "declineGroupInvitation",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/group-invitations/{id}/decline",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "declineGroupInvitation",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "declineGroupInvitation",
            "action": "create",
            "pathParameters": {
                "userId": "userId",
                "id": "id"
            }
        },
        "pagination": null
    },
    "deleteCategory": {
        "operationId": "deleteCategory",
        "target": "app",
        "method": "DELETE",
        "path": "/categories/{id}",
        "authentication": "required",
        "tags": [
            "categories"
        ],
        "summary": "Delete Category",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "categories",
            "method": "delete",
            "action": "delete",
            "pathParameters": {
                "id": "categoryId"
            }
        },
        "pagination": null
    },
    "deleteCurriculums": {
        "operationId": "deleteCurriculums",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/curriculums/{id}",
        "authentication": "required",
        "tags": [
            "curriculums"
        ],
        "summary": "Delete Curriculums",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "curriculums",
            "method": "delete",
            "action": "delete",
            "pathParameters": {
                "userId": "userId",
                "id": "curriculumId"
            }
        },
        "pagination": null
    },
    "deleteGroupAvatar": {
        "operationId": "deleteGroupAvatar",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/groups/{groupId}/avatar",
        "authentication": "required",
        "tags": [
            "media"
        ],
        "summary": "Delete GroupAvatar",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 401,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UnauthenticatedProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unauthenticated"
                ]
            },
            {
                "status": 403,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ForbiddenProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:forbidden"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:conflict"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "media",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            },
            "method": "deleteGroupAvatar",
            "action": "delete"
        },
        "pagination": null
    },
    "deleteGroupRole": {
        "operationId": "deleteGroupRole",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/groups/{groupId}/roles/{roleId}",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Delete GroupRole",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId",
            "roleId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "deleteGroupRole",
            "action": "delete",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId",
                "roleId": "roleId"
            }
        },
        "pagination": null
    },
    "deletePeriodPlans": {
        "operationId": "deletePeriodPlans",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/period-plans/{id}",
        "authentication": "required",
        "tags": [
            "period-plans"
        ],
        "summary": "Delete PeriodPlans",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "periodPlans",
            "action": "delete",
            "method": "delete",
            "pathParameters": {
                "userId": "userId",
                "id": "periodPlanningId"
            }
        },
        "pagination": null
    },
    "deleteStudentAbsences": {
        "operationId": "deleteStudentAbsences",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/course-attempts/{attemptId}/absences/{id}",
        "authentication": "required",
        "tags": [
            "student-absences"
        ],
        "summary": "Delete StudentAbsences",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "attemptId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "studentAbsences",
            "method": "delete",
            "action": "delete",
            "pathParameters": {
                "userId": "userId",
                "attemptId": "courseAttemptId",
                "id": "studentAbsenceId"
            }
        },
        "pagination": null
    },
    "deleteStudentCourseAttempts": {
        "operationId": "deleteStudentCourseAttempts",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/course-attempts/{id}",
        "authentication": "required",
        "tags": [
            "student-course-attempts"
        ],
        "summary": "Delete StudentCourseAttempts",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "courseAttempts",
            "action": "delete",
            "method": "delete",
            "pathParameters": {
                "userId": "userId",
                "id": "courseAttemptId"
            }
        },
        "pagination": null
    },
    "deleteStudents": {
        "operationId": "deleteStudents",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/student",
        "authentication": "required",
        "tags": [
            "students"
        ],
        "summary": "Delete Students",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "confirmationRa": {
                        "type": "string",
                        "pattern": "^\\d{6}$"
                    }
                },
                "required": [
                    "confirmationRa"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidStudentProfileProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-student-profile"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "students",
            "method": "delete",
            "action": "delete",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "deleteTag": {
        "operationId": "deleteTag",
        "target": "app",
        "method": "DELETE",
        "path": "/tags/{id}",
        "authentication": "required",
        "tags": [
            "tags"
        ],
        "summary": "Delete Tag",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "tags",
            "method": "delete",
            "action": "delete",
            "pathParameters": {
                "id": "tagId"
            }
        },
        "pagination": null
    },
    "deleteUserAvatar": {
        "operationId": "deleteUserAvatar",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/avatar",
        "authentication": "required",
        "tags": [
            "media"
        ],
        "summary": "Delete UserAvatar",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 401,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UnauthenticatedProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unauthenticated"
                ]
            },
            {
                "status": 403,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ForbiddenProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:forbidden"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:conflict"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "media",
            "pathParameters": {
                "userId": "userId"
            },
            "method": "deleteUserAvatar",
            "action": "delete"
        },
        "pagination": null
    },
    "deleteUserFriendship": {
        "operationId": "deleteUserFriendship",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/friendships/{id}",
        "authentication": "required",
        "tags": [
            "student-social"
        ],
        "summary": "Delete UserFriendship",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userSocial",
            "method": "removeFriendship",
            "action": "delete",
            "pathParameters": {
                "userId": "userId",
                "id": "friendshipId"
            }
        },
        "pagination": null
    },
    "deleteUserInterest": {
        "operationId": "deleteUserInterest",
        "target": "app",
        "method": "DELETE",
        "path": "/users/{userId}/interests/{tagId}",
        "authentication": "required",
        "tags": [
            "student-tag-interests"
        ],
        "summary": "Delete UserInterest",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "tagId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userInterests",
            "method": "delete",
            "action": "delete",
            "pathParameters": {
                "userId": "userId",
                "tagId": "tagId"
            }
        },
        "pagination": null
    },
    "getCategory": {
        "operationId": "getCategory",
        "target": "app",
        "method": "GET",
        "path": "/categories/{id}",
        "authentication": "public",
        "tags": [
            "categories"
        ],
        "summary": "Get Category",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/Category"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "categories",
            "method": "get",
            "action": "get",
            "pathParameters": {
                "id": "categoryId"
            }
        },
        "pagination": null
    },
    "getCourseProfessorEvaluationSummary": {
        "operationId": "getCourseProfessorEvaluationSummary",
        "target": "app",
        "method": "GET",
        "path": "/evaluation-summaries",
        "authentication": "public",
        "tags": [
            "evaluation-summaries"
        ],
        "summary": "Get CourseProfessorEvaluationSummary",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "filter"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/CourseProfessorEvaluationSummary"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "filter",
                    "required": true,
                    "description": "Structured evaluation summary filters. Use filter[courseId]=1&filter[professorId]=2.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "courseId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            },
                            "professorId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "courseId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    },
                    {
                        "path": [
                            "professorId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            }
        },
        "sdk": {
            "resource": "evaluationSummaries",
            "method": "getByCourseAndProfessor",
            "action": "get"
        },
        "pagination": null
    },
    "getCurrentUser": {
        "operationId": "getCurrentUser",
        "target": "app",
        "method": "GET",
        "path": "/me",
        "authentication": "required",
        "tags": [
            "current-user"
        ],
        "summary": "Get CurrentUser",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/CurrentUserEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "currentUser",
            "method": "get",
            "action": "get"
        },
        "pagination": null
    },
    "getCurriculums": {
        "operationId": "getCurriculums",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/curriculums/{id}",
        "authentication": "required",
        "tags": [
            "curriculums"
        ],
        "summary": "Get Curriculums",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/CurriculumEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "curriculums",
            "method": "get",
            "action": "get",
            "pathParameters": {
                "userId": "userId",
                "id": "curriculumId"
            }
        },
        "pagination": null
    },
    "getExchangeNoticeSubscription": {
        "operationId": "getExchangeNoticeSubscription",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/exchange-notice-subscription",
        "authentication": "required",
        "tags": [
            "exchange-notice-subscriptions"
        ],
        "summary": "Get ExchangeNoticeSubscription",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/ExchangeNoticeSubscription"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "exchangeNoticeSubscriptions",
            "method": "get",
            "action": "get",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "getGroup": {
        "operationId": "getGroup",
        "target": "app",
        "method": "GET",
        "path": "/groups/{groupId}",
        "authentication": "public",
        "tags": [
            "groups"
        ],
        "summary": "Get Group",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "groupId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/Group"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groups",
            "method": "get",
            "action": "get",
            "pathParameters": {
                "groupId": "groupId"
            }
        },
        "pagination": null
    },
    "getGroupEvent": {
        "operationId": "getGroupEvent",
        "target": "app",
        "method": "GET",
        "path": "/group-events/{id}",
        "authentication": "public",
        "tags": [
            "groups"
        ],
        "summary": "Get GroupEvent",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/GroupEvent"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "getGroupEvent",
            "action": "get",
            "pathParameters": {
                "id": "id"
            }
        },
        "pagination": null
    },
    "getImageVariant": {
        "operationId": "getImageVariant",
        "target": "app",
        "method": "GET",
        "path": "/media/{mediaId}/{variant}",
        "authentication": "optional",
        "tags": [
            "media"
        ],
        "summary": "Get ImageVariant",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "mediaId",
            "variant"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "image/webp",
                        "schema": {
                            "type": "string",
                            "format": "binary"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 401,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UnauthenticatedProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unauthenticated"
                ]
            },
            {
                "status": 403,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ForbiddenProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:forbidden"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 503,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServiceUnavailableProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:service-unavailable"
                ]
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "media",
            "method": "getImageVariant",
            "action": "get",
            "pathParameters": {
                "mediaId": "mediaId",
                "variant": "variant"
            }
        },
        "pagination": null
    },
    "getPeriodPlans": {
        "operationId": "getPeriodPlans",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/period-plans/{id}",
        "authentication": "required",
        "tags": [
            "period-plans"
        ],
        "summary": "Get PeriodPlans",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/PeriodPlanningEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "periodPlans",
            "action": "get",
            "method": "get",
            "pathParameters": {
                "userId": "userId",
                "id": "periodPlanningId"
            }
        },
        "pagination": null
    },
    "getProfessorEvaluation": {
        "operationId": "getProfessorEvaluation",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/classes/{classId}/professors/{professorId}/evaluation",
        "authentication": "required",
        "tags": [
            "professor-evaluations"
        ],
        "summary": "Get ProfessorEvaluation",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "classId",
            "professorId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/ProfessorEvaluationEligibility"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidProfessorEvaluationProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-professor-evaluation": "#/components/schemas/InvalidProfessorEvaluationProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-professor-evaluation"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "professorEvaluations",
            "method": "get",
            "action": "get",
            "pathParameters": {
                "userId": "userId",
                "classId": "classId",
                "professorId": "professorId"
            }
        },
        "pagination": null
    },
    "getPublicGroupMembership": {
        "operationId": "getPublicGroupMembership",
        "target": "app",
        "method": "GET",
        "path": "/group-memberships/{id}",
        "authentication": "public",
        "tags": [
            "groups"
        ],
        "summary": "Get PublicGroupMembership",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/PublicGroupMembership"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "getPublicGroupMembership",
            "action": "get",
            "pathParameters": {
                "id": "id"
            }
        },
        "pagination": null
    },
    "getPublicSharedPeriodPlan": {
        "operationId": "getPublicSharedPeriodPlan",
        "target": "app",
        "method": "GET",
        "path": "/shared-period-plans/{shareId}",
        "authentication": "public",
        "tags": [
            "shared-period-plans"
        ],
        "summary": "Get PublicSharedPeriodPlan",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "shareId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/SharedPeriodPlanning"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "sharedPeriodPlans",
            "method": "getPublic",
            "action": "get",
            "pathParameters": {
                "shareId": "shareId"
            }
        },
        "pagination": null
    },
    "getStudentCourseAttempts": {
        "operationId": "getStudentCourseAttempts",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/course-attempts/{id}",
        "authentication": "required",
        "tags": [
            "student-course-attempts"
        ],
        "summary": "Get StudentCourseAttempts",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/StudentCourseAttempt"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "courseAttempts",
            "action": "get",
            "method": "get",
            "pathParameters": {
                "userId": "userId",
                "id": "courseAttemptId"
            }
        },
        "pagination": null
    },
    "getStudents": {
        "operationId": "getStudents",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/student",
        "authentication": "required",
        "tags": [
            "students"
        ],
        "summary": "Get Students",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/StudentEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "students",
            "method": "get",
            "action": "get",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "getTag": {
        "operationId": "getTag",
        "target": "app",
        "method": "GET",
        "path": "/tags/{id}",
        "authentication": "public",
        "tags": [
            "tags"
        ],
        "summary": "Get Tag",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/Tag"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "tags",
            "method": "get",
            "action": "get",
            "pathParameters": {
                "id": "tagId"
            }
        },
        "pagination": null
    },
    "getUser": {
        "operationId": "getUser",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}",
        "authentication": "required",
        "tags": [
            "users"
        ],
        "summary": "Get User",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "users",
            "method": "get",
            "action": "get",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "getUserGroupMembership": {
        "operationId": "getUserGroupMembership",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/group-memberships/{id}",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Get UserGroupMembership",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/OwnGroupMembership"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "getUserGroupMembership",
            "action": "get",
            "pathParameters": {
                "userId": "userId",
                "id": "id"
            }
        },
        "pagination": null
    },
    "getUserPerson": {
        "operationId": "getUserPerson",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/people/{publicId}",
        "authentication": "required",
        "tags": [
            "student-social"
        ],
        "summary": "Get UserPerson",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "publicId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserPublicPerson"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userSocial",
            "method": "getPerson",
            "action": "get",
            "pathParameters": {
                "userId": "userId",
                "publicId": "publicId"
            }
        },
        "pagination": null
    },
    "getUserPreferences": {
        "operationId": "getUserPreferences",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/preferences",
        "authentication": "required",
        "tags": [
            "users"
        ],
        "summary": "Get UserPreferences",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserPreferences"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userPreferences",
            "method": "get",
            "action": "get",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "getUserProfile": {
        "operationId": "getUserProfile",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/profile",
        "authentication": "required",
        "tags": [
            "student-social"
        ],
        "summary": "Get UserProfile",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserProfile"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userSocial",
            "method": "getProfile",
            "action": "get",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "getUserSharedPeriodPlan": {
        "operationId": "getUserSharedPeriodPlan",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/shared-period-plans/{shareId}",
        "authentication": "required",
        "tags": [
            "shared-period-plans"
        ],
        "summary": "Get UserSharedPeriodPlan",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "shareId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/SharedPeriodPlanning"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "sharedPeriodPlans",
            "method": "getForUser",
            "action": "get",
            "pathParameters": {
                "userId": "userId",
                "shareId": "shareId"
            }
        },
        "pagination": null
    },
    "listAuthIdentities": {
        "operationId": "listAuthIdentities",
        "target": "app",
        "method": "GET",
        "path": "/admin/auth-identities",
        "authentication": "required",
        "tags": [
            "auth-identities"
        ],
        "summary": "List AuthIdentities",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/AuthIdentityEntity"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "id:asc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "id",
                    "displayName",
                    "email",
                    "status"
                ],
                "default": "id:asc"
            }
        },
        "sdk": {
            "resource": "authIdentities",
            "method": "list",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listBotGrants": {
        "operationId": "listBotGrants",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/bot-grants",
        "authentication": "required",
        "tags": [
            "bot-grants"
        ],
        "summary": "List BotGrants",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/BotGrantEntity"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "createdAt:desc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "createdAt",
                    "capability",
                    "botDisplayName"
                ],
                "default": "createdAt:desc"
            }
        },
        "sdk": {
            "resource": "botGrants",
            "pathParameters": {
                "userId": "userId"
            },
            "method": "list",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listBots": {
        "operationId": "listBots",
        "target": "app",
        "method": "GET",
        "path": "/bots",
        "authentication": "required",
        "tags": [
            "bot-grants"
        ],
        "summary": "List Bots",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/BotIdentityEntity"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "displayName:asc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "displayName"
                ],
                "default": "displayName:asc"
            }
        },
        "sdk": {
            "resource": "bots",
            "method": "list",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listCategories": {
        "operationId": "listCategories",
        "target": "app",
        "method": "GET",
        "path": "/categories",
        "authentication": "public",
        "tags": [
            "categories"
        ],
        "summary": "List Categories",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Category"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "name:asc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "name"
                ],
                "default": "name:asc"
            }
        },
        "sdk": {
            "resource": "categories",
            "method": "list",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listCourseEvaluationSummaries": {
        "operationId": "listCourseEvaluationSummaries",
        "target": "app",
        "method": "GET",
        "path": "/courses/evaluation-summaries",
        "authentication": "public",
        "tags": [
            "evaluation-summaries"
        ],
        "summary": "List CourseEvaluationSummaries",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "filter",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/PageCourseEvaluationSummaries"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "default": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "default": 20,
                        "description": "Number of items per page."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Structured course summary filters. Use filter[courseCode]=MC102.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "courseId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            },
                            "courseCode": {
                                "oneOf": [
                                    {
                                        "minLength": 1,
                                        "type": "string"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minLength": 1,
                                                "type": "string"
                                            },
                                            "ne": {
                                                "minLength": 1,
                                                "type": "string"
                                            },
                                            "in": {
                                                "items": {
                                                    "minLength": 1,
                                                    "type": "string"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "course.code:asc"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "courseId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    },
                    {
                        "path": [
                            "courseCode"
                        ],
                        "schema": {
                            "minLength": 1,
                            "type": "string"
                        },
                        "operators": [
                            "eq",
                            "ne",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            },
            "sort": {
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
            }
        },
        "sdk": {
            "resource": "evaluationSummaries",
            "method": "listByCourse",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "page",
            "defaultPageSize": 20,
            "allowAll": false
        }
    },
    "listCourseTags": {
        "operationId": "listCourseTags",
        "target": "app",
        "method": "GET",
        "path": "/courses/{courseId}/tags",
        "authentication": "public",
        "tags": [
            "course-tags"
        ],
        "summary": "List CourseTags",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "courseId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Tag"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "name:asc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "name",
                    "categoryId"
                ],
                "default": "name:asc"
            }
        },
        "sdk": {
            "resource": "courseTags",
            "method": "listForCourse",
            "action": "list",
            "pathParameters": {
                "courseId": "courseId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listCurriculums": {
        "operationId": "listCurriculums",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/curriculums",
        "authentication": "required",
        "tags": [
            "curriculums"
        ],
        "summary": "List Curriculums",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/CurriculumSummaryEntity"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "isFavorite:desc,updatedAt:desc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "isFavorite",
                    "updatedAt",
                    "name"
                ],
                "default": "isFavorite:desc,updatedAt:desc"
            }
        },
        "sdk": {
            "resource": "curriculums",
            "method": "list",
            "action": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listFeedbackReports": {
        "operationId": "listFeedbackReports",
        "target": "app",
        "method": "GET",
        "path": "/admin/feedback-reports",
        "authentication": "required",
        "tags": [
            "feedback-reports"
        ],
        "summary": "List FeedbackReports",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/FeedbackReport"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "createdAt:desc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "createdAt",
                    "updatedAt",
                    "status",
                    "kind",
                    "title"
                ],
                "default": "createdAt:desc"
            }
        },
        "sdk": {
            "resource": "feedbackReports",
            "method": "list",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listGroupEvents": {
        "operationId": "listGroupEvents",
        "target": "app",
        "method": "GET",
        "path": "/group-events",
        "authentication": "public",
        "tags": [
            "groups"
        ],
        "summary": "List GroupEvents",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "filter"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/GroupEvent"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Filtre por filter[groupId]=42.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "groupId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "groupId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            }
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "listGroupEvents",
            "action": "list",
            "pathParameters": {}
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listGroupInvitations": {
        "operationId": "listGroupInvitations",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/group-invitations",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "List GroupInvitations",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "filter"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/GroupInvitation"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Filtre por filter[groupId]=42.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "groupId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "groupId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            }
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "listGroupInvitations",
            "action": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listGroupRoles": {
        "operationId": "listGroupRoles",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/groups/{groupId}/roles",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "List GroupRoles",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId"
        ],
        "queryParameters": [
            "page",
            "pageSize"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/GroupRole"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                }
            ],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "listGroupRoles",
            "action": "list",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listGroups": {
        "operationId": "listGroups",
        "target": "app",
        "method": "GET",
        "path": "/groups",
        "authentication": "public",
        "tags": [
            "groups"
        ],
        "summary": "List Groups",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Group"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                }
            ],
            "filter": null
        },
        "sdk": {
            "resource": "groups",
            "method": "list",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listManagedGroupEvents": {
        "operationId": "listManagedGroupEvents",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/groups/{groupId}/events",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "List ManagedGroupEvents",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId"
        ],
        "queryParameters": [
            "page",
            "pageSize"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/ManagedGroupEvent"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                }
            ],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "listManagedGroupEvents",
            "action": "list",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listManagedGroupInvitations": {
        "operationId": "listManagedGroupInvitations",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/groups/{groupId}/invitations",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "List ManagedGroupInvitations",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId"
        ],
        "queryParameters": [
            "page",
            "pageSize"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/ManagedGroupInvitation"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                }
            ],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "listManagedGroupInvitations",
            "action": "list",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listManagedGroupMemberships": {
        "operationId": "listManagedGroupMemberships",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/groups/{groupId}/memberships",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "List ManagedGroupMemberships",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId"
        ],
        "queryParameters": [
            "page",
            "pageSize"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/ManagedGroupMembership"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                }
            ],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "listManagedGroupMemberships",
            "action": "list",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listPendingProfessorEvaluations": {
        "operationId": "listPendingProfessorEvaluations",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/professor-evaluations/pending",
        "authentication": "required",
        "tags": [
            "professor-evaluations"
        ],
        "summary": "List PendingProfessorEvaluations",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "filter",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/PendingProfessorEvaluation"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "filter",
                    "required": true,
                    "description": "Pending evaluation filters. Use filter[year]=2026&filter[yearPeriod]=FIRST_SEMESTER.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "year": {
                                "oneOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "type": "integer"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            },
                            "yearPeriod": {
                                "oneOf": [
                                    {
                                        "enum": [
                                            "FIRST_SEMESTER",
                                            "SECOND_SEMESTER"
                                        ],
                                        "type": "string"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "enum": [
                                                    "FIRST_SEMESTER",
                                                    "SECOND_SEMESTER"
                                                ],
                                                "type": "string"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "courseCode:asc,classCode:asc,professorName:asc"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "year"
                        ],
                        "schema": {
                            "type": "integer"
                        },
                        "operators": [
                            "eq"
                        ]
                    },
                    {
                        "path": [
                            "yearPeriod"
                        ],
                        "schema": {
                            "enum": [
                                "FIRST_SEMESTER",
                                "SECOND_SEMESTER"
                            ],
                            "type": "string"
                        },
                        "operators": [
                            "eq"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            },
            "sort": {
                "version": 1,
                "fields": [
                    "courseCode",
                    "courseName",
                    "classCode",
                    "professorName"
                ],
                "default": "courseCode:asc,classCode:asc,professorName:asc"
            }
        },
        "sdk": {
            "resource": "professorEvaluations",
            "method": "listPending",
            "action": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listPeriodPlans": {
        "operationId": "listPeriodPlans",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/period-plans",
        "authentication": "required",
        "tags": [
            "period-plans"
        ],
        "summary": "List PeriodPlans",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/PeriodPlanningEntity"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "updatedAt:desc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "updatedAt",
                    "name",
                    "studyPeriodYear",
                    "studyPeriodYearPeriod",
                    "visibility"
                ],
                "default": "updatedAt:desc"
            }
        },
        "sdk": {
            "resource": "periodPlans",
            "action": "list",
            "method": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listProfessorEvaluationSummaries": {
        "operationId": "listProfessorEvaluationSummaries",
        "target": "app",
        "method": "GET",
        "path": "/professors/evaluation-summaries",
        "authentication": "public",
        "tags": [
            "evaluation-summaries"
        ],
        "summary": "List ProfessorEvaluationSummaries",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "filter",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/PageProfessorEvaluationSummaries"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "default": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "default": 20,
                        "description": "Number of items per page."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Structured professor summary filters. Use filter[professorId]=1.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "professorId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "professor.name:asc"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "professorId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            },
            "sort": {
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
            }
        },
        "sdk": {
            "resource": "evaluationSummaries",
            "method": "listByProfessor",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "page",
            "defaultPageSize": 20,
            "allowAll": false
        }
    },
    "listPublicGroupMemberships": {
        "operationId": "listPublicGroupMemberships",
        "target": "app",
        "method": "GET",
        "path": "/group-memberships",
        "authentication": "public",
        "tags": [
            "groups"
        ],
        "summary": "List PublicGroupMemberships",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "filter"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/PublicGroupMembership"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Filtre por filter[groupId]=42 ou filter[publicId]=UUID.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "groupId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            },
                            "publicId": {
                                "oneOf": [
                                    {
                                        "format": "uuid",
                                        "type": "string"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "format": "uuid",
                                                "type": "string"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "groupId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    },
                    {
                        "path": [
                            "publicId"
                        ],
                        "schema": {
                            "format": "uuid",
                            "type": "string"
                        },
                        "operators": [
                            "eq"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            }
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "listPublicGroupMemberships",
            "action": "list",
            "pathParameters": {}
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listPublicSharedPeriodPlans": {
        "operationId": "listPublicSharedPeriodPlans",
        "target": "app",
        "method": "GET",
        "path": "/shared-period-plans",
        "authentication": "public",
        "tags": [
            "shared-period-plans"
        ],
        "summary": "List PublicSharedPeriodPlans",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "query",
            "filter",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/SharedPeriodPlanningPage"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 50,
                        "description": "Number of items per page."
                    }
                },
                {
                    "name": "query",
                    "required": false,
                    "description": null,
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "string",
                        "minLength": 1
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Structured shared planning filters. Use filter[studyPeriodId]=42.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "studyPeriodId": {
                                "oneOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "updatedAt:desc"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "studyPeriodId"
                        ],
                        "schema": {
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            },
            "sort": {
                "version": 1,
                "fields": [
                    "updatedAt",
                    "name",
                    "studyPeriodYear"
                ],
                "default": "updatedAt:desc"
            }
        },
        "sdk": {
            "resource": "sharedPeriodPlans",
            "action": "list",
            "method": "list"
        },
        "pagination": {
            "defaultMode": "page",
            "defaultPageSize": 20,
            "maxPageSize": 50,
            "allowAll": false
        }
    },
    "listStudentCourseAttempts": {
        "operationId": "listStudentCourseAttempts",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/course-attempts",
        "authentication": "required",
        "tags": [
            "student-course-attempts"
        ],
        "summary": "List StudentCourseAttempts",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "filter",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/StudentCourseAttempt"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Structured course attempt filters. Use filter[status]=APPROVED or filter[courseId]=42.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "status": {
                                "oneOf": [
                                    {
                                        "enum": [
                                            "ENROLLED",
                                            "DROPPED",
                                            "APPROVED",
                                            "FAILED_BY_GRADE",
                                            "APPROVED_BY_ATTENDANCE",
                                            "APPROVED_BY_PROFICIENCY",
                                            "FAILED_BY_ATTENDANCE",
                                            "SUFFICIENT",
                                            "INSUFFICIENT"
                                        ],
                                        "type": "string"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "enum": [
                                                    "ENROLLED",
                                                    "DROPPED",
                                                    "APPROVED",
                                                    "FAILED_BY_GRADE",
                                                    "APPROVED_BY_ATTENDANCE",
                                                    "APPROVED_BY_PROFICIENCY",
                                                    "FAILED_BY_ATTENDANCE",
                                                    "SUFFICIENT",
                                                    "INSUFFICIENT"
                                                ],
                                                "type": "string"
                                            },
                                            "in": {
                                                "items": {
                                                    "enum": [
                                                        "ENROLLED",
                                                        "DROPPED",
                                                        "APPROVED",
                                                        "FAILED_BY_GRADE",
                                                        "APPROVED_BY_ATTENDANCE",
                                                        "APPROVED_BY_PROFICIENCY",
                                                        "FAILED_BY_ATTENDANCE",
                                                        "SUFFICIENT",
                                                        "INSUFFICIENT"
                                                    ],
                                                    "type": "string"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            },
                            "courseId": {
                                "oneOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            },
                            "studyPeriodId": {
                                "oneOf": [
                                    {
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "createdAt:desc"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "status"
                        ],
                        "schema": {
                            "enum": [
                                "ENROLLED",
                                "DROPPED",
                                "APPROVED",
                                "FAILED_BY_GRADE",
                                "APPROVED_BY_ATTENDANCE",
                                "APPROVED_BY_PROFICIENCY",
                                "FAILED_BY_ATTENDANCE",
                                "SUFFICIENT",
                                "INSUFFICIENT"
                            ],
                            "type": "string"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    },
                    {
                        "path": [
                            "courseId"
                        ],
                        "schema": {
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    },
                    {
                        "path": [
                            "studyPeriodId"
                        ],
                        "schema": {
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            },
            "sort": {
                "version": 1,
                "fields": [
                    "createdAt",
                    "updatedAt",
                    "courseCode",
                    "status",
                    "grade"
                ],
                "default": "createdAt:desc"
            }
        },
        "sdk": {
            "resource": "courseAttempts",
            "action": "list",
            "method": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listStudents": {
        "operationId": "listStudents",
        "target": "app",
        "method": "GET",
        "path": "/admin/students",
        "authentication": "required",
        "tags": [
            "students"
        ],
        "summary": "List Students",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/StudentEntity"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "id:asc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "id",
                    "ra",
                    "name",
                    "entryYear"
                ],
                "default": "id:asc"
            }
        },
        "sdk": {
            "resource": "students",
            "method": "list",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listTagCourses": {
        "operationId": "listTagCourses",
        "target": "app",
        "method": "GET",
        "path": "/tags/{id}/courses",
        "authentication": "public",
        "tags": [
            "course-tags"
        ],
        "summary": "List TagCourses",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/TagRelatedCourse"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "default": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "default": 20,
                        "description": "Number of items per page."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "code:asc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "code",
                    "name",
                    "credits"
                ],
                "default": "code:asc"
            }
        },
        "sdk": {
            "resource": "courseTags",
            "method": "listCoursesForTag",
            "action": "list",
            "pathParameters": {
                "id": "tagId"
            }
        },
        "pagination": {
            "defaultMode": "page",
            "defaultPageSize": 20,
            "allowAll": false
        }
    },
    "listTags": {
        "operationId": "listTags",
        "target": "app",
        "method": "GET",
        "path": "/tags",
        "authentication": "public",
        "tags": [
            "tags"
        ],
        "summary": "List Tags",
        "description": null,
        "deprecated": false,
        "pathParameters": [],
        "queryParameters": [
            "page",
            "pageSize",
            "filter",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/Tag"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Structured tag filters. Use filter[categoryId]=1 or filter[courseId]=2.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "categoryId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            },
                            "parentTagId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            },
                            "courseId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "name:asc"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "categoryId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    },
                    {
                        "path": [
                            "parentTagId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    },
                    {
                        "path": [
                            "courseId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            },
            "sort": {
                "version": 1,
                "fields": [
                    "name",
                    "categoryId"
                ],
                "default": "name:asc"
            }
        },
        "sdk": {
            "resource": "tags",
            "method": "list",
            "action": "list"
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listUserAbsences": {
        "operationId": "listUserAbsences",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/absences",
        "authentication": "required",
        "tags": [
            "student-absences"
        ],
        "summary": "List UserAbsences",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "filter",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/StudentAbsence"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Filtre pelo ID da tentativa usando eq ou in.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "courseAttemptId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "date:desc"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "courseAttemptId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            },
            "sort": {
                "version": 1,
                "fields": [
                    "date",
                    "courseCode",
                    "classCode",
                    "start",
                    "createdAt"
                ],
                "default": "date:desc"
            }
        },
        "sdk": {
            "resource": "studentAbsences",
            "method": "list",
            "action": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listUserFeedbackReports": {
        "operationId": "listUserFeedbackReports",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/feedback-reports",
        "authentication": "required",
        "tags": [
            "feedback-reports"
        ],
        "summary": "List UserFeedbackReports",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/FeedbackReport"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "createdAt:desc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "createdAt",
                    "updatedAt",
                    "status",
                    "kind",
                    "title"
                ],
                "default": "createdAt:desc"
            }
        },
        "sdk": {
            "resource": "feedbackReports",
            "method": "listForUser",
            "action": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listUserFriendships": {
        "operationId": "listUserFriendships",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/friendships",
        "authentication": "required",
        "tags": [
            "student-social"
        ],
        "summary": "List UserFriendships",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "filter",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/UserFriendship"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Structured friendship filters. Use filter[status]=PENDING or filter[direction]=INCOMING.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "status": {
                                "oneOf": [
                                    {
                                        "enum": [
                                            "PENDING",
                                            "ACCEPTED"
                                        ],
                                        "type": "string"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "enum": [
                                                    "PENDING",
                                                    "ACCEPTED"
                                                ],
                                                "type": "string"
                                            },
                                            "in": {
                                                "items": {
                                                    "enum": [
                                                        "PENDING",
                                                        "ACCEPTED"
                                                    ],
                                                    "type": "string"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            },
                            "direction": {
                                "oneOf": [
                                    {
                                        "enum": [
                                            "INCOMING",
                                            "OUTGOING"
                                        ],
                                        "type": "string"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "enum": [
                                                    "INCOMING",
                                                    "OUTGOING"
                                                ],
                                                "type": "string"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "updatedAt:desc"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "status"
                        ],
                        "schema": {
                            "enum": [
                                "PENDING",
                                "ACCEPTED"
                            ],
                            "type": "string"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    },
                    {
                        "path": [
                            "direction"
                        ],
                        "schema": {
                            "enum": [
                                "INCOMING",
                                "OUTGOING"
                            ],
                            "type": "string"
                        },
                        "operators": [
                            "eq"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            },
            "sort": {
                "version": 1,
                "fields": [
                    "updatedAt",
                    "status"
                ],
                "default": "updatedAt:desc"
            }
        },
        "sdk": {
            "resource": "userSocial",
            "method": "listFriendships",
            "action": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listUserGroupMemberships": {
        "operationId": "listUserGroupMemberships",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/group-memberships",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "List UserGroupMemberships",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "filter"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/OwnGroupMembership"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Filtre por filter[groupId]=42.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "groupId": {
                                "oneOf": [
                                    {
                                        "minimum": 1,
                                        "type": "integer"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "minimum": 1,
                                                "type": "integer"
                                            },
                                            "in": {
                                                "items": {
                                                    "minimum": 1,
                                                    "type": "integer"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "groupId"
                        ],
                        "schema": {
                            "minimum": 1,
                            "type": "integer"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            }
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "listUserGroupMemberships",
            "action": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listUserInterests": {
        "operationId": "listUserInterests",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/interests",
        "authentication": "required",
        "tags": [
            "student-tag-interests"
        ],
        "summary": "List UserInterests",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "data": {
                                    "type": "array",
                                    "items": {
                                        "$ref": "#/components/schemas/UserInterest"
                                    }
                                },
                                "quantity": {
                                    "type": "integer"
                                },
                                "total": {
                                    "type": "integer"
                                },
                                "links": {
                                    "$ref": "#/components/schemas/PaginationLinks"
                                }
                            },
                            "required": [
                                "data",
                                "quantity",
                                "total",
                                "links"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page, or \"all\" to return every item.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "anyOf": [
                            {
                                "type": "integer",
                                "minimum": 1
                            },
                            {
                                "type": "string",
                                "enum": [
                                    "all"
                                ]
                            }
                        ],
                        "description": "Number of items per page, or \"all\" to return every item."
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "name:asc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "name"
                ],
                "default": "name:asc"
            }
        },
        "sdk": {
            "resource": "userInterests",
            "method": "list",
            "action": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "all",
            "defaultPageSize": 20,
            "allowAll": true
        }
    },
    "listUserPeople": {
        "operationId": "listUserPeople",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/people",
        "authentication": "required",
        "tags": [
            "student-social"
        ],
        "summary": "List UserPeople",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "query",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserPeoplePage"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 50,
                        "description": "Number of items per page."
                    }
                },
                {
                    "name": "query",
                    "required": false,
                    "description": null,
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "string",
                        "minLength": 1
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "displayName:asc"
                    }
                }
            ],
            "filter": null,
            "sort": {
                "version": 1,
                "fields": [
                    "displayName"
                ],
                "default": "displayName:asc"
            }
        },
        "sdk": {
            "resource": "userPeople",
            "action": "list",
            "method": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "page",
            "defaultPageSize": 20,
            "maxPageSize": 50,
            "allowAll": false
        }
    },
    "listUserSharedPeriodPlans": {
        "operationId": "listUserSharedPeriodPlans",
        "target": "app",
        "method": "GET",
        "path": "/users/{userId}/shared-period-plans",
        "authentication": "required",
        "tags": [
            "shared-period-plans"
        ],
        "summary": "List UserSharedPeriodPlans",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "page",
            "pageSize",
            "filter",
            "sort"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/SharedPeriodPlanningPage"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "page",
                    "required": false,
                    "description": "Page number. The first page is 1.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "description": "Page number. The first page is 1."
                    }
                },
                {
                    "name": "pageSize",
                    "required": false,
                    "description": "Number of items per page.",
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "integer",
                        "minimum": 1,
                        "maximum": 50,
                        "description": "Number of items per page."
                    }
                },
                {
                    "name": "filter",
                    "required": false,
                    "description": "Structured shared planning filters. Use filter[ownerPublicId]=UUID.",
                    "style": "deepObject",
                    "explode": true,
                    "schema": {
                        "additionalProperties": false,
                        "properties": {
                            "ownerPublicId": {
                                "oneOf": [
                                    {
                                        "format": "uuid",
                                        "type": "string"
                                    },
                                    {
                                        "additionalProperties": false,
                                        "properties": {
                                            "eq": {
                                                "format": "uuid",
                                                "type": "string"
                                            },
                                            "in": {
                                                "items": {
                                                    "format": "uuid",
                                                    "type": "string"
                                                },
                                                "type": "array"
                                            }
                                        },
                                        "type": "object"
                                    }
                                ]
                            }
                        },
                        "type": "object"
                    }
                },
                {
                    "name": "sort",
                    "required": false,
                    "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                    "style": "form",
                    "explode": false,
                    "schema": {
                        "type": "string",
                        "description": "Ordered comma-separated field:direction terms. Earlier terms have higher priority.",
                        "example": "updatedAt:desc"
                    }
                }
            ],
            "filter": {
                "version": 1,
                "fields": [
                    {
                        "path": [
                            "ownerPublicId"
                        ],
                        "schema": {
                            "format": "uuid",
                            "type": "string"
                        },
                        "operators": [
                            "eq",
                            "in"
                        ]
                    }
                ],
                "constraints": {
                    "maxExpressions": 20,
                    "maxDepth": 3,
                    "maxParameters": 100
                }
            },
            "sort": {
                "version": 1,
                "fields": [
                    "updatedAt",
                    "name",
                    "studyPeriodYear"
                ],
                "default": "updatedAt:desc"
            }
        },
        "sdk": {
            "resource": "userSharedPeriodPlans",
            "action": "list",
            "method": "list",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": {
            "defaultMode": "page",
            "defaultPageSize": 20,
            "maxPageSize": 50,
            "allowAll": false
        }
    },
    "publishGroupEvent": {
        "operationId": "publishGroupEvent",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/groups/{groupId}/events/{eventId}/publish",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "publishGroupEvent",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId",
            "eventId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/ManagedGroupEvent"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "publishGroupEvent",
            "action": "create",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId",
                "eventId": "eventId"
            }
        },
        "pagination": null
    },
    "putGroupAvatar": {
        "operationId": "putGroupAvatar",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/groups/{groupId}/avatar",
        "authentication": "required",
        "tags": [
            "media"
        ],
        "summary": "putGroupAvatar",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "multipart/form-data",
            "schema": {
                "type": "object",
                "properties": {
                    "images[]": {
                        "type": "string",
                        "format": "binary"
                    }
                },
                "required": [
                    "images[]"
                ]
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "mediaId": {
                                    "type": "string",
                                    "format": "uuid"
                                },
                                "revision": {
                                    "type": "integer",
                                    "minimum": 0
                                }
                            },
                            "required": [
                                "mediaId",
                                "revision"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 401,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UnauthenticatedProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unauthenticated"
                ]
            },
            {
                "status": 403,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ForbiddenProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:forbidden"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:conflict"
                ]
            },
            {
                "status": 413,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/PayloadTooLargeProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:payload-too-large"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UnprocessableEntityProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unprocessable-entity"
                ]
            },
            {
                "status": 429,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/MediaUploadRateLimitProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:media-upload-rate-limit"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 503,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServiceUnavailableProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:service-unavailable"
                ]
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "media",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            },
            "method": "putGroupAvatar",
            "action": "create"
        },
        "pagination": null
    },
    "putUserAvatar": {
        "operationId": "putUserAvatar",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/avatar",
        "authentication": "required",
        "tags": [
            "media"
        ],
        "summary": "putUserAvatar",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "multipart/form-data",
            "schema": {
                "type": "object",
                "properties": {
                    "images[]": {
                        "type": "string",
                        "format": "binary"
                    }
                },
                "required": [
                    "images[]"
                ]
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "mediaId": {
                                    "type": "string",
                                    "format": "uuid"
                                },
                                "revision": {
                                    "type": "integer",
                                    "minimum": 0
                                }
                            },
                            "required": [
                                "mediaId",
                                "revision"
                            ]
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 401,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UnauthenticatedProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unauthenticated"
                ]
            },
            {
                "status": 403,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ForbiddenProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:forbidden"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:conflict"
                ]
            },
            {
                "status": 413,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/PayloadTooLargeProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:payload-too-large"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UnprocessableEntityProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unprocessable-entity"
                ]
            },
            {
                "status": 429,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/MediaUploadRateLimitProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:media-upload-rate-limit"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 503,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServiceUnavailableProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:service-unavailable"
                ]
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "media",
            "pathParameters": {
                "userId": "userId"
            },
            "method": "putUserAvatar",
            "action": "create"
        },
        "pagination": null
    },
    "removeCourseTag": {
        "operationId": "removeCourseTag",
        "target": "app",
        "method": "DELETE",
        "path": "/courses/{courseId}/tags/{tagId}",
        "authentication": "required",
        "tags": [
            "course-tags"
        ],
        "summary": "removeCourseTag",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "courseId",
            "tagId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "courseTags",
            "method": "remove",
            "action": "delete",
            "pathParameters": {
                "courseId": "courseId",
                "tagId": "tagId"
            }
        },
        "pagination": null
    },
    "replaceBotGrant": {
        "operationId": "replaceBotGrant",
        "target": "app",
        "method": "PUT",
        "path": "/users/{userId}/bot-grants/{botAuthIdentityId}",
        "authentication": "required",
        "tags": [
            "bot-grants"
        ],
        "summary": "replaceBotGrant",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "botAuthIdentityId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/ReplaceBotGrantBody"
            }
        },
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "botGrants",
            "method": "replace",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "botAuthIdentityId": "botAuthIdentityId"
            }
        },
        "pagination": null
    },
    "unsubscribeExchangeNotices": {
        "operationId": "unsubscribeExchangeNotices",
        "target": "app",
        "method": "POST",
        "path": "/users/{userId}/exchange-notice-subscription/unsubscribe",
        "authentication": "public",
        "tags": [
            "exchange-notice-subscriptions"
        ],
        "summary": "unsubscribeExchangeNotices",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [
            "token"
        ],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "type": "object",
                            "properties": {
                                "enabled": {
                                    "type": "boolean",
                                    "enum": [
                                        false
                                    ]
                                }
                            },
                            "required": [
                                "enabled"
                            ],
                            "additionalProperties": false
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [
                {
                    "name": "token",
                    "required": true,
                    "description": null,
                    "style": null,
                    "explode": null,
                    "schema": {
                        "type": "string",
                        "minLength": 1
                    }
                }
            ],
            "filter": null
        },
        "sdk": {
            "resource": "exchangeNoticeSubscriptions",
            "method": "unsubscribe",
            "action": "update",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "updateAuthIdentity": {
        "operationId": "updateAuthIdentity",
        "target": "app",
        "method": "PATCH",
        "path": "/admin/auth-identities/{id}",
        "authentication": "required",
        "tags": [
            "auth-identities"
        ],
        "summary": "Update AuthIdentity",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/PatchAuthIdentityBody"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/AuthIdentityEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 403,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/AdminIdentityManagedByCliProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:admin-identity-managed-by-cli"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "authIdentities",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "id": "authIdentityId"
            }
        },
        "pagination": null
    },
    "updateCategory": {
        "operationId": "updateCategory",
        "target": "app",
        "method": "PUT",
        "path": "/categories/{id}",
        "authentication": "required",
        "tags": [
            "categories"
        ],
        "summary": "Update Category",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1
                    }
                },
                "required": [
                    "name"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/Category"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "categories",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "id": "categoryId"
            }
        },
        "pagination": null
    },
    "updateCurriculums": {
        "operationId": "updateCurriculums",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/curriculums/{id}",
        "authentication": "required",
        "tags": [
            "curriculums"
        ],
        "summary": "Update Curriculums",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1
                    },
                    "isFavorite": {
                        "type": "boolean"
                    },
                    "selection": {
                        "type": "object",
                        "properties": {
                            "catalogProgramId": {
                                "type": "integer",
                                "nullable": true
                            },
                            "catalogProgramVariantId": {
                                "type": "integer",
                                "nullable": true
                            },
                            "languageId": {
                                "type": "integer",
                                "nullable": true
                            }
                        },
                        "additionalProperties": false
                    },
                    "planningStart": {
                        "type": "object",
                        "nullable": true,
                        "properties": {
                            "year": {
                                "type": "integer"
                            },
                            "semester": {
                                "anyOf": [
                                    {
                                        "type": "number",
                                        "enum": [
                                            1
                                        ]
                                    },
                                    {
                                        "type": "number",
                                        "enum": [
                                            2
                                        ]
                                    }
                                ]
                            },
                            "semesterNumber": {
                                "type": "integer",
                                "minimum": 0,
                                "exclusiveMinimum": true
                            }
                        },
                        "required": [
                            "year",
                            "semester",
                            "semesterNumber"
                        ],
                        "additionalProperties": false
                    },
                    "currentPeriodId": {
                        "type": "integer",
                        "nullable": true
                    },
                    "periods": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "position": {
                                            "type": "integer",
                                            "minimum": 0,
                                            "exclusiveMinimum": true
                                        }
                                    },
                                    "required": [
                                        "position"
                                    ],
                                    "additionalProperties": false
                                }
                            },
                            "update": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "id": {
                                            "type": "integer"
                                        },
                                        "position": {
                                            "type": "integer",
                                            "minimum": 0,
                                            "exclusiveMinimum": true
                                        }
                                    },
                                    "required": [
                                        "id",
                                        "position"
                                    ],
                                    "additionalProperties": false
                                }
                            },
                            "remove": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            }
                        },
                        "additionalProperties": false
                    },
                    "courses": {
                        "type": "object",
                        "properties": {
                            "upsert": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "courseId": {
                                            "type": "integer"
                                        },
                                        "periodId": {
                                            "type": "integer",
                                            "nullable": true
                                        }
                                    },
                                    "required": [
                                        "courseId",
                                        "periodId"
                                    ],
                                    "additionalProperties": false
                                }
                            },
                            "remove": {
                                "type": "array",
                                "items": {
                                    "type": "integer"
                                }
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/CurriculumEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidCurriculumProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-curriculum": "#/components/schemas/InvalidCurriculumProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-curriculum"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "curriculums",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "id": "curriculumId"
            }
        },
        "pagination": null
    },
    "updateExchangeNoticeSubscription": {
        "operationId": "updateExchangeNoticeSubscription",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/exchange-notice-subscription",
        "authentication": "required",
        "tags": [
            "exchange-notice-subscriptions"
        ],
        "summary": "Update ExchangeNoticeSubscription",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/PatchExchangeNoticeSubscriptionBody"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/ExchangeNoticeSubscription"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "exchangeNoticeSubscriptions",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "updateFeedbackReport": {
        "operationId": "updateFeedbackReport",
        "target": "app",
        "method": "PATCH",
        "path": "/admin/feedback-reports/{id}",
        "authentication": "required",
        "tags": [
            "feedback-reports"
        ],
        "summary": "Update FeedbackReport",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/PatchFeedbackReportBody"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/FeedbackReport"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "feedbackReports",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "id": "feedbackReportId"
            }
        },
        "pagination": null
    },
    "updateGroup": {
        "operationId": "updateGroup",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/groups/{groupId}",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Update Group",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "groupId",
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 160
                    },
                    "description": {
                        "type": "string",
                        "nullable": true
                    },
                    "contacts": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 40
                                        },
                                        "label": {
                                            "type": "string",
                                            "nullable": true,
                                            "maxLength": 80
                                        },
                                        "value": {
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 320
                                        },
                                        "sortOrder": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "type",
                                        "value"
                                    ],
                                    "additionalProperties": false
                                }
                            },
                            "update": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "type": {
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 40
                                        },
                                        "label": {
                                            "type": "string",
                                            "nullable": true,
                                            "maxLength": 80
                                        },
                                        "value": {
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 320
                                        },
                                        "sortOrder": {
                                            "type": "integer"
                                        },
                                        "id": {
                                            "type": "integer",
                                            "minimum": 0,
                                            "exclusiveMinimum": true
                                        }
                                    },
                                    "required": [
                                        "id"
                                    ],
                                    "additionalProperties": false
                                }
                            },
                            "remove": {
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            }
                        },
                        "additionalProperties": false
                    },
                    "externalLinks": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "label": {
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 80
                                        },
                                        "url": {
                                            "type": "string",
                                            "maxLength": 2048,
                                            "format": "uri"
                                        },
                                        "sortOrder": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "label",
                                        "url"
                                    ],
                                    "additionalProperties": false
                                }
                            },
                            "update": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "label": {
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 80
                                        },
                                        "url": {
                                            "type": "string",
                                            "maxLength": 2048,
                                            "format": "uri"
                                        },
                                        "sortOrder": {
                                            "type": "integer"
                                        },
                                        "id": {
                                            "type": "integer",
                                            "minimum": 0,
                                            "exclusiveMinimum": true
                                        }
                                    },
                                    "required": [
                                        "id"
                                    ],
                                    "additionalProperties": false
                                }
                            },
                            "remove": {
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            }
                        },
                        "additionalProperties": false
                    },
                    "tags": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            },
                            "remove": {
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/Group"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groups",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId"
            }
        },
        "pagination": null
    },
    "updateGroupEvent": {
        "operationId": "updateGroupEvent",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/groups/{groupId}/events/{eventId}",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Update GroupEvent",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId",
            "eventId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 160
                    },
                    "description": {
                        "type": "string"
                    },
                    "startsAt": {
                        "type": "string",
                        "nullable": true,
                        "format": "date-time"
                    },
                    "endsAt": {
                        "type": "string",
                        "nullable": true,
                        "format": "date-time"
                    },
                    "location": {
                        "type": "string",
                        "nullable": true,
                        "maxLength": 320
                    },
                    "tags": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            },
                            "remove": {
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/ManagedGroupEvent"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "updateGroupEvent",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId",
                "eventId": "eventId"
            }
        },
        "pagination": null
    },
    "updateGroupRole": {
        "operationId": "updateGroupRole",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/groups/{groupId}/roles/{roleId}",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Update GroupRole",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId",
            "roleId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1,
                        "maxLength": 80
                    },
                    "permissions": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "type": "array",
                                "items": {
                                    "type": "string",
                                    "enum": [
                                        "GROUP_EDIT",
                                        "GROUP_TAG_MANAGE",
                                        "MEMBER_MANAGE",
                                        "ROLE_MANAGE",
                                        "EVENT_CREATE",
                                        "EVENT_EDIT",
                                        "EVENT_PUBLISH"
                                    ]
                                }
                            },
                            "remove": {
                                "type": "array",
                                "items": {
                                    "type": "string",
                                    "enum": [
                                        "GROUP_EDIT",
                                        "GROUP_TAG_MANAGE",
                                        "MEMBER_MANAGE",
                                        "ROLE_MANAGE",
                                        "EVENT_CREATE",
                                        "EVENT_EDIT",
                                        "EVENT_PUBLISH"
                                    ]
                                }
                            }
                        },
                        "additionalProperties": false
                    }
                },
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/GroupRole"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "updateGroupRole",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId",
                "roleId": "roleId"
            }
        },
        "pagination": null
    },
    "updateManagedGroupMembership": {
        "operationId": "updateManagedGroupMembership",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/groups/{groupId}/memberships/{membershipId}",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Update ManagedGroupMembership",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "groupId",
            "membershipId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "positions": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "title": {
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 120
                                        },
                                        "startedAt": {
                                            "type": "string",
                                            "nullable": true,
                                            "format": "date-time"
                                        },
                                        "endedAt": {
                                            "type": "string",
                                            "nullable": true,
                                            "format": "date-time"
                                        },
                                        "sortOrder": {
                                            "type": "integer"
                                        }
                                    },
                                    "required": [
                                        "title"
                                    ],
                                    "additionalProperties": false
                                }
                            },
                            "update": {
                                "type": "array",
                                "items": {
                                    "type": "object",
                                    "properties": {
                                        "title": {
                                            "type": "string",
                                            "minLength": 1,
                                            "maxLength": 120
                                        },
                                        "startedAt": {
                                            "type": "string",
                                            "nullable": true,
                                            "format": "date-time"
                                        },
                                        "endedAt": {
                                            "type": "string",
                                            "nullable": true,
                                            "format": "date-time"
                                        },
                                        "sortOrder": {
                                            "type": "integer"
                                        },
                                        "id": {
                                            "type": "integer",
                                            "minimum": 0,
                                            "exclusiveMinimum": true
                                        }
                                    },
                                    "required": [
                                        "id"
                                    ],
                                    "additionalProperties": false
                                }
                            },
                            "remove": {
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            }
                        },
                        "additionalProperties": false
                    },
                    "roles": {
                        "type": "object",
                        "properties": {
                            "add": {
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            },
                            "remove": {
                                "type": "array",
                                "items": {
                                    "type": "integer",
                                    "minimum": 0,
                                    "exclusiveMinimum": true
                                }
                            }
                        },
                        "additionalProperties": false
                    },
                    "leave": {
                        "type": "boolean"
                    }
                },
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/ManagedGroupMembership"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "updateManagedGroupMembership",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "groupId": "groupId",
                "membershipId": "membershipId"
            }
        },
        "pagination": null
    },
    "updatePeriodPlans": {
        "operationId": "updatePeriodPlans",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/period-plans/{id}",
        "authentication": "required",
        "tags": [
            "period-plans"
        ],
        "summary": "Update PeriodPlans",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/UpdatePeriodPlanningInput"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/PeriodPlanningEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidPeriodPlanProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-period-plan": "#/components/schemas/InvalidPeriodPlanProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-period-plan"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "periodPlans",
            "action": "update",
            "method": "update",
            "pathParameters": {
                "userId": "userId",
                "id": "periodPlanningId"
            }
        },
        "pagination": null
    },
    "updateProfessorEvaluation": {
        "operationId": "updateProfessorEvaluation",
        "target": "app",
        "method": "PUT",
        "path": "/users/{userId}/classes/{classId}/professors/{professorId}/evaluation",
        "authentication": "required",
        "tags": [
            "professor-evaluations"
        ],
        "summary": "Update ProfessorEvaluation",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "classId",
            "professorId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/ProfessorEvaluationBody"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/ProfessorEvaluation"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidProfessorEvaluationProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-professor-evaluation": "#/components/schemas/InvalidProfessorEvaluationProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-professor-evaluation"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "professorEvaluations",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "classId": "classId",
                "professorId": "professorId"
            }
        },
        "pagination": null
    },
    "updateStudentCourseAttempts": {
        "operationId": "updateStudentCourseAttempts",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/course-attempts/{id}",
        "authentication": "required",
        "tags": [
            "student-course-attempts"
        ],
        "summary": "Update StudentCourseAttempts",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/UpdateStudentCourseAttemptInput"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/StudentCourseAttempt"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidStudentCourseAttemptProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-student-course-attempt": "#/components/schemas/InvalidStudentCourseAttemptProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-student-course-attempt"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "courseAttempts",
            "action": "update",
            "method": "update",
            "pathParameters": {
                "userId": "userId",
                "id": "courseAttemptId"
            }
        },
        "pagination": null
    },
    "updateStudents": {
        "operationId": "updateStudents",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/student",
        "authentication": "required",
        "tags": [
            "students"
        ],
        "summary": "Update Students",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/PatchStudentBody"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/StudentEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "oneOf": [
                                {
                                    "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                                },
                                {
                                    "$ref": "#/components/schemas/InvalidStudentProfileProblem"
                                }
                            ],
                            "discriminator": {
                                "propertyName": "type",
                                "mapping": {
                                    "urn:pomi:problem:reference-not-found": "#/components/schemas/ReferenceNotFoundProblem",
                                    "urn:pomi:problem:invalid-student-profile": "#/components/schemas/InvalidStudentProfileProblem"
                                }
                            }
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found",
                    "urn:pomi:problem:invalid-student-profile"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "students",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "updateTag": {
        "operationId": "updateTag",
        "target": "app",
        "method": "PUT",
        "path": "/tags/{id}",
        "authentication": "required",
        "tags": [
            "tags"
        ],
        "summary": "Update Tag",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "minLength": 1
                    },
                    "categoryId": {
                        "type": "integer",
                        "minimum": 0,
                        "exclusiveMinimum": true
                    },
                    "parentTagId": {
                        "type": "integer",
                        "nullable": true,
                        "minimum": 0,
                        "exclusiveMinimum": true
                    }
                },
                "required": [
                    "name",
                    "categoryId",
                    "parentTagId"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/Tag"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 409,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/UniqueConstraintConflictProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:unique-constraint-conflict"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "tags",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "id": "tagId"
            }
        },
        "pagination": null
    },
    "updateUser": {
        "operationId": "updateUser",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}",
        "authentication": "required",
        "tags": [
            "users"
        ],
        "summary": "Update User",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "name": {
                        "type": "string",
                        "nullable": true,
                        "minLength": 1,
                        "maxLength": 200
                    }
                },
                "required": [
                    "name"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserEntity"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "users",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "updateUserGroupMembership": {
        "operationId": "updateUserGroupMembership",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/group-memberships/{id}",
        "authentication": "required",
        "tags": [
            "groups"
        ],
        "summary": "Update UserGroupMembership",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "id"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "isPublic": {
                        "type": "boolean"
                    }
                },
                "required": [
                    "isPublic"
                ],
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/OwnGroupMembership"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "groupCommunity",
            "method": "updateUserGroupMembership",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "id": "id"
            }
        },
        "pagination": null
    },
    "updateUserInterest": {
        "operationId": "updateUserInterest",
        "target": "app",
        "method": "PUT",
        "path": "/users/{userId}/interests/{tagId}",
        "authentication": "required",
        "tags": [
            "student-tag-interests"
        ],
        "summary": "Update UserInterest",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId",
            "tagId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": null,
        "responses": [
            {
                "status": 204,
                "success": true,
                "contents": [],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 422,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ReferenceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:reference-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userInterests",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "userId": "userId",
                "tagId": "tagId"
            }
        },
        "pagination": null
    },
    "updateUserPreferences": {
        "operationId": "updateUserPreferences",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/preferences",
        "authentication": "required",
        "tags": [
            "users"
        ],
        "summary": "Update UserPreferences",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "$ref": "#/components/schemas/UserPreferences"
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserPreferences"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userPreferences",
            "method": "update",
            "action": "update",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
    "updateUserProfile": {
        "operationId": "updateUserProfile",
        "target": "app",
        "method": "PATCH",
        "path": "/users/{userId}/profile",
        "authentication": "required",
        "tags": [
            "student-social"
        ],
        "summary": "Update UserProfile",
        "description": null,
        "deprecated": false,
        "pathParameters": [
            "userId"
        ],
        "queryParameters": [],
        "headerParameters": [],
        "cookieParameters": [],
        "requestBody": {
            "required": true,
            "contentType": "application/json",
            "schema": {
                "type": "object",
                "properties": {
                    "enabled": {
                        "type": "boolean"
                    },
                    "displayName": {
                        "type": "string",
                        "nullable": true,
                        "minLength": 1,
                        "maxLength": 80
                    },
                    "bio": {
                        "type": "string",
                        "nullable": true,
                        "maxLength": 280
                    },
                    "currentCoursesVisibility": {
                        "$ref": "#/components/schemas/StudentProfileVisibility"
                    }
                },
                "additionalProperties": false
            }
        },
        "responses": [
            {
                "status": 200,
                "success": true,
                "contents": [
                    {
                        "contentType": "application/json",
                        "schema": {
                            "$ref": "#/components/schemas/UserProfile"
                        }
                    }
                ],
                "problemTypes": []
            },
            {
                "status": 400,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/InvalidRequestProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:invalid-request"
                ]
            },
            {
                "status": 404,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ResourceNotFoundProblem"
                        }
                    }
                ],
                "problemTypes": [
                    "urn:pomi:problem:resource-not-found"
                ]
            },
            {
                "status": 500,
                "success": false,
                "contents": [
                    {
                        "contentType": "application/problem+json",
                        "schema": {
                            "$ref": "#/components/schemas/ServerErrorProblem"
                        }
                    }
                ],
                "problemTypes": []
            }
        ],
        "query": {
            "parameters": [],
            "filter": null
        },
        "sdk": {
            "resource": "userSocial",
            "method": "updateProfile",
            "action": "update",
            "pathParameters": {
                "userId": "userId"
            }
        },
        "pagination": null
    },
} as const satisfies Record<string, GeneratedOperationDefinition>

export type OperationName = keyof typeof operationDefinitions
