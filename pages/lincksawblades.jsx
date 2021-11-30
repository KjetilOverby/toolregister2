import React, { useEffect, useState } from "react";
import axios from "axios";
import LinckBladesStartPage from "../src/components/lincksawblades/LinckBladesStartPage";
import HeaderTool from "../src/components/common/HeaderTool";
const api = axios.create({
  baseURL: process.env.api,
});

const lincksawblades = () => {
  // const [linckBlades, setLinckBlades] = useState<any>("");
  // useEffect(() => {
  //   try {
  //     api.get(`/api/linck/linckblades`).then((res) => {
  //       setLinckBlades(res.data.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <>
      <div className="container">
        <HeaderTool />
        <h1 className="header">Sagblad Linck</h1>
        <LinckBladesStartPage />
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
              padding: 0 0.5rem;
            }
            .header {
              margin: 0 0 1rem 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default lincksawblades;
