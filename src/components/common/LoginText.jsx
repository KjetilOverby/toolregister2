import React from "react";

const LoginText = () => {
  return (
    <>
      <div className="container">
        <p>inlogged som Moelven Sliperi * © copyright 2022</p>
      </div>
      <style jsx>
        {`
          .container {
            position: absolute;
            bottom: 0;
            left: 0;
            color: grey;
            animation: move 3s forwards;
            -webkit-animation-timing-function: linear;
          }
          @keyframes move {
            0% {
              transform: translateX(-30rem);
            }
            100% {
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  );
};

export default LoginText;
