import React from "react";
import soundBox from '../../../public/soundBox.png'

const Poster = () => {
  return (
    <div className="container mt-28 mb-14">
      <div className="warpper bg-black px-14 py-[60px] flex items-center">
        {/* =====text section==== */}
        <div className="w-1/2">
            {/* ---subhedding--- */}
          <h3 className="text-kolapata text-base font-popins font-semibold">
            Categories
          </h3>
          {/* -----heading--- */}
          <h2 className="max-w-[443px] font-inter font-semibold text-5xl text-Sada my-8">
          Enhance Your Music Experience
          </h2>
          {/* --------offertime box---------- */}
          <div className=" flex items-center justify-start gap-x-6 mb-10">
            {/* ___day___ */}
            <div className=" w-16 h-16 bg-Sada flex flex-col items-center justify-center rounded-full">
                <span className="font-bold text-base leading-none">23</span>
                <span className="text-[12px]">Days</span>
            </div>
            {/* ___hour___ */}
            <div className=" w-16 h-16 bg-Sada flex flex-col items-center justify-center rounded-full">
                <span className="font-bold text-base leading-none">23</span>
                <span className="text-[12px]">Hour</span>
            </div>
            {/* ___min___ */}
            <div className=" w-16 h-16 bg-Sada flex flex-col items-center justify-center rounded-full">
                <span className="font-bold text-base leading-none">23</span>
                <span className="text-[12px]">Minutes</span>
            </div>
            {/* ___sec___ */}
            <div className=" w-16 h-16 bg-Sada flex flex-col items-center justify-center rounded-full">
                <span className="font-bold text-base leading-none">23</span>
                <span className="text-[12px]">Seconds</span>
            </div>
          </div>
          {/* -------button------ */}
          <div>
            <button className="bg-kolapata text-Sada px-12 py-4 rounded">Buy Now!</button>
          </div>
        </div>
        {/* =====image section==== */}
        <div className="w-1/2 flex ">
        <div className="warpper">
            <img src={soundBox} alt="images" className="w-full h-full object-cover"/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Poster;
