import type { IGraphQLConfig } from 'graphql-config'
 
const config: IGraphQLConfig = {
  documents: ['src/**/*.graphql', 'src/**/*.ts', 'src/**/*.tsx', 'pages/**/*.graphql', 'pages/**/*.ts', 'pages/**/*.tsx'],
  schema: 'https://funtime-api.fly.dev/graphql',
};
 
export default config;