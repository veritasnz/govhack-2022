import { useEffect, useRef } from "react";

/**
 * A hook used to find the source of a component's rerender.
 * Place this inside a function component (FC) to see when it's props change, thus causing a rerender
 *
 * @param props The props for the FC that you're tracing
 */
export function useTraceUpdate(props) {
    const prev = useRef(props);
    useEffect(() => {
        const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
            if (prev.current[k] !== v) {
                ps[k] = [prev.current[k], v];
            }
            return ps;
        }, {});
        if (Object.keys(changedProps).length > 0) {
            console.log("Changed props:", changedProps);
        }
        prev.current = props;
    });
}
