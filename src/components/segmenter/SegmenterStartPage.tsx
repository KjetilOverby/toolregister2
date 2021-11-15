import React from "react";
import ToolCard from "../common/ToolCard";
import BoltCard from "../common/BoltCard";
import segmentBolt from "../../../assets/segmenter/bolt2.jpeg";
import fres14segment from "../../../assets/segmenter/vpsegment.jpg";
import v40segmentH from "../../../assets/segmenter/v40segmentH.jpg";
import v40segmentV from "../../../assets/segmenter/v40segmentV.jpg";
import v40segmenterBolt from "../../../assets/segmenter/v40segmenterBolt.jpg";
import vpp32segmentH from "../../../assets/segmenter/vpp32segmentH.jpg";
import vpp32segmentV from "../../../assets/segmenter/vpp32segmentV.jpg";
import vpp32Bolt from "../../../assets/segmenter/vpp32Bolt.jpg";
import vp32segmentV from "../../../assets/segmenter/vp32segmentV.jpg";
import vp32segmentH from "../../../assets/segmenter/vp32segmentH.jpg";
import vp34segmentSkrue from "../../../assets/segmenter/vp34segmentskrue.jpg";
import vp48segmentH from "../../../assets/segmenter/vp48segmentH.jpg";
import vp48segmentV from "../../../assets/segmenter/vp48segmentV.jpg";

interface Props {
  img: StaticImageData;
  antallTenner: String;
  maskin: string;
  dim: string;
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
              img={v40segmentH}
              antallImaskin="5"
              antallTenner="14"
              type="V40 segment"
              dim="ø854,2/698-4,5/3,5"
              maskin="V40"
              title="Reduserer segment høyre"
            />
            <ToolCard
              img={v40segmentV}
              antallImaskin="5"
              antallTenner="14"
              type="V40 segment"
              dim="ø854,2/698-4,5/3,5"
              maskin="V40"
              title="Reduserer segment venstre"
            />
            <BoltCard img={v40segmenterBolt} type="M12x30" antallImaskin="15" />
          </div>
        </div>
        <div>
          <div>
            <h2>Fres 1/4 segment (VPS)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={vpp32segmentH}
              antallImaskin="6"
              antallTenner="10"
              type="VPS-28-053"
              dim="ø401/200,4-3,5/2,5/8,00"
              title="Fres 1/4 segment høyre"
              maskin="VP34/VPP34"
            />
            <ToolCard
              img={vpp32segmentV}
              antallImaskin="6"
              antallTenner="10"
              type="VPS-28-052"
              dim="ø401/200,4-3,5/2,5/8,00"
              title="Fres 1/4 segment venstre"
              maskin="VP34/VPP34"
            />
            <BoltCard img={vpp32Bolt} type="M10x20" antallImaskin="36" />
          </div>
        </div>
        <div>
          <div>
            <h2>Fres 2/3 segment horizontal</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={vp32segmentH}
              antallImaskin="4"
              antallTenner="8"
              type="VP34-08-056"
              dim="ø403/305-3,5/2,5/5,00"
              title="Fres 2/3 horizontal segment høyre"
              maskin="VP34"
            />
            <ToolCard
              img={vp32segmentV}
              antallImaskin="4"
              antallTenner="8"
              type="VP34-08-055"
              dim="ø403/305-3,5/2,5/5,00"
              title="Fres 2/3 horizontal segment venstre"
              maskin="VP34"
            />
            <BoltCard img={vp34segmentSkrue} type="M10x20" antallImaskin="36" />
          </div>
        </div>
        <div>
          <div>
            <h2>Fres 3 segment vertical</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={vp48segmentH}
              antallImaskin="4"
              antallTenner="8"
              type="VP48-08-008"
              dim="ø412/ø296-4,0/3,0/5,0"
              title="Fres 2/3 horizontal segment høyre"
              maskin="VP48"
            />
            <ToolCard
              img={vp48segmentV}
              antallImaskin="4"
              antallTenner="8"
              type="VP48-08-007"
              dim="ø412/ø296-4,0/3,0/5,0"
              title="Fres 2/3 horizontal segment venstre"
              maskin="VP48"
            />
            <BoltCard img={vp34segmentSkrue} type="M10x20" antallImaskin="36" />
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
