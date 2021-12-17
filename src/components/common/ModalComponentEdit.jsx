import React from "react";
import styles from "../../../styles/common/ModalComponentEdit.module.css";

const ModalComponentEdit = ({ title, cancel, icon }) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.container}>
          <div className={styles.iconContainer}>{icon}</div>
          <div className={styles.modal}>
            <h1 className={styles.header}>
              {title} <span style={{ color: "orangered" }}>Serial</span>?
            </h1>
            <p className={styles.description}>description</p>
            <button className="btn1">btnText</button>
            <button className="btn2" onClick={() => cancel(false)}>
              Avbryt
            </button>
          </div>
        </div>
      </div>
      <style jsx>{`
        .btn1 {
          background: transparent;
          border: 1px solid blue;
          border-radius: 10px;
          padding: 0.4rem 0;
          color: black;
          transition: 0.5s;
          grid-row: 9/10;
          grid-column: 7/10;
          width: 5rem;
        }
        .btn1:hover {
          background: blue;
          cursor: pointer;
        }
        .btn2 {
          background: transparent;
          border: 1px solid blue;
          border-radius: 10px;
          padding: 0.4rem 0;
          color: black;
          transition: 0.5s;
          grid-row: 9/10;
          grid-column: 4/6;
          width: 5rem;
          margin-left: -2rem;
        }
        .btn2:hover {
          background: green;
          cursor: pointer;
        }
      `}</style>
    </>
  );
};

export default ModalComponentEdit;
