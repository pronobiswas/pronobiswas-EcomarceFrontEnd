import React from "react";

const CategoryCard = ({ itemData }) => {
  return (
    // =======categoryCard or box======
    <div className="card max-w-40 py-6 border-[1px] border-AbchaSada flex flex-col items-center gap-3 rounded hover:bg-Secondary2 group ease-in-out	duration-300 ">
      <h2 className="text-3xl group-hover:text-Sada group-hover:z-20">
        {itemData ? itemData.img : "img"}
      </h2>
      <h4 className="text-base font-popins group-hover:text-Sada">
        {itemData ? itemData.name : "name"}
      </h4>
    </div>
  );
};

export default CategoryCard;
