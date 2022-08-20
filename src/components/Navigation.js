import React from "react";
import { Layout, Menu } from "antd";
import { AppstoreOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export default function Navigation() {
  return (
    <Sider width={64}>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1">1</Menu.Item>
        <Menu.Item key="2">2</Menu.Item>
        <Menu.Item key="3">3</Menu.Item>
      </Menu>
    </Sider>
  )
}