import React from "react";
import LoginButton from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";
import ButtonComponent from "./ButtonComponent";
import HeaderStartPage from "../../components/common/HeaderStartPage";

const StartPage = () => {
  return (
    <>
      <div className="image-container">
        <div className="container">
          <div className="menu-header">
            <HeaderStartPage color="white" />
          </div>
          <div className="header-container">
            <h1 className="header">Verktøyregister</h1>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="btn-container">
          <ButtonComponent
            link="/lincksawblades"
            header="Linck sagblad"
            img={
              "https://www.leuco.com/EN/US/media/PIC_PRO_KSN_80337192_ING.jpg"
            }
          />
          <ButtonComponent
            link="/segmenter"
            header="Segmenter"
            img={
              "https://www.forezienne.com/images/k2/big/segment-canter-slabber-LINCK.jpg"
            }
          />
          <ButtonComponent
            link="/kniver"
            header="Kniver"
            img={
              "https://image.made-in-china.com/43f34j00EbVzdSRlspuY/Factory-Price-Cutting-Chipper-Knives-for-Wood-Working-Machine.jpg"
            }
          />
          <ButtonComponent
            link="/sagblad"
            header="Trimmerblad"
            img={
              "https://5.imimg.com/data5/FL/UZ/ZT/SELLER-1201415/tct-circular-saw-blades-500x500.jpg"
            }
          />
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
          .image-container {
            background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1560090535-922ec7b32bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80");
            background-size: cover;
            height: 40rem;
            background-position: center;
          }
          .btn-container {
            display: flex;
            flex-direction: column;
            width: 50rem;
          }
          .header {
            color: #f7ddb8;
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
          .page-container {
            margin: 8rem 15rem;
            display: flex;
            justify-content: center;
          }
          .btn-container {
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
          }
          .tab {
            color: #9c9c9c;
            text-transform: uppercase;
          }
          .tab:hover {
            cursor: pointer;
          }
          @media (max-width: 2100px) {
            .image-container {
              height: 30rem;
            }
          }
          @media (max-width: 1500px) {
            .header {
              margin: 0 0 1rem 0;
            }
          }
          @media (max-width: 1000px) {
            .container {
              padding-top: 0;
            }
            .menu-header {
              width: 100%;
            }
            .header {
              margin: 0 0 1rem 0;
            }
            .image-container {
              height: 15rem;
            }
          }
          @media (max-width: 850px) {
            .btn-container {
              width: 85%;
            }
            .header {
              font-size: 2rem;
            }
            .page-container {
              margin: 2rem 0rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default StartPage;

// https://images.unsplash.com/photo-1560090535-922ec7b32bb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80
