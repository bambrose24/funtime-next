import {CodegenConfig} from '@graphql-codegen/cli';
const config: CodegenConfig = {
  // schema:
  //   process.env.FUNTIME_ENV === 'development'
  //     ? 'http://localhost:3001/graphql'
  //     : 'https://funtime-api.fly.dev/graphql',
  schema: 'http://localhost:3001/graphql',
  documents: [
    'src/**/*.graphql',
    'src/**/*.ts',
    'src/**/*.tsx',
    'pages/**/*.graphql',
    'pages/**/*.ts',
    'pages/**/*.tsx',
  ],
  generates: {
    'src/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
};

export default config;
