import React from "react";
import { FaBangladeshiTakaSign, FaMinus, FaPlus, FaRegHeart, FaTruckFast } from "react-icons/fa6";
import StarComponent from "../../StarComponent";
import { IoSyncOutline } from "react-icons/io5";

const SpecificProductDetails = ({ productData }) => {
  // console.log("SpecificProductDetails", productData);
  const sizes = [
    { id: 1, size: "XS" },
    { id: 2, size: "S" },
    { id: 3, size: "M" },
    { id: 4, size: "L" },
    { id: 5, size: "XL" },
  ];

  return (
    <div className="w-full">
      {/* =====product details===== */}
      <div className="w-full h-full">
        <div className="detailsWarpper w-full max-w-[400px]">
          {/* =====product title==== */}
          {productData ? (
            <h3 className="font-inter font-semibold text-2xl">
              {productData.title}
            </h3>
          ) : (
            <h3 className="inline-block w-80 h-9 bg-gray-300 rounded"></h3>
          )}
          {/* <h2 >{productData? productData.title : "Havic HV G-92 Gamepad"}</h2> */}

          {/* ======= stars section ======= */}
          <div className="flex gap-3 py-4 items-center">
            {/* ---starComponent--- */}
            {productData ? (
              <StarComponent reting={productData?.rating} />
            ) : (
              <span className="inline-block w-32 bg-gray-300 h-8 rounded"></span>
            )}

            {/* -----reviews----- */}
            {productData ? (
              <span className="font-popins text-sm text-Dhusor">
                ({productData ? productData?.review?.length : "00"}Reviews)
              </span>
            ) : (
              <span className="inline-block w-24 bg-gray-300 h-5 rounded"></span>
            )}

            <span className="text-gray-400">|</span>
            {/* -----stock---- */}
            {productData ? (
              <span className="font-popins text-sm text-kolapata">
                In Stock
              </span>
            ) : (
              <span className="inline-block w-20 bg-gray-300 h-5 rounded"></span>
            )}
          </div>

          {/* -----price---- */}
          {productData ? (
            <span className="font-inter text-2xl flex items-center">
              {productData?.price}
              <FaBangladeshiTakaSign />
            </span>
          ) : (
            <span className="inline-block w-32 h-6 bg-gray-300 rounded "></span>
          )}
          {/* <h4>{data?.data ? data?.data?.price : "00.00"}tk</h4> */}

          {/* ------description------- */}
          {productData ? (
            <p className="w-[320px] h-16 py-4 overflow-hidden text-ellipsis line-clamp-3 text-sm font-popins">
              {productData?.description}
            </p>
          ) : (
            <p className="w-[95%] my-6 h-[63px] overflow-hidden text-ellipsis line-clamp-3 rounded bg-gray-300"></p>
          )}

          <hr />
          {/* ----colors--- */}
          <div className="flex items-center gap-6 my-6">
            <span className="font-inter text-xl">Colors :</span>

            <div className="flex gap-4 items-center">
              <div className="w-4 h-4 rounded-full bg-slate-300  outline outline-2 outline-offset-2 outline-slate-300"></div>
              <div className="w-4 h-4 rounded-full bg-red-500  outline outline-2 outline-offset-2 outline-red-500"></div>
            </div>
          </div>
          {/* ----size--- */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-inter text-xl">Size:</span>
            <div className="flex gap-2 [&>div:nth-child(3)]:bg-red-500 [&>div:nth-child(3)]:text-white">
              {sizes.map((item) => (
                <div className="w-8 h-8 flex items-center justify-center rounded-md border-2 border-DhusorLekhoni">
                  <span
                    className="text-sm font-popins font-medium"
                    key={item.id}
                  >
                    {item.size}
                  </span>
                </div>
              ))}
              {/* <div className="w-8 h-8 flex items-center justify-center rounded-md border-2">
                XS
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-md border-2">
                S
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-md border-2 bg-Secondary2 text-Sada">
                M
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-md border-2">
                L
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-md border-2">
                Xl
              </div> */}
            </div>
          </div>

          {/* =====orders section==== */}
          <div className="flex gap-2">
            {/* ---quantity--- */}
            <div className=" border border-1 border-gray-500 rounded-md flex ">
              <div className="w-8 h-10 flex items-center justify-center  hover:bg-red-500 hover:text-white cursor-pointer ">
                <span className="text-2xl">
                <FaMinus />
                </span>
              </div>
              <div className="w-20 h-10 flex items-center justify-center text-xl border border-y-0 border-gray-400">
                2
              </div>

              <div className="w-8 h-10 flex items-center justify-center  hover:bg-red-500 hover:text-white cursor-pointer ">
                <span className="text-2xl">
                  <FaPlus />
                </span>
              </div>
            </div>
            {/* ---order Button---- */}
            <div className="w-32 flex items-center justify-center bg-Secondary2 text-Sada rounded-md cursor-pointer">
              {" "}
              Order Now
            </div>
            {/* ----wish list Icon---- */}
            <div className="flex items-center justify-center text-2xl px-2 rounded-md border border-1 border-gray-500 cursor-pointer hover:bg-red-500 hover:text-Sada">
              <FaRegHeart />
            </div>
          </div>
          {/* ======delivery Section======== */}
          <div className="w-full max-w-[370px] border border-gray-400 mt-10 rounded">
            {/* ---fastDelivery---- */}
            <div className="flex gap-2 items-center p-4 border-0 border-b-[1px] border-b-gray-400">
                {/* ___Icon___ */}
                <div className="text-4xl"><FaTruckFast /></div>
                <div>
                    <h4 className="font-popins font-semibold">Free Delivery</h4>
                    <p className="font-popins font-medium text-xs">Enter your postal code for Delivery Availability</p>
                </div>
            </div>

            {/* ---ReturnDelivery---- */}
            <div className="w-full flex gap-2 items-center p-4">
                {/* ___Icon___ */}
                <div className="text-4xl"><IoSyncOutline /></div>
                <div>
                    <h4 className="font-popins font-semibold">Free Delivery</h4>
                    <p className="font-popins font-medium text-xs">Enter your postal code for Delivery Availability</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificProductDetails;
