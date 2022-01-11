import React, { useEffect, useState } from "react";
import HeaderComponent from "../src/components/common/HeaderStartPage";
import PieChartsWaste from "../src/components/omloddinger/PieChartsWaste";
const axios = require("axios");
import Colors from "../config/Colors";
import CalendarPicker from "../src/components/common/CalendarPicker";

const api = axios.create({
  baseURL: process.env.api,
});

const Omlodding = () => {
  const [deletedBlades, setDeletedBlades] = useState();

  const [yearRequest, setYearRequest] = useState(new Date().getFullYear());
  const [monthRequest, setMonthRequest] = useState(new Date().getMonth() + 1);
  const [monthRequest2, setMonthRequest2] = useState(new Date().getMonth() + 1);
  const [update, setUpdate] = useState(false);

  const [zero, setZero] = useState("");
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [more, setMore] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setUpdate(!update);
    }, 2200);
  });

  useEffect(() => {
    api
      .get(
        `/api/linck/deletedBlades?month=${monthRequest}&month2=${monthRequest2}&yearRequest=${yearRequest}`
      )
      .then(function (response) {
        setDeletedBlades(response.data.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, [monthRequest, yearRequest]);

  useEffect(() => {
    if (deletedBlades) {
      setZero(deletedBlades.filter((item) => item.wasteNumberOfRetip === "0"));
      setOne(deletedBlades.filter((item) => item.wasteNumberOfRetip === "1"));
      setTwo(deletedBlades.filter((item) => item.wasteNumberOfRetip === "2"));
      setThree(deletedBlades.filter((item) => item.wasteNumberOfRetip === "3"));
      setFour(deletedBlades.filter((item) => item.wasteNumberOfRetip === "4"));
      setMore(deletedBlades.filter((item) => item.wasteNumberOfRetip > 4));
    }
  }, [update]);

  return (
    <>
      <div className="container">
        <div className="header-container">
          <HeaderComponent />
        </div>
        <div className="image-container">
          <h1 className="image-header">Omlodding</h1>
        </div>
        <div className="content-container">
          <div className="date-picker-container">
            <CalendarPicker
              month={monthRequest}
              year={yearRequest}
              setMonthRequest={setMonthRequest}
              setMonthRequest2={setMonthRequest2}
              setYearRequest={setYearRequest}
              setUpdate={setUpdate}
              update={update}
            />
          </div>

          <div className="chart-container">
            <div className="text-container">
              <h3 className="header mb">
                Omlodding vrakede blad ({deletedBlades && deletedBlades.length})
              </h3>
              <p className="text">
                lorem ipsum dolor sit amet, consectetur adip, lorem ipsum dolor
                sit amet, lorem ipsum dolor sit amet, consectetur adip lorem
                ipsum dolor sit ar adip lorem ipsum dolor sit amet, consectetur
                adip, lorem ipsum dolor sit amet, lorem ipsum dolor sit amet,
                consectetur adip
              </p>
            </div>
            <div className="piechart-waste-container">
              <PieChartsWaste
                zero={zero.length}
                one={one.length}
                two={two.length}
                three={three.length}
                four={four.length}
                more={more.length}
              />
              <div className="description-container">
                <div className="box-description-container">
                  <div className="color-box box1"></div>
                  <p className="waste-description">Nye blad</p>
                </div>
                <div className="box-description-container">
                  <div className="color-box box2"></div>
                  <p className="waste-description">1 omlodding</p>
                </div>
                <div className="box-description-container">
                  <div className="color-box box3"></div>
                  <p className="waste-description">2 omloddinger</p>
                </div>
                <div className="box-description-container">
                  <div className="color-box box4"></div>
                  <p className="waste-description">3 omloddinger</p>
                </div>
                <div className="box-description-container">
                  <div className="color-box box5"></div>
                  <p className="waste-description">4 omloddinger</p>
                </div>
                <div className="box-description-container">
                  <div className="color-box box6"></div>
                  <p className="waste-description">5 eller fler</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .color-box {
            height: 1rem;
            width: 1rem;
          }
          .box1 {
            background: ${Colors.zero};
          }
          .box2 {
            background: ${Colors.one};
          }
          .box3 {
            background: ${Colors.two};
          }
          .box4 {
            background: ${Colors.three};
          }
          .box5 {
            background: ${Colors.four};
          }
          .box6 {
            background: ${Colors.more};
          }
          .box-description-container {
            display: flex;
            align-items: center;
          }
          .chart-container {
            display: grid;
            place-items: center;
            width: 30rem;
          }
          .container {
          }
          .content-container {
            margin: 2rem 25rem;
          }
          .date-picker-container {
            margin-bottom: 5rem;
          }
          .description-container {
          }
          .header {
            color: ${Colors.textColor};
          }
          .header-container {
            width: 100%;
            display: flex;
            justify-content: center;
            grid-area: top;
          }
          .image-container {
            background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
              url("https://images.unsplash.com/photo-1569950044272-e04b4b26300a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80");
            height: 20rem;
            background-position: 40%;
            background-repeat: no-repeat;
            background-size: cover;
            display: grid;
            place-items: center;
            grid-area: middle;
          }
          .image-header {
            font-size: 4rem;
            color: white;
            font-weight: 100;
          }
          .piechart-waste-container {
            display: grid;
            grid-template-columns: 22rem 1fr;
            width: 30rem;
            place-items: center;
          }
          .text {
            color: ${Colors.textColor};
            text-align: center;
          }
          .text-container {
            display: grid;
            place-items: center;
          }
          .waste-description {
            margin-left: 0.5rem;
          }
          @media (max-width: 2100px) {
            .content-container {
              margin: 2rem 15rem;
            }
          }
          @media (max-width: 1000px) {
            .image-container {
              height: 10rem;
            }
            .content-container {
              margin: 5rem 0;
            }
            .piechart-waste-container {
              grid-template-columns: auto;
              grid-template-rows: 22rem 1fr;
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default Omlodding;
