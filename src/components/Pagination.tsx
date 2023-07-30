import { useEffect, useState } from "react";
import { graphQLClient } from "../graphqlClient";
import { useQuery } from "@tanstack/react-query";
import { getTotalItemCount } from "../requests/getTotalItemCount";
import style from "../styles/pagination.module.scss";
import { ProductCountType } from "../types/types";
import { useGetNumOfItems } from "../hooks/useGetNumOfItems";

interface PaginationInterface {
  setSkipCount: (arg: number) => void;
  skipCount: number;
}

export const Pagination = ({
  setSkipCount,
  skipCount,
}: PaginationInterface) => {
  const [points, setPoints] = useState<Array<{ point: number }>>([]);

  const { arrLength } = useGetNumOfItems();

  const handlePagination = (number: number) => {
    // skip_num is equal to the number the user clicked "eg. 2" -1 for the index and multiplied by 10. So 2 becomes 10, 3 becomes 20.
    let skip_num = (number - 1) * 12;
    setSkipCount(skip_num);
  };

  useEffect(() => {
    const createPagination = () => {
      // take the length of the array with all items and multiply by ten, then round up to nearest to get number of points
      const numberOfPoints = Math.ceil(arrLength / 12);

      // create a new array
      const pointsArray = [];

      // populate array with points
      for (let i = 0; i < numberOfPoints; i++) {
        pointsArray.push({ point: i + 1 });
      }
      setPoints(pointsArray);
    };
    createPagination();
  }, [arrLength]);

  return (
    <div className={style.pagination}>
      {points?.map((item) => {
        return (
          <span
            style={
              skipCount === (item.point - 1) * 12
                ? {
                    fontSize: "1.4rem",
                    borderRadius: "50%",
                    backgroundColor: "rgb(167, 149, 141)",
                    color: "white",
                  }
                : { fontSize: "1.2rem" }
            }
            key={item.point.toString()}
            onClick={() => handlePagination(item.point)}
          >
            {item.point}
          </span>
        );
      })}
    </div>
  );
};
