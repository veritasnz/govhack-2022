import React from "react";

const DEFAULT_STATE = {
  id: null,
  setId: (id) => { }
};

export const PipeContext = React.createContext(DEFAULT_STATE);
