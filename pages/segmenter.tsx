import React from "react";
import SegmenterStartPage from "../src/components/segmenter/SegmenterStartPage";

const segmenter = () => {
  return (
    <>
      <div className="container">
        <SegmenterStartPage />
      </div>
      <style jsx>
        {`
          .container {
            padding: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default segmenter;
