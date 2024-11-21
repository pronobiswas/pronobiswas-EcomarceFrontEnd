import React, { useEffect, useState } from "react";

const Timer = ({offerTime}) => {
  const [times, SetTimes] = useState(offerTime * 24 * 60 * 60 * 1000);


  useEffect(() => {
    const worker = new Worker(
      new URL("../../CountdownWorker.js", import.meta.url)
    );
    worker.postMessage(times);
    worker.onmessage = (e) => {
      SetTimes(e.data);
    };
  },[]);

  
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
  };
  const { day, Second, Munites, Hours } = formateDate(times);

  return (
    <div className="flex items-end gap-3">
      {/* ====day=== */}
      <div className="">
        <p className="font-popins text-[12px]">Days</p>
        <p className="font-inter text-3xl font-bold">
          {day < 10 ? `0${day}`:day}
        </p>
      </div>
      <div className="text-3xl text-Secondary2 font-black">:</div>
      {/* ====hours=== */}
      <div>
        <p className="font-popins text-[12px]">Hour</p>
        <p className="font-inter text-3xl font-bold">{Hours?Hours:"00"}</p>
      </div>
      <div className="text-3xl text-Secondary2 font-black">:</div>
      {/* ====min=== */}
      <div>
        <p className="font-popins text-[12px]">Munites</p>
        <p className="font-inter text-3xl font-bold">{Munites?Munites:"59"}</p>
      </div>
      <div className="text-3xl text-Secondary2 font-black">:</div>
      {/* ====sec=== */}
      <div>
        <p className="font-popins text-[12px]">Second</p>
        <p className="font-inter text-3xl font-bold">{Second?Second:"09"}</p>
      </div>
    </div>
  );
};

export default Timer;
