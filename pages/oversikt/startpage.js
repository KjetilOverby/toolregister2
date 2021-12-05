import React from "react";
import Link from "next/link";
import HeaderStartPage from "../../src/components/common/HeaderStartPage";

const oversikt = () => {
  return (
    <>
      <div className="container">
        <HeaderStartPage color="black" />

        <div className="page-container">
          <Link href="/oversikt/toolinputedit">
            <p>Til input Edit</p>
          </Link>
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
