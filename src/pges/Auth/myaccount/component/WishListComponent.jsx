import React, { useEffect, useRef } from "react";
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishList } from "../../../../helper/reduxToolkit/slice/wishListSlice";
import { useNavigate } from "react-router-dom";

const WishListComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wishList.value);
  const handleCancel = (item) => {
    console.log(item);
    dispatch(removeFromWishList(item));
  };
  const handleItem = (item) => navigate(`/product/${item._id}`);
  return (
    <div>
      <h1>This is my wish list</h1>
      <div className="warpper w-full flex flex-col gap-5 ">
        {wishList.map((item) => (
          <div
            className="w-full py-2 border border-gray-300 border-x-0 relative cursor-alias"
            key={item._id}
          >
            <span
              onClick={() => handleCancel(item)}
              className="absolute top-1 left-1 bg-red-600 rounded-xl text-Sada hover:cursor-pointer"
            >
              <GiCancel />
            </span>
            <div
              onClick={() => handleItem(item)}
              className="w-full flex justify-between items-center"
            >
              <div className="w-14 h-14 ">
                <img
                  src={item.image}
                  alt="png"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* ===name==== */}
              <div className="name">
                <h3>{item.title}</h3>
              </div>
              {/* ===price=== */}
              <div className="price">
                <p>Actual price</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishListComponent;
