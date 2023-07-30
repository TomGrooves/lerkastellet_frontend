export type ItemType = {
    title: string,
    price?: number,
    width?: number,
    height?: number,
    image: {
      url: string,
    }
  }
  
export type ProductType = {
    data: {
      productCollection: {
        items: Array<ItemType>
      }
    } | undefined,
    isInitialLoading?: boolean,
    error?: string | null,
    status?: string
  }

export type ProductCountType = {
  data:
    | {
        productCollection: {
          items: Array<{ title: string }>;
        };
      }
    | undefined;
};