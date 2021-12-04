import React from "react";
import Link from "next/link";

const oversikt = () => {
  return (
    <>
      <div className="container">
        <Link href="/oversikt/toolinputedit">
          <p>Til input Edit</p>
        </Link>
      </div>
      <style jsx>
        {`
          .container {
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
