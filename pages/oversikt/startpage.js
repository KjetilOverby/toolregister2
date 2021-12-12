import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import HeaderStartPage from "../../src/components/common/HeaderStartPage";
import { MyContext } from "../../src/contexts/MyContext";
import ToolWasteCount from "../../src/components/oversikt/ToolWasteCount";

const oversikt = () => {
  // const { toolwasteData, toolCreateData } = useContext(MyContext);

  // const [redSegmentH, setRedSegmentH] = useState();
  // const [test, setTest] = useState();

  // // console.log(toolwasteData);
  // useEffect(() => {
  //   if (toolwasteData) {
  //     setRedSegmentH(
  //       toolwasteData.filter((item) => item.type === "Reduserer segment høyre")
  //     );
  //   }
  // }, [toolwasteData]);
  // useEffect(() => {
  //   if (redSegmentH) {
  //     setTest(
  //       redSegmentH.reduce(function (a, b) {
  //         return a.input + b.input; // returns object with property x
  //       })
  //     );
  //   }
  // }, [redSegmentH, toolwasteData]);
  // console.log(test);
  return (
    <>
      <div className="container">
        <HeaderStartPage color="black" />

        <div className="page-container">
          <Link href="/oversikt/toolinputedit">
            <p>Til input Edit</p>
          </Link>
          <div>
            <h1>Oversikt over vektøy</h1>
            <ToolWasteCount />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .page-container {
            margin: 2rem 5rem;
          }
          p {
            text-transform: uppercase;
          }
          p:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default oversikt;
