import React from "react";
import HeaderComponent from "../src/components/common/HeaderStartPage";
import Link from "next/link";

const edit = () => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <HeaderComponent />
        </div>
        <div className="image-container"></div>
        <Link href="/oversikt/toolinputedit">
          <button>Rediger</button>
        </Link>
      </div>
      <style jsx>
        {`
          .container {
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
            grid-area: top;
          }
          .image-container {
            background: url("https://images.unsplash.com/photo-1564509060989-a9600fdcd60c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1440&q=80");
            height: 20rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
            grid-area: middle;
          }
          @media (max-width: 1000px) {
            .image-container {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default edit;
