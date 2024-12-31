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
import SignUp from './pges/Auth/signUp/SignUp'
import HorizontalProductCart from "./component/productComponent/HorizontalProductCart";
import SignInPage from "./pges/Auth/signIn/SignInPage";

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
            <Route
              path="/product/:id"
              element={<SingleProductPage />}
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/signup" element={< SignUp/>} />
            <Route path="/signin" element={< SignInPage/>} />
            <Route path="/cards" element={<HorizontalProductCart />} />
          </Route>
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
