import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [openModal, setOpenModal] = useState("");
  return <Component {...pageProps} />;
}

export default MyApp;
