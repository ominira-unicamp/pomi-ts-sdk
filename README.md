# POMI SDK

O pacote contém o cliente operacional gerado em `src/generated`, derivado dos contratos OpenAPI Data e App.

O gerador fica em `sdk-gen`, separando o carregamento e a validação do contrato da emissão dos artefatos. A geração recebe os documentos OpenAPI por parâmetro de linha de comando, com variáveis de ambiente como alternativa; ela não depende da posição deste repositório no disco.

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

npm run check
npm test
npm run build
```

`--data-openapi` e `--app-openapi` têm precedência. Como alternativa, use `POMI_DATA_OPENAPI_PATH` e `POMI_APP_OPENAPI_PATH`; os nomes legados `DATA_OPENAPI_PATH`, `OPENAPI_PATH` (Data) e `APP_OPENAPI_PATH` (App) continuam aceitos para compatibilidade.

A camada operacional é exposta por `createPomiSdk` e pelo namespace `generated`:

```ts
import { createPomiSdk, generated } from '@ominira/pomi-sdk'

const sdk = createPomiSdk({
  dataApiUrl: 'https://data.example.com',
  appApiUrl: 'https://app.example.com',
})

const courses = await sdk.data.courses.list({
  filter: { credits: { gte: 4 } },
})

const filters = generated.data.filterCapabilities.listCourses
```

O frontend não precisa conhecer as rotas HTTP. Os metadados gerados também expõem filtros, problemas, schemas, enums e construtores de URL.

O gerador exige `operationId` e metadados explícitos `x-pomi-sdk` e `x-pomi-schema`. Operações depreciadas podem declarar `x-pomi-sdk: false` e permanecem apenas no tipo OpenAPI bruto. A geração é feita em staging e substitui os artefatos somente após sucesso. O modo `generate:check` confere se os arquivos versionados estão atualizados sem modificá-los e apresenta um relatório de cobertura do contrato.

Os schemas podem declarar campos de transporte, identidade, somente leitura, relações e aliases de domínio. A paginação usa o envelope uniforme `data`, `quantity`, `total` e `links`, com sua política declarada em `x-pomi-pagination`.

## Publicação

O pacote é publicado no npm pelo workflow `publish.yml` quando uma tag Git `vX.Y.Z` é enviada. A tag deve ser exatamente `v` seguida pela versão de `package.json`, por exemplo `v0.4.1`.

Antes da primeira publicação automatizada, configure em `@ominira/pomi-sdk` no npm um Trusted Publisher com:

- provedor: GitHub Actions;
- organização: `ominira-unicamp`;
- repositório: `pomi-ts-sdk`;
- workflow: `publish.yml`;
- ambiente: `npm`;
- ação permitida: `npm publish`.

Crie também o ambiente `npm` no GitHub. Ele pode ter required reviewers para exigir aprovação antes da publicação. O workflow usa OIDC e não requer um secret `NPM_TOKEN`.

O fluxo de release é:

1. atualizar a versão em `package.json` e `package-lock.json`;
2. integrar e validar a alteração na branch principal;
3. criar e enviar a tag `vX.Y.Z` apontando para esse commit;
4. aprovar o deployment do ambiente `npm`, caso essa proteção esteja habilitada.

A publicação executa `prepublishOnly`, que roda testes do gerador, checagem arquitetural e de tipos, testes do cliente e build antes de enviar o pacote.
