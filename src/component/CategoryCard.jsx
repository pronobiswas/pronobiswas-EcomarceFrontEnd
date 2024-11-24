import React from "react";




const CategoryCard = ({itemData}) => {
  return (
      
      <div>
      <div className="warpper container">
        
        
        <div key={itemData?.id} className="w-60 py-8 bg-red-500">
          <span>
            {itemData?itemData.img:"img"}
          </span>
          <span>{itemData?itemData.name:"name"}</span>
        </div>
        {console.log(itemData)}
      </div>
    </div>
  );
};

export default CategoryCard;
