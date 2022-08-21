import React from "react";
import { Layout, Menu } from "antd";
import { AppstoreOutlined, ControlOutlined, AreaChartOutlined, SettingOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const ICON_STYLE = {
  marginTop: "8px",
  fontSize: "48px",
};

const LABEL_STYLE = {
  position: "relative",
  top: "-8px",
  fontSize: "small",
  height: "16px",
  lineHeight: "16px",
  textAlign: "center"
}

export default function Navigation({ page, setPage }) {
  return (
    <Sider width={80}>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[page]}
        onClick={item => setPage(item.key)}
      >
        <div style={{
          height: "60px",
          background: `url('/image.png') no-repeat`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          marginTop: "16px",
        }} />
        <div style={{ ...LABEL_STYLE, top: "0px", marginBottom: "16px" }}>PipeWatch</div>
        <Menu.Item key="1">
          <AppstoreOutlined style={ICON_STYLE} />
          <div style={LABEL_STYLE}>Dashboard</div>
        </Menu.Item>
        <Menu.Item key="2">
          <ControlOutlined style={ICON_STYLE} />
          <div style={LABEL_STYLE}>Actions</div>
        </Menu.Item>
        <Menu.Item key="3">
          <AreaChartOutlined style={ICON_STYLE} />
          <div style={LABEL_STYLE}>Metrics</div>
        </Menu.Item>
        <Menu.Item key="4">
          <SettingOutlined style={ICON_STYLE} />
          <div style={LABEL_STYLE}>Settings</div>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}