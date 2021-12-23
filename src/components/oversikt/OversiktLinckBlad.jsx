import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../contexts/MyContext";

const OversiktLinckBlad = ({
  linckBladesTab,
  serviceTab,
  wasteTab,
  newbladesTab,
}) => {
  const { linckBlades, toolwasteData, toolCreateData } = useContext(MyContext);

  return (
    <>
      <div className="container">
        <div>
          {linckBladesTab &&
            linckBladesTab.map((item) => {
              return (
                <>
                  <div className="oversikt-container">
                    <p>{item._id.type}</p>
                    <p style={{ color: "blue" }}>{item.typeCount}</p>
                  </div>
                </>
              );
            })}
        </div>
        <div>
          {serviceTab &&
            serviceTab.map((item) => {
              return (
                <>
                  <div className="oversikt-container">
                    <p>{item._id.type}</p>
                    <p style={{ color: "blue" }}>{item.typeCount}</p>
                  </div>
                </>
              );
            })}
        </div>
        <div>
          {wasteTab &&
            wasteTab.map((item) => {
              return (
                <>
                  <div className="oversikt-container">
                    <p>{item._id.type}</p>
                    <p style={{ color: "blue" }}>{item.typeCount}</p>
                  </div>
                </>
              );
            })}
        </div>
        <div>
          {newbladesTab &&
            newbladesTab.map((item) => {
              return (
                <>
                  <div className="oversikt-container">
                    <p>{item._id.type}</p>
                    <p style={{ color: "green" }}>{item.typeCount}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
          }
          .oversikt-container {
            display: flex;
            justify-content: space-between;
            width: 20rem;
          }
        `}
      </style>
    </>
  );
};

export default OversiktLinckBlad;
