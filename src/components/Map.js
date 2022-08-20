import { Wrapper } from "@googlemaps/react-wrapper";
import { useContext, useMemo } from "react";
import { PulloutContext } from "../context/PulloutContext";
import { MapComponent } from "./MapComponent";
import { PolyLine } from "./Polyline";

export const Map = (props) => {
  const pullout = useContext(PulloutContext);

  const openHandler = () => {
    pullout.open(1);
  };

  return (
    <div>
      <button onClick={openHandler}>Open</button>
      <div className="map">
        <Wrapper apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
          <MapComponent>
            <PolyLine
              startPoint={{ lat: -23.5164485, lng: 162.5824938 }}
              endPoint={{ lat: -63.5164485, lng: 182.5824938 }}
            />
          </MapComponent>
        </Wrapper>
      </div>
    </div>
  );
};
