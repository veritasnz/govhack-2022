import { Wrapper } from "@googlemaps/react-wrapper";
import { MapComponent } from "./MapComponent";

export const Map = (props) => {
  return (
    <div>
      <div className="map-header">
        <span>City Map</span>
      </div>
      <div className="map">
        <Wrapper apiKey={process.env.NEXT_PUBLIC_MAPS_API_KEY}>
          <MapComponent />
        </Wrapper>
      </div>
    </div>
  );
};
