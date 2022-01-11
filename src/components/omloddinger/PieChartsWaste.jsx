import React from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Colors from "../../../config/Colors";

const PieChartsWaste = ({ zero, one, two, three, four, more }) => {
  const data01 = [
    { name: "Group A", value: zero, fill: Colors.zero },
    { name: "Group B", value: one, fill: Colors.one },
    { name: "Group C", value: two, fill: Colors.two },
    { name: "Group D", value: three, fill: Colors.three },
    { name: "Group D", value: four, fill: Colors.four },
    { name: "Group D", value: more, fill: Colors.more },
  ];

  return (
    <>
      <div className="container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={110}
              innerRadius={70}
              label={true}
              paddingAngle={2}
            />
            <Pie
              data={data01}
              outerRadius={68}
              innerRadius={20}
              paddingAngle={2}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <style jsx>
        {`
          .container {
            width: 20rem;
            height: 20rem;
          }
        `}
      </style>
    </>
  );
};

export default PieChartsWaste;
