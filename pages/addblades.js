import React, { useEffect, useState } from "react";
import HeaderStartPage from "../src/components/common/HeaderStartPage";
const axios = require("axios");
import dateFormat, { masks } from "dateformat";

const api = axios.create({
  baseURL: process.env.api,
});

const Addblades = () => {
  const [newBlades, setNewBlades] = useState();
  const [createdMonth, setCreatedMonth] = useState(new Date().getMonth() + 1);
  console.log(newBlades);
  useEffect(() => {
    api
      .get(`/api/linck/newblades/createdBlades?month=${createdMonth}`)
      .then(function (response) {
        setNewBlades(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="header-container">
          <HeaderStartPage />
        </div>
        <div className="image-container"></div>
        <div className="newblades-main-container">
          <div className="newblades-container">
            {newBlades &&
              newBlades.map((item) => {
                return (
                  <>
                    <p className="newblades-text">
                      {item.serial}, {item.type},{" "}
                      {dateFormat(item.updated, "dd.mm.yyyy HH:MM")}
                    </p>
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: relative;
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
            grid-area: top;
          }
          .image-container {
            background: url("https://images.unsplash.com/photo-1636874541533-809577b9f9ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80");
            height: 20rem;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
            grid-area: middle;
          }

          .newblades-container {
            height: auto;
          }
          .newblades-main-container {
            width: auto;
            padding: 1rem;
            display: grid;
            grid-template-columns: 20rem 1fr;
          }
          .newblades-text {
            font-size: 0.8rem;
            margin: 0;
            font-style: italic;
            color: grey;
          }
        `}
      </style>
    </>
  );
};

export default Addblades;
