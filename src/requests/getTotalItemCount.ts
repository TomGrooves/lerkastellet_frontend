import { gql } from "graphql-request";

export const getTotalItemCount = gql`
query{
  productCollection(order: sys_firstPublishedAt_ASC){
    items{
      title
    }
  }
}`