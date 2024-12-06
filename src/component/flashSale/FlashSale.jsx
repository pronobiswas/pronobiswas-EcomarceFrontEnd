import React from "react";
import Heading from "../Heading";
import ItemCard from "../ItemCard";
import CommonRow from "../CommonRow";
import {useGetAllProductsQuery} from '../../helper/reduxToolkit/apis/productAPI'

const FlashSale = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  
  
  return (
    <div className="w-full mb-8 border-b-[1px] ">
      <CommonRow
        Card = {ItemCard}
        subHeading={"Today's"}
        heading={"Fresh Sale"}
        isArrow={true}
        partialItemShow={6}
        componentData={data?.products}
        isLoading={isLoading}
        viewButton={true}
      />
    </div>
  );
};

export default FlashSale;
