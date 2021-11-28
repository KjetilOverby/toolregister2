import "../styles/globals.css";
import { useState, useEffect } from "react";
import { MyContext } from "../src/contexts/MyContext";
const axios = require("axios");

const api = axios.create({
  baseURL: process.env.api,
});

function MyApp({ Component, pageProps }) {
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
      }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
