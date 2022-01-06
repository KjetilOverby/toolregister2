import React from "react";
import Link from "next/link";

const ButtonComponent = ({ header, link, img }) => {
  return (
    <>
      <Link href={`${link}`}>
        <div className="container">
          <p>{header}</p>

          <img src={img} alt="" className="img" />
        </div>
      </Link>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300&display=swap");
          .container {
            background: transparent;
            padding: 1rem;
            margin-bottom: 0.5rem;
            color: #6b6b6b;
            font-size: 1.3rem;
            font-weight: 100;
            transition: background 0.5s;
            font-family: "Titillium Web", sans-serif;
            transition: color 0.5s;
            border: 1px solid #a3a3a3;
            min-width: 20rem;
            height: 10rem;
            border-radius: 10px;
            transition: 0.5s;
          }
          .container:hover {
            cursor: pointer;
            color: blue;
            border-color: blue;
          }
          .img {
            height: 100%;
          }
          @media (max-width: 1000px) {
            .container {
              padding: 1rem;
              margin-bottom: 3rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ButtonComponent;
