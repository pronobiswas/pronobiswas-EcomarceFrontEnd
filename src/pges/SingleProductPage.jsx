import React from "react";
import StarComponent from "../component/StarComponent";
import { FaRegHeart } from "react-icons/fa";
import BradeCrumb from "../component/commonComponent/BradeCrumb";
import { useGetSingleProductQuery } from "../helper/reduxToolkit/apis/Exclusive.Api";
import { useParams } from "react-router-dom";
import ImageGlary from "../component/productComponent/singleProductComponent/ImageGlary";
import SpecificProductDetails from "../component/productComponent/singleProductComponent/SpecificProductDetails";

const SingleProductPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(
    params?.id || "672fe145c8206af6132fd6ce"
  );
  console.log(isLoading);

  return (
    <div>
      {/* =========pdoduct details===== */}
      <div className="container">
        <BradeCrumb />

        <div className="warpper w-full py-2 flex flex-col gap-4 md:flex-row ">
          {/* =======image galary======= */}
          <div className="w-full md:w-7/12">
            {isLoading ? (
              <h1>isLoading</h1>
            ) : (
              <ImageGlary productImages={data.data.image} />
            )}
          </div>
          {/* ======product details====== */}
          <div className="w-full md:w-5/12 ml-2">
            {isLoading ? (
              <h1>loading</h1>
            ) : (
              <SpecificProductDetails productData={data.data} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
