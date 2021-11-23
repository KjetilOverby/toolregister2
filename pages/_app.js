import "../styles/globals.css";
import { useState, useEffect } from "react";
import { MyContext } from "../src/contexts/MyContext";
const axios = require("axios");

function MyApp({ Component, pageProps }) {
  const [openModal, setOpenModal] = useState(false);
  const [getID, setGetID] = useState();
  const [getAntall, setGetAntall] = useState();
  const [getImgUrl, setGetImgUrl] = useState();
  const [tools, setTools] = useState();
  const [type, setType] = useState();
  const toolCardBtnTitle = "REDIGER";

  useEffect(() => {
    axios
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
  }, []);

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
      }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
