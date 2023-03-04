import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { supabase } from "@src/user/supabase";

import config, { env } from "../util/config";

const httpLink = createHttpLink({
  uri: config.graphqlEndpoint,
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
  };
});

const { graphqlEndpoint } = config;

let client: ApolloClient<NormalizedCacheObject>;

const isServer = typeof window === "undefined";
// @ts-ignore
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;

export function getApolloClient(forceNew: boolean = false) {
  if (!client || forceNew) {
    client = new ApolloClient({
      ssrMode: isServer,
      uri: graphqlEndpoint,
      link: authLink.concat(httpLink),
      cache: new InMemoryCache().restore(windowApolloState || {}),
    });
  }
  return client;
}
