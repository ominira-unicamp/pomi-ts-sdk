export interface paths {
    "/media/{mediaId}/{variant}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getImageVariant"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/professors/evaluation-summaries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listProfessorEvaluationSummaries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/courses/evaluation-summaries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listCourseEvaluationSummaries"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/evaluation-summaries": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getCourseProfessorEvaluationSummary"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/classes/{classId}/professors/{professorId}/evaluation": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getProfessorEvaluation"];

        put: operations["updateProfessorEvaluation"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/professor-evaluations/pending": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listPendingProfessorEvaluations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/me": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getCurrentUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/bots": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listBots"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/bot-grants": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listBotGrants"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/bot-grants/{botAuthIdentityId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;

        put: operations["replaceBotGrant"];
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/auth-identities": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listAuthIdentities"];
        put?: never;

        post: operations["createAuthIdentity"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/auth-identities/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateAuthIdentity"];
        trace?: never;
    };
    "/users/{userId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getUser"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateUser"];
        trace?: never;
    };
    "/users/{userId}/preferences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getUserPreferences"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateUserPreferences"];
        trace?: never;
    };
    "/users/{userId}/curriculums/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getCurriculums"];
        put?: never;
        post?: never;

        delete: operations["deleteCurriculums"];
        options?: never;
        head?: never;

        patch: operations["updateCurriculums"];
        trace?: never;
    };
    "/users/{userId}/curriculums": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listCurriculums"];
        put?: never;

        post: operations["createCurriculums"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/period-plans/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getPeriodPlans"];
        put?: never;
        post?: never;

        delete: operations["deletePeriodPlans"];
        options?: never;
        head?: never;

        patch: operations["updatePeriodPlans"];
        trace?: never;
    };
    "/users/{userId}/period-plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listPeriodPlans"];
        put?: never;

        post: operations["createPeriodPlans"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared-period-plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listPublicSharedPeriodPlans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/shared-period-plans/{shareId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getPublicSharedPeriodPlan"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/shared-period-plans": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listUserSharedPeriodPlans"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/shared-period-plans/{shareId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getUserSharedPeriodPlan"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/course-attempts/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getStudentCourseAttempts"];
        put?: never;
        post?: never;

        delete: operations["deleteStudentCourseAttempts"];
        options?: never;
        head?: never;

        patch: operations["updateStudentCourseAttempts"];
        trace?: never;
    };
    "/users/{userId}/course-attempts": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listStudentCourseAttempts"];
        put?: never;

        post: operations["createStudentCourseAttempts"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/course-history": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["createStudentHistory"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/absences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listUserAbsences"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/course-attempts/{attemptId}/absences": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["createStudentAbsences"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/course-attempts/{attemptId}/absences/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;

        delete: operations["deleteStudentAbsences"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/profile": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getUserProfile"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateUserProfile"];
        trace?: never;
    };
    "/users/{userId}/people": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listUserPeople"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/people/{publicId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getUserPerson"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/friendships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listUserFriendships"];
        put?: never;

        post: operations["createUserFriendship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/friendships/{id}/accept": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["acceptUserFriendship"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/friendships/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;

        delete: operations["deleteUserFriendship"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/feedback-reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["createFeedbackReport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/feedback-reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listUserFeedbackReports"];
        put?: never;

        post: operations["createUserFeedbackReport"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/feedback-reports": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listFeedbackReports"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/admin/feedback-reports/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateFeedbackReport"];
        trace?: never;
    };
    "/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listGroups"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/groups/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getGroup"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["createGroup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateGroup"];
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/archive": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["archiveGroup"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/avatar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["putGroupAvatar"];

        delete: operations["deleteGroupAvatar"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group-memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listPublicGroupMemberships"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group-memberships/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getPublicGroupMembership"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/group-memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listUserGroupMemberships"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/group-memberships/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getUserGroupMembership"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateUserGroupMembership"];
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/memberships": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listManagedGroupMemberships"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/memberships/{membershipId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateManagedGroupMembership"];
        trace?: never;
    };
    "/users/{userId}/group-invitations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listGroupInvitations"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/invitations": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listManagedGroupInvitations"];
        put?: never;

        post: operations["createGroupInvitation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/group-invitations/{id}/accept": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["acceptGroupInvitation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/group-invitations/{id}/decline": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["declineGroupInvitation"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/roles": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listGroupRoles"];
        put?: never;

        post: operations["createGroupRole"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/roles/{roleId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;

        delete: operations["deleteGroupRole"];
        options?: never;
        head?: never;

        patch: operations["updateGroupRole"];
        trace?: never;
    };
    "/group-events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listGroupEvents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/group-events/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getGroupEvent"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/events": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listManagedGroupEvents"];
        put?: never;

        post: operations["createGroupEvent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/events/{eventId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateGroupEvent"];
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/events/{eventId}/publish": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["publishGroupEvent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/groups/{groupId}/events/{eventId}/cancel": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["cancelGroupEvent"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/exchange-notice-subscription": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getExchangeNoticeSubscription"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;

        patch: operations["updateExchangeNoticeSubscription"];
        trace?: never;
    };
    "/users/{userId}/exchange-notice-subscription/unsubscribe": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["unsubscribeExchangeNotices"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listCategories"];
        put?: never;

        post: operations["createCategory"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/categories/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getCategory"];

        put: operations["updateCategory"];
        post?: never;

        delete: operations["deleteCategory"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listTags"];
        put?: never;

        post: operations["createTag"];
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags/{id}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getTag"];

        put: operations["updateTag"];
        post?: never;

        delete: operations["deleteTag"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/courses/{courseId}/tags": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listCourseTags"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/tags/{id}/courses": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listTagCourses"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/courses/{courseId}/tags/{tagId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;

        put: operations["addCourseTag"];
        post?: never;

        delete: operations["removeCourseTag"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/student": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["getStudents"];
        put?: never;

        post: operations["createStudents"];

        delete: operations["deleteStudents"];
        options?: never;
        head?: never;

        patch: operations["updateStudents"];
        trace?: never;
    };
    "/admin/students": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listStudents"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/avatar": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;
        put?: never;

        post: operations["putUserAvatar"];

        delete: operations["deleteUserAvatar"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/interests": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        get: operations["listUserInterests"];
        put?: never;
        post?: never;
        delete?: never;
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
    "/users/{userId}/interests/{tagId}": {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        get?: never;

        put: operations["updateUserInterest"];
        post?: never;

        delete: operations["deleteUserInterest"];
        options?: never;
        head?: never;
        patch?: never;
        trace?: never;
    };
}
export type webhooks = Record<string, never>;
export interface components {
    schemas: {
        InvalidRequestProblem: {

            type: "urn:pomi:problem:invalid-request";

            title: "Dados da requisição inválidos";

            status: 400;
            detail: string;
            instance?: string;
            fields: components["schemas"]["ProblemField"][];
        };
        ProblemField: {
            code: string;
            path: string[];
            message: string;
            details?: {
                [key: string]: unknown;
            };
        };
        UnauthenticatedProblem: {

            type: "urn:pomi:problem:unauthenticated";

            title: "Autenticação necessária";

            status: 401;
            detail: string;
            instance?: string;
        };
        ForbiddenProblem: {

            type: "urn:pomi:problem:forbidden";

            title: "Acesso não permitido";

            status: 403;
            detail: string;
            instance?: string;
        };
        ResourceNotFoundProblem: {

            type: "urn:pomi:problem:resource-not-found";

            title: "Recurso não encontrado";

            status: 404;
            detail: string;
            instance?: string;
        };
        ServerErrorProblem: components["schemas"]["InternalServerErrorProblem"] | components["schemas"]["InconsistentResourceStateProblem"];
        InternalServerErrorProblem: {

            type: "urn:pomi:problem:internal-server-error";

            title: "Não foi possível concluir a ação";

            status: 500;
            detail: string;
            instance?: string;
        };
        InconsistentResourceStateProblem: {

            type: "urn:pomi:problem:inconsistent-resource-state";

            title: "Estado interno do recurso inconsistente";

            status: 500;
            detail: string;
            instance?: string;
        };
        ServiceUnavailableProblem: {

            type: "urn:pomi:problem:service-unavailable";

            title: "Serviço indisponível";

            status: 503;
            detail: string;
            instance?: string;
        };
        PageProfessorEvaluationSummaries: {
            data: components["schemas"]["ProfessorEvaluationSummary"][];
            quantity: number;
            total: number;
            links: components["schemas"]["PaginationLinks"];
        };
        ProfessorEvaluationSummary: {
            responseCount: number;
            wouldTakeAgain: number;
            fairness: number;
            clarity: number;
            difficulty: number;
            professor: {
                id: number;
                name: string;
            };
        };
        PaginationLinks: {

            self: string;

            first: string;

            last: string;

            next: string | null;

            previous: string | null;
        };
        PageCourseEvaluationSummaries: {
            data: components["schemas"]["CourseEvaluationSummary"][];
            quantity: number;
            total: number;
            links: components["schemas"]["PaginationLinks"];
        };
        CourseEvaluationSummary: {
            responseCount: number;
            wouldTakeAgain: number;
            fairness: number;
            clarity: number;
            difficulty: number;
            course: {
                id: number;
                code: string;
                name: string;
            };
        };
        CourseProfessorEvaluationSummary: {
            responseCount: number;
            wouldTakeAgain: number;
            fairness: number;
            clarity: number;
            difficulty: number;
            course: {
                id: number;
                code: string;
                name: string;
            };
            professor: {
                id: number;
                name: string;
            };
        };
        ProfessorEvaluationEligibility: {
            eligible: boolean;
            evaluation: components["schemas"]["ProfessorEvaluation"];
        };
        ProfessorEvaluation: {
            wouldTakeAgain: number;
            fairness: number;
            clarity: number;
            difficulty: number;
            id: number;
            userId: number;
            classId: number;
            professorId: number;

            createdAt: string;

            updatedAt: string;
        } | null;
        ReferenceNotFoundProblem: {

            type: "urn:pomi:problem:reference-not-found";

            title: "Referência não encontrada";

            status: 422;
            detail: string;
            instance?: string;
            fields: components["schemas"]["ProblemField"][];
        };
        InvalidProfessorEvaluationProblem: {

            type: "urn:pomi:problem:invalid-professor-evaluation";

            title: "Avaliação de professor inválida";

            status: 422;
            detail: string;
            instance?: string;
            fields: {
                code: string;
                path: string[];
                message: string;
            }[];
        };
        ProfessorEvaluationBody: {
            wouldTakeAgain: number;
            fairness: number;
            clarity: number;
            difficulty: number;
        };
        PendingProfessorEvaluation: {
            attemptId: number;
            class: {
                id: number;
                code: string;
            };
            course: {
                id: number;
                code: string;
                name: string;
            };
            professor: {
                id: number;
                name: string;
            };
        };
        CurrentUserEntity: {
            principalId: number;
            authIdentityId: number;

            kind: "HUMAN" | "SERVICE";
            userId: number | null;
            serviceAccountId: number | null;
            roles: string[];
            capabilities: string[];
            studentId: number | null;
        };
        BotIdentityEntity: {
            id: number;
            displayName: string | null;
        };
        BotGrantEntity: {
            id: number;
            userId: number;
            botAuthIdentityId: number;
            grantedByAuthIdentityId: number;
            revokedByAuthIdentityId: number | null;
            capability: components["schemas"]["UserCapability"];

            createdAt: string | null;

            revokedAt: string | null;
            botAuthIdentity: {
                id: number;
                displayName: string | null;
            };
        };

        UserCapability: "USER_PROFILE_READ" | "USER_PROFILE_WRITE" | "USER_HISTORY_READ" | "USER_HISTORY_WRITE" | "USER_PLANNING_READ" | "USER_PLANNING_WRITE" | "USER_SOCIAL_READ" | "USER_SOCIAL_WRITE" | "USER_FEEDBACK_READ" | "USER_FEEDBACK_WRITE";
        ReplaceBotGrantBody: {
            capabilities: components["schemas"]["UserCapability"][];
            authorAuthIdentityId: number;
        };
        AuthIdentityEntity: {
            id: number;
            principalId: number;
            userId: number | null;
            serviceAccountId: number | null;
            issuer: string;
            subject: string;
            email: string | null;
            displayName: string | null;
            status: components["schemas"]["AuthIdentityStatus"];
            roles: {
                authIdentityId: number;
                role: string;
            }[];
            capabilities: {
                authIdentityId: number;
                capability: string;
            }[];
        };

        AuthIdentityStatus: "ACTIVE" | "DISABLED";
        CreateBotAuthIdentityBody: {

            issuer: string;
            subject: string;
            displayName: string;

            capabilities: components["schemas"]["AuthCapability"][];
        };

        AuthCapability: "ACADEMIC_WRITE";
        AdminIdentityManagedByCliProblem: {

            type: "urn:pomi:problem:admin-identity-managed-by-cli";

            title: "Identidade administrada pela linha de comando";

            status: 403;
            detail: string;
            instance?: string;
        };
        PatchAuthIdentityBody: {
            status?: components["schemas"]["AuthIdentityStatus"];
            displayName?: string;
            capabilities?: components["schemas"]["AuthCapability"][];
        };
        UserEntity: {
            id: number;
            principalId: number;
            name: string | null;
            studentId: number | null;
        };
        UserPreferences: {
            favoriteCurriculumId: number | null;
        };
        CurriculumEntity: {
            id: number;
            userId: number;
            name: string;
            isFavorite: boolean;
            selection: {
                catalogProgramId: number | null;
                catalogProgramVariantId: number | null;
                languageId: number | null;
            };
            planningStart: {
                year: number;
                semester: 1 | 2;
                semesterNumber: number;
            } | null;
            currentPeriodId: number | null;
            courses: {
                courseId: number;
                periodId: number | null;
                name: string;
                code: string;
                credits: number;
            }[];
            periods: {
                id: number;
                position: number;
            }[];

            createdAt: string;

            updatedAt: string;
        };
        CurriculumSummaryEntity: {
            id: number;
            userId: number;
            name: string;
            isFavorite: boolean;
            selection: {
                catalogProgramId: number | null;
                catalogProgramVariantId: number | null;
                languageId: number | null;
            };

            createdAt: string;

            updatedAt: string;
        };
        InvalidCurriculumProblem: {

            type: "urn:pomi:problem:invalid-curriculum";

            title: "Planejamento curricular inválido";

            status: 422;
            detail: string;
            instance?: string;
            fields: {
                code: string;
                path: string[];
                message: string;
            }[];
        };
        PeriodPlanningEntity: {
            id: number;
            userId: number;
            name: string;
            studyPeriodId: number;
            studyPeriodYear: number;
            studyPeriodYearPeriod: components["schemas"]["YearPeriod"];
            curriculumId: number | null;
            visibility: components["schemas"]["PlanningVisibility"];

            shareId: string;
            guide: components["schemas"]["PlanningGuide"];

            createdAt: string;

            updatedAt: string;
            classes: components["schemas"]["PeriodPlanningClass"][];
        };

        YearPeriod: "SUMMER" | "FIRST_SEMESTER" | "WINTER" | "SECOND_SEMESTER";

        PlanningVisibility: "PRIVATE" | "FRIENDS" | "PUBLIC";
        PlanningGuide: components["schemas"]["NonePlanningGuide"] | components["schemas"]["ProgramPlanningGuide"] | components["schemas"]["CurriculumPlanningGuide"];
        NonePlanningGuide: {

            mode: "NONE";
            manualCourseIds: number[];
        };
        ProgramPlanningGuide: {

            mode: "PROGRAM";
            manualCourseIds: number[];
            program: components["schemas"]["ProgramPlanningGuideDetails"];
        };
        ProgramPlanningGuideDetails: {
            catalogProgramId: number;
            catalogProgramVariantId: number;
            languageId: number | null;
        };
        CurriculumPlanningGuide: {

            mode: "CURRICULUM";
            manualCourseIds: number[];
            curriculum: components["schemas"]["CurriculumPlanningGuideDetails"];
        };
        CurriculumPlanningGuideDetails: components["schemas"]["SavedCurriculumPlanningGuide"] | components["schemas"]["SuggestionCurriculumPlanningGuide"];
        SavedCurriculumPlanningGuide: {

            source: "SAVED";
            saved: components["schemas"]["SavedCurriculumPlanningGuideDetails"];
        };
        SavedCurriculumPlanningGuideDetails: {
            curriculumId: number;
        };
        SuggestionCurriculumPlanningGuide: {

            source: "SUGGESTION";
            suggestion: components["schemas"]["SuggestionCurriculumPlanningGuideDetails"];
        };
        SuggestionCurriculumPlanningGuideDetails: {
            suggestionId: number;
            catalogProgramId: number;
        };
        PeriodPlanningClass: {
            id: number;
            code: string;
            reservationPrograms: {
                id: number;
                code: number;
                name: string;
            }[];
            courseId: number;
            courseCode: string;
            courseCredits: number;
            professors: components["schemas"]["PeriodPlanningProfessor"][];
            classSchedules: components["schemas"]["PeriodPlanningSchedule"][];
        };
        PeriodPlanningProfessor: {
            id: number;
            name: string;
        };
        PeriodPlanningSchedule: {
            id: number;
            dayOfWeek: components["schemas"]["DayOfWeek"];
            start: string;
            end: string;
            roomId: number;
            roomCode: string;
        };

        DayOfWeek: "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | "SUNDAY";
        InvalidPeriodPlanProblem: {

            type: "urn:pomi:problem:invalid-period-plan";

            title: "Planejamento de semestre inválido";

            status: 422;
            detail: string;
            instance?: string;
            fields: {
                code: string;
                path: string[];
                message: string;
            }[];
        };
        CreatePeriodPlanningInput: {
            name?: string;
            studyPeriodId: number;
            guide?: components["schemas"]["PlanningGuideInput"];
            classes: number[];
        };
        PlanningGuideInput: components["schemas"]["NonePlanningGuideInput"] | components["schemas"]["ProgramPlanningGuideInput"] | components["schemas"]["CurriculumPlanningGuideInput"];
        NonePlanningGuideInput: {

            mode: "NONE";
            manualCourseIds: number[];
        };
        ProgramPlanningGuideInput: {

            mode: "PROGRAM";
            manualCourseIds: number[];
            program: components["schemas"]["ProgramPlanningGuideInputDetails"];
        };
        ProgramPlanningGuideInputDetails: {
            catalogProgramId: number;
            catalogProgramVariantId: number;
            languageId: number | null;
        };
        CurriculumPlanningGuideInput: {

            mode: "CURRICULUM";
            manualCourseIds: number[];
            curriculum: components["schemas"]["SavedCurriculumPlanningGuideInput"] | components["schemas"]["SuggestionCurriculumPlanningGuideInput"];
        };
        SavedCurriculumPlanningGuideInput: {

            source: "SAVED";
            saved: {
                curriculumId: number;
            };
        };
        SuggestionCurriculumPlanningGuideInput: {

            source: "SUGGESTION";
            suggestion: {
                suggestionId: number;
                catalogProgramId: number;
            };
        };
        UpdatePeriodPlanningInput: {
            name?: string;
            visibility?: components["schemas"]["PlanningVisibility"];
            guide?: components["schemas"]["PlanningGuideInput"];
            classes?: {
                set?: number[];
                add?: number[];
                remove?: number[];
            };
        };
        SharedPeriodPlanningPage: {
            data: components["schemas"]["SharedPeriodPlanning"][];
            quantity: number;
            total: number;
            links: components["schemas"]["PaginationLinks"];
        };
        SharedPeriodPlanning: {

            shareId: string;
            name: string;
            visibility: components["schemas"]["SharedPlanningVisibility"];
            studyPeriodId: number;
            studyPeriodYear: number;
            studyPeriodYearPeriod: components["schemas"]["YearPeriod"];
            owner: {

                publicId: string;
                displayName: string;

                avatarMediaId: string | null;
            } | null;
            classes: components["schemas"]["PeriodPlanningClass"][];

            createdAt: string;

            updatedAt: string;
        };

        SharedPlanningVisibility: "FRIENDS" | "PUBLIC";
        StudentCourseAttempt: {
            id: number;
            userId: number;
            courseId: number;
            studyPeriodId: number | null;
            classId: number | null;
            evaluationMode: components["schemas"]["CourseEvaluationMode"];
            status: components["schemas"]["StudentCourseAttemptStatus"];
            grade: number | null;

            createdAt: string;

            updatedAt: string;
            course: components["schemas"]["CourseAttemptCourse"];
            studyPeriod: components["schemas"]["CourseAttemptStudyPeriod"];
            class: components["schemas"]["CourseAttemptClass"];
        };

        CourseEvaluationMode: "GRADE_AND_ATTENDANCE" | "ATTENDANCE" | "CONCEPT";

        StudentCourseAttemptStatus: "ENROLLED" | "DROPPED" | "APPROVED" | "FAILED_BY_GRADE" | "APPROVED_BY_ATTENDANCE" | "APPROVED_BY_PROFICIENCY" | "FAILED_BY_ATTENDANCE" | "SUFFICIENT" | "INSUFFICIENT";
        CourseAttemptCourse: {
            id: number;
            code: string;
            name: string;
            credits: number;
            unit: {
                id: number;
                code: string;
            } | null;
        };
        CourseAttemptStudyPeriod: {
            id: number;
            year: number;
            yearPeriod: components["schemas"]["YearPeriod"];
        } | null;
        CourseAttemptClass: {
            id: number;
            code: string;
            professors: {
                id: number;
                name: string;
            }[];
        } | null;
        UniqueConstraintConflictProblem: {

            type: "urn:pomi:problem:unique-constraint-conflict";

            title: "Informação já utilizada";

            status: 409;
            detail: string;
            instance?: string;
            fields: components["schemas"]["ProblemField"][];
        };
        InvalidStudentCourseAttemptProblem: {

            type: "urn:pomi:problem:invalid-student-course-attempt";

            title: "Tentativa de disciplina inválida";

            status: 422;
            detail: string;
            instance?: string;
            fields: {
                code: string;
                path: string[];
                message: string;
            }[];
        };
        CreateStudentCourseAttemptInput: {
            courseId: number;
            studyPeriodId?: number | null;
            classId?: number | null;
            evaluationMode?: components["schemas"]["CourseEvaluationMode"];
            status: components["schemas"]["StudentCourseAttemptStatus"];
            grade?: number | null;
        };
        UpdateStudentCourseAttemptInput: {
            studyPeriodId?: number | null;
            classId?: number | null;
            evaluationMode?: components["schemas"]["CourseEvaluationMode"];
            status?: components["schemas"]["StudentCourseAttemptStatus"];
            grade?: number | null;
        };
        StudentHistoryImportSummary: {
            created: number;
            updated: number;
            skipped: number;
            warnings: {
                year: number | null;
                yearPeriod: string | null;
                code: string | null;
                message: string;
            }[];
        };
        InvalidStudentHistoryImportProblem: {

            type: "urn:pomi:problem:invalid-student-history-import";

            title: "Importação de histórico escolar inválida";

            status: 422;
            detail: string;
            instance?: string;
            fields: {
                code: string;
                path: string[];
                message: string;
            }[];
        };
        StudentHistoryImportBody: {

            format: "pomi-student-history";

            version: 1;
            student: {
                ra: string;
            };
            semesters: {
                year: number;
                yearPeriod: components["schemas"]["YearPeriod"];
                courses: {
                    code: string;
                    name: string;
                    classCode?: string | null;
                    grade: number | null;
                    workloadHours: number | null;
                    credits: number | null;
                    status: components["schemas"]["HistoryCourseStatus"];
                }[];
            }[];
        };

        HistoryCourseStatus: "ENROLLED" | "APPROVED" | "APPROVED_BY_ATTENDANCE" | "APPROVED_BY_PROFICIENCY" | "DROPPED" | "FAILED_BY_ATTENDANCE" | "SUFFICIENT";
        StudentAbsence: {
            id: number;
            studentCourseAttemptId: number;
            classScheduleId: number;

            date: string;

            createdAt: string;

            updatedAt: string;
            studyPeriodId: number;
            studyPeriodYear: number;
            studyPeriodYearPeriod: components["schemas"]["YearPeriod"];
            courseId: number;
            courseCode: string;
            classId: number;
            classCode: string;
            dayOfWeek: components["schemas"]["DayOfWeek"];
            start: string;
            end: string;
        };
        InvalidStudentAbsenceProblem: {

            type: "urn:pomi:problem:invalid-student-absence";

            title: "Falta inválida";

            status: 422;
            detail: string;
            instance?: string;
            fields: {
                code: string;
                path: string[];
                message: string;
            }[];
        };
        CreateStudentAbsenceBody: {
            classScheduleId: number;

            date: string;
        };
        UserProfile: {

            publicId: string;
            displayName: string;

            avatarMediaId: string | null;
            bio: string | null;
            interests: {
                id: number;
                name: string;
            }[];
            currentCourses: components["schemas"]["StudentCurrentCourse"][];
            program: {
                code: string | number;
                name: string;
            } | null;
            specialization: {
                code: string | number;
                name: string;
            } | null;
            entryYear: number | null;
            enabled: boolean;
            currentCoursesVisibility: components["schemas"]["StudentProfileVisibility"];
        };
        StudentCurrentCourse: {
            courseCode: string;
            courseName: string;
            classCode: string | null;
            schedules: {
                id: number;
                dayOfWeek: components["schemas"]["DayOfWeek"];
                start: string;
                end: string;
                roomCode: string;
            }[];
        };

        StudentProfileVisibility: "PRIVATE" | "FRIENDS" | "PUBLIC";
        UserPeoplePage: {
            data: components["schemas"]["UserPublicPerson"][];
            quantity: number;
            total: number;
            links: components["schemas"]["PaginationLinks"];
        };
        UserPublicPerson: {

            publicId: string;
            displayName: string;

            avatarMediaId: string | null;
            bio: string | null;
            interests: {
                id: number;
                name: string;
            }[];
            currentCourses: components["schemas"]["StudentCurrentCourse"][];
            program: {
                code: string | number;
                name: string;
            } | null;
            specialization: {
                code: string | number;
                name: string;
            } | null;
            entryYear: number | null;
        };
        UserFriendship: {
            id: number;
            status: components["schemas"]["UserFriendshipStatus"];
            direction: components["schemas"]["UserFriendshipDirection"];
            friend: components["schemas"]["UserPublicPerson"];

            createdAt: string;

            acceptedAt: string | null;
        };

        UserFriendshipStatus: "PENDING" | "ACCEPTED";

        UserFriendshipDirection: "INCOMING" | "OUTGOING" | "NONE";
        FeedbackReportAccepted: {

            createdAt: string;
        };
        InvalidFeedbackReportProblem: {

            type: "urn:pomi:problem:invalid-feedback-report";

            title: "Feedback inválido";

            status: 422;
            detail: string;
            instance?: string;
            fields: {
                code: string;
                path: string[];
                message: string;
            }[];
        };
        FeedbackRateLimitProblem: {

            type: "urn:pomi:problem:feedback-rate-limit";

            title: "Muitos envios de feedback";

            status: 429;
            detail: string;
            instance?: string;
            retryAfterSeconds: number;
        };
        CreateFeedbackReportBody: {
            kind: components["schemas"]["FeedbackKind"];
            target: components["schemas"]["FeedbackReportTarget"];
            title: string;
            description: string;
            sourcePath?: string;
        };

        FeedbackKind: "BUG" | "SUGGESTION" | "DATA_ISSUE";
        FeedbackReportTarget: components["schemas"]["GeneralFeedbackReportTarget"] | components["schemas"]["FeatureFeedbackReportTarget"] | components["schemas"]["AcademicResourceFeedbackReportTarget"];
        GeneralFeedbackReportTarget: {

            type: "GENERAL";
        };
        FeatureFeedbackReportTarget: {

            type: "FEATURE";
            feature: components["schemas"]["FeedbackFeatureTargetDetails"];
        };
        FeedbackFeatureTargetDetails: {
            key: components["schemas"]["FeedbackFeatureKey"];
        };

        FeedbackFeatureKey: "home" | "curriculum-planner" | "semester-planner" | "course-situation" | "agenda" | "social" | "academic-data";
        AcademicResourceFeedbackReportTarget: {

            type: "ACADEMIC_RESOURCE";
            academicResource: components["schemas"]["FeedbackAcademicResourceTargetDetails"];
        };
        FeedbackAcademicResourceTargetDetails: {
            type: components["schemas"]["FeedbackAcademicResourceType"];
            id: number;
        };

        FeedbackAcademicResourceType: "COURSE" | "CATALOG_COURSE" | "CATALOG_PROGRAM" | "CURRICULUM_SUGGESTION" | "CLASS" | "CLASS_SCHEDULE" | "STUDY_PERIOD" | "DAILY_MENU" | "CALENDAR_EVENT";
        FeedbackReport: {
            id: number;
            kind: components["schemas"]["FeedbackKind"];
            target: components["schemas"]["FeedbackReportTarget"];
            title: string;
            description: string;
            sourcePath: string | null;
            status: components["schemas"]["FeedbackStatus"];
            adminMessage: string | null;
            reporterUserId: number | null;

            createdAt: string;

            updatedAt: string;
        };

        FeedbackStatus: "OPEN" | "IN_PROGRESS" | "CLOSED";
        PatchFeedbackReportBody: {
            status?: components["schemas"]["FeedbackStatus"];
            adminMessage?: string | null;
        };
        Group: {
            id: number;
            name: string;
            description: string | null;

            status: "ACTIVE" | "ARCHIVED";

            avatarMediaId: string | null;
            contacts: {
                id: number;
                type: string;
                label: string | null;
                value: string;
                sortOrder: number;
            }[];
            externalLinks: {
                id: number;
                label: string;

                url: string;
                sortOrder: number;
            }[];
            tags: {
                id: number;
                name: string;
                categoryId: number;
            }[];

            createdAt: string;

            updatedAt: string;
        };
        ConflictProblem: {

            type: "urn:pomi:problem:conflict";

            title: "Conflito ao concluir a ação";

            status: 409;
            detail: string;
            instance?: string;
        };
        PayloadTooLargeProblem: {

            type: "urn:pomi:problem:payload-too-large";

            title: "Corpo da requisição muito grande";

            status: 413;
            detail: string;
            instance?: string;
        };
        UnprocessableEntityProblem: {

            type: "urn:pomi:problem:unprocessable-entity";

            title: "Não foi possível concluir a ação";

            status: 422;
            detail: string;
            instance?: string;
            fields?: components["schemas"]["ProblemField"][];
        };
        MediaUploadRateLimitProblem: {

            type: "urn:pomi:problem:media-upload-rate-limit";

            title: "Muitos uploads de imagem";

            status: 429;
            detail: string;
            instance?: string;
            retryAfterSeconds: number;
        };
        PublicGroupMembership: {
            id: number;
            groupId: number;
            displayName: string;

            profilePublicId: string | null;

            avatarMediaId: string | null;

            joinedAt: string;
            positions: {
                id: number;
                title: string;

                startedAt: string | null;

                endedAt: string | null;
                sortOrder: number;
            }[];
        };
        OwnGroupMembership: {
            id: number;
            groupId: number;

            joinedAt: string;
            positions: {
                id: number;
                title: string;

                startedAt: string | null;

                endedAt: string | null;
                sortOrder: number;
            }[];
            userId: number;
            isPublic: boolean;

            leftAt: string | null;
            roles: {
                id: number;
                name: string;
            }[];
            permissions: ("GROUP_EDIT" | "GROUP_TAG_MANAGE" | "MEMBER_MANAGE" | "ROLE_MANAGE" | "EVENT_CREATE" | "EVENT_EDIT" | "EVENT_PUBLISH")[];
        };
        ManagedGroupMembership: {
            id: number;
            groupId: number;

            joinedAt: string;
            positions: {
                id: number;
                title: string;

                startedAt: string | null;

                endedAt: string | null;
                sortOrder: number;
            }[];
            userId: number;
            isPublic: boolean;

            leftAt: string | null;
            roles: {
                id: number;
                name: string;
            }[];
            permissions: ("GROUP_EDIT" | "GROUP_TAG_MANAGE" | "MEMBER_MANAGE" | "ROLE_MANAGE" | "EVENT_CREATE" | "EVENT_EDIT" | "EVENT_PUBLISH")[];
            studentName: string;

            avatarMediaId: string | null;
        };
        GroupInvitation: {
            id: number;
            groupId: number;
            recipientUserId: number;
            inviterUserId: number;

            status: "PENDING" | "ACCEPTED" | "DECLINED" | "CANCELLED" | "EXPIRED";

            expiresAt: string;

            createdAt: string;

            respondedAt: string | null;
        };
        ManagedGroupInvitation: {
            id: number;
            groupId: number;
            recipientUserId: number;
            inviterUserId: number;

            status: "PENDING" | "ACCEPTED" | "DECLINED" | "CANCELLED" | "EXPIRED";

            expiresAt: string;

            createdAt: string;

            respondedAt: string | null;
            recipientName: string;

            recipientPublicId: string;

            recipientAvatarMediaId: string | null;
        };
        GroupRole: {
            id: number;
            groupId: number;
            name: string;
            permissions: string[];
        };
        GroupEvent: {
            id: number;
            groupId: number;
            name: string;
            description: string;

            startsAt: string | null;

            endsAt: string | null;
            location: string | null;
            tags: {
                id: number;
                name: string;
                categoryId: number;
            }[];

            createdAt: string;

            updatedAt: string;
        };
        ManagedGroupEvent: {
            id: number;
            groupId: number;
            name: string;
            description: string;

            startsAt: string | null;

            endsAt: string | null;
            location: string | null;
            tags: {
                id: number;
                name: string;
                categoryId: number;
            }[];

            createdAt: string;

            updatedAt: string;

            status: "DRAFT" | "PUBLISHED" | "CANCELLED";
        };
        ExchangeNoticeSubscription: {
            userId: number;
            enabled: boolean;
            placeIds: number[];
        };
        PatchExchangeNoticeSubscriptionBody: {
            enabled?: boolean;
            placeIds?: number[];
        };
        Category: {
            id: number;
            name: string;
        };
        Tag: {
            id: number;
            name: string;
            categoryId: number;
            parentTagId: number | null;
        };
        TagRelatedCourse: {
            id: number;
            code: string;
            name: string;
            credits: number;
        };
        StudentEntity: {
            id: number;
            userId: number;
            ra: string;
            name: string;
            programId: number | null;
            specializationId: number | null;
            catalogId: number | null;
            entryYear: number | null;
            languageId: number | null;
        };
        InvalidStudentProfileProblem: {

            type: "urn:pomi:problem:invalid-student-profile";

            title: "Perfil de aluno inválido";

            status: 422;
            detail: string;
            instance?: string;
            fields: {
                code: string;
                path: string[];
                message: string;
            }[];
        };
        CreateStudentBody: {
            ra: string;
            name: string;
            programId?: number | null;
            specializationId?: number | null;
            catalogId?: number | null;
            entryYear?: number | null;
            languageId?: number | null;
        };
        PatchStudentBody: {
            ra?: string;
            name?: string;
            programId?: number | null;
            specializationId?: number | null;
            catalogId?: number | null;
            entryYear?: number | null;
            languageId?: number | null;
        };
        UserInterest: {
            id: number;
            name: string;
            categoryId: number;
            parentTagId: number | null;
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
    getImageVariant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                mediaId: string;
                variant: "avatarSmall" | "avatarLarge";
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "image/webp": string;
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UnauthenticatedProblem"];
                };
            };

            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ForbiddenProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };

            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServiceUnavailableProblem"];
                };
            };
        };
    };
    listProfessorEvaluationSummaries: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number;

                filter?: {
                    professorId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                };

                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageProfessorEvaluationSummaries"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listCourseEvaluationSummaries: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number;

                filter?: {
                    courseId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                    courseCode?: string | {
                        eq?: string;
                        ne?: string;
                        in?: string[];
                    };
                };

                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PageCourseEvaluationSummaries"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getCourseProfessorEvaluationSummary: {
        parameters: {
            query: {

                filter: {
                    courseId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                    professorId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                };
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CourseProfessorEvaluationSummary"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getProfessorEvaluation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                classId: number;
                professorId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProfessorEvaluationEligibility"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidProfessorEvaluationProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateProfessorEvaluation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                classId: number;
                professorId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["ProfessorEvaluationBody"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ProfessorEvaluation"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidProfessorEvaluationProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listPendingProfessorEvaluations: {
        parameters: {
            query: {

                page?: number;

                pageSize?: number | "all";

                filter: {
                    year?: number | {
                        eq?: number;
                    };
                    yearPeriod?: ("FIRST_SEMESTER" | "SECOND_SEMESTER") | {

                        eq?: "FIRST_SEMESTER" | "SECOND_SEMESTER";
                    };
                };

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PendingProfessorEvaluation"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getCurrentUser: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CurrentUserEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listBots: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BotIdentityEntity"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listBotGrants: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["BotGrantEntity"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    replaceBotGrant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                botAuthIdentityId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["ReplaceBotGrantBody"];
            };
        };
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listAuthIdentities: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AuthIdentityEntity"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createAuthIdentity: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateBotAuthIdentityBody"];
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthIdentityEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateAuthIdentity: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["PatchAuthIdentityBody"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["AuthIdentityEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["AdminIdentityManagedByCliProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateUser: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name: string | null;
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getUserPreferences: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPreferences"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateUserPreferences: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["UserPreferences"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPreferences"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getCurriculums: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CurriculumEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deleteCurriculums: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateCurriculums: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    isFavorite?: boolean;
                    selection?: {
                        catalogProgramId?: number | null;
                        catalogProgramVariantId?: number | null;
                        languageId?: number | null;
                    };
                    planningStart?: {
                        year: number;
                        semester: 1 | 2;
                        semesterNumber: number;
                    } | null;
                    currentPeriodId?: number | null;
                    periods?: {
                        add?: {
                            position: number;
                        }[];
                        update?: {
                            id: number;
                            position: number;
                        }[];
                        remove?: number[];
                    };
                    courses?: {
                        upsert?: {
                            courseId: number;
                            periodId: number | null;
                        }[];
                        remove?: number[];
                    };
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CurriculumEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidCurriculumProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listCurriculums: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CurriculumSummaryEntity"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createCurriculums: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    selection?: {
                        catalogProgramId?: number | null;
                        catalogProgramVariantId?: number | null;
                        languageId?: number | null;
                    };
                    planningStart?: {
                        year: number;
                        semester: 1 | 2;
                        semesterNumber: number;
                    } | null;
                    currentPeriodId?: number | null;
                    periods?: {
                        position: number;
                    }[];
                    courses?: {
                        courseId: number;
                        periodId: number | null;
                    }[];
                };
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["CurriculumEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidCurriculumProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getPeriodPlans: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PeriodPlanningEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deletePeriodPlans: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updatePeriodPlans: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdatePeriodPlanningInput"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PeriodPlanningEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidPeriodPlanProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listPeriodPlans: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PeriodPlanningEntity"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createPeriodPlans: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["CreatePeriodPlanningInput"];
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PeriodPlanningEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidPeriodPlanProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listPublicSharedPeriodPlans: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number;
                query?: string;

                filter?: {
                    studyPeriodId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                };

                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SharedPeriodPlanningPage"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getPublicSharedPeriodPlan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                shareId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SharedPeriodPlanning"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listUserSharedPeriodPlans: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number;

                filter?: {
                    ownerPublicId?: string | {

                        eq?: string;
                        in?: string[];
                    };
                };

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SharedPeriodPlanningPage"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getUserSharedPeriodPlan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                shareId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SharedPeriodPlanning"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getStudentCourseAttempts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StudentCourseAttempt"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deleteStudentCourseAttempts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateStudentCourseAttempts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["UpdateStudentCourseAttemptInput"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StudentCourseAttempt"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidStudentCourseAttemptProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listStudentCourseAttempts: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                filter?: {
                    status?: ("ENROLLED" | "DROPPED" | "APPROVED" | "FAILED_BY_GRADE" | "APPROVED_BY_ATTENDANCE" | "APPROVED_BY_PROFICIENCY" | "FAILED_BY_ATTENDANCE" | "SUFFICIENT" | "INSUFFICIENT") | {

                        eq?: "ENROLLED" | "DROPPED" | "APPROVED" | "FAILED_BY_GRADE" | "APPROVED_BY_ATTENDANCE" | "APPROVED_BY_PROFICIENCY" | "FAILED_BY_ATTENDANCE" | "SUFFICIENT" | "INSUFFICIENT";
                        in?: ("ENROLLED" | "DROPPED" | "APPROVED" | "FAILED_BY_GRADE" | "APPROVED_BY_ATTENDANCE" | "APPROVED_BY_PROFICIENCY" | "FAILED_BY_ATTENDANCE" | "SUFFICIENT" | "INSUFFICIENT")[];
                    };
                    courseId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                    studyPeriodId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                };

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StudentCourseAttempt"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createStudentCourseAttempts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateStudentCourseAttemptInput"];
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StudentCourseAttempt"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidStudentCourseAttemptProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createStudentHistory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["StudentHistoryImportBody"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StudentHistoryImportSummary"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidStudentHistoryImportProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listUserAbsences: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                filter?: {
                    courseAttemptId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                };

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StudentAbsence"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createStudentAbsences: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                attemptId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateStudentAbsenceBody"];
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StudentAbsence"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidStudentAbsenceProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deleteStudentAbsences: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                attemptId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getUserProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserProfile"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateUserProfile: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    enabled?: boolean;
                    displayName?: string | null;
                    bio?: string | null;
                    currentCoursesVisibility?: components["schemas"]["StudentProfileVisibility"];
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserProfile"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listUserPeople: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number;
                query?: string;

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPeoplePage"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getUserPerson: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                publicId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserPublicPerson"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listUserFriendships: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                filter?: {
                    status?: ("PENDING" | "ACCEPTED") | {

                        eq?: "PENDING" | "ACCEPTED";
                        in?: ("PENDING" | "ACCEPTED")[];
                    };
                    direction?: ("INCOMING" | "OUTGOING") | {

                        eq?: "INCOMING" | "OUTGOING";
                    };
                };

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["UserFriendship"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createUserFriendship: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {

                    targetPublicId: string;
                };
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserFriendship"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    acceptUserFriendship: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["UserFriendship"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deleteUserFriendship: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createFeedbackReport: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFeedbackReportBody"];
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackReportAccepted"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidFeedbackReportProblem"];
                };
            };

            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["FeedbackRateLimitProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listUserFeedbackReports: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FeedbackReport"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createUserFeedbackReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateFeedbackReportBody"];
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackReportAccepted"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidFeedbackReportProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listFeedbackReports: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FeedbackReport"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateFeedbackReport: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["PatchFeedbackReportBody"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["FeedbackReport"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listGroups: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Group"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                groupId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    description?: string | null;
                    contacts?: {
                        type: string;
                        label?: string | null;
                        value: string;
                        sortOrder?: number;
                    }[];
                    externalLinks?: {
                        label: string;

                        url: string;
                        sortOrder?: number;
                    }[];
                    tagIds?: number[];
                };
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                groupId: number;
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    description?: string | null;
                    contacts?: {
                        add?: {
                            type: string;
                            label?: string | null;
                            value: string;
                            sortOrder?: number;
                        }[];
                        update?: {
                            type?: string;
                            label?: string | null;
                            value?: string;
                            sortOrder?: number;
                            id: number;
                        }[];
                        remove?: number[];
                    };
                    externalLinks?: {
                        add?: {
                            label: string;

                            url: string;
                            sortOrder?: number;
                        }[];
                        update?: {
                            label?: string;

                            url?: string;
                            sortOrder?: number;
                            id: number;
                        }[];
                        remove?: number[];
                    };
                    tags?: {
                        add?: number[];
                        remove?: number[];
                    };
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Group"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    archiveGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                groupId: number;
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    putGroupAvatar: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "multipart/form-data": {

                    "images[]": string;
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {

                        mediaId: string;
                        revision: number;
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UnauthenticatedProblem"];
                };
            };

            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ForbiddenProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ConflictProblem"];
                };
            };

            413: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["PayloadTooLargeProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UnprocessableEntityProblem"];
                };
            };

            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["MediaUploadRateLimitProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };

            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServiceUnavailableProblem"];
                };
            };
        };
    };
    deleteGroupAvatar: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UnauthenticatedProblem"];
                };
            };

            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ForbiddenProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ConflictProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listPublicGroupMemberships: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                filter?: {
                    groupId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                    publicId?: string | {

                        eq?: string;
                    };
                };
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PublicGroupMembership"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getPublicGroupMembership: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["PublicGroupMembership"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listUserGroupMemberships: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                filter?: {
                    groupId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                };
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["OwnGroupMembership"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getUserGroupMembership: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OwnGroupMembership"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateUserGroupMembership: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    isPublic: boolean;
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OwnGroupMembership"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listManagedGroupMemberships: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";
            };
            header?: never;
            path: {
                userId: number;
                groupId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ManagedGroupMembership"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateManagedGroupMembership: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
                membershipId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    positions?: {
                        add?: {
                            title: string;

                            startedAt?: string | null;

                            endedAt?: string | null;
                            sortOrder?: number;
                        }[];
                        update?: {
                            title?: string;

                            startedAt?: string | null;

                            endedAt?: string | null;
                            sortOrder?: number;
                            id: number;
                        }[];
                        remove?: number[];
                    };
                    roles?: {
                        add?: number[];
                        remove?: number[];
                    };
                    leave?: boolean;
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManagedGroupMembership"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listGroupInvitations: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                filter?: {
                    groupId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                };
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["GroupInvitation"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listManagedGroupInvitations: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";
            };
            header?: never;
            path: {
                userId: number;
                groupId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ManagedGroupInvitation"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createGroupInvitation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {

                    recipientPublicId: string;
                };
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupInvitation"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    acceptGroupInvitation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["OwnGroupMembership"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    declineGroupInvitation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listGroupRoles: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";
            };
            header?: never;
            path: {
                userId: number;
                groupId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["GroupRole"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createGroupRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    permissions?: ("GROUP_EDIT" | "GROUP_TAG_MANAGE" | "MEMBER_MANAGE" | "ROLE_MANAGE" | "EVENT_CREATE" | "EVENT_EDIT" | "EVENT_PUBLISH")[];
                };
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupRole"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deleteGroupRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
                roleId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateGroupRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
                roleId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    permissions?: {
                        add?: ("GROUP_EDIT" | "GROUP_TAG_MANAGE" | "MEMBER_MANAGE" | "ROLE_MANAGE" | "EVENT_CREATE" | "EVENT_EDIT" | "EVENT_PUBLISH")[];
                        remove?: ("GROUP_EDIT" | "GROUP_TAG_MANAGE" | "MEMBER_MANAGE" | "ROLE_MANAGE" | "EVENT_CREATE" | "EVENT_EDIT" | "EVENT_PUBLISH")[];
                    };
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupRole"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listGroupEvents: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                filter?: {
                    groupId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                };
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["GroupEvent"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getGroupEvent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["GroupEvent"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listManagedGroupEvents: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";
            };
            header?: never;
            path: {
                userId: number;
                groupId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ManagedGroupEvent"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createGroupEvent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    description: string;

                    startsAt?: string | null;

                    endsAt?: string | null;
                    location?: string | null;
                    tagIds?: number[];
                };
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManagedGroupEvent"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateGroupEvent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
                eventId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name?: string;
                    description?: string;

                    startsAt?: string | null;

                    endsAt?: string | null;
                    location?: string | null;
                    tags?: {
                        add?: number[];
                        remove?: number[];
                    };
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManagedGroupEvent"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    publishGroupEvent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
                eventId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManagedGroupEvent"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    cancelGroupEvent: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                groupId: number;
                eventId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ManagedGroupEvent"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getExchangeNoticeSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExchangeNoticeSubscription"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateExchangeNoticeSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["PatchExchangeNoticeSubscriptionBody"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["ExchangeNoticeSubscription"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    unsubscribeExchangeNotices: {
        parameters: {
            query: {
                token: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {

                        enabled: false;
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listCategories: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Category"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createCategory: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name: string;
                };
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Category"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Category"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name: string;
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Category"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deleteCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listTags: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                filter?: {
                    categoryId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                    parentTagId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                    courseId?: number | {
                        eq?: number;
                        in?: number[];
                    };
                };

                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Tag"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createTag: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    categoryId: number;
                    parentTagId: number | null;
                };
            };
        };
        responses: {

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Tag"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Tag"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    name: string;
                    categoryId: number;
                    parentTagId: number | null;
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["Tag"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deleteTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listCourseTags: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path: {
                courseId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Tag"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listTagCourses: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number;

                sort?: string;
            };
            header?: never;
            path: {
                id: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TagRelatedCourse"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    addCourseTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                courseId: number;
                tagId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    removeCourseTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                courseId: number;
                tagId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    getStudents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StudentEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    createStudents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["CreateStudentBody"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StudentEntity"];
                };
            };

            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StudentEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UniqueConstraintConflictProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidStudentProfileProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deleteStudents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": {
                    confirmationRa: string;
                };
            };
        };
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidStudentProfileProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateStudents: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "application/json": components["schemas"]["PatchStudentBody"];
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["StudentEntity"];
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"] | components["schemas"]["InvalidStudentProfileProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listStudents: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StudentEntity"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    putUserAvatar: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };

        requestBody: {
            content: {
                "multipart/form-data": {

                    "images[]": string;
                };
            };
        };
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {

                        mediaId: string;
                        revision: number;
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UnauthenticatedProblem"];
                };
            };

            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ForbiddenProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ConflictProblem"];
                };
            };

            413: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["PayloadTooLargeProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UnprocessableEntityProblem"];
                };
            };

            429: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["MediaUploadRateLimitProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };

            503: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServiceUnavailableProblem"];
                };
            };
        };
    };
    deleteUserAvatar: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            401: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["UnauthenticatedProblem"];
                };
            };

            403: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ForbiddenProblem"];
                };
            };

            404: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ResourceNotFoundProblem"];
                };
            };

            409: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ConflictProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    listUserInterests: {
        parameters: {
            query?: {

                page?: number;

                pageSize?: number | "all";

                sort?: string;
            };
            header?: never;
            path: {
                userId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["UserInterest"][];
                        quantity: number;
                        total: number;
                        links: components["schemas"]["PaginationLinks"];
                    };
                };
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    updateUserInterest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                tagId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            422: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ReferenceNotFoundProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
    deleteUserInterest: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                userId: number;
                tagId: number;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {

            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };

            400: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["InvalidRequestProblem"];
                };
            };

            500: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/problem+json": components["schemas"]["ServerErrorProblem"];
                };
            };
        };
    };
}
