import React from "react";
import { useLocation, Link } from "react-router-dom";

const BradeCrumb = () => {
    // ====distucture Dom tree Path=====
  const { pathname } = useLocation();
//   -----split in an array----
  const pathNameArray = pathname.split("/").filter((path)=>path);

  let BreadcrumdPath ="";
  console.log(pathNameArray);

  return (
    <div className="flex gap-5">
      <h1>this is breadcrumb</h1>
      {/* =======map the paath array===== */}
      {pathNameArray.map((name,index)=>(
          BreadcrumdPath +=`/${name}`
      ))}
      
      
    </div>
  );
};

export default BradeCrumb;
