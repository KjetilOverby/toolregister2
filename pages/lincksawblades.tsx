import React, { useEffect, useState } from "react";
import axios from "axios";
const api = axios.create({
  baseURL: process.env.api,
});

const lincksawblades: React.FC = () => {
  // const [linckBlades, setLinckBlades] = useState<any>("");
  // useEffect(() => {
  //   try {
  //     api.get(`/api/linck/linckblades`).then((res) => {
  //       setLinckBlades(res.data.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <>
      <div className="container">Sagbladregister for Linck</div>
      {/* {linckBlades && linckBlades.map((item: any) => <p>{item.serial}</p>)} */}
      <style jsx>
        {`
          .container {
          }
        `}
      </style>
    </>
  );
};

export default lincksawblades;
