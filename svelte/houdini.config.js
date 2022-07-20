/** @type {import('houdini').ConfigFile} */
const config = {
  schemaPath: "./schema.graphql",
  sourceGlob: "src/**/*.{svelte,gql,graphql}",
  module: "esm",
  framework: "kit",
  apiUrl: "http://localhost:8000/graphql/",
};

export default config;
