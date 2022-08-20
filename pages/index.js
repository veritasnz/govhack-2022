import Head from "next/head";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { Layout } from "antd";

import { Map } from "../src/components/Map";
// import { Menu } from "../src/components/Menu";
import { CCTV } from "../src/components/CCTV";
import { Dashboard } from "../src/components/Dashboard";

const { Sider, Menu } = Layout;

export default function Home() {
  return (
    <div>
      <Head>
        <title>PipeWatch</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Sider>
          <Menu theme="dark" mode="inline" items={[]} />
        </Sider>
        <Menu />
        <CCTV />
        <Map />
        <Dashboard />
      </main>
    </div>
  );
}
