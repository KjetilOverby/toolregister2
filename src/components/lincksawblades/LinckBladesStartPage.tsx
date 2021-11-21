import React from "react";
import ToolCard from "../common/ToolCard";
import mkv36 from "../../../assets/linckblad/mkv3.6.jpg";
import mkv38 from "../../../assets/linckblad/mkv3.8.jpg";
import mkv40 from "../../../assets/linckblad/mkv4.0.jpg";
import mkv42 from "../../../assets/linckblad/mkv4.2.jpg";
import mkv44 from "../../../assets/linckblad/mkv4.4.jpg";
import mkv46 from "../../../assets/linckblad/mkv4.6.jpg";

import vs66H from "../../../assets/linckblad/vs66H.jpg";
import vs66V from "../../../assets/linckblad/vs66V.jpg";
import vs66HF from "../../../assets/linckblad/vs66FlensH.jpg";
import vs66VF from "../../../assets/linckblad/vs66FlensV.jpg";
import nBlad from "../../../assets/linckblad/nBlad.jpg";
import nessjoH from "../../../assets/linckblad/nessjoH.jpg";

const LinckBladesStartPage = () => {
  return (
    <>
      <div className="container">
        <div>
          <div>
            <h2>MKV delingssag</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={mkv36}
              antallImaskin=""
              antallTenner="30"
              type="Kanefusa Hi-MAX"
              dim="Ø445x2,2-3,6 ø150"
              maskin="MKV"
              title="Kanefusa MKV 2,2-3,6"
            />
            <ToolCard
              img={mkv38}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa Hi-MAX"
              dim="Ø445x2,4-3,8 ø150"
              maskin="MKV"
              title="Kanefusa MKV 2,4-3,8"
            />
            <ToolCard
              img={mkv40}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa TIMBERMAX"
              dim="Ø445x2,6-4,0 ø150"
              maskin="MKV"
              title="Kanefusa MKV 2,6-4,0"
            />
            <ToolCard
              img={mkv42}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa TIMBERMAX"
              dim="Ø445x2,8-4,2 ø150"
              maskin="MKV"
              title="Kanefusa MKV 2,8-4,2"
            />
            <ToolCard
              img={mkv44}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa Hi-MAX"
              dim="Ø445x3,0-4,4 ø150"
              maskin="MKV"
              title="Kanefusa MKV 3,0-4,4"
            />
            <ToolCard
              img={mkv46}
              antallImaskin=""
              antallTenner="36"
              type="Kanefusa Hi-MAX"
              dim="Ø510x3,2-4,6 ø150"
              maskin="MKV"
              title="Kanefusa MKV 3,2-4,6"
            />
          </div>
        </div>
        <div>
          <div>
            <h2>Bordsag (VS-66)</h2>
            <hr />
          </div>
          <div className="machine-container">
            <ToolCard
              img={vs66H}
              antallImaskin="2"
              antallTenner="27"
              type="Kanefusa HM Himax"
              dim="Ø475x3,6/5,0 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 høyre"
            />
            <ToolCard
              img={vs66V}
              antallImaskin="2"
              antallTenner="27"
              type="Kanefusa HM Himax"
              dim="Ø475x3,6/5,0 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 venstre"
            />
            <ToolCard
              img={nBlad}
              antallImaskin="4"
              antallTenner="30"
              type="Kanefusa Hi-MAX"
              dim="Ø475x3,2/4,8 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 N-blad"
            />
            <ToolCard
              img={vs66HF}
              antallImaskin="2"
              antallTenner="24"
              type="Kanefusa Hi-MAX"
              dim="Ø475x3,6/5,0/6,8 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 høyre flensblad"
            />
            <ToolCard
              img={vs66VF}
              antallImaskin="2"
              antallTenner="24"
              type="Kanefusa Hi-MAX"
              dim="Ø475x3,6/5,0/6,8 ø120"
              maskin="VS-66"
              title="Kanefusa VS-66 venstre flensblad"
            />
            <ToolCard
              img={nessjoH}
              antallImaskin="2"
              antallTenner="27"
              type=""
              dim="Ø475x3,6/5,0 ø120"
              maskin="VS-66"
              title="Nässjö VS-66 venstre"
            />
            <ToolCard
              img={nessjoH}
              antallImaskin="2"
              antallTenner="27"
              type=""
              dim="Ø475x3,6/5,0 ø120"
              maskin="VS-66"
              title="Nässjö VS-66 høyre"
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

export default LinckBladesStartPage;
