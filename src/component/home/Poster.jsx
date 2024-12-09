import React, { useEffect, useState } from "react";
import soundBox from '../../../public/soundBox.png'

const Poster = ({countDown=1}) => {
  const [times, SetTimes] = useState(countDown * 24 * 60 * 60 * 1000);
  useEffect(() => {
    const worker = new Worker(
      new URL("../../../CountdownWorker.js", import.meta.url)
    );
    worker.postMessage(times);
    worker.onmessage = (e) => {
      SetTimes(e.data);
    };
  }, []);
    // ==Date Format===
    const formateDate = (milisecond) => {
      let total_second = parseInt(Math.floor(milisecond / 1000));
      let total_munite = parseInt(Math.floor(total_second / 60));
      let total_hour = parseInt(Math.floor(total_munite / 60));
      let day = parseInt(Math.floor(total_hour / 24));
      let Second = parseInt(Math.floor(total_second % 60));
      let Munites = parseInt(Math.floor(total_munite % 60));
      let Hours = parseInt(Math.floor(total_hour % 24));
      // ======return as an integer=====
      return { day, Second, Munites, Hours };
      console.log(day,Second);
    };
    const { day, Second, Munites, Hours } = formateDate(times);
    
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
                <span className="font-bold text-base leading-none">{day?day:0}</span>
                <span className="text-[12px]">Days</span>
            </div>
            {/* ___hour___ */}
            <div className=" w-16 h-16 bg-Sada flex flex-col items-center justify-center rounded-full">
                <span className="font-bold text-base leading-none">{Hours?Hours:0}</span>
                <span className="text-[12px]">Hour</span>
            </div>
            {/* ___min___ */}
            <div className=" w-16 h-16 bg-Sada flex flex-col items-center justify-center rounded-full">
                <span className="font-bold text-base leading-none">{Munites?Munites:59}</span>
                <span className="text-[12px]">Minutes</span>
            </div>
            {/* ___sec___ */}
            <div className=" w-16 h-16 bg-Sada flex flex-col items-center justify-center rounded-full">
                <span className="font-bold text-base leading-none">{Second?Second:59}</span>
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
