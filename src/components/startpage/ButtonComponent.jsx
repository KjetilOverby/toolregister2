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
            color: #f5870a;
            font-size: 1.3rem;
            font-weight: 100;
            transition: background 0.5s;
            font-family: "Titillium Web", sans-serif;
            transition: color 0.5s;
            border: 1px solid #afafaf;
            min-width: 20rem;
            height: 10rem;
            border-radius: 10px;
            transition: color 0.5s, border 0.5s, box-shadow 0.5s;
            margin-bottom: 3rem;
            box-shadow: -5px -5px 5px #8f8f8f28;
          }
          .container:hover {
            cursor: pointer;
            color: #3434e0;
            border-color: #3434e0;
            box-shadow: -5px -5px 5px #8f8f8f58;
          }
          .img {
            height: 100%;
          }
          @media (max-width: 1000px) {
            .container {
              padding: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ButtonComponent;
