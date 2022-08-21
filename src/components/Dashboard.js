import { useEffect, useContext, useRef, useState } from "react";
import useSWR from "swr";
import { Select } from "antd";
import axios from "axios";

import { PipeContext } from "../context/PipeContext";
import { WaterLevel } from "./Widgets/WaterLevel";
import { WaterVelocity } from "./Widgets/WaterVelocity";
import { WaterTimeSeries } from "./Widgets/WaterTimeSeries";

const POLLRATE = 1;
const NITEMS = 10000;

export const Dashboard = () => {
  const timer = useRef(null);
  const index = useRef(0);
  const currentData = useRef([]);
  const randomNextIndex = useRef(Math.floor(Math.random() * 40000));
  const [waterLevel, setWaterLevel] = useState(undefined);
  const [randomSeed, setRandomSeed] = useState(Math.random());
  const [randomProfile, setRandomProfile] = useState(Math.floor(Math.random() * 9))

  useEffect(() => {
    timer.current = setTimeout(() => {
      pollSomething()
    }, POLLRATE);

    return () => clearTimeout(timer.current);
  }, []);

  function pollSomething() {
    if ((index.current % NITEMS) == 0) {
      axios.get(
        process.env.NEXT_PUBLIC_ENDPOINT + "/sensor/generate/",
        {
          params: {
            start_idx: randomNextIndex.current,
            end_idx: randomNextIndex.current + NITEMS,
            seed: randomSeed,
            noise_profile_idx: randomProfile
          }
        }
      ).then(res => {
        index.current = 1;
        randomNextIndex.current = randomNextIndex.current + NITEMS;
        setWaterLevel(res.data.values[0]);
        currentData.current = res.data.values;
        timer.current = setTimeout(() => {
          pollSomething()
        }, POLLRATE);
      });
    } else {
      setWaterLevel(currentData.current[index.current]);
      index.current = index.current + 1;
      timer.current = setTimeout(() => {
        pollSomething()
      }, POLLRATE);
    }
  }

  return (
    <div className="widget-grid">
      <div className="widget">
        <Select defaultValue="1" style={{ width: "100%" }}>
          <Select.Option value="1">
            <span>Water Level (Current)</span>
          </Select.Option>
        </Select>
        <WaterLevel
          index={index.current}
          waterLevel={waterLevel}
        />
      </div>
      <div className="widget">
        <Select defaultValue="1" style={{ width: "100%" }}>
          <Select.Option value="1">
            <span>Water Level (Time Series)</span>
          </Select.Option>
        </Select>
        <WaterTimeSeries latestWaterLevel={waterLevel} />
      </div>
      <div className="widget">
        <Select defaultValue="1" style={{ width: "100%" }}>
          <Select.Option value="1">
            <span>Water Velocity</span>
          </Select.Option>
        </Select>
        <WaterVelocity index={index.current} />
      </div>
    </div>
  );
};


