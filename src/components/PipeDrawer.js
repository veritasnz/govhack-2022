import { Drawer } from "antd";

export const PipeDrawer = ({ onClose, showDrawer }) => {

    return (
        <>
            <Drawer title="Basic Drawer" placement="right" onClose={onClose} visible={showDrawer}>
                <p>Flow speed</p>
                <p>Water height</p>
            </Drawer>

        </>
    );
};