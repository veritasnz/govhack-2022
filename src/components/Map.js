import { Wrapper } from "@googlemaps/react-wrapper";
import { useContext, useMemo } from "react";
import { PulloutContext } from "../context/PulloutContext";
import { MapComponent } from "./MapComponent";

export const Map = (props) => {
  const pullout = useContext(PulloutContext);

  return (
    <div>
      <div className="map">
        <Wrapper apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
          <MapComponent />
        </Wrapper>
      </div>
    </div>
  );
};
