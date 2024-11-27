import React from "react";




const CategoryCard = ({itemData}) => {
  
  return (
      
      <div>
      <div className="warpper container">
        <div  className="w-40 py-6 border-[1px] border-DhusorLekhoni flex flex-col items-center gap-3">
          <h2 className="text-3xl">
            {itemData?itemData.img:"img"}
          </h2>
          <h4 className="text-base font-popins">
            {itemData?itemData.name:"name"}
            </h4>
        </div>
  
      </div>
    </div>
  );
};

export default CategoryCard;
