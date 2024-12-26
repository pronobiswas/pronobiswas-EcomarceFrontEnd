import React, { useState } from "react";
import { InnerImageZoom } from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";

const ImageGlary = ({ productImages }) => {
  const [initailImage, setinitailImage] = useState(
    productImages[0] ||
      "https://res.cloudinary.com/daziiakbl/image/upload/v1733575561/ill6qmtb82qg98doy6m5.jpg"
  );

  return (
    <div className="w-full min-w-80">
      {/* =====product Image===*/}
      <div className="w-full h-full flex flex-col md:flex-row gap-4">
        {/* ------product images---- */}
        <div className="w-full h-full md:w-2/4">
          {/* =======galary images======= */}
          <div className="w-full flex flex-row gap-3 py-5 items-center md:flex-col">
            {productImages
              ? productImages.map((singleImage) => (
                  <div className="w-20 h-16 bg-slate-500 rounded sm:w-36 sm:h-28 md:w-full md:h-40 " key={singleImage.key} onClick={()=>setinitailImage(singleImage)}>
                    <img
                      src={singleImage}
                      alt="{singleImage}"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))
              : [...new Array(4)].map((_, index) => (
                  <>
                    <li>
                      <div className="w-20 h-16 bg-slate-200 rounded sm:w-36 sm:h-28 md:w-full md:h-40 "></div>
                    </li>
                  </>
                ))}
            
          </div>
        </div>
        {/* ------Zoomer Image---- */}
        <div className="w-full bg-white_F5F5F5 rounded flex justify-center items-center md:w-4/6 -order-1 md:order-1  ">
          <InnerImageZoom
            src={initailImage === undefined ? productImages[0] : initailImage}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageGlary;
