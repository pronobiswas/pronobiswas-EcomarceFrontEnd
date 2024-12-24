import React, { useState } from "react";
import ItemCard from "../ItemCard";

import ProductCard from "./ProductCard";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import photo from "../../../public/girls.png";
import StarComponent from "../StarComponent";
import { useGetAllProductsQuery } from "../../helper/reduxToolkit/apis/Exclusive.Api";

const RightProducts = ({categoryID}) => {
  console.log(categoryID);
  
  const { data, isLoading, error } = useGetAllProductsQuery();
  
  const [product, setproduct] = useState([]);
  const [page, setpage] = useState(1);
  const [pagePerShow, setpagePerShow] = useState(9);
  let totalPage = data?.data?.length / 9;
  
  
  //   =========pagination funtionality=========
  const handlePerItem = (index) => {
    if (index > 0 && index <= Math.ceil(totalPage)) {
      setpage(index);
    }
  };
  // select option 
  const handleOption = (e) => {
    setpagePerShow(parseInt(e.target.value));

  }
  // handleItem function=========
  // const handleItem = (itemId) => {
  //   console.log(itemId);
  // };
  
  
  return (

    // =======returning markUp======
    <div>
      
      {isLoading ? (
        <span>skeliton</span>
      ) : (
        
        <ul className="flex flex-wrap items-center justify-between gap-y-5">
          {data?.data
            .slice(page * 9-9, page * pagePerShow)
            .map((item, index) => (
              <li onClick={() => handleItem(item._id)}>
                <ProductCard itemData={item} />
              </li>
            ))}
        </ul>
      )}
      {/* =========pegination====== */}
      {/* =========pegination====== */}
      <div
        aria-label="Page navigation example"
        className="flex justify-center items-center mt-20"
      >
        <ul class="inline-flex -space-x-px text-base h-10">
          {/* =====previous====== */}
          <li>
            <span
              href="#"
              class="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700  cursor-pointer"
              onClick={() => handlePerItem(page - 1)}
            >
              Previous
            </span>
          </li>
          {/* =====Indexing====== */}
          {[...new Array(Math.ceil(totalPage) || 8)].map((_, index) => (
            <li key={index}>
              <span
                href="#"
                className={
                  index + 1 === page
                    ? "flex items-center justify-center px-4 h-10 leading-tight text-white_FFFFFF bg-redDB4444 border border-redDB4444 hover:bg-gray-100 hover:text-gray-700  cursor-pointer"
                    : "flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700  cursor-pointer"
                }
                onClick={() => handlePerItem(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}
          {/* =====next========= */}
          <li>
            <span
              href="#"
              class="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              onClick={() => handlePerItem(page + 1)}
            >
              Next
            </span>
          </li>
        </ul>
      </div>

      {/* =========pegination====== */}
      
    </div>
  );
};

export default RightProducts;
