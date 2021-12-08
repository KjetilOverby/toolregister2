import React, { useContext, useEffect, useState } from "react";
import ToolInputCard from "../../src/components/oversikt/ToolInputCard";
import { MyContext } from "../../src/contexts/MyContext";
import HeaderStartPage from "../../src/components/common/HeaderStartPage";

const Toolinputedit = () => {
  const { toolwasteData, toolCreateData } = useContext(MyContext);

  const [type, setType] = useState();
  const [optionValue, setOptionValue] = useState("a");

  useEffect(() => {
    if (toolwasteData) {
      setType(toolwasteData.filter((item) => item.type === optionValue));
    }
  }, [toolwasteData, optionValue]);

  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };
  console.log(type);
  return (
    <>
      <HeaderStartPage />
      <div className="container">
        <div>
          <h1>Vraket</h1>
          <select name="tools" id="tools" onChange={handleChange}>
            <option value="a">Alle</option>
            <option value="Reduserer segment høyre">
              Reduserer segment høyre
            </option>
            <option value="Reduserer segment venstre">
              Reduserer segment venstre
            </option>
            <option value="Fres 1/4 segment høyre">
              Fres 1/4 segment høyre
            </option>
            <option value="Fres 1/4 segment venstre">
              Fres 1/4 segment venstre
            </option>
            <option value="Fres 2/3 segment høyre">
              Fres 2/3 segment høyre
            </option>
            <option value="Fres 2/3 segment venstre">
              Fres 2/3 segment venstre
            </option>
            <option value="Fres 3 segment høyre">Fres 3 segment høyre</option>
            <option value="Fres 3 segment venstre">
              Fres 3 segment venstre
            </option>
            <option value="Fres 3 segment venstre">
              Fres 3 segment venstre
            </option>
          </select>
          {optionValue !== "a"
            ? type.map((item) => {
                return (
                  <ToolInputCard
                    type={item.type}
                    antall={item.antall}
                    inputText="Antall slettet"
                    input={item.input}
                    date={item.date}
                    img={item.img}
                    color="linear-gradient(to top, #fff1f1 0%, #f8e2e2 100%)"
                    key={item._id}
                  />
                );
              })
            : optionValue === "a" &&
              toolwasteData &&
              toolwasteData.map((item) => {
                return (
                  <ToolInputCard
                    type={item.type}
                    antall={item.antall}
                    inputText="Antall slettet"
                    input={item.input}
                    date={item.date}
                    img={item.img}
                    color="linear-gradient(to top, #fff1f1 0%, #f8e2e2 100%)"
                    key={item._id}
                  />
                );
              })}
        </div>

        <div>
          <h1>Nye</h1>
          {toolCreateData &&
            toolCreateData.map((item) => {
              return (
                <ToolInputCard
                  type={item.type}
                  antall={item.antall}
                  inputText="Antall nye"
                  input={item.input}
                  date={item.date}
                  img={item.img}
                  color="linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);"
                  key={item._id}
                />
              );
            })}
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            margin: 2rem 35rem;
          }
          @media (max-width: 2100px) {
            .container {
              margin: 2rem 20rem;
            }
          }
          @media (max-width: 1800px) {
            .container {
              margin: 2rem 15rem;
            }
          }
          @media (max-width: 1500px) {
            .container {
              margin: 2rem 5rem;
            }
          }
          @media (max-width: 1142px) {
            .container {
              margin: 2rem 5rem;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
            }
          }
        `}
      </style>
    </>
  );
};

export default Toolinputedit;
