import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../contexts/MyContext";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.api,
});

const ModalComponent = ({ linck }) => {
  const [editMode, setEditMode] = useState(false);
  const [antallInputCalc, setAntallInputCalc] = useState(0);
  const [antallSum, setAntallSum] = useState();
  const [antallOnID, setAntallOnID] = useState();
  const { setOpenModal, getID, getImgUrl, type, getAntall, tools, setUpdate } =
    useContext(MyContext);

  const getToolWithID = tools.filter((item) => item._id === getID);

  const IdAntall = getToolWithID.map((item) => item.antall);

  const getInputValue = (e) => {
    if (e.target.innerHTML === "-") {
      setAntallInputCalc(antallInputCalc - 1);
    } else if (e.target.innerHTML === "+") {
      setAntallInputCalc(antallInputCalc + 1);
    } else if (e.target.innerHTML === "5") {
      setAntallInputCalc(antallInputCalc + 5);
    } else if (e.target.innerHTML === "10") {
      setAntallInputCalc(antallInputCalc + 10);
    } else if (e.target.innerHTML === "12") {
      setAntallInputCalc(antallInputCalc + 12);
    } else if (e.target.innerHTML === "0") {
      setAntallInputCalc(0);
    } else if (e.target.innerHTML === "-5") {
      setAntallInputCalc(antallInputCalc - 5);
    } else if (e.target.innerHTML === "-10") {
      setAntallInputCalc(antallInputCalc - 10);
    } else if (e.target.innerHTML === "-12") {
      setAntallInputCalc(antallInputCalc - 12);
    }
  };

  useEffect(() => {
    if (antallInputCalc >= 0) {
      setEditMode(true);
    } else {
      setEditMode(false);
    }
  }, [getInputValue]);

  useEffect(() => {}, [getInputValue]);

  const updateAntall = () => {
    api
      .patch(`/api/tool/editTool?ids=${getID}`, { antallSum: antallSum })
      .then((res) => {
        if (res.status === 200) {
          setUpdate(Math.random());
          setOpenModal(false);
        }
      });
  };

  useEffect(() => {
    setAntallSum(Number(IdAntall) + Number(antallInputCalc));
  }, [getID, getInputValue]);

  return (
    <>
      <div className="container">
        <div className="modal">
          <img className="img" src={getImgUrl} />
          <h1>{type}</h1>
          <p>Antall: {getAntall}</p>
          {!linck && (
            <div className="edit-container">
              <div>
                <button onClick={() => setEditMode(!editMode)}>
                  {editMode ? "Gå til trekk fra" : "Gå til legg til"}
                </button>
              </div>
              <div>
                <div className="btn-container">
                  {editMode ? (
                    <>
                      <button className="btn" onClick={getInputValue}>
                        -
                      </button>
                      <button className="btn" onClick={getInputValue}>
                        +
                      </button>
                      <button className="btn" onClick={getInputValue}>
                        5
                      </button>
                      <button className="btn" onClick={getInputValue}>
                        10
                      </button>
                      <button className="btn" onClick={getInputValue}>
                        12
                      </button>
                      <button className="btn" onClick={getInputValue}>
                        0
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btn2" onClick={getInputValue}>
                        -
                      </button>
                      <button className="btn2" onClick={getInputValue}>
                        +
                      </button>
                      <button className="btn2" onClick={getInputValue}>
                        -5
                      </button>
                      <button className="btn2" onClick={getInputValue}>
                        -10
                      </button>
                      <button className="btn2" onClick={getInputValue}>
                        -12
                      </button>
                      <button className="btn2" onClick={getInputValue}>
                        0
                      </button>
                    </>
                  )}
                </div>
                <div className="calc-container">
                  <h3>Antall lagt inn: {antallInputCalc}</h3>
                  <h3>Nytt antall: {antallSum}</h3>
                </div>
              </div>
            </div>
          )}

          <button onClick={() => setOpenModal(false)}>LUKK</button>
          <button onClick={updateAntall}>OPPDATER</button>
        </div>
      </div>

      <style jsx>
        {`
          .btn {
            height: 3rem;
            width: 3rem;
            border-radius: 2rem;
            border: none;
            background-color: #35aab9;
            font-size: 1.5rem;
            color: white;
          }
          .btn2 {
            height: 3rem;
            width: 3rem;
            border-radius: 2rem;
            border: none;
            background-color: #b94435;
            font-size: 1.5rem;
            color: white;
          }
          .btn-container {
            display: flex;
            justify-content: space-between;
            width: 20rem;
            margin: 1rem 0;
          }
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
          .edit-container {
            margin-top: 2rem;
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
            height: 3rem;
            margin: 0 1rem;
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
          @media (max-width: 2100px) {
            .modal {
              height: 50rem;
              width: 40rem;
            }
          }
          @media (max-width: 1778px) {
            .modal {
              height: 40rem;
              width: 30rem;
            }
          }
          @media (max-width: 1310px) {
            .modal {
              height: 40rem;
              width: 22rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ModalComponent;
