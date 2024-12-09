import React from "react";
import ItemCard from "../ItemCard";

import ProductCard from "./ProductCard";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import photo from "../../../public/girls.png";
import StarComponent from "../StarComponent";
import { useGetMyProductsQuery } from "../../helper/reduxToolkit/apis/allProductApi";

const RightProducts = () => {
  const { data, isLoading, error } = useGetMyProductsQuery();

  return (
    <div>
      {isLoading ? (
        <span>skeliton</span>
      ) : (
        <ul className="flex flex-wrap items-center justify-between gap-y-5">
          {data?.data.map((item, index) => (
            <li>
              <ProductCard itemData={item} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RightProducts;
