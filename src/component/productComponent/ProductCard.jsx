import React from "react";
import photo from "../../../public/qrcode.png";
import { FaRegHeart } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import StarComponent from "../StarComponent";
import useCalculateDiscount from "../../helper/hooks/useCalculateDiscount";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addtoCart } from "../../helper/reduxToolkit/slice/cartSlice";

const ProductCard = ({ itemData, isActive }) => {
  const dispatch = useDispatch();
  console.log(isActive);

  const cartItem = useSelector((state) => state.cartItem);

  const handleAddToCart = (itemData, xxx) => {
    dispatch(addtoCart(itemData));
  };
  return (
    <>
      {/* ====fullcard==== */}
      <div className="w-full group hover:cursor-pointer pb-10">
        <div className={` ${isActive ? "productCard" : ""}`}>
          <div className=" min-w-40 flex flex-col bg-AbchaSada relative">
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
            {/* ======picture======== */}
            <Link to={`/product/${itemData._id}`}>
              <div
                className={`${
                  isActive ? "" : ""
                } max-w-80 h-32 md:h-48 w-48 flex justify-center items-center px-1 md:px-3`}
              >
                {itemData ? (
                  <img
                    src={itemData?.image[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={photo}
                    alt="png"
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </Link>
            {/* ====grab==== */}
            <div
              className="w-full bg-black text-Sada text-center opacity-0 group-hover:opacity-100 py-2 ease-in-out duration-300 absolute bottom-0"
              onClick={() => {
                handleAddToCart(itemData);
              }}
            >
              Add To Cart
            </div>
          </div>

          {/* =====description section===== */}
          <Link to={`/product/${itemData._id}`}>
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
                  <span className="text-Secondary2 font-popins">
                    ${itemData.price}
                  </span>
                )}
                <span className="font-popins line-through ml-4 text-DhusorLekhoni">
                  ${itemData ? itemData.price : 300}
                </span>
              </p>
              {/* =====product description======= */}
              <div className="w-full">
                {isActive &&
                <p className="text-sm font-inter h-10 overflow-clip text-ellipsis line-clamp-2 lg:max-h-15 ">
                  {itemData.description}
                </p>
                }
              </div>
              {/* =======stars====== */}
              <div className="w-full mt-3 star flex gap-3">
                <div className="flex items-center text-yellow-400">
                  <StarComponent reting={itemData ? itemData.rating : 4} />
                </div>
                <span>( {itemData ? itemData.review.length : "0"} )</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
