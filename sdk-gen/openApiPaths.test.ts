import assert from 'node:assert/strict'
import test from 'node:test'
import { openApiPaths } from './openApiPaths.js'

test('prioritizes explicit OpenAPI paths over environment variables', () => {
  const paths = openApiPaths(
    ['--data-openapi', 'specs/data.json', '--app-openapi=specs/app.json'],
    {
      POMI_DATA_OPENAPI_PATH: 'environment/data.json',
      POMI_APP_OPENAPI_PATH: 'environment/app.json',
    },
    '/workspace',
  )
  assert.deepEqual(paths, [
    { target: 'data', path: '/workspace/specs/data.json' },
    { target: 'app', path: '/workspace/specs/app.json' },
  ])
})

test('accepts the documented environment fallback', () => {
  const paths = openApiPaths(
    [],
    {
      POMI_DATA_OPENAPI_PATH: '/specs/data.json',
      POMI_APP_OPENAPI_PATH: '/specs/app.json',
    },
    '/workspace',
  )
  assert.deepEqual(paths, [
    { target: 'data', path: '/specs/data.json' },
    { target: 'app', path: '/specs/app.json' },
  ])
})

test('reports the missing target without inferring a workspace path', () => {
  assert.throws(
    () => openApiPaths([], {}, '/workspace'),
    /--data-openapi <path> or set POMI_DATA_OPENAPI_PATH/,
  )
})
