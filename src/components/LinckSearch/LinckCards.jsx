import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsArrowRepeat } from "react-icons/bs";
import { FaComments } from "react-icons/fa";

const LinckCards = ({
  keyID,
  serial,
  type,
  regDate,
  performer,
  date,
  setOpenDeleteModal,
}) => {
  return (
    <>
      <div key={keyID} className="container">
        <div className="top-container">
          <h4 className="serial">{serial}</h4>
          <p className="type">{type}</p>
        </div>
        <div className="regist-container">
          <p className="regist">Registreringsdato: {regDate}</p>
        </div>
        <div className="retip-container">
          <div className="performer-container">
            {performer.map((item) => (
              <div key={Math.random()}>
                <p className="retip-text">{item}</p>
              </div>
            ))}
          </div>
          <div className="performer-container">
            {date.map((item) => (
              <div key={Math.random()}>
                <p key={Math.random()} className="retip-text">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="icon-btn-container">
          <div className="icon-container comment-container">
            <FaComments />
          </div>
          <div className="icon-container retip-btn-container">
            <BsArrowRepeat />
          </div>
          <div
            onClick={() => setOpenDeleteModal(true)}
            className="icon-container delete-container"
          >
            <RiDeleteBin6Line />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            padding: 1rem;
            border: 0.5px solid grey;
            margin: 0.5rem;
            display: grid;
            grid-template-columns: 20rem 15rem 1fr;
            grid-template-rows: 2rem 2rem 1fr;
            grid-template-areas:
              "top button button"
              "middle middle ."
              "bottom bottom .";
          }
          .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            font-size: 1rem;
          }
          .icon-btn-container {
            width: 10rem;
            display: flex;
            justify-content: space-between;
            grid-area: button;
          }
          .delete-container {
            border: 1px solid red;
            transition: 0.5s;
            background: rgba(255, 0, 0, 0.192);
            color: red;
          }
          .delete-container:hover {
            background: #9b3e3e;
            color: white;
          }

          .comment-container {
            border: 1px solid rgb(84, 192, 62);
            transition: 0.5s;
            background: rgba(0, 255, 13, 0.192);
            color: rgb(80, 189, 58);
          }
          .comment-container:hover {
            background: #5db65d;
            color: white;
          }
          .regist-container {
            grid-area: middle;
          }
          .retip-btn-container {
            border: 1px solid rgb(44, 133, 235);
            transition: 0.5s;
            background: rgba(0, 102, 255, 0.192);
            color: rgb(44, 133, 235);
          }
          .retip-btn-container:hover {
            background: #547ab8;
            color: white;
          }
          .performer-container {
            display: flex;
            flex-direction: column;
            width: 6rem;
          }
          .retip-container {
            display: flex;
            grid-area: bottom;
          }
          .retip-text {
            color: #5179ad;
          }
          .serial {
            margin: 0 0.5rem 0 0;
            color: orangered;
          }
          .type {
            margin: 0;
            color: #1a1a64;
            font-style: italic;
          }
          .regist {
            margin-top: -0.8rem;
            color: grey;
            font-style: italic;
          }
          .top-container {
            display: flex;
            grid-area: top;
          }
        `}
      </style>
    </>
  );
};

export default LinckCards;
