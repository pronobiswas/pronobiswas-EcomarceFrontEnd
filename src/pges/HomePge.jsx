import React from "react";
import BannerComponent from "../component/banner/BannerComponent";
import FlashSale from "../component/flashSale/FlashSale";
import Category from "../component/category/Category";
import BestSellingProduct from "../component/home/BestSellingProduct";
import Poster from "../component/home/Poster";



const HomePge = () => {
  return (
    <div className="w-full">
      <BannerComponent />
      <FlashSale />
      <Category/>
      <BestSellingProduct/>
      <Poster/>
    </div>
  );
};

export default HomePge;
