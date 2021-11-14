import React from "react";
import SegmenterStartPage from "../src/components/segmenter/SegmenterStartPage";
import img from "../assets/segmenter/bolt2.jpeg";

const segmenter = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Segmenter</h1>
        <SegmenterStartPage img={img} />
      </div>
      <style jsx>
        {`
          .container {
            margin: 2rem 35rem;
          }
          .header {
            margin: 2rem 0 6rem 0;
          }
          @media (max-width: 2100px) {
            .container {
              margin: 2rem 10rem;
            }
          }
          @media (max-width: 756px) {
            .container {
              margin: 2rem 0.5rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default segmenter;
