import React from "react";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import ButtonComponent from "./ButtonComponent";
import HeaderStartPage from "../../components/common/HeaderStartPage";

const StartPage = () => {
  return (
    <>
      <div className="container">
        <div className="menu-header">
          {/* <p className="tab">Søk i Linckblad</p>
          <p className="tab">Oversikt</p>
          <p className="tab">Datosøk</p>
          <p className="tab">Omlodding</p>
          <LoginButton className="tab">Login</LoginButton>
          <LogoutButton className="tab">Logout</LogoutButton> */}
          <HeaderStartPage />
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
            padding-top: 2rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }
          .btn-container {
            display: flex;
            flex-direction: column;
            width: 50rem;
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
          .tab:hover {
            cursor: pointer;
          }
          @media (max-width: 1000px) {
            .menu-header {
              width: 100%;
            }
          }
          @media (max-width: 850px) {
            .btn-container {
              width: 85%;
            }
            .header {
              font-size: 2rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPage;
