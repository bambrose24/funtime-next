export const SEASON = 2022;
export const LEAGUE_ID = 7;

type Env = "development" | "preview" | "production";

export type Config = {
  graphqlEndpoint: string;
};

const configMap: Record<Env, Config> = {
  development: {
    graphqlEndpoint: "http://localhost:3001/graphql",
  },
  preview: {
    graphqlEndpoint: "https://funtime-api.fly.dev/graphql",
  },
  production: {
    graphqlEndpoint: "https://funtime-api.fly.dev/graphql",
  },
};

let environment: Env = "production";

if (process.env.NEXT_PUBLIC_ENV) {
  environment = process.env.NEXT_PUBLIC_ENV as Env;
}

console.log(`env: ${environment}`);

export const env = environment;
export default configMap[env];
