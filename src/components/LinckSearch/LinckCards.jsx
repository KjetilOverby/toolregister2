import React from "react";

const LinckCards = ({ keyID, serial, type, regDate, performer, date }) => {
  return (
    <>
      <div key={keyID} className="container">
        <div className="top-container">
          <h4 className="serial">{serial}</h4>
          <p>{type}</p>
        </div>
        <div>
          <p>Registreringsdato: {regDate}</p>
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
      </div>
      <style jsx>
        {`
          .container {
            padding: 1rem;
            border: 0.5px solid grey;
            margin: 0.5rem;
          }
          .performer-container {
            display: flex;
            flex-direction: column;
            width: 6rem;
          }
          .retip-container {
            display: flex;
          }
          .retip-text {
            color: #5179ad;
          }
          .serial {
            margin-right: 0.5rem;
            color: orangered;
          }
          .top-container {
            display: flex;
          }
        `}
      </style>
    </>
  );
};

export default LinckCards;
