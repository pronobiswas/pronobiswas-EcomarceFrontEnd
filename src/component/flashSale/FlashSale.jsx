import React from "react";
import Heading from "../Heading";
import Timer from "../Timer";
import ItemCard from "../ItemCard";

const FlashSale = () => {
  return (
    <div>
      <div className="container">
        <div className="warper flex items-end gap-8">
          <Heading subHeading={"Today's"} heading={"Flash Sale"} />
          <Timer />
        </div>
        <div className="ItemCardWarpper w-full flex gap-3 py-8">
          {[...new Array(3)].map((_, index) => (
            <div key={index}>
              <ItemCard />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
