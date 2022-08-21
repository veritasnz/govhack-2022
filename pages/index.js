import Head from "next/head";
import { useContext, useEffect, useRef, useState } from "react";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout, Row, Col } from "antd";

import { Map } from "../src/components/Map";
import { CCTV } from "../src/components/CCTV";
import { Dashboard } from "../src/components/Dashboard";
import Navigation from "../src/components/Navigation";
import ActionsPage from "./Actions";
import { PipeContext } from "../src/context/PipeContext";

const { Content } = Layout;

export default function Home() {
  const { id } = useContext(PipeContext);

  const previous = useRef(null);
  const next = useRef(null);

  const [page, setPage] = useState("1");

  useEffect(() => {
    previous.current = id;
    console.log("Id Changed");
  }, [id])

  const renderDashboard = () => {

    if (previous.current !== next.current) {
      console.log("rendering");
      next.current = previous.current
      return null
    }

    return <Dashboard />
  }

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
            <Col span={6} style={{ padding: "16px" }}>
              <CCTV />
            </Col>
            <Col span={12} style={{}}>
              <Map />
            </Col>
            <Col span={6} style={{ padding: "16px" }}>
              {renderDashboard()}
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
        <link rel="icon" href="/favicon.png" />
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
