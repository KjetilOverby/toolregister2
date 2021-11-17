import React from "react";
import ToolCard from "../common/ToolCard";
import trimmerBord from "../../../assets/sagblad/trimmerBord.jpg";
import trimmerJusterverk from "../../../assets/sagblad/trimmerJusterverk.jpg";
import eksaktKappe from "../../../assets/sagblad/eksaktKappe.jpg";
import endekapp from "../../../assets/sagblad/endekapp.jpg";

const SagbladStartPage = () => {
  return (
    <>
      <div className="container">
        <div>
          <div>
            <h2 className="machine-header">Trimmer justerverk</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Trimmer"
              dim="ø500x4,0/2,8ø30mm -5˚"
              antallTenner="96"
              img={trimmerJusterverk}
              antallImaskin="21"
              maskin="-"
              type="V-SH0985"
            />
            <ToolCard
              title="Eksaktkappe"
              img={eksaktKappe}
              dim="ø400x3,5/2,5 ø30 -5˚"
              antallTenner="96"
              antallImaskin="1"
              maskin="Eksaktkappe"
              type="V-SH1003"
            />
            <ToolCard
              title="Endekapp"
              img={endekapp}
              dim="ø610x4,4/3,3-ø30 10˚"
              antallImaskin="30"
              antallTenner="96"
              maskin=""
              type="V-SH0675"
            />
          </div>
        </div>
        <div>
          <div>
            <h2 className="machine-header">Trimmer bordsortering</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              title="Trimmer bordsortering"
              img={trimmerBord}
              dim="ø450x4,0/2,8 ø30"
              antallImaskin="6"
              antallTenner="72"
              maskin=""
              type="V-SH1008"
            />
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

export default SagbladStartPage;
