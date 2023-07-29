import { gql } from "graphql-request";

export const getProducts = gql`
query{
    productCollection{
      items{
        title
        price
        height
        width
        image {
          url
        }
      }
    }
  }
`

export const getTotalItemCount = gql`
query{
  productCollection(order: sys_firstPublishedAt_ASC){
    items{
      title
    }
  }
}`