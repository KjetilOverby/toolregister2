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
        <div className="menu-header">
          <p className="tab">Søk i Linckblad</p>
          <p className="tab">Oversikt</p>
          <p className="tab">Datosøk</p>
          <p className="tab">Omlodding</p>
          <p className="tab">Login</p>
        </div>
        <div className="header-container">
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
            padding-top: 2rem;
          }
          .btn-container {
            display: flex;
            flex-direction: column;
            width: 40%;
          }
          .header {
            color: #e9cf97;
            margin: 5rem 0;
            font-weight: bold;
            font-size: 4rem;
          }
          .header-container {
            display: grid;
          }
          .menu-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 50rem;
          }
          .tab {
            color: #fff;
            text-transform: uppercase;
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
