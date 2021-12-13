import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../contexts/MyContext";

const ToolWasteCount = () => {
  const {
    toolwasteData,
    toolCreateData,
    update,
    setRedSegmentH,
    setRedSegmentV,
    setTrimmerJust,
    setEksaktKapp,
    setVpp34SegH,
    setVpp34SegV,
    setVp34SegH,
    setVp34SegV,
    setVp48segH,
    setVp48segV,
    setReduserKniv,
    setMotstV40,
    setMotstV25,
    setVpp34Kniv,
    setVpp32Knivholder,
  } = useContext(MyContext);
  const [getRedSegmentH, setGetRedSegmentH] = useState();
  const [getRedSegmentV, setGetRedSegmentV] = useState();
  const [getVpp34SegH, setGetVpp34SegH] = useState();
  const [getVpp34SegV, setGetVpp34SegV] = useState();
  const [getVp34SegH, setGetVp34SegH] = useState();
  const [getVp34SegV, setGetVp34SegV] = useState();
  const [getVp48SegH, setGetVp48SegH] = useState();
  const [getVp48SegV, setGetVp48SegV] = useState();
  const [getReduserKniv, setgetReduserKniv] = useState();
  const [getMotstV40, setGetMotstV40] = useState();
  const [getMotstV25, setGetMotstV25] = useState();
  const [getVpp34Kniv, setGetVpp34Kniv] = useState();
  const [getVpp34Knivholder, setGetVpp34Knivholder] = useState();
  const [getTrimmerJust, setGetTrimmerJust] = useState();
  const [getEksaktKapp, setGetEksaktKapp] = useState();

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
      setGetVpp34SegH(
        toolwasteData.filter((item) => item.type === "Fres 1/4 segment høyre")
      );
      setGetVpp34SegV(
        toolwasteData.filter((item) => item.type === "Fres 1/4 segment venstre")
      );
      setGetVp34SegH(
        toolwasteData.filter(
          (item) => item.type === "Fres 2/3 segment høyre horizontal"
        )
      );
      setGetVp34SegV(
        toolwasteData.filter(
          (item) => item.type === "Fres 2/3 segment venstre horizontal"
        )
      );
      setGetVp48SegH(
        toolwasteData.filter(
          (item) => item.type === "Fres 3 segment høyre vertical"
        )
      );
      setGetVp48SegV(
        toolwasteData.filter(
          (item) => item.type === "Fres 3 segment venstre vertical"
        )
      );
      setgetReduserKniv(
        toolwasteData.filter((item) => item.type === "Reduserer kniv")
      );
      setGetMotstV40(
        toolwasteData.filter(
          (item) => item.type === "Reduserer motstål rekke 1"
        )
      );
      setGetMotstV25(
        toolwasteData.filter(
          (item) => item.type === "Reduserer motstål rekke 2 og 3"
        )
      );
      setGetVpp34Kniv(
        toolwasteData.filter((item) => item.type === "Fres 1/4 kniv")
      );
      setGetVpp34Knivholder(
        toolwasteData.filter((item) => item.type === "Fres 1/4 knivholder")
      );
      setGetTrimmerJust(
        toolwasteData.filter((item) => item.type === "Trimmer justerverk")
      );
      setGetEksaktKapp(
        toolwasteData.filter((item) => item.type === "Eksaktkappe justerverk")
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
      setVpp34SegH(
        getVpp34SegH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVpp34SegV(
        getVpp34SegV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp34SegH(
        getVp34SegH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp34SegV(
        getVp34SegV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp48segH(
        getVp48SegH.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVp48segV(
        getVp48SegV.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setReduserKniv(
        getReduserKniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setMotstV40(
        getMotstV40.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setMotstV25(
        getMotstV25.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVpp34Kniv(
        getVpp34Kniv.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setVpp32Knivholder(
        getVpp34Knivholder.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setTrimmerJust(
        getTrimmerJust.reduce(function (a, b) {
          return a + b.input;
        }, 0)
      );
      setEksaktKapp(
        getEksaktKapp.reduce(function (a, b) {
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
            display: none;
          }
        `}
      </style>
    </>
  );
};

export default ToolWasteCount;
