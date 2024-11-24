import React from "react";
import photo from "../assets/proA.png";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const ItemCard = ({itemData}) => {
  console.log("i'm from item card" , itemData);
  
  return (
    // =====main card======
    <div className="w-[270px] group">
      <div className="w-full  bg-AbchaSada">
        <div className=" w-full relative">
          <div className="flex justify-between px-3 pt-3">
            <span className=" bg-Secondary2 px-3 py-1 rounded font-popins text-[12px] text-Sada">
              -40%
            </span>
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
        <div className="flex justify-center px-3">
          <img src={photo} alt="" className="w-44 h-full object-contain" />
        </div>
        <div className="w-full bg-black text-Sada text-center opacity-0 group-hover:opacity-100 py-2">
          Grab
        </div>
      </div>
      {/* ======picture======== */}
      {/* =====description section===== */}
      <div className="mt-4">
        <p className="text-base font-popins font-semibold text-black">
          HAVIT HV-G92 Gamepad
        </p>
        <p className="my-2">
          <span className="text-Secondary2 font-popins">$120</span>
          <span className="font-popins line-through ml-4 text-DhusorLekhoni">
            $160
          </span>
        </p>
        <div className="star">
          <div className="flex items-center text-DhusorLekhoni">
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>(88)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
