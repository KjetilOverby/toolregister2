import React from "react";
import dateFormat, { masks } from "dateformat";

const InputOverview = ({
  type,
  antall,
  inputText,
  input,
  date,
  img,
  color,
}) => {
  return (
    <>
      <div className="container">
        <div>
          <h3>{type}</h3>
          <p>Antall før: {antall}</p>
          <p>
            {inputText}: {input}
          </p>
          <p>Dato: {dateFormat(date, "dd.mm.yyyy HH:MM:ss")}</p>
        </div>
        <div className="img-container">
          <img src={img} alt="" />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            border: 1px solid #dddddd;
            padding: 1rem;
            width: 30rem;
            background-image: ${color};
            border-radius: 10px;
            display: flex;
            justify-content: space-between;
            margin: 1rem 0;
            box-shadow: 5px 5px 20px #c2c2c296;
          }

          img {
            width: 100%;
            border-radius: 10px;
          }
          .img-container {
            width: 10rem;
          }
          @media (max-width: 800px) {
            .container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default InputOverview;
