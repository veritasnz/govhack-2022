import { useEffect, useState } from "react";

export const useMapObserver = (map) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [pipes, setPipes] = useState([]);

  // Listen for zoom changes and adjust `isZoomed`
  useEffect(() => {
    if (!map) return;

    const listener = google.maps.event.addListener(map, "zoom_changed", updateZoom);

    return () => google.maps.event.removeListener(listener)
  }, [map]);

  const updateZoom = () => {
    setIsZoomed(map.getZoom() >= 17);
  }

  const updatePipes = () => {
    if (!map) return;

    console.log("Attempting update 1", map.getZoom() >= 17);

    if (!(map.getZoom() >= 17)) {
      setPipes([]);
      return;
    }

    console.log("Attempting update 2");

    const { lat: neLat, lng: neLng } = map.getBounds().getNorthEast();
    const { lat: swLat, lng: swLng } = map.getBounds().getSouthWest();

    const url = process.env.NEXT_PUBLIC_ENDPOINT + `/pipe/?lat_p1=${neLat()}&lat_p2=${swLat()}&lon_p1=${neLng()}&lon_p2=${swLng()}`

    fetch(url).then(resp => {
      return resp.json();
    }).then((data) => {
      console.log(data[0]);
      setPipes(data);
    }).catch(() => {
      // Do nothing
    });
  }

  // Listen for zoom changes and adjust `isZoomed`
  useEffect(() => {
    if (!map) return;

    google.maps.event.addListener(map, "dragend", updatePipes);

    // return () => google.maps.event.removeListener(listener)
  }, [map]);

  // Get & Set pipes
  useEffect(() => {
    updatePipes();
  }, [isZoomed]);

  return {
    pipes,
    isZoomed,
  };
}

