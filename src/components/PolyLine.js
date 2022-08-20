import { useEffect, useState } from "react";

/**
 * { startPoint, endPoint }
 * E.g. point: { lat: 37.772, lng: -122.214 }
 */
export const PolyLine = ({ startPoint, endPoint }) => {
  const coords = [startPoint, endPoint];

  const options = {
    path: coords,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  };

  const [polyline, setPolyline] = useState();

  useEffect(() => {
    if (!polyline) {
      setPolyline(new google.maps.Polyline(options));
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
