import { useEffect } from "react";

export const usePipes = (map) => {
  const startPoint = [-43.516508813449725, 172.60481119477708];
  const endPoint = [-43.542943375962224, 172.6611207508225];

  const options = {
    path: [
      { lat: startPoint[0], lng: startPoint[1] },
      { lat: endPoint[0], lng: endPoint[1] },
    ],
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
    clickable: true,
  };

  const polyline = new google.maps.Polyline(options);

  useEffect(() => {
    if (!map) return;

    polyline.setMap(map);
  }, [map]);
};
