import React, { useState } from "react";
import { axiosInstace } from "../../helper/axios";

const MatchOTP = () => {
  const [userOTP, setUserOTP] = useState("");
  const [emailAddress, SetEmailAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // ====handle input changes=====
  const handleChange = (e) => {
    setUserOTP(e.target.value);
    SetEmailAddress(JSON.parse(localStorage.getItem("RegInfo")).emailAddress);
    setErrorMsg("");
  };
  // ====handle submit===
  const handleSubmit = async () => {
    console.log(userOTP);
    
    const response = await axiosInstace.post("/otp", {
      emailAddress: emailAddress,
      otp: userOTP,
    });

    if (userOTP == "") {
      setErrorMsg("Required");
    }
  };

  return (
    <>
      <div className="container py-36">
        <div className="warpper border">
          <h1 className="font-inter text-3xl">Veryfy OTP</h1>
          <p>make scecure as your privecy </p>
          <div>
            <input
              type="text"
              id="otp"
              name="otp"
              maxLength="6"
              onChange={handleChange}
              className="border font-popins text-2xl font-semibold p-2 mb-5 mt-2 w-40"
            />
            {errorMsg && errorMsg}
            <br />
            <button
              onClick={handleSubmit}
              className="px-12 py-2 bg-sky-500 rounded"
            >
              Verify
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MatchOTP;
