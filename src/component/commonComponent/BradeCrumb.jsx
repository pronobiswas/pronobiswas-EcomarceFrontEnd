import React from "react";
import { useLocation, Link } from "react-router-dom";

const BradeCrumb = () => {
  // ====distucture Dom tree Path=====
  const { pathname } = useLocation();
  //   -----split in an array----
  const pathNameArray = pathname.split("/").filter((path) => path);

  let BreadcrumdPath = "";

  return (
    <div className="container flex gap-2">
      {/* =======map the paath array===== */}
      {pathNameArray.map((name, index) => {
        BreadcrumdPath += `/${name}`;
        // ====define the last index=======
        const isLast = index === pathNameArray?.length - 1;
        
        return isLast ? (
          <div key={index}>
            <span
              className="bg-purple-400 text-white_FFFFFF font-popins px-2 py-1 mx-1 rounded-sm"
              
            >
              {name}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-start" key={index}>
            <span >
              <Link className="font-popins mr-2" to={BreadcrumdPath}>
                {name}
              </Link>
            </span>
            <span>/</span>
          </div>
        );
      })}
    </div>
  );
};

export default BradeCrumb;
