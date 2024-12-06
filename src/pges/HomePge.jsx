import React from "react";
import BannerComponent from "../component/banner/BannerComponent";
import FlashSale from "../component/flashSale/FlashSale";
import Category from "../component/category/Category";
import BestSellingProduct from "../component/home/BestSellingProduct";
import Poster from "../component/home/Poster";
import OurProdutcs from "../component/home/OurProdutcs";
import NewArival from "../component/home/NewArival";
import Services from "../component/home/Services";



const HomePge = () => {
  return (
    <div className="w-full">
      <BannerComponent />
      <FlashSale />
      <Category/>
      <BestSellingProduct/>
      <Poster/>
      <OurProdutcs/>
      <NewArival/>
      <Services/>
    </div>
  );
};

export default HomePge;
