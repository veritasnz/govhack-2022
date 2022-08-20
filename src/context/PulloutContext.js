import React from "react";

const DEFAULT_STATE = {
  id: null,
  isOpen: false,
  data: {},

  open: (data) => {},
  close: () => {},
};

export const PulloutContext = React.createContext(DEFAULT_STATE);
