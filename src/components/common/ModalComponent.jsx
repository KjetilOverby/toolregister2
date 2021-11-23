import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";

const ModalComponent = ({ linck }) => {
  const { setOpenModal, getID, getImgUrl, type, getAntall } =
    useContext(MyContext);
  return (
    <>
      <div className="container">
        <div className="modal">
          <img className="img" src={getImgUrl} />
          <h1>{type}</h1>
          <p>Antall: {getAntall}</p>
          {!linck && (
            <div>
              <button>-</button>
              <input className="input" />
              <button>+</button>
            </div>
          )}

          <button onClick={() => setOpenModal(false)}>LUKK</button>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            position: fixed;
            background: #383838ea;
            width: 100vw;
            height: 100vh;
            top: 0;
            left: 0;
            display: grid;
            place-items: center;
            z-index: 10;
          }
          .modal {
            width: 55rem;
            background: #fff;
            z-index: 10;
            border-radius: 10px;
            padding: 1rem;
            animation: bounceInUp 1s;
          }
          .input {
            width: 3rem;
          }
          .img {
            width: 100%;
            border-radius: 10px;
          }
          @keyframes bounceInUp {
            0%,
            60%,
            75%,
            90%,
            100% {
              -webkit-transition-timing-function: cubic-bezier(
                0.215,
                0.61,
                0.355,
                1
              );
              transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            }

            0% {
              opacity: 0;
              -webkit-transform: translate3d(0, 3000px, 0);
              transform: translate3d(0, 3000px, 0);
            }

            60% {
              opacity: 1;
              -webkit-transform: translate3d(0, -20px, 0);
              transform: translate3d(0, -20px, 0);
            }

            75% {
              -webkit-transform: translate3d(0, 10px, 0);
              transform: translate3d(0, 10px, 0);
            }

            90% {
              -webkit-transform: translate3d(0, -5px, 0);
              transform: translate3d(0, -5px, 0);
            }

            100% {
              -webkit-transform: translate3d(0, 0, 0);
              transform: translate3d(0, 0, 0);
            }
          }
        `}
      </style>
    </>
  );
};

export default ModalComponent;
