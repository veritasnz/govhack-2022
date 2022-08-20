import { useState } from "react";
import useSWR from "swr";

export const Dashboard = ({ id }) => {
    const { data } = useSWR("", { refreshInterval: 1 });

    // if (!id) return;

    return (
        <div className="widget-grid">
            <div className="widget">Test</div>
            <div className="widget">Test</div>
            <div className="widget">Test</div>
            <div className="widget">Test</div>
            <div className="widget">Test</div>
            <div className="widget">Test</div>
        </div>
    );
};
