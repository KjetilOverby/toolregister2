import React from "react";
import Link from "next/link";
import KniverStartpage from "../src/components/kniver/KniverStartpage";
import red from "../assets/kniver/red.jpeg";
import Header from "../src/components/common/Header";

const kniver = () => {
  return (
    <>
      <div className="container">
        <Header />
        <h1 className="header">Kniver og motstål</h1>
        <KniverStartpage
          title=""
          img={red}
          antallImaskin=""
          antallTenner=""
          dim=""
          maskin=""
        />
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
              margin: 2rem 0rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default kniver;
