import React, { useEffect, useState } from "react";

import { PulloutContext } from "./PulloutContext";

export const PulloutContextProvider = (props) => {
  const [id, setId] = useState(null); // null | number
  const [isOpen, setIsOpen] = useState(false);

  // Control the "data-modal-is-open" attribute on the :root
  useEffect(() => {
    isOpen
      ? (document.documentElement.dataset.modalIsOpen = "true")
      : (document.documentElement.dataset.modalIsOpen = "false");

    return () => {
      document.documentElement.dataset.modalIsOpen = "false";
    };
  }, [isOpen]);

  /**
   * @param data The data to be gotten from the API
   */
  const open = (id) => {
    setId(id);
    setIsOpen(true);
  };

  const close = () => {
    setId(null);
    setIsOpen(false);
  };

  return (
    <PulloutContext.Provider
      value={{
        id,
        isOpen,
        close,
        open,
      }}
    >
      {props.children}
    </PulloutContext.Provider>
  );
};
