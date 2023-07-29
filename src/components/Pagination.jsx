import { useEffect, useState } from "react";
import { graphQLClient } from "../graphqlClient";
import { useQuery } from "@tanstack/react-query";
import { getTotalItemCount } from "../requests/getProducts";

export const Pagination = (props) => {
  const [points, setPoints] = useState([]);

  const countQuery = useQuery(
    ["getTotalItemCount"],
    async () => await graphQLClient.request(getTotalItemCount)
  );

  const handlePagination = (number) => {
    // skip_num is equal to the number the user clicked "eg. 2" -1 for the index and multiplied by 10. So 2 becomes 10, 3 becomes 20.
    let skip_num = (number - 1) * 10;
    props.setSkipCount(skip_num);
  };

  useEffect(() => {
    const createPagination = () => {
      // take the length of the array with all items and multiply by ten, then round up to nearest to get number of points
      const numberOfPoints = Math.ceil(
        countQuery.data?.productCollection?.items?.length / 10
      );

      // create a new array
      const pointsArray = [];

      // populate array with points
      for (let i = 0; i < numberOfPoints; i++) {
        pointsArray.push({ point: i + 1 });
      }
      setPoints(pointsArray);
    };
    createPagination();
  }, [countQuery.data]);

  return (
    <>
      {points?.map((item, index) => {
        return <span style={props.skipCount === (item.point-1)*10  ? {fontSize: "2rem"} : {fontSize: "1rem"}} key={item.point.toString()} onClick={() => handlePagination(item.point)}>{item.point}</span>;
      })}
    </>
  );
};
