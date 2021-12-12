import "../styles/globals.css";
import { useState, useEffect } from "react";
import { MyContext } from "../src/contexts/MyContext";
const axios = require("axios");
import { Auth0Provider } from "@auth0/auth0-react";

const api = axios.create({
  baseURL: process.env.api,
});

function MyApp({ Component, pageProps }) {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const [userID, setUserID] = useState();

  const [openModal, setOpenModal] = useState(false);
  const [getID, setGetID] = useState();
  const [getAntall, setGetAntall] = useState();
  const [getImgUrl, setGetImgUrl] = useState();
  const [tools, setTools] = useState();
  const [type, setType] = useState();
  const [update, setUpdate] = useState();
  const toolCardBtnTitle = "REDIGER";

  const [toolwasteData, setToolwasteData] = useState();
  const [toolCreateData, setToolCreateData] = useState();

  const [antallInputCalc, setAntallInputCalc] = useState(0);

  // toolcount
  const [redSegmentH, setRedSegmentH] = useState();
  const [redSegmentV, setRedSegmentV] = useState();
  console.log();

  useEffect(() => {
    api
      .get("/api/tool/getToolregist")
      .then(function (response) {
        setTools(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [update]);

  const createDeletedData = () => {
    if (antallInputCalc === 0) {
      alert("Du må sette en verdi");
    } else if (antallInputCalc < 0) {
      api.post(`/api/tool/wastecreate?user=${userID.sub}`, {
        type: type,
        antall: getAntall,
        input: antallInputCalc,
        img: getImgUrl,
        date: new Date(),
      });
    } else if (antallInputCalc > 0) {
      api.post(`/api/tool/newToolCreate?user=${userID.sub}`, {
        type: type,
        antall: getAntall,
        input: antallInputCalc,
        img: getImgUrl,
        date: new Date(),
      });
    }
  };

  // Tool Edit Data
  useEffect(() => {
    api
      .get("/api/tool/getToolWaste")
      .then(function (response) {
        setToolwasteData(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [update]);

  useEffect(() => {
    api
      .get("/api/tool/getToolNew")
      .then(function (response) {
        setToolCreateData(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [update]);

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={typeof window !== "undefined" && window.location.origin}
    >
      <MyContext.Provider
        value={{
          openModal,
          setOpenModal,
          tools,
          getID,
          setGetID,
          setGetAntall,
          getAntall,
          setGetImgUrl,
          getImgUrl,
          setType,
          type,
          toolCardBtnTitle,
          setUpdate,
          update,
          setUserID,
          userID,
          createDeletedData,
          antallInputCalc,
          setAntallInputCalc,
          toolwasteData,
          toolCreateData,
          setRedSegmentH,
          setRedSegmentV,
          redSegmentH,
          redSegmentV,
        }}
      >
        <Component {...pageProps} />
      </MyContext.Provider>
    </Auth0Provider>
  );
}

export default MyApp;
