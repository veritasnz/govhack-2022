import { useContext } from "react";
import { PulloutContext } from "../context/PulloutContext";

export const Map = (props) => {
    const pullout = useContext(PulloutContext);

    const openHandler = () => {
        pullout.open({});
    };

    return (
        <div>
            <button onClick={openHandler}>Open</button>
        </div>
    );
};
