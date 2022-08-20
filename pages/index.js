import Head from "next/head";
import { useState } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Row, Col } from "antd";

import { Map } from "../src/components/Map";
import { CCTV } from "../src/components/CCTV";
import { Dashboard } from "../src/components/Dashboard";
import Navigation from "../src/components/Navigation";
import ActionsPage from "./Actions";

const { Content } = Layout;

export default function Home() {
  const [page, setPage] = useState("1");

  function getPage() {
    switch (page) {
      case "2":
        return <ActionsPage />
      case "3":
      case "4":
        return <div className="app-page">{page}</div>
      case "1":
      default:
        return (
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
        )
    }
  }

  return (
    <div>
      <Head>
        <title>PipeWatch</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Navigation
            page={page}
            setPage={setPage}
          />
          <Content style={{ background: "#2A2C34" }}>
            {getPage()}
          </Content>
        </Layout>
      </main >
    </div >
  );
}
