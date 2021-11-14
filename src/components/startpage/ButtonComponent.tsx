import React from "react";
import Link from "next/link";

interface Props {
  header: string;
  link: string;
}

const ButtonComponent: React.FC<Props> = ({ header, link }) => {
  return (
    <>
      <Link href={`${link}`}>
        <button className="container">{header}</button>
      </Link>
      <style jsx>
        {`
          @import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300;400&display=swap");
          .container {
            background: transparent;
            padding: 2rem;
            margin-bottom: 0.5rem;
            color: #fff;
            font-size: 1.5rem;
            font-weight: 100;
            transition: 0.5s;
            font-family: "Red Hat Mono", monospace;
          }
          .container:hover {
            cursor: pointer;
            background: rgba(112, 112, 112, 0.4);
          }
        `}
      </style>
    </>
  );
};

export default ButtonComponent;
