import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/graphql"
      : "https://funtime-api.fly.dev/graphql",
  documents: ["src/**/*.graphql"],
  generates: {
    "src/generated/graphql.tsx": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
};

export default config;
