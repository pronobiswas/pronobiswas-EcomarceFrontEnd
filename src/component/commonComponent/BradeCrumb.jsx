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
      <span>Home / </span>
      {/* =======map the paath array===== */}
      {pathNameArray.map((name, index) => {
        BreadcrumdPath += `/${name}`;
        // ====define the last index=======
        const isLast = index === pathNameArray?.length - 1;

        return isLast ? (
          <div>
            <span
              className="bg-purple-400 text-white_FFFFFF font-popins px-2 py-1 mx-1 rounded-sm"
              key={index}
            >
              {name}
            </span>
          </div>
        ) : (
          <div className="flex items-center justify-start">
            <span key={index}>
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
