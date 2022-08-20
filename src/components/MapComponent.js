import React, { useEffect, useRef, useState } from "react";
import { useZoomObserver } from "../hooks/useZoomObserver";
import { Pipe } from "./Pipe";

import { MAP_STYLE } from "../utils/constants";

const options = {
  maxZoom: 19,
  minZoom: 11,
  clickableIcons: false,
  center: { lat: -43.5164485, lng: 172.5824938 },
  zoom: 11,
  styles: MAP_STYLE,
  disableDefaultUI: true

};

/**
 *{
  center: google.maps.LatLngLiteral;
  zoom: number;
}
 */
export const MapComponent = () => {
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
      {!isZoomed && <p className="map-warning">Not zoomed enough! Zoom in more to see local pipes</p>}

      <div ref={ref} className="map-container" />
      {pipes.map((pipe) => {
        return <Pipe key={pipe.id} pipe={pipe} map={map} />;
      })}
    </div>
  );
};
