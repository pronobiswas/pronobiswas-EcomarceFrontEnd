import React from "react";

const ProductSkeleton = () => {
  return (
    <div>
      <div className="card w-[270px]">
        {/* ===imagesec== */}
        <div className="w-ful h-64 bg-Dhusor rounded">
          <div className="flex justify-between  px-3 py-3">
            <div className="w-20 h-8 bg-slate-800 rounded"></div>
            <div className="w-8 h-8 bg-slate-800 rounded-full relative">
                <div className="w-full h-full absolute bg-slate-800 rounded-full top-10"></div>
            </div>
          </div>
        </div>
        {/* ====text-sec==== */}
        <div className="flex flex-col gap-2 mt-3">
            <div className="w-60 bg-Dhusor rounded h-8"></div>
            <div className="w-40 bg-Dhusor rounded h-6"></div>
            <div className="w-40 bg-Dhusor rounded h-6"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
