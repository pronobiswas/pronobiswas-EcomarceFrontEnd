import { useEffect, useState } from "react";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import RootLayout from "./rootLayout/RootLayout";
import HomePge from "./pges/HomePge";
import ProductsPage from "./pges/ProductsPage";
import LogInPage from "./pges/LogInPage";
import SingleProductPage from "./pges/SingleProductPage";
import ImageGlary from "./component/productComponent/singleProductComponent/ImageGlary";
import SpecificProductDetails from "./component/productComponent/singleProductComponent/SpecificProductDetails";
import AddToCart from "./pges/AddToCart";
import CartPage from "./pges/CartPage";
import SignUp from "./pges/Auth/signUp/SignUp";
import SignInPage from "./pges/Auth/signIn/SignInPage";
import ForgotPasswordPage from "./pges/Auth/ForgotPasswordPage";
import MyAccount from "./pges/Auth/myaccount/MyAccount";
import Otp from "./pges/Auth/Otp";
import ResetPassword from "./pges/Auth/ResetPassword";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePge />} />
            <Route path="/home" element={<HomePge />} />
            <Route path="home/product" element={<ProductsPage />} />
            <Route path="home/product/productDetails" element={<SingleProductPage />} />
            <Route path="/auth/login" element={<LogInPage />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/MyAccount" element={<MyAccount />} />
            <Route path="/signin" element={<SignInPage />} />
          </Route>
          <Route path="/otp" element={<Otp />} />
          <Route path="/otp/:emailAddress" element={<Otp/>} />
          <Route path="/signin/forgotPassword" element={<ForgotPasswordPage />} />
          <Route path="/signin/forgotPassword/restPassword" element={<ResetPassword />} />
        </Route>
      </>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
