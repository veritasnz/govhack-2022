import React from "react";
import Image from "next/image";
import { Select } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

export const CCTV = () => {
  return <div className="widget-grid">
    <div className="widget">
      <div style={{ marginBottom: "16px" }}>
        <Select defaultValue="1" style={{ width: "100%" }}>
          <Select.Option value="1">
            <CheckCircleTwoTone twoToneColor="#16ABBD" />
            <span style={{ marginLeft: "6px" }}>Camera 1</span>
          </Select.Option>
        </Select>
      </div>
      <div style={{}}>
        <Image src={"/image 2.jpg"} width="576" height="384" />
      </div>
    </div>
    <div className="widget">
      <div style={{ marginBottom: "16px" }}>
        <Select defaultValue="2" style={{ width: "100%" }}>
          <Select.Option value="2">
            <CheckCircleTwoTone twoToneColor="#16ABBD" />
            <span style={{ marginLeft: "6px" }}>Camera 2</span>
          </Select.Option>
        </Select>
      </div>
      <div style={{}}>
        <Image src={"/image as 1.jpg"} width="576" height="384" />
      </div>
    </div>
  </div>
}