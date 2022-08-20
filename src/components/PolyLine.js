import { useEffect, useState } from "react";

/**
 * { startPoint, endPoint }
 * E.g. point: { lat: 37.772, lng: -122.214 }
 */
export const PolyLine = ({ startPoint, endPoint }) => {
  const [polyline, setPolyline] = useState();

  useEffect(() => {
    if (!polyline) {
      setPolyline();
    }

    return () => {
      if (polyline) {
        polyline.setMap(null);
      }
    };
  }, [polyline]);

  useEffect(() => {
    if (polyline) {
      polyline.setOptions(options);
    }
  }, [polyline, options]);

  return null;
};
