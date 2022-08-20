import React from "react";
import { Select } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

export const CCTV = () => {
  return <div className="widget-grid" style={{ display: "flex" }}>
    <div className="widget">
      <div style={{ marginBottom: "16px" }}>
        <Select defaultValue="1" style={{ width: "100%" }}>
          <Select.Option value="1">
            <CheckCircleTwoTone twoToneColor="#16ABBD" />
            <span style={{ marginLeft: "6px" }}>Camera 1</span>
          </Select.Option>
        </Select>
      </div>
      <div style={{ height: "calc(100% - 48px)" }}>
        <div style={{
          content: "",
          height: "100%",
          background: `url('/image 2.jpg') 30% 0 no-repeat`,
          backgroundSize: "cover"
        }} />
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
      <div style={{ height: "calc(100% - 48px)" }}>
        <div style={{
          content: "",
          height: "100%",
          background: `url('/image as 1.jpg') 50% 50% no-repeat`,
          backgroundSize: "cover"
        }} />
      </div>
    </div>
    <div className="widget">
      <div style={{ marginBottom: "16px" }}>
        <Select defaultValue="3" style={{ width: "100%" }}>
          <Select.Option value="3">
            <CheckCircleTwoTone twoToneColor="#16ABBD" />
            <span style={{ marginLeft: "6px" }}>Camera 3</span>
          </Select.Option>
        </Select>
      </div>
      <div style={{ height: "calc(100% - 48px)" }}>
        <div style={{
          content: "",
          height: "100%",
          background: `url('/image3.jpg') 50% 50% no-repeat`,
          backgroundSize: "cover"
        }} />
      </div>
    </div>
  </div>
}