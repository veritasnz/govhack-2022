import { useEffect, useState } from "react";

export const useZoomObserver = (map) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [pipes, setPipes] = useState([]);

  // Listen for zoom changes and adjust `isZoomed`
  useEffect(() => {
    if (!map) return;

    google.maps.event.addListener(map, "zoom_changed", function () {
      const zoom = map.getZoom();

      setIsZoomed(zoom >= 18);
    });
  }, [map]);

  const updatePipes = () => {
    if (!map) return;

    if (!isZoomed) {
      setPipes([]);
      return;
    }

    const { lat: neLat, lng: neLng } = map.getBounds().getNorthEast();
    const { lat: swLat, lng: swLng } = map.getBounds().getSouthWest();

    //   {
    //     "id": 560539,
    //     "geometries": [
    //         {
    //             "id": 494241,
    //             "latitude": "172.6115272600110000",
    //             "longitude": "-43.4501327895932000",
    //             "level": 16.8989000000001,
    //             "pipe": 560539
    //         },
    //         {
    //             "id": 494242,
    //             "latitude": "172.6107850226030000",
    //             "longitude": "-43.4494696223705000",
    //             "level": 15.8999999999942,
    //             "pipe": 560539
    //         },
    //         {
    //             "id": 494243,
    //             "latitude": "172.6107844261410000",
    //             "longitude": "-43.4494681976500000",
    //             "level": 15.8999999999942,
    //             "pipe": 560539
    //         }
    //     ],
    //     "asset_id": "IE000000000011196940",
    //     "pipe_type": "Gravity",
    //     "length": 95.2,
    //     "shape_length": 95.1975386359612,
    //     "district": "Christchurch",
    //     "diameter": 450,
    //     "material": "UPVC",
    //     "depth": 1.63
    // }

    const url = process.env.NEXT_PUBLIC_ENDPOINT + `/pipe/?lat_p1=${neLat()}&lat_p2=${swLat()}&lon_p1=${neLng()}&lon_p2=${swLng()}`

    fetch(url).then(resp => resp.json()).then((data) => {
      setPipes(data);
    });
  }

  // Listen for zoom changes and adjust `isZoomed`
  useEffect(() => {
    if (!map) return;

    google.maps.event.addListener(map, "bounds_changed", updatePipes);
  }, [map]);

  // Get & Set pipes
  useEffect(() => {
    updatePipes();
  }, [isZoomed]);

  return {
    pipes,
    isZoomed,
  };
};