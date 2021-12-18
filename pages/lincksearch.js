import React, { useContext, useEffect, useState } from "react";
import HeaderStartPage from "../src/components/common/HeaderStartPage";
import LinckCards from "../src/components/LinckSearch/LinckCards";
import { MyContext } from "../src/contexts/MyContext";
import search from "../assets/lincksearch/kikkert.jpg";
import Image from "next/image";
import ModalComponentEdit from "../src/components/common/ModalComponentEdit";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiRapidshareArrow } from "react-icons/gi";

const Lincksearch = () => {
  const { linckBlades } = useContext(MyContext);
  const [filteredBlades, setFilteredBlades] = useState();
  const [searchInput, setSearchInput] = useState();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openRetipModal, setOpenRetipModal] = useState(false);

  useEffect(() => {
    if (linckBlades) {
      setFilteredBlades(
        linckBlades.filter((item) => item.serial.includes(searchInput))
      );
    }
  }, [searchInput]);
  return (
    <>
      {openDeleteModal && (
        <ModalComponentEdit
          title="Slett"
          cancel={setOpenDeleteModal}
          icon={<RiDeleteBin6Line style={{ color: "red", fontSize: "2rem" }} />}
          btnBorder="red"
          actionBtnTxt="SLETT"
          description="Slettingen er permanent og kan ikke reverseres."
          actionHover="#a34a4a60"
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
          actionHover="#a34a4a60"
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
            margin-top: 2rem;
            flex-direction: column;
            width: 100%;
            justify-content: center;
            align-items: center;
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
