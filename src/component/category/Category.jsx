import React from "react";
import CommonRow from "../CommonRow";
import ProductSkeleton from "../ProductSkeleton";
import CategoryCard from "../CategoryCard";

import { BsSmartwatch } from "react-icons/bs";
import { CiMobile4 } from "react-icons/ci";
import { FaCameraRetro } from "react-icons/fa";
import { FaHeadphonesSimple } from "react-icons/fa6";
import { GiConsoleController } from "react-icons/gi";
import { RiComputerLine } from "react-icons/ri";

const categorybrowse = [
    {
      id: 1,
      name: "Phones",
      img: <CiMobile4 />,
    },
    {
      id: 2,
      name: "Computer",
      img: <RiComputerLine />,
    },
    {
      id: 3,
      name: "Smart Watch",
      img: <BsSmartwatch />,
    },
  
    {
      id: 4,
      name: "Camera",
      img: <FaCameraRetro />,
    },
    {
      id: 5,
      name: "HeadPhone",
      img: <FaHeadphonesSimple />,
    },
    {
      id: 6,
      name: "Gaming",
      img: <GiConsoleController />,
    },
    {
      id: 7,
      name: "Phones",
      img: <CiMobile4 />,
    },
    {
      id: 8,
      name: "Computer",
      img: <RiComputerLine />,
    },
    {
      id: 9,
      name: "Smart Watch",
      img: <BsSmartwatch />,
    },
  ];



const Category = () => {
  return (
    <div className="container">
      <div className="warpper">
        <CommonRow
        subHeading={"Categories"}
        heading={"Browse By Category"}
        offerTime={""}
        buttonTxt={""}
        isArrow={true}
        ProductCard ={<CategoryCard/>}
        partialItemShow={3}
        componentData={categorybrowse}
        isLoading={false}
        viewButton={false}
        rows={""}
        />
      </div>
    </div>
  );
};

export default Category;
