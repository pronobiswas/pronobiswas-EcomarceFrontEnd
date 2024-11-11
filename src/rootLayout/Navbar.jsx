import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { LuShoppingBag } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";



const Navbar = () => {
  const [showMenu , setShowMenu] = useState(false);
  const hangleUserIcon =()=>{
    setShowMenu(!showMenu)
  }
  const navItem = [
    {
      id: 1,
      item: "Home",
    },
    {
      id: 2,
      item: "Contact",
    },
    {
      id: 3,
      item: "About",
    },
    {
      id: 4,
      item: "Sign Up",
    },
  ];
  return (
    <div>
      <nav className="pt-12 pb-6 border ">
        <div className="container flex items-center justify-between">
          {/* =======logo======= */}
          <div>
            <span className="text-2xl font-extrabold font-inter tracking-[0.72px] cursor-pointer hover:tracking-[0.95px]">
              Exlusive
            </span>
          </div>
          {/* =====nav item nemu====== */}
          <div className="nevigationMenu hidden">
            <ul className="flex gap-x-12">
              {navItem?.map((nav) => (
                <li key={nav.id} className="menu_link font-popins text-[16px]">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* ======shop==== */}
          <div className=" flex items-center gap-x-6 relative">
            <div className="searchBox flex items-center gap-2">
              <input
                id="search"
                type="text"
                placeholder="What are you looking for?"
                className="border-transparent outline-transparent focus:border-b-2 focus:border-black w-[193px]"
              ></input>
              <span className="py-1 px-1 outline outline-1 outline-gray-400 rounded">
                <CiSearch />
              </span>
            </div>
            <div className="iconBox flex text-[24px] gap-5">
              <span className="px-1 py-1 bg-slate-300 rounded hover:rounded-full hover:text-Sada hover:bg-Secondary2 cursor-pointer">
                <CiHeart />
              </span>

              <span className="amount px-1 py-1 bg-slate-300 rounded hover:rounded-full hover:text-Sada hover:bg-Secondary2 cursor-pointer">
                <BsCart3 />
              </span>
              <span className="User_icon  px-1 py-1 bg-slate-300 rounded hover:rounded-full hover:text-Sada hover:bg-Secondary2 cursor-pointer" onClick={hangleUserIcon}>
                <FiUser />
              </span>
              {/* ======user menu===== */}
              {showMenu ? 
              <div className="userPanel absolute right-0 top-8  rounded px-4 py-5">
                <div className="account flex gap-4 items-center text-Sada py-1">
                  <span>
                    <FiUser />
                  </span>
                  <h4 className="font-popins text-sm ">Manage My Account</h4>
                </div>
                <div className="Order flex gap-4 items-center text-Sada py-1">
                  <span>
                    <LuShoppingBag />
                  </span>
                  <h4 className="font-popins text-sm ">My Order</h4>
                </div>
                <div className="cancle flex gap-4 items-center text-Sada py-1">
                  <span>
                  <MdOutlineCancel />
                  </span>
                  <h4 className="font-popins text-sm ">My Cancellations</h4>
                </div>
                <div className="review flex gap-4 items-center text-Sada py-1">
                  <span><FaRegStar />
                  </span>
                  <h4 className="font-popins text-sm ">My Reviews</h4>
                </div>
                <div className="logout flex gap-4 items-center text-Sada py-1">
                  <span><TbLogout2 /></span>
                  <h4 className="font-popins text-sm ">Logout</h4>
                </div>
              </div>
              :null}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
