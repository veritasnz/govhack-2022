import Head from "next/head";
import { useState } from "react";
import { Button } from 'antd';
import { Map } from "../src/components/Map";
import { Pullout } from "../src/components/Pullout";
import { PipeDrawer } from "../src/components/PipeDrawer";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

export default function Home() {
    const [showDrawer, setShowDrawer] = useState(false);

    function pipeClicked() {
        setShowDrawer(true);
    }

    function onClose() {
        setShowDrawer(false);
    }

    return (
        <div>
            <Head>
                <title>PipeWatch</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Pullout />
                <Map />
                <Button type="primary" onClick={pipeClicked}>
                    Open
                </Button>
                <PipeDrawer showDrawer={showDrawer} onClose={onClose} />
            </main>
        </div>
    );
}
