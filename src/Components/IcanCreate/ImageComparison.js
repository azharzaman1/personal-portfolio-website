import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage,
} from "react-compare-slider";

const ImageComparison = ({ imgUrl1, imgUrl2, imgAlt1, imgAlt2 }) => {
  return (
    <>
      <ReactCompareSlider
        handle={
          <ReactCompareSliderHandle
            buttonStyle={{
              WebkitBackdropFilter: "none",
              backdropFilter: "none",
              backgroundColor: "#f06196",
              width: 45,
              height: 45,
              fontSize: 12,
              //   border: 0,
              //   boxShadow: "none",
            }}
            linesStyle={{ opacity: 1 }}
          />
        }
        itemOne={<ReactCompareSliderImage alt={imgAlt1} src={imgUrl1} />}
        itemTwo={<ReactCompareSliderImage alt={imgAlt2} src={imgUrl2} />}
        position={50}
        // style={{
        //   height: "100vh",
        //   width: "100%",
        // }}
      />
    </>
  );
};

export default ImageComparison;
