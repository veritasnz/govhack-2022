import React, { useEffect, useState } from "react";

import { PulloutContext } from "./PulloutContext";

export const PulloutContextProvider = (props) => {
    const [data, setData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {}, []);

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
    const open = (data) => {
        setData(data);
        setIsOpen(true);
    };

    const close = () => {
        setData(null);
        setIsOpen(false);
    };

    return (
        <PulloutContext.Provider
            value={{
                isOpen,
                close,
                open,
            }}
        >
            {props.children}
        </PulloutContext.Provider>
    );
};
