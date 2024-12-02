import React from "react";
import { FaRegStar } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import { IoStarHalfOutline } from "react-icons/io5";
const StarComponent = ({ reting = 3.5 }) => {
  const star = Array.from({ length: 5 }, (_, index) => {
    if (reting >= index + 1) {
      return <IoIosStar key={index} className="text-yellow-500 text-xl" />;
    } else if (reting >= index + 0.5) {
      return (
        <IoStarHalfOutline key={index} className="text-yellow-500 text-xl" />
      );
    } else {
      return <FaRegStar key={index} className="text-gray-300 text-xl" />;
    }
  });

  return <div className="flex items-center gap-x-1">{star}</div>;
};

export default StarComponent;
