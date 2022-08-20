import React from "react";
import Image from "next/image";
import { Select } from "antd";

export const CCTV = () => {
  return <div style={{ background: "black", height: "100%", color: "white" }}>
    <div style={{ height: "calc(50% - 8px)", marginBottom: "16px" }}>
      <div style={{ padding: "8px 8px 0 8px" }}>
        <Select defaultValue="1" style={{ width: "100%" }}>
          <Select.Option value="1">Camera 1</Select.Option>
        </Select>
      </div>
      <div style={{}}>
        <Image src={"/image 2.jpg"} width="576" height="384" />
      </div>
    </div>
    <div style={{ height: "calc(50% - 8px)" }}>
      <div style={{ padding: "8px 8px 0 8px" }}>
        <Select defaultValue="2" style={{ width: "100%" }}>
          <Select.Option value="2">Camera 2</Select.Option>
        </Select>
      </div>
      <div style={{}}>
        <Image src={"/image as 1.jpg"} width="576" height="384" />
      </div>
    </div>
  </div>
}