import React, { useContext, useEffect, useState } from "react";
import HeaderStartPage from "../src/components/common/HeaderStartPage";
import LinckCards from "../src/components/LinckSearch/LinckCards";
import { MyContext } from "../src/contexts/MyContext";
import search from "../assets/lincksearch/kikkert.jpg";
import Image from "next/image";
import ModalComponentEdit from "../src/components/common/ModalComponentEdit";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiRapidshareArrow } from "react-icons/gi";
import dateFormat, { masks } from "dateformat";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

const Lincksearch = () => {
  const {
    linckBlades,
    userID,
    setLinckUpdate,
    linckUpdate,
    getType,
    setGetType,
    getNumberOfRetip,
    setGetNumberOfRetip,
  } = useContext(MyContext);
  const [filteredBlades, setFilteredBlades] = useState();
  const [searchInput, setSearchInput] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openRetipModal, setOpenRetipModal] = useState(false);
  const [getSerial, setGetSerial] = useState();
  const [linckID, setLinckID] = useState();
  const [deletedBlades, setDeletedBlades] = useState();
  const [wasteMonth, setWasteMonth] = useState(new Date().getMonth() + 1);
  const [namedMonth, setNamedMonth] = useState();
  const [wasteUpdate, setWasteUpdate] = useState(false);
  const currentYear = new Date().getFullYear();
  const [wasteListColor, setWasteListColor] = useState("grey");

  useEffect(() => {
    switch (wasteMonth) {
      case 1:
        setNamedMonth("januar");
        break;
      case 2:
        setNamedMonth("februar");
        break;
      case 3:
        setNamedMonth("mars");
        break;
      case 4:
        setNamedMonth("april");
        break;
      case 5:
        setNamedMonth("mai");
        break;
      case 6:
        setNamedMonth("juni");
        break;
      case 7:
        setNamedMonth("juli");
        break;
      case 8:
        setNamedMonth("august");
        break;
      case 9:
        setNamedMonth("september");
        break;
      case 10:
        setNamedMonth("oktober");
        break;
      case 11:
        setNamedMonth("november");
        break;
      case 12:
        setNamedMonth("desember");
        break;
    }
  }, [wasteMonth]);
  const monthCountDownHandler = () => {
    setWasteMonth(wasteMonth - 1);
    if (wasteMonth < 2) {
      setWasteMonth(12);
    }
  };
  const monthCountUpHandler = () => {
    setWasteMonth(wasteMonth + 1);
    if (wasteMonth >= 12) {
      setWasteMonth(1);
    }
  };

  useEffect(() => {
    if (linckBlades) {
      setFilteredBlades(
        linckBlades.filter((item) => item.serial.includes(searchInput))
      );
    }
  }, [searchInput]);

  useEffect(() => {
    api
      .get(`/api/linck/deletedBlades?month=${wasteMonth}`)
      .then(function (response) {
        setDeletedBlades(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [wasteMonth, wasteUpdate]);
  const createDeletedBladeHandler = () => {
    api
      .post(`/api/linck/createDeletedBlade/?user=${userID.sub}`, {
        type: getType,
        serial: getSerial,
        wasteNumberOfRetip: getNumberOfRetip,
        wasteDate: new Date(),
      })
      .then(function (response) {});
  };

  const deleteBladeHandler = () => {
    createDeletedBladeHandler();
    try {
      api
        .delete(`/api/linck/deleteBlade/?del=${linckID}&user=${userID.sub}`)
        .then((res) => {
          if (res.status === 200) {
            setOpenDeleteModal(false);
            setLinckUpdate(!linckUpdate);
            setSearchInput("");
            setWasteUpdate(!wasteUpdate);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  // SERVICE
  const [retipBlades, setRetipBlades] = useState();
  useEffect(() => {
    api
      .get(`/api/linck/service/serviceblades?month=${wasteMonth}`)
      .then(function (response) {
        setRetipBlades(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [wasteMonth, wasteUpdate]);

  const createServiceBladeHandler = () => {
    api
      .post(`/api/linck/service/createserviceBlade/?user=${userID.sub}`, {
        type: getType,
        serial: getSerial,

        serviceDate: new Date(),
      })
      .then(function (response) {});
  };

  const retipUpdateHandler = () => {
    api
      .post(
        `/api/linck/service/updateretip/?ids=${linckID}&user=${userID.sub}`,
        {
          type: getType,
          performer: "Stridsbergs",
          date: dateFormat(new Date(), "dd.mm.yyyy HH:MM"),
        }
      )
      .then(function (res) {
        if (res.status === 200) {
          setOpenRetipModal(false);
          setLinckUpdate(!linckUpdate);
          setTimeout(() => {
            setSearchInput("");
            setSearchInput(getSerial);
            setWasteUpdate(!wasteUpdate);
          }, 1600);
          createServiceBladeHandler();
        }
      });
  };

  return (
    <>
      {openDeleteModal && (
        <ModalComponentEdit
          title="Slette"
          cancel={setOpenDeleteModal}
          icon={<RiDeleteBin6Line style={{ color: "red", fontSize: "2rem" }} />}
          btnBorder="red"
          actionBtnTxt="SLETT"
          description="Slettingen er permanent og kan ikke reverseres."
          actionHover="#a34a4a60"
          getSerial={getSerial}
          actionBtn={deleteBladeHandler}
        />
      )}
      {openRetipModal && (
        <ModalComponentEdit
          title="Omlodding"
          cancel={setOpenRetipModal}
          icon={
            <GiRapidshareArrow
              style={{ color: "cornflowerblue", fontSize: "2.5rem" }}
            />
          }
          btnBorder="cornflowerblue"
          actionBtnTxt="OPPDATER"
          description="Legg til omlodding fra Stridsbergs med dagens dato."
          getSerial={getSerial}
          actionHover="#a34a4a60"
          actionBtn={retipUpdateHandler}
        />
      )}
      <div className="container">
        <div className="header-container">
          <HeaderStartPage />
        </div>
        <div className="image-container">
          <input
            onChange={(e) => setSearchInput(e.target.value)}
            className="input"
            placeholder="Search"
            value={searchInput}
          />
        </div>
        {searchInput && searchInput.length >= 2 && filteredBlades.length > 0 ? (
          <div className="blades-container">
            {filteredBlades &&
              filteredBlades.map((blade) => {
                return (
                  <div key={blade._id}>
                    <LinckCards
                      keyID={blade._id}
                      serial={blade.serial}
                      type={blade.type}
                      regDate={blade.registDate}
                      updated={blade.updated}
                      performer={blade.performer}
                      date={blade.date}
                      setOpenDeleteModal={setOpenDeleteModal}
                      setOpenRetipModal={setOpenRetipModal}
                      setGetSerial={setGetSerial}
                      setLinckID={setLinckID}
                      setGetType={setGetType}
                      setGetNumberOfRetip={setGetNumberOfRetip}
                      wasteUpdate={wasteUpdate}
                    />
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="img-text-container">
            <h1 className="blades-header">Ingen søk eller treff</h1>
            <div className="bladesImg-container">
              <Image src={search} />
            </div>
            <div className="waste-container">
              <h5>
                Vrakede blad {namedMonth} {currentYear}
              </h5>
              <MdKeyboardArrowLeft onClick={monthCountDownHandler} />
              <MdKeyboardArrowRight onClick={monthCountUpHandler} />
              <p className="waste-list">
                Antall: {deletedBlades && deletedBlades.length}
              </p>
              {deletedBlades &&
                deletedBlades.map((item) => {
                  return (
                    <>
                      <p key={item._id} className="waste-list">
                        {item.serial}, {item.type}, Omloddinger:{" "}
                        {item.wasteNumberOfRetip}, dato:{" "}
                        {dateFormat(item.wasteDate, "dd.mm.yyyy HH:MM")}
                      </p>
                    </>
                  );
                })}
              <h5 style={{ margin: "1rem 0" }}>
                Omloddede blad {namedMonth} {currentYear}
              </h5>
              <p className="waste-list">
                Antall: {retipBlades && retipBlades.length}
              </p>
              {retipBlades &&
                retipBlades.map((item) => {
                  return (
                    <>
                      <p key={item._id} className="waste-list">
                        {item.serial}, {item.type},{" "}
                        {dateFormat(item.serviceDate, "dd.mm.yyyy HH:MM")}
                      </p>
                    </>
                  );
                })}
            </div>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .blades-container {
            display: flex;
            flex-direction: column;
            grid-area: bottom;
            max-width: 100vw;
          }

          .bladesImg-container {
            width: 50rem;
          }
          .blades-header {
            margin-bottom: 2rem;
          }
          .container {
            display: grid;
            grid-template-rows: 6rem 20rem 1fr;
            grid-template-areas:
              "top"
              "middle"
              "bottom";
            min-height: 100vh;
            max-width: 100vw;
          }
          .image-container {
            background: url("https://images.unsplash.com/photo-1575108921227-641884169334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1407&q=80");
            height: 20rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
            grid-area: middle;
          }
          .img-text-container {
            display: flex;
            flex-direction: column;
            width: auto;
            justify-content: center;
            align-items: center;
            position: relative;
            margin: 1rem;
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
            grid-area: top;
          }
          .input {
            height: 3rem;
            width: 20rem;
            border-radius: 10px;
            border: none;
            font-size: 2rem;
            padding: 0.5rem;
            font-weight: 100;
            outline: none;
          }
          .waste-container {
            position: absolute;
            top: 0;
            left: 0;
          }
          .waste-list {
            color: grey;
            font-style: italic;
            font-size: 0.8rem;
            color: ${wasteListColor};
          }
          @media (max-width: 850px) {
            .bladesImg-container {
              width: 100vw;
            }
            .blades-container {
              margin-bottom: 0;
            }
            .container {
              grid-template-rows: 6rem 10rem 1fr;
            }
            .image-container {
              height: 10rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default Lincksearch;
