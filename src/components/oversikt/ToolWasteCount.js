import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../contexts/MyContext";

const ToolWasteCount = () => {
  const {
    toolwasteData,
    toolCreateData,
    update,
    setRedSegmentH,
    setRedSegmentV,
  } = useContext(MyContext);
  const [getRedSegmentH, setGetRedSegmentH] = useState();
  const [getRedSegmentV, setGetRedSegmentV] = useState();

  useEffect(() => {
    if (toolwasteData) {
      setGetRedSegmentH(
        toolwasteData.filter((item) => item.type === "Reduserer segment høyre")
      );
      setGetRedSegmentV(
        toolwasteData.filter(
          (item) => item.type === "Reduserer segment venstre"
        )
      );
    }
  }, [toolwasteData, update]);
  useEffect(() => {
    if (getRedSegmentH && getRedSegmentV) {
      setRedSegmentH(
        getRedSegmentH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setRedSegmentV(
        getRedSegmentV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
    }
  }, [getRedSegmentH, toolwasteData, update]);

  return (
    <>
      <div className="container"></div>
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default ToolWasteCount;
