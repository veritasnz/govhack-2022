import { useEffect, useContext, useRef, useState } from "react";
import useSWR from "swr";
import { Select } from "antd";
import axios from "axios";

import { PipeContext } from "../context/PipeContext";
import { WaterLevel } from "./Widgets/WaterLevel";
import { WaterVelocity } from "./Widgets/WaterVelocity";
import { WaterTimeSeries } from "./Widgets/WaterTimeSeries";

export const Dashboard = ({ id }) => {
  const pipeCtx = useContext(PipeContext);
  const timer = useRef(null);
  const index = useRef(Math.floor(Math.random() * 40000));
  const [waterLevel, setWaterLevel] = useState(undefined);
  const [randomSeed, setRandomSeed] = useState(Math.random());
  const [randomProfile, setRandomProfile] = useState(Math.floor(Math.random() * 9))

  useEffect(() => {
    timer.current = setTimeout(() => {
      pollSomething()
    }, 1000);
    return () => clearTimeout(timer.current);
  }, []);

  function pollSomething() {
    axios.get(
      "https://a4f1-131-203-239-250.au.ngrok.io/sensor/generate",
      {
        params: {
          start_idx: index.current,
          end_idx: index.current + 1,
          seed: randomSeed,
          noise_profile_idx: randomProfile
        }
      }
    ).then(res => {
      index.current = index.current + 1;
      setWaterLevel(res.data.values[0]);
      timer.current = setTimeout(() => {
        pollSomething()
      }, 1000);
    })
  }
  // const { data } = useSWR("", { refreshInterval: 1 });

  // if (!pipeCtx.id) {
  //   return <p>
  //     No pipe specified
  //   </p>;
  // }

  const data = {
    id: pipeCtx.id,
    level: 0.7049, // Added
    geometries: [
      {
        id: 1,
        latitude: 1.0,
        longitude: 1.0,
        level: 0.0,
        pipe: 0
      },
      {
        id: 2,
        latitude: 2.0,
        longitude: 2.0,
        level: 0.0,
        pipe: 0
      }
    ],
    asset_id: "000000",
    pipe_type: "Gravity",
    length: 10.0,
    shape_length: 0.0,
    district: "Christchurch",
    diameter: 1,
    material: "Unknown",
    depth: -1.0
  }

  return (
    <div className="widget-grid">
      <div className="widget">
        <Select defaultValue="1" style={{ width: "100%" }}>
          <Select.Option value="1">
            <span>Water Level (Current)</span>
          </Select.Option>
        </Select>
        <WaterLevel waterLevel={waterLevel} />
      </div>
      <div className="widget">
        <Select defaultValue="1" style={{ width: "100%" }}>
          <Select.Option value="1">
            <span>Water Level (Time Series)</span>
          </Select.Option>
        </Select>
        <WaterTimeSeries waterVelocity={data.level} />
      </div>
      <div className="widget">
        <Select defaultValue="1" style={{ width: "100%" }}>
          <Select.Option value="1">
            <span>Water Velocity</span>
          </Select.Option>
        </Select>
        <WaterVelocity waterVelocity={data.level} />
      </div>
    </div>
  );
};


