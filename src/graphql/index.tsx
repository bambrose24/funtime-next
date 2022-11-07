import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { supabase } from "@src/user/supabase";

import config from "../util/config";

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

const client = new ApolloClient({
  ssrMode: true,
  uri: graphqlEndpoint,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
