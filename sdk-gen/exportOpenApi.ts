import { spawn } from 'node:child_process'
import { resolve } from 'node:path'

function backendPath(argumentsList: ReadonlyArray<string>) {
  const optionIndex = argumentsList.indexOf('--backend')
  const inline = argumentsList.find((argument) => argument.startsWith('--backend='))
  const value =
    inline?.slice('--backend='.length) ??
    (optionIndex === -1 ? undefined : argumentsList[optionIndex + 1]) ??
    process.env.POMI_BACKEND_PATH
  if (!value || value.startsWith('--'))
    throw new Error(
      'Missing backend path. Pass --backend <path> or set POMI_BACKEND_PATH.',
    )
  return resolve(process.cwd(), value)
}

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm'
const backendDirectory = backendPath(process.argv.slice(2))

await new Promise<void>((resolvePromise, reject) => {
  const child = spawn(npmCommand, ['run', 'openapi:export'], {
    cwd: backendDirectory,
    stdio: 'inherit',
  })

  child.once('error', reject)
  child.once('exit', (code, signal) => {
    if (code === 0) return resolvePromise()
    reject(
      new Error(
        `OpenAPI export failed${signal ? ` with signal ${signal}` : ` with exit code ${code}`}`,
      ),
    )
  })
})
