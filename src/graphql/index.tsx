import { ApolloClient, InMemoryCache } from "@apollo/client";
import config from "../util/config";

const { graphqlEndpoint } = config;

export const client = new ApolloClient({
  ssrMode: true,
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
});
