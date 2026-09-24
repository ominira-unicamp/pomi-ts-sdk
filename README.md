# POMI SDK

[![npm version](https://img.shields.io/npm/v/@ominira/pomi-sdk.svg)](https://www.npmjs.com/package/@ominira/pomi-sdk)

Cliente TypeScript tipado para consumir as APIs Data e App do POMI. O pacote oferece operações organizadas por recurso, autenticação, paginação, filtros, tipos de domínio e tratamento de erros derivados dos contratos OpenAPI.

As APIs publicadas estão disponíveis em:

- Data API: `https://data.pomi.ominira.dev`;
- App API: `https://app.pomi.ominira.dev`.

## Instalação

O pacote requer Node.js 18 ou superior.

```bash
npm install @ominira/pomi-sdk
```

## Início rápido

Crie uma instância do cliente informando as URLs das duas APIs:

```ts
import { createPomiSdk } from '@ominira/pomi-sdk'

const sdk = createPomiSdk({
  dataApiUrl: 'https://data.pomi.ominira.dev',
  appApiUrl: 'https://app.pomi.ominira.dev',
})

const page = await sdk.data.courses.list({
  filter: { credits: { gte: 4 } },
})

console.log(page.data)
console.log(page.links.next)
```

O namespace `data` contém os recursos da API pública de dados acadêmicos. O namespace `app` contém os recursos da aplicação, incluindo operações autenticadas.

## Configuração do cliente

`createPomiSdk` aceita as seguintes opções:

| Opção | Obrigatória | Descrição |
| --- | --- | --- |
| `dataApiUrl` | sim | URL base da Data API. |
| `appApiUrl` | sim | URL base da App API. |
| `getAccessToken` | não | Função assíncrona que fornece o token Bearer para operações autenticadas. |
| `fetch` | não | Implementação de `fetch` usada pelo cliente, útil para testes ou runtimes customizados. |

### Autenticação

Forneça o token ao criar o cliente quando todas as operações autenticadas compartilharem a mesma sessão:

```ts
const sdk = createPomiSdk({
  dataApiUrl: 'https://data.pomi.ominira.dev',
  appApiUrl: 'https://app.pomi.ominira.dev',
  getAccessToken: async () => accessToken,
})

const currentUser = await sdk.app.currentUser.get()
```

Também é possível fornecer a autenticação apenas para uma chamada. O contexto da chamada tem precedência sobre a configuração global:

```ts
const currentUser = await sdk.app.currentUser.get({
  getAccessToken: async () => accessToken,
})
```

Operações públicas não solicitam token.

## Recursos e operações

O cliente agrupa operações relacionadas em recursos com métodos tipados. Conforme as operações disponíveis no contrato, um recurso pode expor métodos como `get`, `list`, `create`, `update` e `delete`.

```ts
const course = await sdk.data.courses.get(42)

const courses = await sdk.data.courses.list({
  filter: { code: { eq: 'MC102' } },
})
```

Os argumentos, filtros, corpos e respostas são inferidos pelo TypeScript a partir do contrato da operação.

### Paginação

`list` retorna uma página com `data`, `quantity`, `total` e `links`. Os links `self`, `first`, `last`, `next` e `previous` são fornecidos pela API; `next` e `previous` podem ser `null`.

Para carregar todos os itens diretamente, use `listAll`:

```ts
const courses = await sdk.data.courses.listAll({
  filter: { credits: { gte: 4 } },
})
```

Para processar uma página por vez, use o iterador assíncrono `pages`:

```ts
for await (const page of sdk.data.courses.pages()) {
  for (const course of page.data) {
    console.log(course.code)
  }
}
```

`listAll` e `pages` seguem `page.links.next` até a última página.

## Tipos e metadados

Tipos de domínio, entradas de operações, filtros, enums e problemas podem ser importados pelos entrypoints de cada API:

```ts
import type {
  Course,
  listCoursesInput,
} from '@ominira/pomi-sdk/generated/data'
import type { Student } from '@ominira/pomi-sdk/generated/app'

type CourseQuery = listCoursesInput
```

O namespace `generated` expõe os artefatos gerados quando a aplicação precisa inspecionar capacidades do contrato em runtime:

```ts
import { generated } from '@ominira/pomi-sdk'

const courseFilters = generated.data.filterCapabilities.listCourses
```

### Entry points

| Import | Conteúdo |
| --- | --- |
| `@ominira/pomi-sdk` | Cliente, erros, tipos principais e namespace `generated`. |
| `@ominira/pomi-sdk/errors` | Erros e funções auxiliares de validação. |
| `@ominira/pomi-sdk/generated` | Artefatos gerados das APIs Data e App. |
| `@ominira/pomi-sdk/generated/data` | Tipos, operações, recursos e metadados da Data API. |
| `@ominira/pomi-sdk/generated/app` | Tipos, operações, recursos e metadados da App API. |
| `@ominira/pomi-sdk/generated-client` | Cliente operacional em um entrypoint dedicado. |
| `@ominira/pomi-sdk/generated-pagination` | Auxiliar de paginação de baixo nível. |

## Tratamento de erros

Respostas HTTP sem sucesso lançam `ApiError`. Quando a API retorna `application/problem+json`, os detalhes ficam disponíveis em `error.problem`.

```ts
import { isApiError } from '@ominira/pomi-sdk'

try {
  await sdk.data.courses.get(42)
} catch (error) {
  if (isApiError(error)) {
    console.error(error.status, error.problem?.detail)
  }
}
```

Para problemas conhecidos de uma operação, `sdk.errors.is` permite discriminar o valor pelo campo `type` preservando a inferência de tipos.

## Contribuição

Instale as dependências antes de executar o gerador ou as validações:

```bash
npm ci
```

### Atualização dos contratos e artefatos

O cliente em `src/generated` é derivado dos contratos OpenAPI Data e App. O gerador fica em `sdk-gen` e recebe os documentos por parâmetro de linha de comando, sem depender da posição deste repositório no disco.

Para exportar os contratos a partir de um checkout do backend:

```bash
npm run export:openapi -- --backend ../pomi-backend
```

Para gerar ou conferir o SDK, informe ambos os contratos:

```bash
npm run generate -- \
  --data-openapi ../openapi.json \
  --app-openapi ../pomi-backend/packages/app/app-openapi.json

npm run generate:check -- \
  --data-openapi ../openapi.json \
  --app-openapi ../pomi-backend/packages/app/app-openapi.json
```

`--data-openapi` e `--app-openapi` têm precedência. Como alternativa, use `POMI_DATA_OPENAPI_PATH` e `POMI_APP_OPENAPI_PATH`; os nomes legados `DATA_OPENAPI_PATH`, `OPENAPI_PATH` para Data e `APP_OPENAPI_PATH` para App continuam aceitos para compatibilidade.

O gerador exige `operationId` e metadados explícitos `x-pomi-sdk` e `x-pomi-schema`. Operações depreciadas podem declarar `x-pomi-sdk: false` e permanecem apenas no tipo OpenAPI bruto. A geração usa staging e substitui os artefatos somente após sucesso. `generate:check` verifica se os arquivos versionados estão atualizados sem modificá-los e apresenta a cobertura do contrato.

Os schemas podem declarar campos de transporte, identidade, somente leitura, relações e aliases de domínio. A paginação usa o envelope `data`, `quantity`, `total` e `links`, com sua política declarada em `x-pomi-pagination`.

Execute a validação completa antes de integrar uma mudança:

```bash
npm run validate
```

Esse comando executa os testes do gerador, as verificações arquiteturais e de tipos, os testes do cliente e o build.

### Publicação

O pacote é publicado no npm pelo workflow `publish.yml` quando uma tag Git `vX.Y.Z` é enviada. A tag deve corresponder exatamente à versão de `package.json`.

O Trusted Publisher de `@ominira/pomi-sdk` está configurado com GitHub Actions, organização `ominira-unicamp`, repositório `pomi-ts-sdk`, workflow `publish.yml`, ambiente `npm` e permissão para `npm publish`. A integração usa OIDC e não requer o secret `NPM_TOKEN`.

Para publicar uma nova versão:

1. atualize a versão em `package.json` e `package-lock.json`;
2. execute `npm run validate`;
3. integre a alteração validada na branch principal;
4. crie e envie a tag `vX.Y.Z` apontando para esse commit;
5. acompanhe o workflow `Publish package` e aprove o ambiente `npm`, caso ele exija revisão.

`release:verify` rejeita tags que não correspondam à versão declarada. Antes do envio ao npm, `prepublishOnly` executa novamente a validação completa.
