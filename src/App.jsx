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
            <Route path="/cart" element={<AddToCart />} />
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
