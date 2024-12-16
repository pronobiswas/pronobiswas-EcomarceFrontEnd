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
  const numbers=[1,2,3,4,5,6,7,8,9];
  return (
    <div>
      <ul>
        {
          numbers.map( (num , index)=>{
            if(index>=3) return null;
            return <li key={index}>{num}</li>
          } )
        }
      </ul>
      {/* =======testing limit====== */}
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
