import { useEffect, useState } from "react";

export const useZoomObserver = (map) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [pipes, setPipes] = useState([]);

  // Listen for zoom changes and adjust `isZoomed`
  useEffect(() => {
    if (!map) return;

    google.maps.event.addListener(map, "zoom_changed", function () {
      const zoom = map.getZoom();

      setIsZoomed(zoom >= 15);
    });
  }, [map]);

  // Get & Set pipes
  useEffect(() => {
    if (!map) return;

    if (!isZoomed) {
      setPipes([]);
      return;
    }

    const { lat: neLat, lng: neLng } = map.getBounds().getNorthEast();
    const { lat: swLat, lng: swLng } = map.getBounds().getSouthWest();

    // const apiData = [{
    //   id: 1,
    //   level: 1,
    //   startPoint: [-43.516508813449725, 172.60481119477708],
    //   endPoint: [-43.542943375962224, 172.6611207508225],
    // },
    // {
    //   id: 3,
    //   level: 2,
    //   startPoint: [-43.52, 172.61],
    //   endPoint: [-43.55, 172.67],
    // }]

    console.log(neLat(), swLat());
    console.log(neLng(), swLng());

    const url = process.env.NEXT_PUBLIC_ENDPOINT + `/pipe/?start_lat=${neLat()}&end_lat=${swLat()}&start_long=${neLng()}&end_long=${swLng()}`

    console.log("Requesting from: ", url);

    fetch(url).then(resp => {
      console.log(resp);
    });

    // setPipes(apiData);
  }, [isZoomed]);

  return {
    pipes,
    isZoomed,
  };
};
