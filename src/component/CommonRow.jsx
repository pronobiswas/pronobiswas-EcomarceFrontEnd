import React, { useRef } from "react";
import { Component } from "react";
import Heading from "./Heading";
import Timer from "./Timer";
import { FaAngleDoubleRight } from "react-icons/fa";
import ProductSkeleton from "./ProductSkeleton";
// ===slider==
import Slider from "react-slick";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi";
import ItemCard from "./ItemCard";
import CategoryCard from "./CategoryCard";

// =======commonRow======
// =======commonRow======
console.log("horibol");

const CommonRow = ({
  subHeading = "Today's",
  heading = "Flash Sale",
  offerTime = 0,
  buttonTxt = "",
  isArrow = true,
  Card = () => <ProductSkeleton />,
  partialItemShow = 4,
  componentData = [...new Array(4)],
  isLoading = true,
  viewButton = true,
  rows = 1,
}) => {
  const SliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: partialItemShow,
    slidesToScroll: 1,
    autoplay: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  const next = () => {
    SliderRef.current.slickPrev();
  };
  const prev = () => {
    SliderRef.current.slickNext();
    console.log("prev");
  };
  

  return (
    <div className="my-8">
      {/* =====header section========= */}
      <div className="container flex items-end justify-between">
        <div className="flex gap-10">
          {/* =====heading pass as props==== */}
          <Heading subHeading={subHeading} heading={heading} />
          {/* ===timer if:has OfferTime=== */}
          {offerTime && <Timer offerTime={offerTime} />}
        </div>
        {/* =======ArrowButton===== */}
        {isArrow && (
          <div className="flex gap-4 items-center justify-center">
            <div
              onClick={next}
              className="w-12 h-12 bg-AbchaSada rounded-full flex items-center justify-center text-2xl cursor-pointer hover:text-Sada hover:bg-black transition-all"
            >
              <HiOutlineArrowLeft />
            </div>
            <div
              onClick={prev}
              className="w-12 h-12 bg-AbchaSada rounded-full flex items-center justify-center text-2xl cursor-pointer hover:bg-black hover:text-Sada"
            >
              <HiOutlineArrowRight />
            </div>
          </div>
        )}
        {/* ===button=== */}
        {buttonTxt && (
          <div>
            <button className="viewallBtn text-base text-Sada font-popins px-12 py-4 bg-Secondary2 rounded relative group">
              <span>View All</span>
              <span className="absolute top-5 opacity-0 group-hover:translate-x-3 group-hover:opacity-100 transition-all">
                <FaAngleDoubleRight />
              </span>
            </button>
          </div>
        )}
      </div>
      {/* ===slider section====== */}
      <div className="container py-12">
        <div className="slider-container">
          <Slider ref={SliderRef} {...settings}>
            {isLoading
              ? [...new Array(4)].map((_, index) => (
                  <div key={index}>
                    <ProductSkeleton />
                  </div>
                ))
                : componentData.map((item, index) => (
                  <div key={index}>
                    {Card}
                    {console.log(item)}
                  </div>
                  
                ))}
          </Slider>
        </div>
      </div>

      {/* ======viewAllProducts======= */}
      {viewButton && (
        <div className="w-full text-center">
          <span className="viewAllProduct">View All Products</span>
        </div>
      )}
    </div>
  );
};

export default CommonRow;
