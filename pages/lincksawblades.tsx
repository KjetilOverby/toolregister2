import React, { useEffect, useState } from "react";
import axios from "axios";
import LinckBladesStartPage from "../src/components/lincksawblades/LinckBladesStartPage";
import Header from "../src/components/common/Header";
const api = axios.create({
  baseURL: process.env.api,
});

const lincksawblades: React.FC = () => {
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
        <Header />
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
            }
          }
        `}
      </style>
    </>
  );
};

export default lincksawblades;
