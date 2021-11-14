import React from "react";
import red from "../../../assets/kniver/red.jpeg";
import fres1 from "../../../assets/kniver/fres.jpeg";
import fres2 from "../../../assets/kniver/fres1.jpeg";
import fres3 from "../../../assets/kniver/fres3.jpeg";
import bruks from "../../../assets/kniver/bruks.jpeg";
import noImage from "../../../assets/no_image.png";
import ToolCard from "../common/ToolCard";
import BoltCard from "../common/BoltCard";
import bolt from "../../../assets/bolt.webp";

interface Props {
  title: string;
  img: StaticImageData;
  antallImaskin: string;
}

const KniverStartpage: React.FC<Props> = () => {
  return (
    <>
      <div className="container">
        <div>
          <div>
            <h2 className="machine-header">Reduserere (ZD)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard title="Kniver" img={red} antallImaskin="30" />
            <ToolCard
              title="Motstål (første rekke)"
              img={noImage}
              antallImaskin="30"
            />
            <ToolCard
              title="Motstål (rekke 2 og 3)"
              img={noImage}
              antallImaskin="30"
            />
            <BoltCard img={bolt} />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Fres 1/4 (VPN34)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard title="Kniver" img={fres1} antallImaskin="48" />
            <ToolCard title="Knivholder" img={noImage} antallImaskin="48" />
            <ToolCard
              title="Motstål venstre"
              img={noImage}
              antallImaskin="48"
            />
            <ToolCard title="motstål høyre" img={noImage} antallImaskin="48" />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Fres 2/3 horizontal</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard title="Kniv" img={fres2} antallImaskin="8" />
            <ToolCard title="Motstål" img={noImage} antallImaskin="8" />
            <BoltCard img={bolt} />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Fres 3 Vertical</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard title="Kniver" img={fres3} antallImaskin="8" />
            <ToolCard title="Motstål" img={noImage} antallImaskin="8" />
            <BoltCard img={bolt} />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Råsortering/stikkhugger (Bruks)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard title="Kniver" img={bruks} antallImaskin="2" />
            <ToolCard title="Motstål" img={noImage} antallImaskin="8" />
            <BoltCard img={bolt} />
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
          }

          .machine-container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
};

export default KniverStartpage;
