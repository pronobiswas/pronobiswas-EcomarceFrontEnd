import React from "react";
import Heading from "../Heading";
import Timer from "../Timer";
import ItemCard from "../ItemCard";
import CategoryCard from "../CategoryCard";
import CommonRow from "../CommonRow";



const FlashSale = () => {
  return (
    <div className="w-full mb-8 border-b-[1px] ">
      <CommonRow
        subHeading={"Today's"}
        heading={"Fresh Sale"}
        Card = {<ItemCard/>}
        offerTime={4}
        buttonTxt={""}
        isArrow={true}
        isLoading={false}
        partialItemShow={5}
        componentData={[...new Array(6)]}
      />
    </div>
  );
};

export default FlashSale;
