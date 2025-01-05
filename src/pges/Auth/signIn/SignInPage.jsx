import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { axiosInstace } from "../../../helper/axios";
import { ErrorToast, SuessToast } from "../../../utils/toast";
import { useNavigate } from "react-router";
import BradeCrumb from "../../../component/commonComponent/BradeCrumb";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaGoogle, FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import signinImg from "./signin.jpg";
import signIn1 from "./signIn1.png";
import blockGIF from "./blockGIF.gif";
import { Link } from "react-router-dom";

const SignInPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axiosInstace.post("/login", {
        emailAddress: values.email,
        password: values.password,
      });
      console.log(response.data);
      if (response.data) {
        SuessToast("wellcome");
        setTimeout(() => {
          setSubmitting(false);
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      if (error.response.data) {
        ErrorToast(error.response.data.message);
      }
    }
  };

  return (
    <div id="LoginPage" className="py-8">
      <div className="container xl:py-36">
        <BradeCrumb />
        <div className="LoginPage_warpper  flex items-center gap-3">
          {/* =======form warpper==== */}
          <div className="w-full md:w-1/2 p-5 rounded flex justify-center md:justify-end">
            {/* ====formBox=== */}
            <div className=" w-full max-w-96 bg-[#89b1df50] px-5 py-12 rounded border-2 border-sky-500  shadow-inner">
              <h1 className="text-3xl font-inter mb-6">Sign In here</h1>

              {/* ====Formik form container====== */}
              <div className=" bg-transparent">
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={onSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form className="flex flex-col gap-4">
                      <div className="w-full border border-sky-500 shadow-inner rounded relative bg-Sada ">
                        <label
                          htmlFor="email"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-sky-500 text-[10px] px-1 rounded"
                        >
                          Email
                        </label>
                        <Field
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 rounded"
                        />
                      </div>
                      {/* ====errorMessage=== */}
                      <span className="text-red-500">
                        <ErrorMessage
                          name="email"
                          component="div"
                          className="error"
                        />
                      </span>
                      {/* =====password=== */}
                      <div className="w-full border border-sky-500 shadow-inner rounded relative bg-Sada">
                        <label
                          htmlFor="password"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-sky-500 text-[10px] px-1 rounded"
                        >
                          Password
                        </label>
                        <Field
                          type="password"
                          id="password"
                          name="password"
                          className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 rounded"
                        />
                      </div>
                      {/* ====errorMessage==== */}
                      <span className="text-red-500">
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="error"
                        />
                      </span>
                      {/* ======remmber or forgot====== */}
                      <div className="flex justify-between">
                        <div>
                          <input type="checkbox" id="ckeck" />
                          <label htmlFor="ckeck">Remember Me</label>
                        </div>
                        
                        <span><Link to={"/forgotPassword"}>forgot password?</Link></span>
                      </div>
                      {/* =====submit button===== */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-sky-400 py-2 px-12 rounded"
                      >
                        {isSubmitting ? "Signing in..." : "Sign In"}
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>

              <div className="mt-5 flex flex-col items-center gap-4 justify-center">
                <h3>Sign with</h3>
                {/* ===icon rwarpper=== */}
                <div>
                  <ul className="flex gap-4 text-3xl"> 
                    <li className="cursor-pointer hover:text-5xl transition-all bg-transprent w-12 h-12 center  ">
                      <RiFacebookCircleLine />
                    </li>
                    <li className="cursor-pointer hover:text-5xl transition-all bg-transprent w-12 h-12 center ">
                      <FaGoogle />
                    </li>
                    <li className="cursor-pointer hover:text-5xl transition-all bg-transprent w-12 h-12 center ">
                      <CiTwitter />
                    </li>
                    <li className="cursor-pointer hover:text-5xl transition-all bg-transprent w-12 h-12 center ">
                      <FaInstagram />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* ======imageContainer======= */}
          <div className="hidden  md:block w-1/2">
            {/* <img src={signinImg} alt="imag" /> */}
            {/* <img src={blockGIF} alt="imag" /> */}
            <img src={signIn1} alt="imag" className="h-[500px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
