import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../contexts/MyContext";

const OversiktLinckBlad = ({
  linckBladesTab,
  serviceTab,
  wasteTab,
  newbladesTab,
  retipSum,
  vrakSum,
  newBladesSum,
  linckBladesSum,
}) => {
  const { linckBlades, toolwasteData, toolCreateData } = useContext(MyContext);

  return (
    <>
      {linckBlades ? (
        <div className="container">
          <div className="list-container antall-container">
            <h5>Antall sagblad ({linckBladesSum})</h5>
            {linckBladesTab &&
              linckBladesTab.map((item) => {
                return (
                  <>
                    <div className="oversikt-container">
                      <p>{item._id.type}</p>
                      <p>{item.typeCount}</p>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="list-container omlodd-container">
            <h5>Antall omloddet ({retipSum})</h5>
            {serviceTab &&
              serviceTab.map((item) => {
                return (
                  <>
                    <div className="oversikt-container">
                      <p>{item._id.type}</p>
                      <p>{item.typeCount}</p>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="list-container vrak-container">
            <h5>Antall vrak ({vrakSum})</h5>
            {wasteTab &&
              wasteTab.map((item) => {
                return (
                  <>
                    <div className="oversikt-container">
                      <p>{item._id.type}</p>
                      <p>{item.typeCount}</p>
                    </div>
                  </>
                );
              })}
          </div>
          <div className="list-container new-container">
            <h5>Antall nye ({newBladesSum})</h5>
            {newbladesTab &&
              newbladesTab.map((item) => {
                return (
                  <>
                    <div className="oversikt-container">
                      <p>{item._id.type}</p>
                      <p>{item.typeCount}</p>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      ) : (
        <h1>Laster data...</h1>
      )}
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin: 0 20rem;
            grid-template-areas: "antall omlodd vrak nye";
          }
          .antall-container {
            grid-area: antall;
          }
          .omlodd-container {
            grid-area: omlodd;
          }
          .vrak-container {
            grid-area: vrak;
          }
          .new-container {
            grid-area: nye;
          }
          .list-container {
          }
          .oversikt-container {
            display: flex;
            justify-content: space-between;
            width: 11rem;
          }
          p {
            font-size: 0.8rem;
            font-style: italic;
          }
          @media (max-width: 2100px) {
            .container {
              margin: 0 10rem;
            }
          }
          @media (max-width: 1000px) {
            .container {
              grid-template-rows: repeat(4, 1fr);
              grid-template-areas:
                "antall"
                "omlodd"
                "vrak"
                "nye";
              margin: 0;
            }
          }
        `}
      </style>
    </>
  );
};

export default OversiktLinckBlad;
