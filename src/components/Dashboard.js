import { useContext } from "react";
import useSWR from "swr";

import { PipeContext } from "../context/PipeContext";
import { WaterLevel } from "./Widgets/WaterLevel";

export const Dashboard = ({ id }) => {
  const pipeCtx = useContext(PipeContext);
  // const { data } = useSWR("", { refreshInterval: 1 });

  if (!pipeCtx.id) {
    return <p>
      No pipe specified
    </p>;
  }

  const data = {
    id: pipeCtx.id,
    level: 0.25, // Added
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
    <div>
      <p>Id: {data.id}</p>
      <WaterLevel waterLevel={data.level} />
    </div>
  );
};


