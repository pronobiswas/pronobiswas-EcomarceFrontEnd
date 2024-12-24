import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const LeftSideFilter = ({ categoryData, isLoading , categoryId = ()=>{} }) => {

  const getcategoryId =(e)=>{
    categoryId(e._id)
  }

  return (
    <div>
      <h4 className="font-popins font-bold text-xl mb-4">Shop by Category</h4>
      {isLoading ? (
        <ul className="flex flex-col gap-2">
          {Array(7)
            .fill("")
            .map(() => (
              <li className="w-full h-8 bg-slate-700 rounded"></li>
            ))}
        </ul>
      ) : (
        <ul className="">
          {categoryData?.map((item, index) => (
            <li
              key={index}
              className="categoryItem py-2 font-popins font-normal text-base flex items-center justify-between cursor-pointer"
              onClick={()=>categoryId(item._id)}
            >
              {item.title}
              <span className="ml-10">
                {item.subCategory ? <FaAngleRight /> : ""}
              </span>
            </li>
          ))}
        </ul>
      )}
      <h4 className="font-popins font-bold text-xl my-4">Shop by Color</h4>
      <div className="flex flex-col gap-4">
        {/* ----red div--- */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* __Black__ */}
          <div className="w-4 h-4 bg-black rounded-full"></div>
          <span>Black</span>
        </div>
        {/* ----black div--- */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* ___RED__ */}
          <div className="w-4 h-4 bg-red-800 rounded-full"></div>
          <span>Red</span>
        </div>
        {/* ----green div --- */}
        <div className="flex items-center gap-2 cursor-pointer">
          {/* __green__ */}
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <span>Red</span>
        </div>
      </div>
    </div>
  );
};

export default LeftSideFilter;
