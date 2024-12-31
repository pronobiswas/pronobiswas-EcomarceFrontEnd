import * as Yup from "yup";

const emailRegx =
  "^[A-Za-z0-9](([a-zA-Z0-9,=.!-#|$%^&*+/?_`{}~]+)*)@(?:[0-9a-zA-Z-]+.)+[a-zA-Z]{2,9}$";

export const signUpSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "Minimum two charecter")
    .max(8, "maximum Eight charecter")
    .required("Required"),

  lastName: Yup.string()
    .min(2, "Minimum two charecter")
    .max(8, "maximum Eight charecter")
    .required("Required"),

  emailAddress: Yup.string()
    .email("Invalid email address")
    .matches(emailRegx, "Enter Your Full mail")
    .required("Required"),

  telePhone: Yup.string()
    .min(10, "Minimum two charecter")
    .max(13, "maximum Thirten charecter")
    .required("Required"),

  password: Yup.string()
    .max(15, "Must be 15 characters or less")
    .min(5, "minum 5 charecter")
    .required("Required"),
});
