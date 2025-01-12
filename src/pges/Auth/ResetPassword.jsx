import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BradeCrumb from "../../component/commonComponent/BradeCrumb";
import resetpasswordImage from "./resetpasswordImage.gif";

const ResetPassword = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [passError, setPassError] = useState("");
  // ====initilize value=====
  const [initialValue, setInitialValue] = useState({
    password: "",
    confirmPassword: "",
  });
  const { emailAddress } = params;

  // ====handle input ===
  const handleInput = (e) => {
    setInitialValue((prevValues) => ({
      ...prevValues,
      [e.target.id]: e.target.value,
    }));
  };
  // ====handleSubmit======
  const handleSubmit = () => {
    console.log("handle submit");
    console.log(initialValue);
    console.log(initialValue.password);
    console.log(initialValue.password);
  };

  return (
    <div id="resetpasswordpage" className="p-5">
      <div className="container flex items-center justify-center">
        {/* =======form warpper==== */}
        <div className="w-full max-w-[650px] bg-[#181539a9] center p-5 rounded shadow-lg shadow-[#181539a9]">
          {/* ==== form container====== */}
          <div className="w-full bg-[#43235f4f] p-5 rounded border-2 border-Secondary2   shadow-lg shadow-[#000]">
            <form className="w-full md:max-w-[650px] py-8 flex flex-col gap-8">
              {/* =====password=== */}
              <div className="w-full border border-Secondary2 shadow-inner rounded relative ">
                <label
                  htmlFor="password"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleInput}
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 rounded"
                />
              </div>
              {/* ====errorMessage==== */}
              {/* <span className="text-red-500">
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error"
                        />
                      </span> */}
              {/* =====confirm password=== */}
              <div className="w-full border border-Secondary2 shadow-inner rounded relative bg-Sada">
                <label
                  htmlFor="confirmPassword"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleInput}
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 rounded"
                />
              </div>
              {/* ====errorMessage==== */}
              {/* <span className="text-red-500">
                        {passError && passError}
                      </span> */}
              {/* =====submit button===== */}
              <button
                type="button"
                onClick={handleSubmit}
                className="bg-Botam2 py-2 px-12 rounded text-Sada font-popins text-xl font-semibold w-40"
              >
                {/* {true ? "Wait.." : "Submit"} */}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
