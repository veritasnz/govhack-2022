import Head from "next/head";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Row, Col } from "antd";

import { Map } from "../src/components/Map";
import { CCTV } from "../src/components/CCTV";
import { Dashboard } from "../src/components/Dashboard";
import Navigation from "../src/components/Navigation";

const { Content } = Layout;

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
          <Navigation />
          <Content style={{ background: "#2A2C34" }}>
            <Row>
              <Col span={6} style={{ padding: "0 16px" }}>
                <CCTV />
              </Col>
              <Col span={12} style={{ padding: "0 16px" }}>
                <Map />
              </Col>
              <Col span={6} style={{ padding: "0 16px" }}>
                <Dashboard />
              </Col>
            </Row>
          </Content>
        </Layout>
      </main >
    </div >
  );
}
