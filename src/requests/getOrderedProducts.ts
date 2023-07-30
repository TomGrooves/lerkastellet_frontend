import { gql } from "graphql-request";

export const getOrderedProducts = gql`
query($skipCount: Int!){
  productCollection(limit:12, skip: $skipCount, order: sys_firstPublishedAt_ASC){
    items{
      title
      price
      height
      width
      image {
        url(transform:{width: 1200, format: WEBP})
      }
    }
  }
}`