import { useContext, useState } from "react";
import { PulloutContext } from "../context/PulloutContext";
import { Dashboard } from "./Dashboard";

export const Pullout = () => {
  const pullout = useContext(PulloutContext);

  const closeHandler = () => {
    pullout.close();
  };

  return (
    <div className="pullout">
      <button className="pullout-close" onClick={closeHandler}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="currentColor"
            d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"
          />
        </svg>
      </button>
      <div className="pullout-content">
        <Dashboard id={pullout.id} />
      </div>
    </div>
  );
};
