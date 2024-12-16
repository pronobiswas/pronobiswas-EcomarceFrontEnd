import React from "react";
import StarComponent from "../component/StarComponent";
import { FaRegHeart } from "react-icons/fa";

const SingleProductPage = () => {
  return (
    <div>
      {/* =========pdoduct details===== */}
      <div className="container">
        <div className="warpper w-full gap-3 flex  h-[600px]">
          {/* =====product Image===*/}
          <div className="w-4/6 flex gap-3 h-full max-h-[600px]">
            {/* ------product images---- */}
            <div className="w-2/6  h-full max-h-[600px]">
              <ul className=" flex flex-col gap-3 p-2">
                {[...new Array(4)].map((_, index) => (
                  <li>
                    <div className="w-full h-[137px] bg-slate-200"></div>
                  </li>
                ))}
              </ul>
            </div>
            {/* ------product phot---- */}
            <div className="w-4/6 h-full max-h-[600px] p-2">
              <div className="w-full h-full bg-slate-200"></div>
            </div>
          </div>
          {/* =====product details===== */}
          <div className="w-2/6 h-full max-h-[600px]">
            <div className="detailsWarpper">
              <h2>Havic HV G-92 Gamepad</h2>
              {/* ---star--- */}
              <div className="flex gap-3">
                <StarComponent />
                <span>(105 Reviews)</span>
                <span>|</span>
                <span>In Stock</span>
              </div>
              <h4>$192</h4>
              <p>
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
              <hr />
              {/* ----colors--- */}
              <div className="flex items-center gap-3">
                <span>Colors :</span>
                <div className="flex gap-4 items-center">
                  <div className="w-4 h-4 rounded-full bg-slate-300  outline outline-2 outline-offset-2 outline-slate-300"></div>
                  <div className="w-4 h-4 rounded-full bg-red-300  outline outline-2 outline-offset-2 outline-red-300"></div>
                </div>
              </div>
              {/* ----size--- */}
              <div className="flex items-center gap-3">
                <span>Size :</span>
                <div className="flex gap-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-md border-2">
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
                  </div>
                </div>
              </div>

              {/* =====orders section==== */}
              <div className="flex gap-3">
                {/* ---quantity--- */}
                <div className=" w-full max-w-40 border-2 rounded-md flex">
                  <div className="w-11 h-11 flex items-center justify-center text-xl">
                    -
                  </div>
                  <div className="w-20 h-11 flex items-center justify-center text-xl border border-y-0">
                    2
                  </div>
                  <div className="w-11 h-11 flex items-center justify-center text-xl">
                    +
                  </div>
                </div>
                {/* ---order Button---- */}
                <div className="w-32 flex items-center justify-center bg-Secondary2 text-Sada rounded-md"> Order Now</div>
                {/* ----wish list Icon---- */}
                <div className="flex items-center justify-center text-3xl bg-slate-300 px-2 rounded-md">
                <FaRegHeart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
