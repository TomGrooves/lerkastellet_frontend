import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://graphql.contentful.com/content/v1/spaces/${process.env.SPACE_ID}`

export const graphQLClient = new GraphQLClient(API_URL, {
    headers: {
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
    }
  });