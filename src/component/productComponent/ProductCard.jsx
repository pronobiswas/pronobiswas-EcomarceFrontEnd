import React from "react";
import photo from "../../../public/qrcode.png";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import StarComponent from "../StarComponent";
import useCalculateDiscount from "../../helper/hooks/useCalculateDiscount";

const ProductCard = ({ itemData ,isLoading}) => {
  return (
    <>
      {/* ====fullcard==== */}
      <div className="w-60 group hover:cursor-pointer pb-10">
        {/* ======discount persentences======== */}
        <div className="w-full min-h60 flex flex-col bg-AbchaSada relative">
          {/* ======discount persentences====== */}
          <div className=" w-full absolute">
            <div className="flex justify-between px-3 pt-3">
              {/* =====discount Prsentances===== */}
              {itemData ? (
                <span className=" bg-Secondary2 px-3 py-1 rounded font-popins text-[12px] text-Sada">
                  {itemData.discountPercent}%
                </span>
              ) : (
                <span className=" bg-Secondary2 px-3 py-1 rounded font-popins text-[12px] text-Sada">
                  -00%
                </span>
              )}
              {/* ====icons== */}
              <div className="">
                <p className="text-base bg-slate-50 px-1 py-1 rounded-full cursor-pointer hover:text-Sada hover:bg-Secondary2">
                  <FaRegHeart />
                </p>
              </div>
              <p className="absolute top-10 right-3 text-base bg-slate-50 px-1 py-1 rounded-full cursor-pointer hover:text-Secondary2">
                <IoEyeOutline />
              </p>
            </div>
          </div>
        </div>
        {/* ======picture======== */}
        <div className="w-full h-60 flex justify-center items-center px-3">
          {itemData ? (
            <img
              src={itemData?.image[0]}
              alt=""
              className="w-44 h-full object-contain"
            />
          ) : (
            <img src={photo} alt="png" className="w-44 h-full object-contain" />
          )}
        </div>
        {/* ====grab==== */}
        <div className="w-full bg-black text-Sada text-center opacity-0 group-hover:opacity-100 py-2 ease-in-out duration-300 ">
          Add To Cart
        </div>
        {/* =====description section===== */}
        <div className="mt-4">
          {/* ======title====== */}
          <p className="text-base font-popins font-semibold text-black max-w-56 text-ellipsis truncate">
            {itemData ? itemData.title : "HAVIT HV-G92 Gamepad"}
          </p>
          {/* =====netprices====== */}
          <p className="my-2">
            {itemData ? (
              <span className="text-Secondary2 font-popins">
                {useCalculateDiscount(
                  itemData.price,
                  itemData.discountPercent
                ).toFixed(2)}
              </span>
            ) : (
              // =======unoffered price=======
              <span className="text-Secondary2 font-popins">${itemData.price}</span>
            )}
            <span className="font-popins line-through ml-4 text-DhusorLekhoni">
              ${itemData ? itemData.price : 300}
            </span>
          </p>
          
          {/* =======stars====== */}
          <div className="star flex gap-3">
            <div className="flex items-center text-yellow-400">
              <StarComponent reting={itemData ? itemData.rating : 4} />
            </div>
            <span>( {itemData ? itemData.review.length :"0"} )</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
