export const SEASON = 2022;
export const LEAGUE_ID = 7;

// dummy comment to keep staging branch separate

type Env = "development" | "preview" | "production";

export type Config = {
  graphqlEndpoint: string;
  logRocket: {
    enable: boolean;
    key: string;
  };
};

const configMap: Record<Env, Config> = {
  development: {
    // graphqlEndpoint: "http://localhost:3001/graphql",
    // graphqlEndpoint: "https://funtime-api-staging.fly.dev/graphql",
    graphqlEndpoint: "https://funtime-api.fly.dev/graphql",
    logRocket: {
      enable: false,
      key: "5gvyus/funtime",
    },
  },
  preview: {
    graphqlEndpoint: "https://funtime-api-staging.fly.dev/graphql",
    logRocket: {
      enable: true,
      key: "5gvyus/funtime",
    },
  },
  production: {
    graphqlEndpoint: "https://funtime-api.fly.dev/graphql",
    logRocket: {
      enable: true,
      key: "5gvyus/funtime",
    },
  },
};

let environment: Env = "production";

if (process.env.NEXT_PUBLIC_ENV) {
  environment = process.env.NEXT_PUBLIC_ENV as Env;
}

console.log("env?", process.env.NEXT_PUBLIC_ENV);

export const env = environment;
const config = configMap[env];

export default config;
