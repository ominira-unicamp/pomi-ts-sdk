import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const releaseTag = process.argv[2]
assert(releaseTag, 'Release tag is required')

const packageJson = JSON.parse(
  await readFile(new URL('../package.json', import.meta.url), 'utf8'),
)
const expectedTag = `v${packageJson.version}`

assert.equal(
  releaseTag,
  expectedTag,
  `Release tag ${releaseTag} does not match package version ${packageJson.version}`,
)

console.log(`Release ${releaseTag} matches package version ${packageJson.version}`)
