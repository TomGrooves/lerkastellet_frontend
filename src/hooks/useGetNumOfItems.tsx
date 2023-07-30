import { useQuery } from "@tanstack/react-query";
import { ProductCountType } from "../types/types";
import { graphQLClient } from "../graphqlClient";
import { getTotalItemCount } from "../requests/getTotalItemCount";
import { useEffect, useState } from "react";

export function useGetNumOfItems(){

    const [arrLength, setArrLenght] = useState<number>(0)

    
    const countQuery: ProductCountType = useQuery(
        ["getTotalItemCount"],
        async () => await graphQLClient.request(getTotalItemCount)
      );
      const length = countQuery.data?.productCollection?.items?.length!
        useEffect(() => {
            setArrLenght(length)
        },[length])

        return (
            {arrLength}
        )
    }