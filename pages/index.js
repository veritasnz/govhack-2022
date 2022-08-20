import Head from "next/head";
import { Map } from "../src/components/Map";
import { Pullout } from "../src/components/Pullout";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PipeWatch</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Map />
        <Pullout />
      </main>
    </div>
  );
}
