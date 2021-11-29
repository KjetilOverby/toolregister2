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
  const [userID, setUserID] = useState()
 
  const [openModal, setOpenModal] = useState(false);
  const [getID, setGetID] = useState();
  const [getAntall, setGetAntall] = useState();
  const [getImgUrl, setGetImgUrl] = useState();
  const [tools, setTools] = useState();
  const [type, setType] = useState();
  const [update, setUpdate] = useState();
  const toolCardBtnTitle = "REDIGER";

 

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
        setUserID
      }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
    </Auth0Provider>
  );
}

export default MyApp;
