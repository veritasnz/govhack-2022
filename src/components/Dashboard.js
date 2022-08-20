import useSWR from "swr";
import { WaterLevel } from "./Widgets/WaterLevel";

export const Dashboard = ({ id }) => {
  const { data } = useSWR("", { refreshInterval: 1 });

  // if (!id) return;

  const waterLevel = 0.7;

  return (
    <div>
      <p>Id: {id}</p>
      <WaterLevel waterLevel={waterLevel} />
    </div>
  );
};


