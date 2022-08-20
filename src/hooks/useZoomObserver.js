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

  useEffect(() => {
    if (!map) return;

    if (!isZoomed) {
      setPipes([]);
      return;
    }

    setPipes((prev) => {
      const newPipes = [...prev];

      newPipes.push({
        id: 1,
        level: 1,
        startPoint: [-43.516508813449725, 172.60481119477708],
        endPoint: [-43.542943375962224, 172.6611207508225],
      });

      return newPipes;
    });
  }, [isZoomed]);

  return {
    pipes,
    isZoomed,
  };
};
