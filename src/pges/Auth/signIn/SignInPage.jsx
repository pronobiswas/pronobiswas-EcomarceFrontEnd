import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { axiosInstace } from "../../../helper/axios";
import { ErrorToast, SuessToast } from "../../../utils/toast";

const SignInPage = () => {
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
      if(response.data){
        SuessToast("wellcome");
      }
      

      // setTimeout(() => {
      //   setSubmitting(false);
      //   alert(JSON.stringify(values, null, 2));
      // }, 1000);
    } catch (error) {
      if(error.response.data){

        ErrorToast(error.response.data.message)
      }
    }
  };

  return (
    <div className="container py-12">
      <div>
        <h1>Sign In</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="w-full border border-sky-500 shadow-inner rounded relative bg-Sada">
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
                <ErrorMessage name="email" component="div" className="error" />
              </div>
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
                <ErrorMessage
                  name="password"
                  component="div"
                  className="error"
                />
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Signing in..." : "Sign In"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignInPage;
