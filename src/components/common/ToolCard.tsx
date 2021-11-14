import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  img: StaticImageData;
  antallImaskin: string;
  type: string;
}

const ToolCard: React.FC<Props> = ({ title, img, antallImaskin, type }) => {
  return (
    <>
      <div className="container">
        <div>
          <h4 className="header">{title}</h4>
          <div className="img-text-container">
            <div className="img-container">
              <Image src={img} />
            </div>
            <div>
              <p>Antall totalt: 80</p>
              <p>Type: {type}</p>
              <p>Antall i maskin: {antallImaskin}</p>
              <p>Antall vraket i år: 10</p>
              <p>Antall nye i år: 20</p>
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

export default ToolCard;
