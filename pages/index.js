import Head from "next/head";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Menu, Row, Col } from "antd";
import { AppstoreOutlined } from '@ant-design/icons';

import { Map } from "../src/components/Map";
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
              <Menu.Item key="1">1</Menu.Item>
              <Menu.Item key="2">2</Menu.Item>
              <Menu.Item key="3">3</Menu.Item>
            </Menu>
          </Sider>
          <Content style={{ background: "#2A2C34" }}>
            <Row>
              <Col span={6} style={{ padding: "16px" }}>
                <CCTV />
              </Col>
              <Col span={12} style={{ padding: "16px" }}>
                <Map />
              </Col>
              <Col span={6} style={{ padding: "16px" }}>
                <Dashboard />
              </Col>
            </Row>
          </Content>
        </Layout>
      </main >
    </div >
  );
}
