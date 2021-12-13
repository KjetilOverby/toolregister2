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
  const [vpp34SegH, setVpp34SegH] = useState();
  const [vpp34SegV, setVpp34SegV] = useState();
  const [vp34SegH, setVp34SegH] = useState();
  const [vp34SegV, setVp34SegV] = useState();
  const [vp48segH, setVp48segH] = useState();
  const [vp48segV, setVp48segV] = useState();
  const [reduserKniv, setReduserKniv] = useState();
  const [motstV40, setMotstV40] = useState();
  const [motstV25, setMotstV25] = useState();
  const [vpp34Kniv, setVpp34Kniv] = useState();
  const [trimmerJust, setTrimmerJust] = useState();
  const [eksaktKapp, setEksaktKapp] = useState();
  const [vpp32Knivholder, setVpp32Knivholder] = useState();
  console.log(vpp32Knivholder);
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
    setUpdate(Math.random());
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
          setTrimmerJust,
          trimmerJust,
          eksaktKapp,
          setEksaktKapp,
          vpp34SegH,
          setVpp34SegH,
          vpp34SegV,
          setVpp34SegV,
          vp34SegH,
          setVp34SegH,
          vp34SegV,
          setVp34SegV,
          vp48segH,
          setVp48segH,
          vp48segV,
          setVp48segV,
          reduserKniv,
          setReduserKniv,
          motstV40,
          setMotstV40,
          motstV25,
          setMotstV25,
          vpp34Kniv,
          setVpp34Kniv,
          vpp32Knivholder,
          setVpp32Knivholder,
        }}
      >
        <Component {...pageProps} />
      </MyContext.Provider>
    </Auth0Provider>
  );
}

export default MyApp;
