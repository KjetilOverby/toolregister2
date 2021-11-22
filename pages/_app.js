import "../styles/globals.css";
import { useState } from "react";
import { MyContext } from "../src/contexts/MyContext";

function MyApp({ Component, pageProps }) {
  const [openModal, setOpenModal] = useState(true);
  return (
    <MyContext.Provider value={{ openModal, setOpenModal }}>
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}

export default MyApp;
