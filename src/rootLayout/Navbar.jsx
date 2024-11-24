import React, { useEffect, useRef, useState } from "react";
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
  const [account, setAccount] = useState(false);
  const userAccountRef = useRef(null);

  // ==========where the what ("cleckEvent")========
  useEffect(() => {
    // ====clickEvent on Window =======
    window.addEventListener("click", (event) => {
      console.log(userAccountRef.current.contains(event.target));

      if (userAccountRef.current.contains(event.target)) {
        setAccount(true);
      } else {
        setAccount(false);
      }
    });
  }, [userAccountRef]);

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
          <div className="nevigationMenu hidden lg:block">
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
          {/* ======Others shop==== */}
          <div className=" flex items-center gap-x-6 relative">
            {/* ====searchBox==== */}
            <div className="searchBox searchInput flex items-center gap-2 bg-AbchaSada px-2 py-2 rounded  ">
              <input
                id="search"
                type="text"
                placeholder="What are you looking for?"
                className="w-[193px]  focus:border-transparent focus:outline-transparent "
              ></input>
              <span className="py-1 px-1 outline outline-1 outline-gray-400 rounded ">
                <CiSearch />
              </span>
            </div>
            {/* ======icon box====== */}
            <div className="iconBox flex text-[24px] gap-5">
              <span className="px-1 py-1 bg-slate-300 rounded hover:rounded-full hover:text-Sada hover:bg-Secondary2 cursor-pointer">
                <CiHeart />
              </span>

              <span className="amount px-1 py-1 bg-slate-300 rounded hover:rounded-full hover:text-Sada hover:bg-Secondary2 cursor-pointer">
                <BsCart3 />
              </span>
              <span
                className="User_icon  px-1 py-1 bg-slate-300 rounded hover:rounded-full hover:text-Sada hover:bg-Secondary2 cursor-pointer"
                ref={userAccountRef}
              >
                <FiUser />
              </span>
            </div>
            {/* ======user menu===== */}
            {account && (
              <div className="userPanel absolute right-0 top-14  rounded  py-5 z-40">
                <div className="UrersControl account flex gap-4 items-center text-Sada py-2 px-4">
                  <span className="text-3xl">
                    <FiUser />
                  </span>
                  <h4 className="font-popins  text-xl ">Manage My Account</h4>
                </div>
                <div className="UrersControl Order flex gap-4 items-center text-Sada py-2 px-4">
                  <span className="text-3xl">
                    <LuShoppingBag />
                  </span>
                  <h4 className="font-popins text-xl ">My Order</h4>
                </div>
                <div className="UrersControl cancle flex gap-4 items-center text-Sada py-2 px-4">
                  <span className="text-3xl">
                    <MdOutlineCancel />
                  </span>
                  <h4 className="font-popins text-xl ">My Cancellations</h4>
                </div>
                <div className="UrersControl review flex gap-4 items-center text-Sada py-2 px-4">
                  <span className="text-3xl">
                    <FaRegStar />
                  </span>
                  <h4 className="font-popins text-xl ">My Reviews</h4>
                </div>
                <div className="UrersControl logout flex gap-4 items-center text-Sada py-2 px-4">
                  <span className="text-3xl">
                    <TbLogout2 />
                  </span>
                  <h4 className="font-popins text-xl ">Logout</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
