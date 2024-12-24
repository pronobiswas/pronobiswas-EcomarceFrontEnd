import React from "react";
import photo from "../assets/proA.png";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import useCalculateDiscount from "../helper/hooks/useCalculateDiscount";
import StarComponent from "./StarComponent";
import { Link } from "react-router-dom";

const ItemCard = ({ itemData }) => {
  return (
    // =====main card======
    <Link to={`/product/${itemData._id}`}>
      <div className="w-60 group hover:cursor-pointer pb-10 transition-all duration-300">
        <div className="w-full h-60 flex flex-col bg-AbchaSada relative">
          {/* ======discount persentences====== */}
          <div className=" w-full absolute">
            <div className="flex justify-between px-3 pt-3">
              {/* =====discount Prsentances===== */}
              {itemData ? (
                <span className=" bg-Secondary2 px-3 py-1 rounded font-popins text-[12px] text-Sada">
                  {Math.floor(itemData.discountPrice) + "%"}
                </span>
              ) : (
                <span className=" bg-Secondary2 px-3 py-1 rounded font-popins text-[12px] text-Sada">
                  -40%
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
          {/* ======picture======== */}
          <div className="w-full h-full flex justify-center items-center p-3">
            {itemData ? (
              <img
                src={itemData?.image}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <img src={photo} alt="" className="w-44 h-full object-contain" />
            )}
          </div>
          {/* ====grab==== */}
          <div className="w-full bg-Secondary2 text-Sada text-center opacity-0 rounded group-hover:opacity-100 py-2  absolute bottom-0 transition duration-300 ease-out">
            Add To Cart
          </div>
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
                  itemData.discountPercentage
                ).toFixed(2)}
              </span>
            ) : (
              // =======unoffered price=======
              <span className="text-Secondary2 font-popins">$0.00</span>
            )}
            <span className="font-popins line-through ml-4 text-DhusorLekhoni">
              ${itemData ? itemData.price.toFixed(2) : 300}
            </span>
          </p>
          {/* =======stars====== */}
          <div className="star flex gap-3">
            <div className="flex items-center text-yellow-400">
              <StarComponent reting={itemData ? itemData.rating : 4} />
            </div>
            <span>(88)</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
