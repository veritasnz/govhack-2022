import { useEffect, useState } from "react";

const ZOOM_LEVEL = 16;

export const useMapObserver = (map) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [pipes, setPipes] = useState([]);

  // Listen for zoom changes and adjust `isZoomed`
  useEffect(() => {
    if (!map) return;

    const listener = google.maps.event.addListener(map, "zoom_changed", updateZoom);

    return () => {
      if (listener) google.maps.event.removeListener(listener)
    }
  }, [map]);

  const updateZoom = () => {
    setIsZoomed(map.getZoom() >= ZOOM_LEVEL);
  }

  const updatePipes = () => {
    if (!map) return;

    if (!(map.getZoom() >= ZOOM_LEVEL)) {
      setPipes([]);
      return;
    }

    const { lat: neLat, lng: neLng } = map.getBounds().getNorthEast();
    const { lat: swLat, lng: swLng } = map.getBounds().getSouthWest();

    const url = process.env.NEXT_PUBLIC_ENDPOINT + `/pipe/?lat_p1=${neLat()}&lat_p2=${swLat()}&lon_p1=${neLng()}&lon_p2=${swLng()}`

    console.log("Attempting fetch with url:", url);

    fetch(url).then(resp => {
      return resp.json();
    }).then((data) => {
      setPipes(data);
    }).catch((err) => {
      console.error("There has been a fetch error: ", err.message);
    });
  }

  // Listen for zoom changes and adjust `isZoomed`
  useEffect(() => {
    if (!map) return;

    const listener = google.maps.event.addListener(map, "dragend", updatePipes);

    return () => {
      if (listener) google.maps.event.removeListener(listener)
    }
  }, [map]);

  // Get & Set pipes
  useEffect(() => {
    if (!isZoomed) {
      setPipes([])
      return
    }

    updatePipes();
  }, [isZoomed]);

  return {
    pipes,
    isZoomed,
  };
}

