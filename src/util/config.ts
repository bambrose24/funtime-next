export const SEASON = 2023;
export const LEAGUE_ID = 8;

type Env = 'development' | 'preview' | 'production';

export type Config = {
  graphqlEndpoint: string;
};

const configMap: Record<Env, Config> = {
  development: {
    graphqlEndpoint: 'http://localhost:3001/graphql',
    // graphqlEndpoint: "https://funtime-api-staging.fly.dev/graphql",
    // graphqlEndpoint: "https://funtime-api.fly.dev/graphql",
  },
  preview: {
    graphqlEndpoint: 'https://funtime-api-staging.up.railway.app/graphql',
  },
  production: {
    graphqlEndpoint: 'https://funtime-api-production.up.railway.app/graphql',
  },
};

let environment: Env = 'production';

if (process.env.NEXT_PUBLIC_ENV) {
  environment = process.env.NEXT_PUBLIC_ENV as Env;
}

if (typeof window !== 'undefined') {
  console.log('env?', process.env.NEXT_PUBLIC_ENV);
}

export const env = environment;
const config = configMap[env];

export default config;
