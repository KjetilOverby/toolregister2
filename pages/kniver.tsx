import React from "react";

import KniverStartpage from "../src/components/kniver/KniverStartpage";
import red from "../assets/kniver/red.jpeg";

interface Props {
  img: StaticImageData;
}

const kniver: React.FC<Props> = () => {
  return (
    <>
      <div className="container">
        <h1 className="header">Kniver og motstål</h1>
        <KniverStartpage
          title=""
          img={red}
          antallImaskin=""
          antallTenner=""
          dim=""
          maskin=""
        />
      </div>
      <style jsx>
        {`
          .container {
            margin: 2rem 35rem;
          }
          .header {
            margin: 2rem 0 6rem 0;
          }
          @media (max-width: 2100px) {
            .container {
              margin: 2rem 10rem;
            }
          }
          @media (max-width: 756px) {
            .container {
              margin: 2rem 0rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default kniver;
