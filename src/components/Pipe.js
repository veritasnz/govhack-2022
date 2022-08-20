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
export const Pipe = ({ map, pipe }) => {
  const pullout = useContext(PulloutContext);

  const options = {
    ...DEFAULT_OPTIONS,
    path: [
      { lat: pipe.startPoint[0], lng: pipe.startPoint[1] },
      { lat: pipe.endPoint[0], lng: pipe.endPoint[1] },
    ],
  };

  const polyline = new google.maps.Polyline(options);

  polyline.addListener("click", () => {
    pullout.open(pipe.id);
  });

  useEffect(() => {
    if (!map) return;

    polyline.setMap(map);
  }, []);

  useEffect(() => {
    return () => {
      polyline.setMap(null);
    };
  }, []);

  return;
};
