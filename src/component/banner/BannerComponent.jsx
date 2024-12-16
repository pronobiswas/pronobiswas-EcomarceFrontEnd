import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { category } from "../../../data.js";
import { FaAngleRight } from "react-icons/fa";
import slideImg from "../../../public/SlideImg.png";
import {useGetAllBannerQuery} from '../../helper/reduxToolkit/apis/category.Api.js'

const BannerComponent = () => {
const bannerInfo = useGetAllBannerQuery();
// console.log(bannerInfo.data.data);

  
  const [currentSlide, setcurrentSlide] = useState(0);

  
  const settings = {
    dots: true,
    // infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 700,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "3%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "5px",
          arrows: false,
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #ffff",
            marginRight: "10px",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            background: "#ffff",
            opacity: "0.5",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setcurrentSlide(currentSlide);
    },
  };
  return (
    <div className="container">
      {/* ======category menu===== */}
      <div className="warpper flex">
        <div className="aside w-[20%] min-w-60 pt-10 pr-5 border-r-[1px] border-HoverBotam">
          <ul className="bg-transparent">
            {category?.map((item,index) => (
              <li key={index} className="categoryItem py-2 font-popins font-normal text-base flex items-center justify-between cursor-pointer">
                {item.categoryName}
                <span className="ml-10">
                  {item.subCategory ? <FaAngleRight /> : ""}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {/* ========slider from react slick===== */}
        <div className="banner pt-10 pl-10 w-[80%]">
          <div className="warper w-full h-full">
            {/* ====slider=== */}
            <Slider {...settings}>
              {bannerInfo?.data?.data?.map((bannerImage, index) => (
                <div key={index} className="w-ful h-[380px]">
                  <img
                    src={bannerImage.image}
                    alt="png"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;
