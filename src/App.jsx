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
import HorizontalProductCart from "./component/productComponent/HorizontalProductCart";
import SignInPage from "./pges/Auth/signIn/SignInPage";
import MatchOTP from "./pges/Auth/MatchOTP";
import ForgotPasswordPage from "./pges/Auth/ForgotPasswordPage";
import MyAccount from "./pges/Auth/myaccount/MyAccount";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route>
          <Route element={<RootLayout />}>
            <Route path="/" element={<HomePge />} />
            <Route path="/productDetails" element={<SingleProductPage />} />
            <Route path="/auth/login" element={<LogInPage />} />
            <Route path="/product" element={<ProductsPage />} />
            <Route path="/product/:id" element={<SingleProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/MyAccount" element={<MyAccount />} />

            <Route path="/cards" element={<HorizontalProductCart />} />
          </Route>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/otp" element={<MatchOTP />} />
          <Route path="/forgotPassword" element={<ForgotPasswordPage />} />
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
