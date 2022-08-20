import React, { useEffect, useRef, useState } from "react";
import { useZoomObserver } from "../hooks/useZoomObserver";
import { Pipe } from "./Pipe";

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

  const { pipes, isZoomed } = useZoomObserver(map);

  return (
    <div className="map-wrapper">
      {!isZoomed && <p className="map-warning">Not zoomed enough</p>}

      <div ref={ref} className="map-container" />
      {pipes.map((pipe) => {
        return <Pipe key={pipe.id} pipe={pipe} map={map} />;
      })}
    </div>
  );
};
