import React from "react";
import Heading from "../Heading";
import playStation from "../../../public/playStation.png";
import girls from "../../../public/girls.png";
import miniSpeaker from "../../../public/miniSpeaker.png";
import guciPerfume from "../../../public/guciPerfume.png";

const NewArival = () => {
  return (
    <div className="container">
      {/* =====header======= */}
      <div className="header">
        <Heading subHeading={"Featured"} heading={"New Arrival"} />
      </div>

      {/* ==========content========== */}
      <div className="row w-full flex gap-4 flex-col md:flex-row py-5">
        {/* -----full hight box half1/2  playStation
        5----- */}
        <div className="aside w-1/2 max-w-[600px] h-[570px] bg-black text-Sada relative rounded">
          <img
            src={playStation}
            alt="image"
            className="w-ful h-full object-fill"
          />

          {/* ----absulate---- */}
          <div className="absolute left-5 bottom-8">
            <h4 className="font-inter text-[24px] font-semibold my-4">
              PlayStation 5
            </h4>
            <p className="max-w-[245px] font-popins ">
              Black and White version of the ps5 coming out on sale
            </p>
            <a href="#" className="text-base font-popins font-medium underline">
              Shop Now
            </a>
          </div>
        </div>
        {/* -------secondhalf1/2------ */}
        <div className="aside  w-1/2  h-[570px]  text-Sada flex flex-col gap-4">
          {/* ____full widdth woman fession_____ */}
          <div className="w-full h-1/2  relative">
            <img
              src={girls}
              alt="image"
              className="w-full h-full object-fill "
            />
            {/* ------abolute text section------ */}
            <div className="absolute left-5 bottom-8">
              <h4 className="font-inter text-[24px] font-semibold my-4">
                PlayStation 5
              </h4>
              <p className="max-w-[245px] font-popins ">
                Black and White version of the ps5 coming out on sale
              </p>
              <a
                href="#"
                className="text-base font-popins font-medium underline"
              >
                Shop Now
              </a>
            </div>
          </div>
          
          <div className="w-full h-1/2  flex  gap-4">
            <div className="w-1/2 h-full ">
              <img
                src={miniSpeaker}
                alt="png"
                className="w-full h-full object-fill"
              />
            </div>
            <div className="w-1/2 h-full ">
              <img
                src={guciPerfume}
                alt="png"
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default NewArival;
