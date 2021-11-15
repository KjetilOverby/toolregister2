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
import v40kniv from "../../../assets/kniver/v40kniv.jpg";
import v40motst from "../../../assets/kniver/v40motsl.jpg";
import v25motst from "../../../assets/kniver/v25motst.jpg";
import v40Bolt from "../../../assets/kniver/v40Bolt.jpg";
import v40justSkruer from "../../../assets/kniver/v40justSkruer.jpg";
import vpp34kniv from "../../../assets/kniver/vpp34kniv.jpg";
import vpp34holder from "../../../assets/kniver/vpp34holder.jpg";
import vpp34motstH from "../../../assets/kniver/vpp34motstH.jpg";
import vpp34motstV from "../../../assets/kniver/vpp34motstV.jpg";
import vpp34Bolt from "../../../assets/kniver/vpp34Bolt.jpg";
import vpp34justSkrue from "../../../assets/kniver/vpp34justSkrue.jpg";
import vp34motst from "../../../assets/kniver/vp34motst.jpg";
import vp48motsH from "../../../assets/kniver/vp48motstH.jpg";
import vp48motsV from "../../../assets/kniver/vp48motstV.jpg";

interface Props {
  title: string;
  img: StaticImageData;
  antallImaskin: string;
  dim: string;
  maskin: string;
  antallTenner: string;
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
            <ToolCard
              title="Kniver"
              dim="92x105x12mm H945"
              antallTenner=""
              img={v40kniv}
              antallImaskin="30"
              maskin="ZD1/ZD2"
              type="kniv"
            />
            <ToolCard
              title="Motstål (første rekke)"
              img={v40motst}
              dim="92x80x30mm"
              antallTenner=""
              antallImaskin="30"
              maskin="ZD1/ZD2"
              type="V40-41-324"
            />
            <ToolCard
              title="Motstål (rekke 2 og 3)"
              img={v25motst}
              dim="92x80x22"
              antallImaskin="30"
              antallTenner=""
              maskin="ZD1/ZD2"
              type="V25-24-055"
            />
            <BoltCard img={v40Bolt} type="M20x45" antallImaskin="30" />
            <BoltCard img={v40justSkruer} type="M6x40" antallImaskin="60" />
            <div style={{ width: "30rem" }}></div>
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Fres 1/4 (VP34/VPP34 ombygd)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Kniver"
              img={vpp34kniv}
              dim="41x105x8mm"
              antallTenner=""
              maskin="VP34/VPP34"
              antallImaskin="48"
              type="kniv"
            />
            <ToolCard
              title="Knivholder"
              img={vpp34holder}
              antallImaskin="48"
              dim=""
              antallTenner=""
              maskin="VP34/VPP34"
              type="VPS-28-087"
            />
            <ToolCard
              title="Motstål venstre"
              img={vpp34motstH}
              antallImaskin="24"
              dim="41x88,5x27,5mm"
              antallTenner=""
              maskin="VP34/VPP34"
              type="VPS-28-071"
            />
            <ToolCard
              title="motstål høyre"
              img={vpp34motstV}
              antallImaskin="24"
              antallTenner=""
              dim="41x88,5x27,5mm"
              maskin="VP34/VPP34"
              type="VPS-28-072"
            />
            <BoltCard
              img={vpp34Bolt}
              type="M20x60 unbraco"
              antallImaskin="48"
            />
            <BoltCard img={vpp34justSkrue} type="M5x25" antallImaskin="48" />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Fres 2/3 horizontal (VP34)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Kniv"
              dim=""
              img={fres2}
              antallImaskin="8"
              antallTenner=""
              type="kniv"
              maskin="VP34"
            />
            <ToolCard
              title="Motstål"
              img={vp34motst}
              dim=""
              antallImaskin="8"
              antallTenner=""
              maskin="VP34"
              type=""
            />
            <BoltCard
              img={vpp34Bolt}
              type="M20x60 unbraco"
              antallImaskin="16"
            />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Fres 3 Vertical (VP48)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Kniver"
              img={fres3}
              antallImaskin="8"
              dim="50x100x10mm"
              antallTenner=""
              maskin="VP48"
              type="kniv"
            />
            <ToolCard
              title="Motstål høyre"
              img={vp48motsH}
              dim="55x85x25x6mm"
              antallImaskin="8"
              antallTenner=""
              maskin="VP48"
              type="kniv"
            />
            <ToolCard
              title="Motstål venstre"
              img={vp48motsV}
              antallImaskin="8"
              antallTenner=""
              maskin="VP48"
              dim="55x85x25x6mm"
              type="kniv"
            />
            <BoltCard img={bolt} />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Råsortering/stikkhugger (Bruks)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Kniver"
              img={bruks}
              antallImaskin="2"
              type="kniv"
            />
            <ToolCard
              title="Motstål"
              img={noImage}
              antallImaskin="8"
              type="kniv"
            />
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
