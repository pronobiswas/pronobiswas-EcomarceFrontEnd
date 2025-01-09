import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BradeCrumb from "../../component/commonComponent/BradeCrumb";

const ResetPassword = () => {
  const navigate = useNavigate();
  // ====initilize value=====
  const initialValues = {
    email: "",
    password: "",
  };
  //   ====validation schema====
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  // ========onsubmit=======
  const onSubmit = async (values, { setSubmitting }) => {
    try {
        console.log("hi");
        
    //   const response = await axiosInstace.post("/login", {
    //     emailAddress: values.email,
    //     password: values.password,
    //   });
    //   console.log(response.data);
    //   if (response.data) {
    //     SuessToast("wellcome");
    //     setTimeout(() => {
    //       setSubmitting(false);
    //       localStorage.setItem(
    //         "SubscribeUser",
    //         JSON.stringify(response.data.data)
    //       );
    //       navigate("/Myaccount");
    //     }, 1000);
    //   }
    } catch (error) {
      if (error.response.data) {
        ErrorToast(error.response.data.message);
      }
    }
  };

  return (
    <div className="py-12">
      <div className="container">
        <BradeCrumb/>
        <div className="LoginPage_warpper  flex items-center gap-3">
          {/* =======form warpper==== */}
          <div className="w-full md:w-1/2 p-5 rounded flex justify-center md:justify-end">
            {/* ====formBox=== */}
            <div className=" w-full max-w-96 bg-[#89b1df50] px-5 py-12 rounded border-2 border-sky-500  shadow-inner">
              

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

                        <span>
                          <Link to={"/forgotPassword"}>forgot password?</Link>
                        </span>
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

             
            </div>
          </div>

          {/* ======imageContainer======= */}
          <div className="hidden  md:block w-1/2">
            {/* <img src={signIn1} alt="imag" className="h-[500px]" /> */}
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
