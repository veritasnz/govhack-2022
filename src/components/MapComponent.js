import React, { useEffect, useRef, useState } from "react";

const MAP_OPTIONS = {
    maxZoom: 19,
    minZoom: 11,
    clickableIcons: false,
};

/**
 *{
  center: google.maps.LatLngLiteral;
  zoom: number;
}
 */
export const MapComponent = ({ children, center, zoom }) => {
    const ref = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current && !map) {
            setMap(
                new window.google.maps.Map(ref.current, {
                    center: { lat: -43.5164485, lng: 172.5824938 },
                    zoom: 11,
                    ...MAP_OPTIONS,
                })
            );
        }
    }, [ref, map]);

    return (
        <>
            <div ref={ref} className="map-wrapper" />
            {React.Children.map(children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child, { map });
                }
            })}
        </>
    );
};
