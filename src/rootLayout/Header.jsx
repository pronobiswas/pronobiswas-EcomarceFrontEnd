import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <>
      <div className="w-full bg-black py-3">
        <div className="container flex justify-end items-center gap-[12%]">
          <p className="text-AbchaSada font-popins text-[14px] font-light">
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <Link
              to=""
              className="font-bold underline underline-offset-1 ml-2"
            >
              {" "}
              ShopNow
            </Link>
          </p>
          <select name="lang" id="lang">
            <option value="English">English</option>
            <option value="English">Bangla</option>
            <option value="English">Spanish</option>
          </select>
        </div>
      </div>
      {/* ====nav bar=== */}
      <Navbar />
    </>
  );
};

export default Header;
