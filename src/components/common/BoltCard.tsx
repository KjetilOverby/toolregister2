import React from "react";
import Image from "next/image";

interface Props {
  img: StaticImageData;
}

const BoltCard: React.FC<Props> = ({ img }) => {
  return (
    <>
      <div className="container">
        <div>
          <h4 className="header">Bolt</h4>
          <div className="img-text-container">
            <div className="img-container">
              <Image src={img} />
            </div>
            <div>
              <p>Antall totalt: 80</p>
              <p>Type: M20 10mm</p>
              <p>Antall i maskin: 10</p>
              <p>Første rekke: 20.06.2021</p>
              <p>Andre rekke: 20.06.2021</p>
              <p>Tredje rekke: 20.06.2021</p>
              <p>Fjerde rekke: 20.06.2021</p>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            margin-bottom: 4rem;
            min-width: 30rem;
          }
          .header {
            margin: 1rem 0;
            font-size: 1.2rem;
          }
          .img-container {
            width: 12rem;
            margin-right: 1rem;
          }
          .img-text-container {
            display: flex;
          }
          @media screen and (max-width: 756px) {
            .img-text-container {
              flex-direction: column;
            }
            .img-container {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default BoltCard;
