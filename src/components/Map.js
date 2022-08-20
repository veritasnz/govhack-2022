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
          <MapComponent
            maxZoom={19}
            minZoom={11}
            clickableIcons={false}
            center={{ lat: -43.5164485, lng: 172.5824938 }}
            zoom={11}
          ></MapComponent>
        </Wrapper>
      </div>
    </div>
  );
};
