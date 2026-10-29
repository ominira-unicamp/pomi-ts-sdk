export type PomiRequestContext = Readonly<{
  getAccessToken?: () => Promise<string>
  signal?: AbortSignal
  allowUndocumentedSuccess?: boolean
}>
