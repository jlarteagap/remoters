
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/graphql",
  documents: "service/*.js",
  generates: {
    "service/graphql.tsx": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
