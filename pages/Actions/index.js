import React from "react";
import TopPanel from "./TopPanel";
import BottomPanel from "./BottomPanel";

export default function ActionsPage() {
  return (
    <div
      className="app-page"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px"
      }}
    >
      <TopPanel />
      <BottomPanel />
    </div>
  )
}