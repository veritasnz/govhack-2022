import React from "react";
import { Form, Radio, Slider, Switch } from "antd";
import { WaterLevel } from "../../src/components/Widgets/WaterLevel";
import { WaterTimeSeries } from "../../src/components/Widgets/WaterTimeSeries";
import { WaterVelocity } from "../../src/components/Widgets/WaterVelocity";

export default function TopPanel() {
  return (
    <div style={{ display: "flex", gap: "16px", alignItems: "stretch" }}>
      <ItemA />
      <ItemB />
      <ItemC />
      <ItemD />
      {/* <ItemE /> */}
    </div>
  )
}

const ITEM_STYLE = {
  width: "0%",
  flexShrink: 0,
  flexGrow: 1,
  background: "black",
  padding: "8px",
}

function ItemA() {
  return (
    <div style={ITEM_STYLE}>
      Controls
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item>
          <div>
            <Radio.Group defaultValue={1}>
              <Radio value={1}>Auto</Radio>
              <Radio value={2}>Manual</Radio>
            </Radio.Group>
          </div>
        </Form.Item>
        <Form.Item label="Control">
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label="Main" style={{ margin: 0 }}>
          <Switch />
        </Form.Item>
        <Form.Item label="Gate">
          <Switch />
        </Form.Item>
        <Form.Item label="Propeller">
          <Slider />
        </Form.Item>
        <Form.Item label="Pump">
          <Slider />
        </Form.Item>
      </Form>
    </div>
  )
}
function ItemB() {
  return (
    <div style={ITEM_STYLE}>
      Water Level (Current)
      <WaterLevel waterLevel={0.7024} />
    </div>
  )
}
function ItemC() {
  return (
    <div style={ITEM_STYLE}>
      Water Level (Time Series)
      <WaterTimeSeries />
    </div>
  )
}
function ItemD() {
  return (
    <div style={ITEM_STYLE}>
      Water Velocity
      <WaterVelocity waterVelocity={0.2456} />
    </div>
  )
}
function ItemE() {
  return (
    <div style={ITEM_STYLE}>
      Pressure
    </div>
  )
}