import React, { useContext } from "react";
import ToolInputCard from "../../src/components/oversikt/ToolInputCard";
import { MyContext } from "../../src/contexts/MyContext";

const Toolinputedit = () => {
  const { toolwasteData, toolCreateData } = useContext(MyContext);

  return (
    <>
      <div className="container">
        <div>
          <h1>Vraket</h1>
          {toolwasteData &&
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
            margin: 1rem;
          }
        `}
      </style>
    </>
  );
};

export default Toolinputedit;
