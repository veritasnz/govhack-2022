import { useState } from "react";
import useSWR from "swr";
import { Liquid } from '@ant-design/plots';

export const Dashboard = ({ id }) => {
  const { data } = useSWR("", { refreshInterval: 1 });

  // if (!id) return;
  const config = {
    percent: 0.25,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 4,
    },
    wave: {
      length: 128,
    },
  };
  return (
    <div className="widget-grid">
      <Liquid {...config} />

    </div>
  );
};


