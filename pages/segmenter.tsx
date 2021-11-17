import React from "react";
import SegmenterStartPage from "../src/components/segmenter/SegmenterStartPage";
import img from "../assets/segmenter/bolt2.jpeg";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
import Header from "../src/components/common/Header";

const segmenter = () => {
  return (
    <>
      <div className="container">
        {/* <Link href="/">
          <div className="backContainer">
            <MdKeyboardArrowLeft />
            <h5>Tilbake</h5>
          </div>
        </Link> */}
        <Header />
        <h1 className="header">Segmenter</h1>
        <SegmenterStartPage img={img} antallTenner="" maskin="" dim="" />
      </div>
      <style jsx>
        {`
          .container {
            margin: 2rem 30rem;
          }
          .header {
            margin: 2rem 0 6rem 0;
          }
          .backContainer {
            display: flex;
          }
          .backContainer:hover {
            cursor: pointer;
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
