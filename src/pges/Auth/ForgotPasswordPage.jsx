import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { axiosInstace } from "../../helper/axios";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ErrorToast, SuessToast } from "../../utils/toast";
import BradeCrumb from "../../component/commonComponent/BradeCrumb";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const initialValues = {
    emailAddress: "",
  };
  const validationSchema = Yup.object({
    emailAddress: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const onSubmit = async (values) => {
    try {
      let emailAddress = values.emailAddress;
      const response = await axiosInstace.post("/forgotpassword", {
        emailAddress,
      });
      response?.data && SuessToast(response?.data.message);
      // ==pass the mailaddress as ====
      navigate(`/otp/${emailAddress}`);
    } catch (error) {
      console.log(error);

      error?.response?.data && ErrorToast(error?.response?.data?.message);
    }
  };

  return (
    <div id="forgotPasswordPage" className="container py-12">
      <div className="w-full py-8">
        <BradeCrumb />
      </div>
      <h1 className="font-inter font-semibold text-[4vw]">
        Enter your Email here
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <div className="w-full mt-8 border-2 border-sky-500 shadow-inner rounded relative bg-Sada ">
              <label
                htmlFor="emailAddress"
                className="absolute bg-Sada -top-2 left-3 border-2 border-sky-500 text-[10px] px-1 rounded"
              >
                Email
              </label>
              <Field
                type="email"
                id="emailAddress"
                name="emailAddress"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-sky-500 transition duration-300 rounded"
              />
            </div>
            <ErrorMessage
              name="emailAddress"
              component="div"
              className="error"
            />
            <button
              type="submit"
              className="px-12 py-2 font-popins text-xl bg-sky-500 text-Sada rounded mt-5"
            >
              submit &#8669;
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ForgotPasswordPage;
