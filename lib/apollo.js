import { ApolloClient, InMemoryCache } from '@apollo/client';


export function removeLastTrailingSlash(url) {
  if (typeof url !== 'string') return url;
  return url.replace(/\/$/, '');
}

export const client = new ApolloClient({
  uri: removeLastTrailingSlash(process.env.GRAPH_URL),
  cache: new InMemoryCache(),
});