export const SEASON = 2023;
export const LEAGUE_ID = 8;

type Env = 'development' | 'preview' | 'production';

type ServerPlatform = 'local' | 'railway' | 'vercel';

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

let serverPlatform: ServerPlatform = 'local';

if (process.env.NEXT_PUBLIC_SERVER_PLATFORM) {
  serverPlatform = process.env.NEXT_PUBLIC_SERVER_PLATFORM as ServerPlatform;
}

if (typeof window !== 'undefined') {
  console.log('serverPlatform?', serverPlatform);
}

export const env = environment;
const config = configMap[env];

export default config;
