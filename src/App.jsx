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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<HomePge/>} />
          <Route path="/singleproduct" element={<SingleProductPage/>} />
          <Route path="/auth/login" element={<LogInPage/>} />
          <Route path="/product/1/2" element={<ProductsPage/>} />
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
