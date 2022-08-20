import Head from "next/head";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu } from "antd";
import { AppstoreOutlined } from '@ant-design/icons';

import { Map } from "../src/components/Map";
// import { Menu } from "../src/components/Menu";
import { CCTV } from "../src/components/CCTV";
import { Dashboard } from "../src/components/Dashboard";

const { Sider, Content } = Layout;

export default function Home() {
  return (
    <div>
      <Head>
        <title>PipeWatch</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Sider width={64}>
            <Menu theme="dark" mode="inline">
              <Menu.Item key="1">
                <div style={{ width: "100%" }}>
                  <AppstoreOutlined style={{ fontSize: 42 }} />
                </div>
              </Menu.Item>
              <Menu.Item key="2">2</Menu.Item>
              <Menu.Item key="3">3</Menu.Item>
            </Menu>
          </Sider>
          <Content>
            <CCTV />
            <Map />
            <Dashboard />
          </Content>
        </Layout>
      </main>
    </div>
  );
}
