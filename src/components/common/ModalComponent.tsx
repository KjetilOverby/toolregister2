import React, { useContext } from "react";
import { MyContext } from "../../contexts/MyContext";

const ModalComponent = () => {
  const { setOpenModal } = useContext(MyContext);
  return (
    <>
      <div className="container">
        <div className="modal">
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
            width: 35rem;
            height: 20rem;
            background: #fff;
            z-index: 10;
            border-radius: 10px;
          }
        `}
      </style>
    </>
  );
};

export default ModalComponent;
