import { useQuery } from "@tanstack/react-query";
import style from "../styles/gallery.module.scss";
import { graphQLClient } from "../graphqlClient";
import {
  getOrderedProducts,
} from "../requests/getOrderedProducts";
import { useState } from "react";
import { Modal } from "./Modal";
import { Pagination } from "./Pagination";
import { ItemType, ProductType } from "../types/types";

export const Gallery = () => {
  const [skipCount, setSkipCount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<ItemType>({title: "", image: {url: ""}});

  const dataQuery: ProductType = useQuery(
    ["getOrderedProducts", skipCount],
    async () =>
      await graphQLClient.request(getOrderedProducts, { skipCount: skipCount })
  );

  const handlePrevNext = (order: string) => {
    if (order === "asc") {
      setSkipCount((prev) => prev + 10);
    }
    if (order === "desc") {
      setSkipCount((prev) => prev - 10);
    }
  };

  const handleOpenModal = (item: ItemType) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  console.log("data", dataQuery?.data);
  console.log("skip", skipCount);

  if (dataQuery?.isInitialLoading) return <h1>Loading....</h1>;
  if (dataQuery?.error) return <h1>Something went wrong..</h1>;
  if (dataQuery?.status == "success")
    return (
      <section id="gallery">
        <h2 className={style.galleryHeading}>Galleriet</h2>
        <div className={style.imageGallery}>
          <button onClick={() => handlePrevNext("desc")}>BACK</button>

          {dataQuery.data?.productCollection?.items?.map((item, index) => {
            return (
              <img
                onClick={() => handleOpenModal(item)}
                src={item.image.url}
                key={item.title.toString()}
              ></img>
            );
          })}

          <button onClick={() => handlePrevNext("asc")}>FORWARD</button>
        </div>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedItem={selectedItem}
        />
        <Pagination setSkipCount={setSkipCount} skipCount={skipCount}/>
      </section>
    );
};
