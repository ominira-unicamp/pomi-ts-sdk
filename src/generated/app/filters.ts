import type { getCourseProfessorEvaluationSummaryInput, listCourseEvaluationSummariesInput, listGroupEventsInput, listGroupInvitationsInput, listPendingProfessorEvaluationsInput, listProfessorEvaluationSummariesInput, listPublicGroupMembershipsInput, listPublicSharedPeriodPlansInput, listStudentCourseAttemptsInput, listTagsInput, listUserAbsencesInput, listUserFriendshipsInput, listUserGroupMembershipsInput, listUserSharedPeriodPlansInput } from './operations.js'

export type getCourseProfessorEvaluationSummaryFilter = NonNullable<getCourseProfessorEvaluationSummaryInput['filter']>
export type listCourseEvaluationSummariesFilter = NonNullable<listCourseEvaluationSummariesInput['filter']>
export type listGroupEventsFilter = NonNullable<listGroupEventsInput['filter']>
export type listGroupInvitationsFilter = NonNullable<listGroupInvitationsInput['filter']>
export type listPendingProfessorEvaluationsFilter = NonNullable<listPendingProfessorEvaluationsInput['filter']>
export type listProfessorEvaluationSummariesFilter = NonNullable<listProfessorEvaluationSummariesInput['filter']>
export type listPublicGroupMembershipsFilter = NonNullable<listPublicGroupMembershipsInput['filter']>
export type listPublicSharedPeriodPlansFilter = NonNullable<listPublicSharedPeriodPlansInput['filter']>
export type listStudentCourseAttemptsFilter = NonNullable<listStudentCourseAttemptsInput['filter']>
export type listTagsFilter = NonNullable<listTagsInput['filter']>
export type listUserAbsencesFilter = NonNullable<listUserAbsencesInput['filter']>
export type listUserFriendshipsFilter = NonNullable<listUserFriendshipsInput['filter']>
export type listUserGroupMembershipsFilter = NonNullable<listUserGroupMembershipsInput['filter']>
export type listUserSharedPeriodPlansFilter = NonNullable<listUserSharedPeriodPlansInput['filter']>

export const filterCapabilities = {
    "getCourseProfessorEvaluationSummary": {
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
    },
    "listCourseEvaluationSummaries": {
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
    "listGroupEvents": {
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
    },
    "listGroupInvitations": {
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
    },
    "listPendingProfessorEvaluations": {
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
    "listProfessorEvaluationSummaries": {
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
    "listPublicGroupMemberships": {
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
    },
    "listPublicSharedPeriodPlans": {
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
    "listStudentCourseAttempts": {
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
    "listTags": {
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
    "listUserAbsences": {
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
    "listUserFriendships": {
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
    "listUserGroupMemberships": {
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
    },
    "listUserSharedPeriodPlans": {
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
    }
} as const
