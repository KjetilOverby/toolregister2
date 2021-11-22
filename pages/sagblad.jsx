import React from "react";
import Header from "../src/components/common/Header";
import SagbladStartPage from "../src/components/sagblad/SagbladStartPage";

const sagblad = () => {
  return (
    <>
      <div className="container">
        <Header />
        <h1 className="header">Trimmerblad</h1>
        <SagbladStartPage />
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

export default sagblad;
