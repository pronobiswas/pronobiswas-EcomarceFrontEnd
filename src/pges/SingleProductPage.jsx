import React from "react";
import StarComponent from "../component/StarComponent";
import { FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";
import BradeCrumb from "../component/commonComponent/BradeCrumb";
import {
  useGetSingleCategoryProductQuery,
  useGetSingleProductQuery,
} from "../helper/reduxToolkit/apis/Exclusive.Api";
import { useParams } from "react-router-dom";
import ImageGlary from "../component/productComponent/singleProductComponent/ImageGlary";
import SpecificProductDetails from "../component/productComponent/singleProductComponent/SpecificProductDetails";
import Slider from "react-slick";
import ProductCard from "../component/productComponent/ProductCard";

// ========single prouct component======
const SingleProductPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(
    params?.id || "672fe145c8206af6132fd6ce"
  );

  const categoryInfo = useGetSingleCategoryProductQuery(
    data?.data?.category?._id
  );
  
  // console.log(categoryInfo.data.data.product);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slideItem, setSlideItem] = useState(5);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    window.addEventListener("load", ()=>{
      if(window.innerWidth < 500){
        setSlideItem(3)
      }else if(window.innerWidth < 900){
        setSlideItem(4)
      }else{setSlideItem(5)}
    });
  }, [screenWidth]);
  
  
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: slideItem,
    slidesToScroll: 1,
    lazyLoad: true,
    dots: false,
    speed: 1000,
    // autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div>
      <div className="container">
        <BradeCrumb />
        {/* =========pdoduct details===== */}
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
        {/* ==========similar product======== */}
        <div>
          <div className="py-[140px]">
            <h2 className="font-inter text-2xl font-semibold mb-5">Related Product</h2>
            <Slider {...settings}>
              {categoryInfo?.data?.data?.product?.map((item) => (
                <div className="px-4">
                  <ProductCard itemData={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
