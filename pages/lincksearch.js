import React from "react";
import HeaderStartPage from "../src/components/common/HeaderStartPage";

const lincksearch = () => {
  return (
    <>
      <div className="container">
        <div className="header-container">
          <HeaderStartPage />
        </div>
        <div className="image-container">
          <input className="input" placeholder="Search" />
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .image-container {
            background: url("https://images.unsplash.com/photo-1575108921227-641884169334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1407&q=80");
            height: 20rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
          }
          .input {
            height: 3rem;
            width: 20rem;
            border-radius: 10px;
            border: none;
            font-size: 2rem;
            padding: 0.5rem;
          }
        `}
      </style>
    </>
  );
};

export default lincksearch;
