import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import BradeCrumb from "../../component/commonComponent/BradeCrumb";

const ResetPassword = () => {
  const params = useParams();
  const [passError, setPassError] = useState("");

  const navigate = useNavigate();
  // useEffect(()=>{
  //   SetEmail(JSON.parse(localStorage?.getItem("RegInfo"))?.emailAddress);
  // },[])
  // ====initilize value=====
  const initialValues = {
    password: "",
    confirmPassword: "",
  };
  //   ====validation schema====
  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),

    confirmPassword: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  // ========onsubmit=======
  const onSubmit = async (values, { setSubmitting }) => {
    try {

      if (values.password !== values.confirmPassword) {
        setPassError("Password does not match");
      }else{
        setPassError("");
      }

        const response = await axiosInstace.post("/login", {
          emailAddress: params.emailAddress,
          password: values.password,
        });
        console.log(response.data);
        if (response?.data) {
          SuessToast("Password reset successfully");
        }
    } catch (error) {
      if (error.response.data) {
        ErrorToast(error.response.data.message);
      }
    }finally{
      setTimeout(() => {
        setSubmitting(false);
        navigate("/signin");
      }, 1000);
    }
  };

  return (
    <div className="py-12">
      <div className="container">
        <BradeCrumb />
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

                      {/* =====confirm password=== */}
                      <div className="w-full border border-sky-500 shadow-inner rounded relative bg-Sada">
                        <label
                          htmlFor="confirmPassword"
                          className="absolute bg-Sada -top-2 left-3 border-[1px] border-sky-500 text-[10px] px-1 rounded"
                        >
                          Confirm Password
                        </label>
                        <Field
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 rounded"
                        />
                      </div>
                      {/* ====errorMessage==== */}
                      <span className="text-red-500">
                        {passError && passError}
                      </span>

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
