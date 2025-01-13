import React, { useState } from "react";
import BradeCrumb from "../../../component/commonComponent/BradeCrumb";
import { FaBars } from "react-icons/fa";
import AddressBook from "./component/AddressBook";
import MyPaymentOption from "./component/MyPaymentOption";
import MyReturn from "./component/MyReturn";
import MyCanceletionOption from "./component/MyCanceletionOption";
import WishListComponent from "./component/WishListComponent";

const MyAccount = () => {
  const loggedInuser = JSON.parse(localStorage.getItem("SubscribeUser"));
  const [asideMenu, setAsideMenu] = useState("false");
  const handleSidemenu = () => {
    setAsideMenu(!asideMenu);
  };
  const [myProfile, setMyProfile] = useState(true);
  const [address, setAddress] = useState(false);
  const [mypement, setMypement] = useState(false);
  const [myreturn, setMyreturn] = useState(false);
  const [myCanceletion, setMyCanceletion] = useState(false);
  const [myWishList, setMyWishList] = useState(false);
  // ===handle click===
  const handleMyProfile = () => {
    setMyProfile(true)
    setAddress(false);
    setMypement(false);
    setMyreturn(false);
    setMyCanceletion(false);
    setMyWishList(false);
  };
  const handleaddress = () => {
    setMyProfile(false)
    setAddress(true);
    setMypement(false);
    setMyreturn(false);
    setMyCanceletion(false);
    setMyWishList(false);
  };
  const handlemypement = () => {
    setMyProfile(false)
    setAddress(false);
    setMypement(true);
    setMyreturn(false);
    setMyCanceletion(false);
    setMyWishList(false);
  };
  const handlemyreturn = () => {
    setMyProfile(false)
    setAddress(false);
    setMypement(false);
    setMyreturn(true);
    setMyCanceletion(false);
    setMyWishList(false);
  };
  const handlemyWishList = () => {
    setMyProfile(false)
    setAddress(false);
    setMypement(false);
    setMyreturn(false);
    setMyCanceletion(false);
    setMyWishList(true);
  };
  const handleMyCanceletion = ()=>{
    setMyProfile(false)
    setAddress(false);
    setMypement(false);
    setMyreturn(false);
    setMyCanceletion(true);
    setMyWishList(false);
  }
  const handleMyWishlist = ()=>{
    setMyProfile(false)
    setAddress(false);
    setMypement(false);
    setMyreturn(false);
    setMyCanceletion(false);
    setMyWishList(true);
  }
  return (
    <div>
      <div className="pb-[120px]">
        <div className="container p-5">
          {/* ====breadcrumb row==== */}
          <div className="flex items-center justify-between">
            <BradeCrumb />
            <h2 className="acountStyle">
              Welcome!{" "}
              <span className="text-redDB4444">{loggedInuser?.firstName}</span>{" "}
            </h2>
          </div>
          {/* =====content row====== */}
          <p
            className="cursor-pointer mb-5 flex justify-between max-w-60 "
            onClick={handleSidemenu}
          >
            <FaBars />
          </p>
          {/* =======content-warpper===== */}
          <div className="flex">
            {/* =====aside navigetion menu====== */}
            <div className={!asideMenu ? " w-72 hidden" : "w-72 block"}>
              <div>
                <h1 className="accountStyle text-[16px] font-medium">
                  Manage My Account
                </h1>
                {/* ===nevigation list=== */}
                <ul className="accountStyle text-[16px] opacity-50 flex flex-col items-start gap-y-2 mt-4 ml-6">

                  <li onClick={handleMyProfile} className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                    My Profile
                  </li>

                  <li onClick={handleaddress} className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                    Address Book
                  </li>
                  <li onClick={handlemypement}  className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                    My Payment Options
                  </li>
                </ul>
              </div>
              {/* ====order=== */}
              <div className="mt-6">
                <h1 className="accountStyle text-[16px] font-medium">
                  My Orders
                </h1>
                <ul className="accountStyle text-[16px] opacity-50 flex flex-col items-start gap-y-2 mt-4 ml-6">
                  <li onClick={handlemyreturn} className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                    My Returns
                  </li>
                  <li onClick={handleMyCanceletion} className="hover:text-redDB4444 cursor-pointer hover:opacity-100">
                    My Cancellations
                  </li>
                </ul>
              </div>
              {/* ==wishlist== */}
              <div className="mt-6">
                <h1 onClick={handleMyWishlist} className="accountStyle text-[16px] font-medium cursor-pointer">
                  My WishList
                </h1>
              </div>
            </div>

            {/* ====update filds======= */}
            <div className="w-full max-w-[700px] pb-10 md:p-8 shadow-lg">
              
              {myProfile && (
                <div>
                  <h1 className="accountStyle text-redDB4444 text-[20px] font-medium mb-10">
                    Edit Your Profile
                  </h1>
                  {/* ======user details===== */}
                  <div className="flex flex-col gap-8">
                    <div className="flex  gap-x-5">
                      {/* ===username=== */}
                      <div className="w-1/2 border border-DhusorLekhoni shadow-inner rounded relative bg-Sada">
                        <label
                          htmlFor="firstName"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-DhusorLekhoni text-[10px] px-1 rounded"
                        >
                          First Name
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
                        />
                      </div>
                      <div className="w-1/2 border border-DhusorLekhoni shadow-inner rounded relative bg-Sada">
                        <label
                          htmlFor="password"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-DhusorLekhoni text-[10px] px-1 rounded"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
                        />
                      </div>
                    </div>

                    <div className="flex  gap-x-5">
                      {/* =====email address===== */}
                      <div className="w-1/2 border border-lastName shadow-inner rounded relative bg-Sada">
                        <label
                          htmlFor="emailAddress"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-DhusorLekhoni text-[10px] px-1 rounded"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="emailAddress"
                          name="emailAddress"
                          className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
                        />
                      </div>
                      <div className="w-1/2 border border-Dhusor-Lekhoni shadow-inner rounded relative bg-Sada">
                        <label
                          htmlFor="telephone"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-Dhusor-Lekhoni text-[10px] px-1 rounded"
                        >
                          Phone number
                        </label>
                        <input
                          type="text"
                          id="telephone"
                          name="telephone"
                          className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
                        />
                      </div>
                    </div>
                  </div>

                  {/* ======password====== */}
                  <div>
                    <h2 className="text-xl font-popins pt-12 pb-5">
                      Password Changes
                    </h2>

                    <div className="w-full flex flex-col gap-y-12">
                      {/* ====current Password==== */}
                      <div className="w-full border border-DhusorLekhoni shadow-inner rounded relative bg-Sada">
                        <label
                          htmlFor="currentPassword"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-DhusorLekhoni text-[10px] px-1 rounded"
                        >
                          Current Password
                        </label>
                        <input
                          type="password"
                          id="currentPassword"
                          name="currentPassword"
                          placeholder="Current Password"
                          className="w-full bg-slate-100 px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
                        />
                      </div>
                      {/* ====New password===== */}
                      <div className="w-full border border-DhusorLekhoni shadow-inner rounded relative bg-Sada">
                        <label
                          htmlFor="newPassword"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-DhusorLekhoni text-[10px] px-1 rounded"
                        >
                          New Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          placeholder="New Password"
                          className="w-full bg-slate-100 px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
                        />
                      </div>

                      {/* ====confirm password===== */}
                      <div className="w-full border border-DhusorLekhoni shadow-inner rounded relative bg-Sada">
                        <label
                          htmlFor="newPassword"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-DhusorLekhoni text-[10px] px-1 rounded"
                        >
                          Confirm Password
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          placeholder="Confirm Password"
                          className="w-full bg-slate-100 px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-DhusorLekhoni transition duration-300 rounded"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end mt-6 max-w-[905px]">
                      <div className="flex items-center gap-x-6">
                        <h2 className="accountStyle">Cancel</h2>
                        <button className="px-[48px] py-[12px] bg-redDB4444  text-white_FFFFFF text-[18px] font-medium font-popins rounded">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {
                address && <AddressBook/>
              }
              {mypement && <MyPaymentOption/>}
              {myreturn && <MyReturn/>}
              {myCanceletion && <MyCanceletionOption/>}
              {myWishList && <WishListComponent/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
