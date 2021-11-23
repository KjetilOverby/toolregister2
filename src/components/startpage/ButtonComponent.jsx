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
            padding: 2rem;
            margin-bottom: 0.5rem;
            color: #fff;
            font-size: 1.5rem;
            font-weight: 100;
            transition: background 0.5s;
            font-family: "Titillium Web", sans-serif;
            border: 1px solid #aaaaaa;
            border-radius: 10px;
          }
          .container:hover {
            cursor: pointer;
            background: rgba(112, 112, 112, 0.4);
          }
        `}
      </style>
    </>
  );
};

export default ButtonComponent;
