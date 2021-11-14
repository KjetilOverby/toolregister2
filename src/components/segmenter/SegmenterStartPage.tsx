import React from "react";
import ToolCard from "../common/ToolCard";
import zdsegment from "../../../assets/segmenter/zdsegment.jpg";
import BoltCard from "../common/BoltCard";
import segmentBolt from "../../../assets/segmenter/bolt2.jpeg";
import fres14segment from "../../../assets/segmenter/vpsegment.jpg";

interface Props {
  img: StaticImageData;
}

const SegmenterStartPage: React.FC<Props> = () => {
  return (
    <>
      <div className="container">
        <div>
          <div>
            <h2>Reduserer segment (ZD1/ZD2)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={zdsegment}
              antallImaskin="5"
              type="venstre"
              title="Reduserer segment høyre"
            />
            <ToolCard
              img={zdsegment}
              antallImaskin="5"
              type="venstre"
              title="Reduserer segment venstre"
            />
            <BoltCard img={segmentBolt} />
          </div>
        </div>
        <div>
          <div>
            <h2>Fres 1/4 segment (VP32)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={fres14segment}
              antallImaskin="6"
              type="venstre"
              title="Reduserer segment høyre"
            />
            <ToolCard
              img={fres14segment}
              antallImaskin="6"
              type="venstre"
              title="Reduserer segment venstre"
            />
            <BoltCard img={segmentBolt} />
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

export default SegmenterStartPage;
