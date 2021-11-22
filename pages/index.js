import Head from "next/head";
import Image from "next/image";
import StartPage from "../src/components/startpage/StartPage";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StartPage header="" link="" />
    </div>
  );
};

export default Home;