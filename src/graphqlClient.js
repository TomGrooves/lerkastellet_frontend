import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://graphql.contentful.com/content/v1/spaces/pnnrov1ij3bj`

export const graphQLClient = new GraphQLClient(API_URL, {
    headers: {
      Authorization: `Bearer wvvfW92-In3NEMvWu72nCKgKrL3oQGDdslG8NHs1Kys`
    }
  });