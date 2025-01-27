import React from "react";
import BradeCrumb from "../component/commonComponent/BradeCrumb";
import { useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../helper/reduxToolkit/apis/Exclusive.Api";
const CheckoutPage = () => {
  const params = useParams();
  const { data, isLoading, error } = useGetSingleProductQuery(
    params?.id || "672fe145c8206af6132fd6ce"
  );
  const productDetails = data?.data;
  console.log(productDetails);

  return (
    <div>
      <div className="container p-5 pb-12 xl:px-0 ">
        {/* ====bradeCrumb===== */}
        <div className="py-10">
          <BradeCrumb />
        </div>
        {/* =======billing Details===== */}
        <div className="warpper flex flex-col md:flex-row gap-10">
          {/* =====userInfo====1/2== */}
          <div className="w-full md:w-1/2">
            <h2 className="font-inter text-4xl mb-5">Billing Details</h2>
            <div
              id="DetailForm"
              className="w-full max-w-[470px] flex flex-col gap-6"
            >
              {/* ----user name---- */}
              <div className="w-full border border-red-500 shadow-inner rounded -2 relative bg-Sada">
                <label
                  htmlFor="firstName"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="first name"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 pt-2 rounded"
                />
              </div>
              {/* ---comapny name---- */}
              <div className="w-full border border-red-500 shadow-inner rounded -2 relative bg-Sada">
                <label
                  htmlFor="firstName"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  placeholder="Company name"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 pt-2 rounded"
                />
              </div>

              {/* ---Street address---- */}
              <div className="w-full border border-red-500 shadow-inner rounded -2 relative bg-Sada">
                <label
                  htmlFor="StreetAddress"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  id="StreetAddress"
                  name="StreetAddress"
                  placeholder="Street address"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 pt-2 rounded"
                />
              </div>
              {/* ---Apartment, floor, etc. (optional)---- */}
              <div className="w-full border border-red-500 shadow-inner rounded -2 relative bg-Sada">
                <label
                  htmlFor="Apartment"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Apartment, floor, etc. (optional)
                </label>
                <input
                  type="text"
                  id="Apartment"
                  name="Apartment"
                  placeholder="Apartment, floor, etc. (optional)"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 pt-2 rounded"
                />
              </div>
              {/* ----town/City--- */}
              <div className="w-full border border-red-500 shadow-inner rounded -2 relative bg-Sada">
                <label
                  htmlFor="town"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  id="town"
                  name="town"
                  placeholder="Town/City"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 pt-2 rounded"
                />
              </div>
              {/* ----phone Number----- */}
              <div className="w-full border border-red-500 shadow-inner rounded -2 relative bg-Sada">
                <label
                  htmlFor="telephone"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="telephone"
                  name="telephone"
                  placeholder="Phone number"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 pt-2 rounded"
                />
              </div>
              {/* ----Email address---- */}
              <div className="w-full border border-red-500 shadow-inner rounded -2 relative bg-Sada">
                <label
                  htmlFor="emailAddress"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="emailAddress"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 pt-2 rounded"
                />
              </div>
              {/* --checkbox-- */}
              <div>
                <input
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  className="accent-pink-500 mr-3"
                />
                <label
                  htmlFor="checkbox"
                  className="font-popins text-sm text-DhusorLekhoni"
                >
                  Save this information for faster checkout next time
                </label>
              </div>
            </div>
          </div>
          {/* =====BillingMethod====1/2== */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* ====product list==== */}
            {data?.data ? (
              <>
              <li className="w-full flex items-center justify-between ">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-black rounded">
                    <img
                      src={data.data.image[0]}
                      alt="png"
                      className="w-full h-full object-cover "
                    />
                  </div>
                  <p className="w-[200px] truncate text-black font-semibold">
                    {data.data.title}
                  </p>
                </div>

                <span className="font-popins font-semibold">$160</span>
              </li>
              <div>
                  <div className="flex items-center justify-between border border-transparent pb-2 border-b-gray-600 mb-4">
                    <span>Subtotal :</span>
                    <span>{data?.data?.price}</span>
                  </div>
                  <div className="flex items-center justify-between border border-transparent pb-2 border-b-gray-600 mb-4">
                    <span>Shiping :</span>
                    <span>Free</span>
                  </div>
                  <div className="flex items-center justify-between ">
                    <span>Total :</span>
                    <span>{data?.data?.price}</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <ul className="w-full flex flex-col gap-3 pb-5">
                  {[...new Array(2)].map((index) => (
                    <li
                      className="w-full flex items-center justify-between "
                      key={index}
                    >
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-black rounded"></div>
                        <p>Product name</p>
                      </div>
                      <span className="font-popins font-semibold">$160</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <div className="flex items-center justify-between border border-transparent pb-2 border-b-gray-600 mb-4">
                    <span>Subtotal :</span>
                    <span>$1700</span>
                  </div>
                  <div className="flex items-center justify-between border border-transparent pb-2 border-b-gray-600 mb-4">
                    <span>Shiping :</span>
                    <span>Free</span>
                  </div>
                  <div className="flex items-center justify-between ">
                    <span>Total :</span>
                    <span>$1700</span>
                  </div>
                </div>
              </>
            )}
            {/* ====payment method=== */}
            <div>
              {/* ---bank--- */}
              <div className="bank flex items-center justify-between gap-5 py-4">
                <div className="inputss flex gap-4">
                  <input
                    type="radio"
                    id="bank"
                    name="bank"
                    className=" accent-red-600 "
                  />
                  <label htmlFor="bank">Bank</label>
                </div>
                {/* ----bankIcons--- */}
                <div className="bankIcons">
                  <ul className="flex items-center gap-1">
                    <li className="w-12 ">
                      <img
                        src="/public/bkash.png"
                        alt="png"
                        className="w-full h-full object-cover"
                      />
                    </li>
                    <li className="w-12 ">
                      <img
                        src="/public/Visa.png"
                        alt="png"
                        className="w-full h-full object-cover"
                      />
                    </li>
                    <li className="w-12 ">
                      <img
                        src="/public/mastercard.png"
                        alt="png"
                        className="w-full h-full object-cover"
                      />
                    </li>
                    <li className="w-12 ">
                      <img
                        src="/public/Nagad.png"
                        alt="png"
                        className="w-full h-full object-cover"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              {/* ---cash on delivery---- */}
              <div className="flex gap-4">
                <input
                  type="radio"
                  id="cash"
                  name="bank"
                  className=" accent-red-600 "
                />
                <label htmlFor="cash">Cash on delivery</label>
              </div>
              {/* ----apply Coupon---- */}
              <div className="flex gap-3 py-2 items-center justify-between">
                <input
                  type="text"
                  name="coupon"
                  id="coupon"
                  placeholder="Coupon Code"
                  className="border font-popins text-xl p-2"
                />
                <button className="bg-Secondary2 font-inter text-Sada font-semibold px-12 py-2 rounded">
                  Apply Coupon
                </button>
              </div>
              <button className="py-2 mt-4 px-12 bg-Secondary2 w-56 text-Sada rounded ">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
