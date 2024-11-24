import React from "react";
import BannerComponent from "../component/banner/BannerComponent";
import FlashSale from "../component/flashSale/FlashSale";
import Category from "../component/category/Category";


const HomePge = () => {
  return (
    <div className="w-full">
      <BannerComponent />
      <FlashSale />
      <Category/>
    </div>
  );
};

export default HomePge;
