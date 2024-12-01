import React from "react";
import CommonRow from "../CommonRow";
import ItemCard from "../ItemCard";
import {useGetFlashSaleProductsQuery} from '../../helper/reduxToolkit/apis/flashSaleAPI'
const BestSellingProduct = () => {
  const {data,error,isLoading} = useGetFlashSaleProductsQuery();
  console.log(data);
  
  
  return (
    <div>
      <CommonRow
        Card={ItemCard}
        subHeading={"This Month's"}
        heading={"Best Sales"}
        buttonTxt={"View All"}
        partialItemShow={5}
        componentData={data?.products}
      />
    </div>
  );
};

export default BestSellingProduct;
