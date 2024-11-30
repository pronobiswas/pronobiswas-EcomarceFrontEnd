import React from "react";
import BannerComponent from "../component/banner/BannerComponent";
import FlashSale from "../component/flashSale/FlashSale";
import Category from "../component/category/Category";
import BestSellingProduct from "../component/bestSellingProdct/BestSellingProduct";


const HomePge = () => {
  return (
    <div className="w-full">
      <BannerComponent />
      <FlashSale />
      <Category/>
      <BestSellingProduct/>
    </div>
  );
};

export default HomePge;
