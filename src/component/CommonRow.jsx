import React, { useRef } from "react";
import { Component } from "react";
import Heading from "./Heading";
import Timer from "./Timer";

import ProductSkeleton from "./ProductSkeleton";
// ===slider==
import Slider from "react-slick";

import {
  HiOutlineArrowLeft,
  HiOutlineArrowRight,
  HiOutlineArrowSmRight,
} from "react-icons/hi";
import ItemCard from "./ItemCard";
import { FaAngleDoubleRight } from "react-icons/fa";
import { useNavigate } from "react-router";

// =======commonRow======
// =======commonRow======

const CommonRow = ({
  subHeading = "Today's",
  heading = "Flash Sale",
  offerTime = "",
  buttonTxt = "",
  isArrow = false,
  Card = () => <ProductSkeleton />,
  partialItemShow = 4,
  componentData = [],
  isLoading = false,
  viewButton = false,
  rows = 1,
}) => {
  let navigate = useNavigate();

  const SliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: partialItemShow,
    slidesToScroll: 1,
    autoplay: true,
    rtl: true,
    rows: rows,
    rowGap: 30,

    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  const next = () => {
    SliderRef.current.slickPrev();
  };
  const prev = () => {
    SliderRef.current.slickNext();
  };
  const handleViewBtn = () => {
    navigate("/product");
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
                  <div key={index} className="">
                    <ProductSkeleton />
                  </div>
                ))
              : componentData.map((item, index) => (
                  <div className="shrink  w-60" key={item?.key}>
                    <Card itemData={item} />
                  </div>
                ))}
          </Slider>
        </div>
      </div>

      {/* ======viewAllProducts======= */}
      {viewButton && (
        <div className="w-full text-center" onClick={handleViewBtn}>
          <span className="viewAllProduct">View All Products</span>
        </div>
      )}
    </div>
  );
};

export default CommonRow;
