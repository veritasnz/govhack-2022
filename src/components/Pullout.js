import { Drawer } from "antd";
import { useContext } from "react";
import { PulloutContext } from "../context/PulloutContext";
import { Dashboard } from "./Dashboard";

export const Pullout = () => {
  const pullout = useContext(PulloutContext);

  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement="right"
        onClose={pullout.close}
        visible={pullout.isOpen}
      >
        <Dashboard id={pullout.id} />
      </Drawer>
    </>
  );
};
