import assert from 'node:assert/strict'
import test from 'node:test'
import { createPomiSdk } from './generatedClient.js'
import type { listCoursesInput } from './generated/data/operations.js'
import { buildQuery } from './runtime/query.js'

const input: listCoursesInput = {
  page: 1,
  pageSize: 20,
  filter: {
    credits: { gte: 4 },
    latestCatalogCourse: {
      catalogYear: { gte: 2025 },
      finalExam: { eq: false },
      workload: { laboratoryHours: { gt: 0 } },
      syllabus: { contains: 'inteligencia artificial' },
      prerequisites: {
        some: [
          { course: { courseCode: 'MC102', fulfillment: 'FULL' } },
          {
            specialRequirement: {
              type: 'PROGRESSION_COEFFICIENT',
              progressionCoefficient: { value: { gte: 50 } },
            },
          },
        ],
        none: [{ course: { courseId: { in: [732, 733] } } }],
      },
    },
  },
}

test('serializes indexed prerequisite predicates and keeps scalar lists repeated', () => {
  const params = new URLSearchParams(
    buildQuery(input, ['page', 'pageSize', 'filter']),
  )
  assert.equal(
    params.get('filter[latestCatalogCourse][finalExam][eq]'),
    'false',
  )
  assert.equal(
    params.get(
      'filter[latestCatalogCourse][prerequisites][some][0][course][courseCode]',
    ),
    'MC102',
  )
  assert.equal(
    params.get(
      'filter[latestCatalogCourse][prerequisites][some][0][course][fulfillment]',
    ),
    'FULL',
  )
  assert.equal(
    params.get(
      'filter[latestCatalogCourse][prerequisites][some][1][specialRequirement][progressionCoefficient][value][gte]',
    ),
    '50',
  )
  assert.deepEqual(
    params.getAll(
      'filter[latestCatalogCourse][prerequisites][none][0][course][courseId][in]',
    ),
    ['732', '733'],
  )
})

test('executes catalog filters through the generated course resource', async () => {
  let url = ''
  const sdk = createPomiSdk({
    dataApiUrl: 'https://data.example.test',
    appApiUrl: 'https://app.example.test',
    fetch: async (request) => {
      url = String(request)
      return new Response(JSON.stringify({ data: [], quantity: 0, total: 0 }), {
        headers: { 'content-type': 'application/json' },
      })
    },
  })
  await sdk.data.courses.list(input)
  const params = new URL(url).searchParams
  assert.equal(params.get('filter[credits][gte]'), '4')
  assert.equal(
    params.get('filter[latestCatalogCourse][catalogYear][gte]'),
    '2025',
  )
  assert.equal(
    params.get(
      'filter[latestCatalogCourse][prerequisites][some][1][specialRequirement][type]',
    ),
    'PROGRESSION_COEFFICIENT',
  )
})
