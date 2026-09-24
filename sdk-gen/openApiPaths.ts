import { resolve } from 'node:path'

type Environment = NodeJS.ProcessEnv

function optionValue(argumentsList: ReadonlyArray<string>, name: string) {
  const values: Array<string> = []
  for (let index = 0; index < argumentsList.length; index += 1) {
    const argument = argumentsList[index]
    if (argument === name) {
      const value = argumentsList[index + 1]
      if (!value || value.startsWith('--'))
        throw new Error(`Missing value for ${name}`)
      values.push(value)
      index += 1
      continue
    }
    if (argument.startsWith(`${name}=`)) values.push(argument.slice(name.length + 1))
  }
  if (values.length > 1) throw new Error(`${name} may only be passed once`)
  return values[0]
}

function requiredPath(
  value: string | undefined,
  option: string,
  environment: string,
  cwd: string,
) {
  if (!value)
    throw new Error(
      `Missing OpenAPI path. Pass ${option} <path> or set ${environment}.`,
    )
  return resolve(cwd, value)
}

export function openApiPaths(
  argumentsList: ReadonlyArray<string>,
  environment: Environment,
  cwd: string,
) {
  return [
    {
      target: 'data' as const,
      path: requiredPath(
        optionValue(argumentsList, '--data-openapi') ??
          environment.POMI_DATA_OPENAPI_PATH ??
          environment.DATA_OPENAPI_PATH ??
          environment.OPENAPI_PATH,
        '--data-openapi',
        'POMI_DATA_OPENAPI_PATH',
        cwd,
      ),
    },
    {
      target: 'app' as const,
      path: requiredPath(
        optionValue(argumentsList, '--app-openapi') ??
          environment.POMI_APP_OPENAPI_PATH ??
          environment.APP_OPENAPI_PATH,
        '--app-openapi',
        'POMI_APP_OPENAPI_PATH',
        cwd,
      ),
    },
  ]
}
