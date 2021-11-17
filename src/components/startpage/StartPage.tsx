import React from "react";
import ButtonComponent from "./ButtonComponent";

interface Props {
  header: string;
  link: string;
}

const StartPage: React.FC<Props> = () => {
  return (
    <>
      <div className="container">
        <div>
          <h1 className="header">Verktøyregister</h1>
        </div>
        <div className="btn-container">
          <ButtonComponent link="/lincksawblades" header="Linck sagblad" />
          <ButtonComponent link="/segmenter" header="Segmenter" />
          <ButtonComponent link="/kniver" header="Kniver" />
          <ButtonComponent link="/sagblad" header="Trimmerblad" />
          {/* <ButtonComponent link="/" header="Statistikk" /> */}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            place-items: center;
          }
          .btn-container {
            display: flex;
            flex-direction: column;
            width: 40%;
          }
          .header {
            color: #fff;
            margin: 5rem 0;
            font-weight: 100;
          }
          @media (max-width: 768px) {
            .btn-container {
              width: 95%;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPage;
