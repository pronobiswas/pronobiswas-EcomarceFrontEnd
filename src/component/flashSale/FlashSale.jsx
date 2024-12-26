import React from "react";
import Heading from "../Heading";
import ItemCard from "../ItemCard";
import CommonRow from "../CommonRow";
import {useGetAllProductsQuery} from '../../helper/reduxToolkit/apis/productAPI'
import { useGetFlashSaleProductsQuery } from "../../helper/reduxToolkit/apis/Exclusive.Api";

const FlashSale = () => {
  // const { data, error, isLoading } = useGetAllProductsQuery();
  const { data, error, isLoading } = useGetFlashSaleProductsQuery();

  const flashSaleProduct = data?.data?.map((item) => {
    return item.productId;
  });
  
  
  return (
    <div className="w-full mb-8 border-b-[1px] ">
      <CommonRow
        Card = {ItemCard}
        subHeading={"Today's"}
        heading={"Flash Sale"}
        offerTime={"3"}
        isArrow={true}
        partialItemShow={6}
        componentData={flashSaleProduct}
        isLoading={isLoading}
        viewButton={true}
      />
    </div>
  );
};

export default FlashSale;
