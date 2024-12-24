import React, { useState } from "react";
import LeftSideFilter from "../component/productComponent/LeftSideFilter";
import { useGetAllCategoryQuery } from "../helper/reduxToolkit/apis/Exclusive.Api";
import RightProducts from "../component/productComponent/RightProducts";
import BradeCrumb from "../component/commonComponent/BradeCrumb";

const ProductsPage = () => {
  // ========featch category fdata with rtk query======
  const { data, isLoading, error } = useGetAllCategoryQuery();
  const [categoryID , setCategoryID] = useState("");

  // =======categoryId function========
  const categoryId = (e)=>{
    setCategoryID(e)
  }
  
  return (
    <div className="container">
      {/* =========breadCrumb===== */}
      <div className="w-full pt-4 pb-6">
        <BradeCrumb />
      </div>

      <div className="warpper w-full flex gap-3">
        {/* =======shop by category======== */}
        <div className="aside w-2/6 lg:w-1/6 h-full max-h-screen ">
          {isLoading ? (
            <>
              <span>Loading</span>
              <ul className="flex flex-col gap-2">
                {Array(7)
                  .fill("")
                  .map(() => (
                    <li className="w-full h-8 bg-slate-700 rounded"></li>
                  ))}
              </ul>
            </>
          ) : (
            <LeftSideFilter categoryData={data?.data} categoryId={categoryId} />
          )}
        </div>

        {/* ========shop by products====== */}
        <div className="beside w-4/6 lg:w-5/6 h-full min-h-screen">
          <RightProducts categoryID={categoryID} />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
