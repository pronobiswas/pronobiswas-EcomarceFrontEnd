import React, { useState } from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./signUpSchema";
import { axiosInstace } from "../../../helper/axios";
import signupImage from "./signupImage.jpg";
import signupBGremove from "./signupBGremove.png";
import { ErrorToast, SuessToast } from "../../../utils/toast";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import signUpAnim from "./signUpAnim.gif";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.emailAddress) {
    errors.emailAddress = "Required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.emailAddress)
  ) {
    errors.emailAddress = "Invalid email address";
  }

  if (!values.telePhone) {
    errors.telePhone = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/i.test(
      values.password
    )
  ) {
    errors.password =
      "Password must be at least 8 characters long and include an uppercase letter, a lowercase letter, a number, and a special character";
  }

  if (!values.agree) {
    errors.agree = "Required";
  } else if (values.agree.length > 20) {
    errors.agree = "Must be 20 characters or less";
  }

  return errors;
};

const signup = () => {
  const navigate = useNavigate();
  const [signUpAnimation, setSignUpAnimation] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      telePhone: "",
      password: "",
      agree: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        alert(JSON.stringify(values, null, 2));
        setSignUpAnimation(true);
        const { firstName, lastName, emailAddress, telePhone, password } =
          values;

        const response = await axiosInstace.post("/regestetion", {
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress,
          telePhone: telePhone,
          password: password,
        });

        if (response) {
          // =====set email address into localStorage=====
          localStorage.setItem("RegInfo", JSON.stringify(values));
          SuessToast("Check your Inbox please");
          setTimeout(() => {
            navigate(`/otp/${emailAddress}`);
            setSignUpAnimation(false);
          }, 2000);
        }
      } catch (error) {
        console.log("submit error", error);
        console.log("submit error", error.response.data.message);
        setTimeout(() => {
          ErrorToast(error?.response?.data?.message);
          setSignUpAnimation(false);
        }, 2000);
      }
    },
  });
  return (
    <div className="signUpPage  py-20 px-4">
      <div className="container">
        <div className="warpper flex justify-center">
          {/* ====animation==== */}
          {signUpAnimation && (
            <div className="signUpAnim absolute top-0 left-0 w-full h-screen z-40 bg-white flex items-center justify-center ">
              <img src={signUpAnim} alt="" />
            </div>
          )}
          {/* ======image Container===== */}
          <div className="imageContainer hidden md:block">
            <img src={signupBGremove} alt="" />
          </div>
          {/* ======form container==== */}
          <div className="formContainer">
            <form
              onSubmit={formik.handleSubmit}
              className="w-full max-w-96 flex flex-col gap-y-6"
            >
              <div className="flex gap-2">
                {/* =====First Name==== */}
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
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    placeholder="first name"
                    className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 pt-2 rounded"
                  />
                  {formik.errors.firstName ? (
                    <span className="text-red-400">
                      {formik.errors.firstName}
                    </span>
                  ) : null}
                </div>
                {/* =======last Name==== */}
                <div className="w-full border border-red-500 shadow-inner rounded relative bg-Sada">
                  <label
                    htmlFor="lastName "
                    className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                    placeholder="last Name"
                    className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 rounded"
                  />
                  {formik.errors.lastName ? (
                    <span className="text-red-500">
                      {formik.errors.lastName}
                    </span>
                  ) : null}
                </div>
              </div>
              {/* ====emailAddress===== */}
              <div className="w-full border border-red-500 shadow-inner rounded relative bg-Sada">
                <label
                  htmlFor="emailAddress"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Email Address
                </label>
                <input
                  id="emailAddress"
                  name="emailAddress"
                  type="email"
                  onChange={formik.handleChange}
                  value={formik.values.emailAddress}
                  placeholder="Email address"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 rounded"
                />
                {formik.errors.emailAddress ? (
                  <span className="text-red-500">
                    {formik.errors.emailAddress}
                  </span>
                ) : null}
              </div>
              {/* =====telephone==== */}
              <div className="w-full border border-red-500 shadow-inner rounded relative bg-Sada">
                <label
                  htmlFor="telePhone"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  Telephone
                </label>
                <input
                  id="telePhone"
                  name="telePhone"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.telePhone}
                  placeholder="enter your Phone number"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 rounded"
                />
                {formik.errors.telePhone ? (
                  <div className="text-red-500">{formik.errors.telePhone}</div>
                ) : null}
              </div>
              {/* ====password====== */}
              <div className="w-full border border-red-500 shadow-inner rounded relative bg-Sada">
                <label
                  htmlFor="password"
                  className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
                >
                  password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  placeholder="enter your Password"
                  className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 rounded"
                />
                {formik.errors.password ? (
                  <span className="text-red-500">{formik.errors.password}</span>
                ) : null}
              </div>
              <div>
                <input
                  type="checkbox"
                  id="agree"
                  name="agree"
                  onChange={formik.handleChange}
                  value={formik.values.agree}
                />
                <label htmlFor="agree">
                  I have read to the privecy and policy and agree to this terms
                  and conditions
                </label>
              </div>

              <button
                type="submit"
                className="bg-red-500 px-14 py-2 mt-5 rounded text-Sada"
              >
                Submit
              </button>
              <div className="flex justify-between flex-wrap px-5">
                <span>Allredy Have an account?</span>
                <Link to={"/signin"}>
                  <span className="text-blue-600 font-popins">Sign In</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
