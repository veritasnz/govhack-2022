import { useContext, useEffect, useState } from "react";
import { PipeContext } from "../context/PipeContext";

const DEFAULT_OPTIONS = {
  geodesic: true,
  strokeOpacity: 1.0,
  strokeWeight: 4,
  clickable: true,
};

const getColor = (levelNumber) => {
  if (levelNumber === 0) return "green";
  if (levelNumber === 1) return "yellow";
  if (levelNumber === 2) return "red";

  return "blue"
};

/**
 * { id, level, startPoint, endPoint }
 * E.g. point: { lat: 37.772, lng: -122.214 }
 */
export const Pipe = ({ map, pipe }) => {
  const pipeCtx = useContext(PipeContext);
  const { id, flow_rate, geometries } = pipe;

  const options = {
    ...DEFAULT_OPTIONS,
    strokeColor: getColor(flow_rate),
    path:
      geometries.map(item => {
        return {
          lat: parseFloat(item.latitude),
          lng: parseFloat(item.longitude)
        }
      })
  };

  const polyline = new google.maps.Polyline(options);

  polyline.addListener("click", () => {
    pipeCtx.setId(id);
  });

  useEffect(() => {
    if (!map) return;

    polyline.setMap(map);
  }, []);

  useEffect(() => {
    return () => polyline.setMap(null);
  }, []);

  return;
};
