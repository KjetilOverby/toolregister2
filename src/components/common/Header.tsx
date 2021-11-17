import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="container">
        <Link href="/">
          <div className="menuBtnContainer">
            <MdKeyboardArrowLeft />
            <h5>MAIN MENU</h5>
          </div>
        </Link>
        <Link href="/segmenter">
          <h5 className="menu-tabs">Segmenter</h5>
        </Link>
        <Link href="/kniver">
          <h5 className="menu-tabs">Kniver</h5>
        </Link>
        <Link href="/sagblad">
          <h5 className="menu-tabs">Sagblad</h5>
        </Link>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
          }
          .menuBtnContainer {
            display: flex;
          }
          .menuBtnContainer:hover {
            cursor: pointer;
          }
          .menu-tabs {
            margin-left: 2rem;
            text-transform: uppercase;
          }
          .menu-tabs:hover {
            cursor: pointer;
          }
        `}
      </style>
    </>
  );
};

export default Header;