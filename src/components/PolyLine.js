import { useContext, useEffect, useState } from "react";
import { PulloutContext } from "../context/PulloutContext";

const DEFAULT_OPTIONS = {
  geodesic: true,
  strokeColor: "#FF0000",
  strokeOpacity: 1.0,
  strokeWeight: 2,
  clickable: true,
};

/**
 * { startPoint, endPoint }
 * E.g. point: { lat: 37.772, lng: -122.214 }
 */
export const PolyLine = ({ map, startPoint, endPoint, id }) => {
  const pullout = useContext(PulloutContext);

  const options = {
    ...DEFAULT_OPTIONS,
    path: [
      { lat: startPoint[0], lng: startPoint[1] },
      { lat: endPoint[0], lng: endPoint[1] },
    ],
  };

  const polyline = new google.maps.Polyline(options);

  polyline.addListener("click", () => {
    pullout.open(id);
  });

  useEffect(() => {
    if (!map) return;

    polyline.setMap(map);
  }, [polyline, map]);

  // useEffect(() => {
  //   if (!map) return;
  // }, [map]);

  return;
};
