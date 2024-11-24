import React from "react";
import BannerComponent from "../component/banner/BannerComponent";
import FlashSale from "../component/flashSale/FlashSale";

const HomePge = () => {
  return (
    <div className="w-full">
      <BannerComponent />
      <FlashSale />
    </div>
  );
};

export default HomePge;
