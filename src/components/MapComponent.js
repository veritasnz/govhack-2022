import React, { useEffect, useRef, useState } from "react";
import { usePipes } from "../hooks/usePipes";

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

  usePipes(map);

  return <div ref={ref} className="map-wrapper" />;
};
