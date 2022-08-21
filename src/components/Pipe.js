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

const getWaterSymbolColor = (levelNumber) => {
  if (levelNumber === 0) return "#39FF14";
  if (levelNumber === 1) return "#FFF01F";
  if (levelNumber === 2) return "#FF3131";

  return "blue"
};

const getFlowSpeed = (levelNumber) => {
  if (levelNumber === 0) return 5;
  if (levelNumber === 1) return 3;
  if (levelNumber === 2) return 1;
};

const animateWaterFlow = (googleMapsPolyline, speed) => {
  let count = 0;

  window.setInterval(() => {
    count = (count + speed) % 200;

    const icons = googleMapsPolyline.get("icons");

    icons[0].offset = count / 2 + "%";
    googleMapsPolyline.set("icons", icons);
  }, 20);
}

/**
 * { id, level, startPoint, endPoint }
 * E.g. point: { lat: 37.772, lng: -122.214 }
 */
export const Pipe = ({ map, pipe }) => {
  const pipeCtx = useContext(PipeContext);
  const { id, flow_rate, geometries } = pipe;

  const waterSymbol = {
    path: "M 4.5 4.5 H 9 V 9 H 1 L 1 1",
    scale: 1,
    strokeColor: getWaterSymbolColor(flow_rate),
    fillColor: getWaterSymbolColor(flow_rate),
    fillOpacity: 0.2,
    strokeOpacity: 0.2,
    rotation: 0
  };

  const options = {
    ...DEFAULT_OPTIONS,
    strokeColor: getColor(flow_rate),
    path:
      geometries.map(item => {
        return {
          lat: parseFloat(item.latitude),
          lng: parseFloat(item.longitude)
        }
      }),
    icons: [
      {
        icon: waterSymbol,
        offset: "100%",
      },
    ]
  };


  const polyline = new google.maps.Polyline(options);

  polyline.addListener("click", () => {
    pipeCtx.setId(id);
  });

  useEffect(() => {
    if (!map) return;

    polyline.setMap(map);

    animateWaterFlow(polyline, getFlowSpeed(flow_rate));
  }, []);

  useEffect(() => {
    return () => polyline.setMap(null);
  }, []);

  return;
};
