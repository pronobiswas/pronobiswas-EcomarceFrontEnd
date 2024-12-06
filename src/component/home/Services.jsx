import React from "react";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { PiShieldCheckBold } from "react-icons/pi";

const Services = () => {
  return (
    <div className="services w-full py-32">
      <div className="warpper container w-full h-full flex items-center justify-center gap-5">
        {/* =====fast delivery====== */}
        <div className="fastDelivery w-[250px] flex flex-col items-center  gap-3">
          {/* ------icon---- */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-Dhusor ">
            <span className="text-3xl inline-block py-4 px-4 text-Sada bg-black rounded-full">
              <FaTruckFast />
            </span>
          </div>
          {/* ----textbox----- */}
          <div>
            <h5 className="font popins font-semibold text-[20px]">
              FREE AND FST DELIVERY
            </h5>
            <p className="font-popins text-[14px]">
              Free Delevery for All orders over $140
            </p>
          </div>
        </div>
        {/* ======24/7 support====== */}
        <div className="Support fastDelivery w-[250px] flex flex-col items-center  gap-3">
          {/* ------icon---- */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-DhusorLekoni ">
            <span className="text-3xl inline-block py-4 px-4 text-Sada bg-black rounded-full">
              <MdOutlineHeadsetMic />
            </span>
          </div>
          {/* ----textbox----- */}
          <div>
            <h5 className="font popins font-semibold text-[20px]">
              24/7 CUSTOMER SERVICE
            </h5>
            <p className="font-popins text-[14px]">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>
        {/* ======moneny back gurrenty===== */}
        <div className="garuntee fastDelivery w-[250px] flex flex-col items-center  gap-3">
          {/* ------icon---- */}
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-DhusorLekoni ">
            <span className="text-3xl inline-block py-4 px-4 text-Sada bg-black rounded-full">
              <PiShieldCheckBold />
            </span>
          </div>
          {/* ----textbox----- */}
          <div>
            <h5 className="font popins font-semibold text-[20px] truncate ">
              MONEY BACK GUARANTEE
            </h5>
            <p className="font-popins text-[14px]">
              We reurn money within 30 days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
