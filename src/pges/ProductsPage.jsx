import React from "react";
import LeftSideFilter from "../component/productComponent/LeftSideFilter";
import { useGetAllCategoryQuery } from "../helper/reduxToolkit/apis/Exclusive.Api";
import RightProducts from "../component/productComponent/RightProducts";
import BradeCrumb from "../component/commonComponent/BradeCrumb";

const ProductsPage = () => {
  // ========featch category fdata with rtk query======
  const { data, isLoading, error } = useGetAllCategoryQuery();

  return (
    <div className="container">
      {/* =========breadCrumb===== */}
      <div className="w-full pt-4 pb-6">
        <BradeCrumb />
      </div>
      <div className="warpper w-full flex gap-3">
        {/* =======shop by category======== */}
        <div className="aside w-2/6 lg:w-1/6 h-full max-h-screen ">
          <LeftSideFilter categoryData={data?.data} />
        </div>
        {/* ========shop by products====== */}
        <div className="beside w-4/6 lg:w-5/6 h-full min-h-screen">
          <RightProducts />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
