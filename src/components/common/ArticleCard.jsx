import React from "react";
import Link from "next/link";

const ArticleCard = ({ img, header, text, link }) => {
  return (
    <>
      <div className="container">
        <h3>{header}</h3>
        <p>{text}</p>
        <img style={{ width: "100%", marginTop: "3rem" }} src={img} alt="" />
        <Link href={`${link}`}>
          <button className="btn">Se mer</button>
        </Link>
      </div>

      <style jsx>
        {`
          .container {
            width: 20rem;
            display: grid;
            grid-template-rows: 2rem 2rem 20rem 1fr;
            margin-bottom: 5rem;
          }
          .btn {
            padding: 1rem;
            background: transparent;
            border: 1px solid grey;
            border-radius: 5px;
            transition: background 0.5s;
          }
          .btn:hover {
            background: #ebebeb;
            cursor: pointer;
          }
          @media screen and (max-width: 1000px) {
            .container {
            }
          }
        `}
      </style>
    </>
  );
};

export default ArticleCard;
