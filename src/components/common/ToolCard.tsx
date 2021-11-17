import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  img: StaticImageData;
  antallImaskin: string;
  type: string;
  antallTenner: string;
  maskin: string;
  dim: string;
}

const ToolCard: React.FC<Props> = ({
  title,
  img,
  antallImaskin,
  type,
  antallTenner,
  maskin,
  dim,
}) => {
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
              <p className="antall">Antall totalt: 80</p>
              <p>Type: {type}</p>
              <p>Dim: {dim}</p>
              {antallTenner && <p>Antall tenner: {antallTenner}</p>}
              <p>Antall i maskin: {antallImaskin}</p>
              <p>Maskin: {maskin}</p>
              <p className="vrak">Antall vraket i år: 10</p>
              <p className="nye">Antall nye i år: 20</p>
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
            width: 15rem;
            margin-right: 1rem;
            border-radius: 15px;
            overflow: hidden;
            height: 11rem;
          }
          .img-text-container {
            display: flex;
          }
          .antall {
            color: #0a50a0;
          }
          .vrak {
            color: red;
          }
          .nye {
            color: #218d57;
          }
          @media screen and (max-width: 756px) {
            .img-text-container {
              flex-direction: column;
            }
            .img-container {
              width: 100%;
              height: 22rem;
            }
          }
        `}
      </style>
    </>
  );
};

export default ToolCard;
