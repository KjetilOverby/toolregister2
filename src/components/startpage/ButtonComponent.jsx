import React from "react";
import Link from "next/link";

const ButtonComponent = ({ header, link }) => {
  return (
    <>
      <Link href={`${link}`}>
        <button className="container">{header}</button>
      </Link>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300&display=swap");
          .container {
            background: transparent;
            padding: 1rem;
            margin-bottom: 0.5rem;
            color: #fff;
            font-size: 1.3rem;
            font-weight: 100;
            transition: background 0.5s;
            font-family: "Titillium Web", sans-serif;
            border: none;
            transition: 0.5s;
          }
          .container:hover {
            cursor: pointer;
            color: #3a93bd;
          }
          @media (max-width: 1000px) {
            .container {
              padding: 1rem;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default ButtonComponent;
