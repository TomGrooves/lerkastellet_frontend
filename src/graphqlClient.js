import { GraphQLClient, gql } from "graphql-request";

const API_URL = `https://graphql.contentful.com/content/v1/spaces/${import.meta.env.VITE_CONTENTFUL_SPACE_ID}`

export const graphQLClient = new GraphQLClient(API_URL, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN}`
    }
  });