import React from "react";

const Heading = ({subHeading,heading}) => {
  return (
    <div>
        {/* ====subheading==== */}
      <div className="flex items-center gap-4">
        <span className="w-[20px] h-[40px] rounded-md bg-Secondary2 inline-block">
          {" "}
        </span>
        <h4 className="font-popins text-base font-semibold text-Secondary2">
          {subHeading ? subHeading : "Todays's"}
        </h4>
      </div>
      {/* ====heading===== */}
      <h2 className="font-inter font-semibold text-4xl mt-6">{heading ? heading : "FlashSale"}</h2>
    </div>
  );
};

export default Heading;
