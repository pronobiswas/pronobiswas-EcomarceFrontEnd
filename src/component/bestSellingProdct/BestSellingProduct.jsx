import React from "react";
import CommonRow from "../CommonRow";
import ItemCard from "../ItemCard";

const BestSellingProduct = () => {
  return (
    <div>
      <CommonRow
        Card={ItemCard}
        subHeading={"This Month's"}
        heading={"Best Sales"}
        buttonTxt={"View All"}
        partialItemShow={5}
        componentData={[...new Array(5)]}
      />
    </div>
  );
};

export default BestSellingProduct;
