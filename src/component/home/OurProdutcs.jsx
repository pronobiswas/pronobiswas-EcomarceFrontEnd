import React from "react";
import CommonRow from "../CommonRow";
import { useGetAllProductsQuery } from "../../helper/reduxToolkit/apis/productAPI";
import ItemCard from "../ItemCard";



const OurProdutcs = () => {
 
  const { data, error, isLoading } = useGetAllProductsQuery();
  console.log("our product data", data);
  
  return (
    <div>
      <CommonRow
        subHeading={"Our Products"}
        heading={"Explore Our Products"}
        isArrow={true}
        partialItemShow={5}
        Card={ItemCard}
        componentData={data?.products}
        rows={2}
      />
    </div>
  );
};

export default OurProdutcs;
