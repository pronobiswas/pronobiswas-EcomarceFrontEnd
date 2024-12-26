import React from "react";
import BradeCrumb from "../component/commonComponent/BradeCrumb";
import { IoIosArrowDown, IoIosArrowUp, IoMdCloseCircle } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { decrementCart, incrementCart, removeCart } from "../helper/reduxToolkit/slice/cartSlice";
import { MdOutlineCancel } from "react-icons/md";

const CartPage = () => {
  const dispatch = useDispatch();
  const { value, totalAmount, totalItem } = useSelector(
    (state) => state.cartItem
  );

  const handleRemove = (item) => {
    dispatch(removeCart(item));
  };
  const handleIncrement = (item) => {
    dispatch(incrementCart(item));
  };
  const handleDecrement = (item) => {
    dispatch(decrementCart(item));
  };
  return (
    <div>
      <div className="container py-10">
        <BradeCrumb />
        <div className="flex justify-between shadow-lg rounded mb-10">
          <div className="flex-1 py-6  flex justify-start">
            <h1 className="text-[20px] font-popins font-normal text-text_black000000 pl-10">
              Product
            </h1>
          </div>
          <div className=" flex-1  py-6 flex justify-center">
            <h1 className="text-[20px] font-popins font-normal text-text_black000000">
              Price
            </h1>
          </div>
          <div className=" flex-1  py-6  flex justify-center">
            <h1 className="text-[20px] font-popins font-normal text-text_black000000">
              Quantity
            </h1>
          </div>
          <div className=" flex-1  flex justify-end py-6">
            <h1 className="text-[20px] font-popins font-normal text-text_black000000 pr-10">
              Subtotal
            </h1>
          </div>
        </div>

        {/* carti tem */}
        <div className="custom_scrollbar w-full h-[500px] overflow-y-scroll ">
          {value?.map((item) => (
            <div className="mb-10" key={item._id}>
              {console.log(item)}
              <div className="flex justify-between shadow-lg rounded">
                  {/* ======product image box====== */}
                <div className="flex-1  py-6  flex justify-start">
                  <div className="flex pl-5 items-center gap-x-5 relative ">
                    <img
                      src={item?.image[0]}
                      alt="pic"
                      className="w-[54px] h-[54px] object-contain"
                    />
                    {/* ======cancel Button===== */}
                    <span
                      className="w-[20px] h-[20px] text-xl text-red-600 rounded-full bg-redDB4444 absolute text-white_FFFFFF flex justify-center items-center top-[-2%] left-[15%] font-semibold cursor-pointer hover:opacity-70"
                      onClick={() => handleRemove(item)}
                    >
                      <IoMdCloseCircle />
                    </span>
                    {/* ======product Name==== */}
                    <h1 className="text-Base font-popins font-normal text-black ">
                      {item ? item?.title : "Product"}
                    </h1>
                  </div>
                </div>
                {/* =====product price======= */}
                <div className=" flex-1  py-6 flex justify-center">
                  <h3 className="text-[20px] font-popins font-normal text-text_black000000">
                    ${item ? item.price : "00"}
                  </h3>
                </div>
                {/* ======product Quantity===== */}
                <div className=" flex-1  py-6 flex   justify-center">
                  <div className="flex items-center justify-center gap-x-3 w-[100px] rounded border border-gray-400">
                    <input
                      type="text"
                      value={item.cartQuantity}
                      className=" w-[25px] text-[20px] font-popins font-normal text-text_black000000"
                    />
                    <div className="flex flex-col items-center justify-center">
                      <span className="" onClick={()=>handleIncrement(item)}>
                        <IoIosArrowUp className="inline-block  cursor-pointer" />
                      </span>

                      <span className="" onClick={()=>handleDecrement(item)}>
                        <IoIosArrowDown className="inline-block  cursor-pointer" />
                      </span>
                    </div>
                  </div>
                </div>
                {/* ========total price====== */}
                <div className=" flex-1 flex justify-end py-6">
                  <h1 className="text-[20px] font-popins font-normal text-text_black000000 pr-10">
                    {/* $ {+item.price.replace(/,/g, "") * +item.cartQuantity} */}
                    34343
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* carti tem */}
        {/* button */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <button className="px-[48px] py-[16px] bg-transparent  text-text_black000000 text-[18px] font-medium font-popins border-[2px] border-gray-300 rounded">
              Return To Shop
            </button>

            <button className="px-[40px] py-[16px] bg-transparent  text-text_black000000 text-[18px] font-medium font-popins border-[2px] border-gray-300 rounded">
              Update Cart
            </button>
          </div>
        </div>
        {/* button */}

        {/* subtotal and copun */}
        <div className="mt-[80px] flex items-start justify-between">
          <div className="flex items-center gap-x-3">
            <input
              type="text"
              className="py-3 px-10  border  border-gray-300"
              placeholder="Coupon Code"
            />

            <button className="px-[48px] py-[12px] bg-redDB4444  text-white_FFFFFF text-[18px] font-medium font-popins rounded">
              Apply Coupon
            </button>
          </div>

          <div>
            <div class="w-[470px] px-4 py-6 text-gray-900 bg-white border border-gray-200 rounded-lg">
              <h1 className="pl-3 font-popins font-normal text-text_black000000 text-[20px] mb-3">
                Cart Total
              </h1>

              <div className="justify-between   relative inline-flex items-center w-full px-4 py-2 font-popins font-normal text-text_black000000 text-[16px border-b border-gray-200 rounded-t-lg hover:bg-gray-100">
                <button type="button">Subtotal:</button>
                <span className="inline-block font-popins font-normal text-text_black000000 text-[16px]">
                  {" "}
                  $1750
                </span>
              </div>

              <div className="justify-between   relative inline-flex items-center w-full px-4 py-2 font-popins font-normal text-text_black000000 text-[16px border-b border-gray-200 rounded-t-lg hover:bg-gray-100">
                <button type="button">Shipping:</button>
                <span className="inline-block font-popins font-normal text-text_black000000 text-[16px]">
                  {" "}
                  $1750
                </span>
              </div>

              <div className="justify-between   relative inline-flex items-center w-full px-4 py-2 font-popins font-normal text-text_black000000 text-[16px rounded-t-lg hover:bg-gray-100">
                <button type="button">Total:</button>
                <span className="inline-block font-popins font-normal text-text_black000000 text-[16px]">
                  {" "}
                  $1750
                </span>
              </div>
            </div>
            <div className="w-full  flex justify-center mt-10">
              <button className="px-[48px] py-[12px] bg-redDB4444  text-white_FFFFFF text-[18px] font-medium font-popins rounded">
                Procees to checkout
              </button>
            </div>
          </div>
        </div>
        {/* subtotal and copun */}
      </div>
    </div>
  );
};

export default CartPage;
