import React, { useEffect, useState } from "react";

import { PipeContext } from "./PipeContext";

export const PipeContextProvider = (props) => {
  const [id, _setId] = useState(); // null | number

  const setId = (id) => {
    console.log(id);
    _setId(id);
  }

  return (
    <PipeContext.Provider
      value={{
        id,
        setId
      }}
    >
      {props.children}
    </PipeContext.Provider>
  );
};
