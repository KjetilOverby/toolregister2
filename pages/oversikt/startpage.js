import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import HeaderStartPage from "../../src/components/common/HeaderStartPage";
import { MyContext } from "../../src/contexts/MyContext";
import ToolWasteCount from "../../src/components/oversikt/ToolWasteCount";
import OversiktLinckBlad from "../../src/components/oversikt/OversiktLinckBlad";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

const oversikt = () => {
  const [linckBladesTab, setLinckBladesTab] = useState();
  const [serviceTab, setServiceTab] = useState();
  const [wasteTab, setWasteTab] = useState();
  const [newbladesTab, setNewbladesTab] = useState();

  useEffect(() => {
    api
      .get(`/api/oversikt/linckBladesTabell`)
      .then(function (response) {
        setLinckBladesTab(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  useEffect(() => {
    api
      .get(`/api/oversikt/serviceCountYearType`)
      .then(function (response) {
        setServiceTab(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  useEffect(() => {
    api
      .get(`/api/oversikt/wastecountType`)
      .then(function (response) {
        setWasteTab(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);
  useEffect(() => {
    api
      .get(`/api/oversikt/newBladesCountType`)
      .then(function (response) {
        setNewbladesTab(response.data.data);
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
          <HeaderStartPage color="black" />
        </div>

        <div className="image-container">
          <h1 className="header">Oversikt over vektøy</h1>
        </div>
        <div className="page-container">
          <Link href="/oversikt/toolinputedit">
            <p>Til input Edit</p>
          </Link>
          <div>
            <ToolWasteCount />
          </div>
          <div>
            <OversiktLinckBlad
              linckBladesTab={linckBladesTab}
              serviceTab={serviceTab}
              wasteTab={wasteTab}
              newbladesTab={newbladesTab}
            />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }
          .header {
            color: white;
            font-size: 4rem;
          }
          .header-container {
            display: grid;
            place-items: center;
          }
          .page-container {
            margin: 2rem 5rem;
          }
          .image-container {
            height: 20rem;
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1493515694075-fff2d464227d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
          }
          p {
            text-transform: uppercase;
          }
          p:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default oversikt;
