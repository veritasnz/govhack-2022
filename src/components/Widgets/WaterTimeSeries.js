import React, { useState, useEffect, useRef } from "react";
import { Area } from '@ant-design/plots';


export const WaterTimeSeries = ({ latestWaterLevel }) => {
  const index = useRef(0);
  const data = useRef([]);
  const [x, setx] = useState({})

  useEffect(() => {
    if (data.current.length > 200) {
      data.current.shift();
    }
    data.current.push({
      time: index.current,
      level: Math.min(latestWaterLevel, 100)
    });
    index.current = index.current + 1;
    setx({});
  }, [latestWaterLevel]);

  const config = {
    xField: "time",
    yField: "level",
    color: "#16ABBD"
  };

  return (
    <div className='metric-container'>
      <Area
        data={data.current}
        {...config}
      />
    </div>
  )
}