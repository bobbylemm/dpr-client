import { GraphQLClient } from 'graphql-request'

  const endpoint = 'http://localhost:3090/graphql'

  export const graphQLClient = new GraphQLClient(endpoint, {
    credentials: 'include',
    mode: 'cors',
  })