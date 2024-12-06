import React from "react";
import qrcode from "../../public/qrcode.png";
import playStore from "../../public/playStore.png";
import appstore from "../../public/appstore.png";
import { AiOutlineSend } from "react-icons/ai";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { LuTwitter } from "react-icons/lu";
import { PiInstagramLogo } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="w-full py-20 bg-black *:text-Sada">
      {/* =======warpper===== */}
      <div className="container flex flex-wrap justify-evenly">
        {/* ==========exclusive========= */}
        <div>
          <h3 className="text-2xl font-inter font-bold mb-4">Exclucive</h3>
          <h4 className="footerMenuHeading">Subscribe</h4>
          <p className="text-sm text-DhusorLekhoni mb-3">Get 10% off your first order</p>
          {/* ----inputbox--- */}
          <div className="flex items-center gap-2">
            <input type="text " placeholder="Entter your Email" />
            <span className="text-2xl"><AiOutlineSend /></span>
          </div>
        </div>
        {/* ==========support======= */}
        <div>
          <h4 className="footerMenuHeading ">Support</h4>
          <p className="text-sm mt-12">
            <a href="mailto:biswaspronob@outlook.com">
              biswaspronob@outlool.com
            </a>
          </p>
          <span>+8801531881596</span>
        </div>
        {/* ========Account===== */}
        <div>
          <h4 className="footerMenuHeading ">Account</h4>
          <ul className="footerUl">
            <li>Myaccount</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>
        {/* =======Quick Links======= */}
        <div>
          <h4 className="footerMenuHeading ">Quick Link</h4>
          <ul className="footerUl">
            <li>Privecy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>
        {/* ========download App====== */}
        <div>
          <h4 className="footerMenuHeading ">Download App</h4>
          <p>Save $3 with App New User Only</p>
          {/* ------qr code section------*/}
          <div className="flex items-center gap-x-3 mt-2 [&_img]:cursor-pointer">
            {/* ----qr--- */}
            <div>
              <img src={qrcode} alt="QR" />
            </div>
            {/* ---store icon--- */}
            <div className="flex flex-col gap-2">
              <img src={playStore} alt="playstore" />
              <img src={appstore} alt="playstore" />
            </div>
          </div>
          {/* ------social icons----- */}
          <div className="flex items-center gap-4 text-2xl  mt-6 [&>span:hover]:cursor-pointer">
            {/* __facebbok___ */}
            <span><SlSocialFacebook/></span>
            {/* ___twitter___ */}
            <span><LuTwitter /></span>
            {/* ___instaGram___ */}
            <span><PiInstagramLogo /></span>
            {/* ___linkedin___ */}
            <span><SlSocialLinkedin /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
