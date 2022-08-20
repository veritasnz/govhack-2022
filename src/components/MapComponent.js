import React, { useEffect, useRef, useState } from "react";
import { useZoomObserver } from "../hooks/useZoomObserver";
import { PolyLine } from "./Polyline";

/**
 *{
  center: google.maps.LatLngLiteral;
  zoom: number;
}
 */
export const MapComponent = ({ children, ...options }) => {
  const ref = useRef(null);

  const [map, setMap] = useState();
  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, options));
    }
  }, [ref, map]);

  useZoomObserver(map);

  return (
    <>
      <div ref={ref} className="map-wrapper" />
      <PolyLine
        map={map}
        id={1}
        startPoint={[-43.516508813449725, 172.60481119477708]}
        endPoint={[-43.542943375962224, 172.6611207508225]}
      />
    </>
  );
};
