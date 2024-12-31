import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./signUpSchema";
import { axiosInstace } from "../../../helper/axios";

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
  }

  return errors;
};

const signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      telePhone: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        alert(JSON.stringify(values, null, 2));
        const {firstName,lastName,emailAddress,telePhone,password}=values;
        console.log(lastName);
        
        const responsee = await axiosInstace.post("/regestetion", {
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress,
          telePhone: telePhone,
          password: password,
        });
        
      } catch (error) {
        console.log("submit error", error);
      }
    },
  });
  return (
    <div className="container">
      <div className="warpper flex justify-center">
        <form onSubmit={formik.handleSubmit} className="w-full max-w-96">
          {/* =====First Name==== */}
          <div className="w-full border border-transparent">
            {/* <label htmlFor="firstName">First Name</label> */}
            <input
              id="firstName"
              name="firstName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              placeholder="first name"
              className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300"
            />
            {formik.errors.firstName ? (
              <span className="text-red-400">{formik.errors.firstName}</span>
            ) : null}
          </div>
          {/* =======last Name==== */}
          <div>
            {/* <label htmlFor="lastName">Last Name</label> */}
            <input
              id="lastName"
              name="lastName"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              placeholder="last Name"
              className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300"
            />
            {formik.errors.lastName ? (
              <span className="text-red-500">{formik.errors.lastName}</span>
            ) : null}
          </div>
          {/* ====emailAddress===== */}
          <div>
            {/* <label htmlFor="emailAddress">Email Address</label> */}
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.emailAddress}
              placeholder="Email address"
              className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300"
            />
            {formik.errors.emailAddress ? (
              <span className="text-red-500">{formik.errors.emailAddress}</span>
            ) : null}
          </div>
          {/* =====telephone==== */}
          <div>
            {/* <label htmlFor="telePhone">Telephone</label> */}
            <input
              id="telePhone"
              name="telePhone"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.telePhone}
              placeholder="enter your Phone number"
              className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300"
            />
            {formik.errors.telePhone ? (
              <div className="text-red-500">{formik.errors.telePhone}</div>
            ) : null}
          </div>
          {/* ====password====== */}
          <div>
            {/* <label htmlFor="password">password</label> */}
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="enter your Password"
              className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300"
            />
            {formik.errors.password ? (
              <span className="text-red-500">{formik.errors.password}</span>
            ) : null}
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default signup;
