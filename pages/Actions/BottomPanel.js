import { useEffect, useState } from "react";
import { Table } from "antd";
import axios from "axios";

const CONTAINER_STYLE = {
  flexGrow: 1,
  background: "black",
  padding: "8px",
  display: "flex",
  gap: "16px",
  overflowY: "scroll"

}

export default function BottomPanel() {
  return (
    <div style={CONTAINER_STYLE}>
      {/* <LeftPanel /> */}
      <RightPanel />
    </div>
  )
}

const ITEM_STYLE = {
  width: "0%",
  flexShrink: 0
}

function LeftPanel() {
  return (
    <div style={{ ...ITEM_STYLE, flexGrow: 1 }}>
      Table Filters
    </div>
  )
}

function RightPanel() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(
      process.env.NEXT_PUBLIC_ENDPOINT + "/pipe/all/",
      {
        params: {}
      }
    ).then(res => {
      console.log(res.data.results);
      setData(res.data.results)
    })
  }, [])

  return (
    <div style={{ ...ITEM_STYLE, flexGrow: 4 }}>
      <Table
        columns={[
          {
            title: "Id",
            dataIndex: "id",
            key: "id"
          },
          {
            title: "District",
            dataIndex: "district",
            key: "district"
          },
          {
            title: "Diameter",
            dataIndex: "diameter",
            key: "diameter"
          },
          {
            title: "Length",
            dataIndex: "length",
            key: "length"
          },
          {
            title: "Start",
            dataIndex: "geometries",
            key: "start",
            render: (data) => {
              const { latitude, longitude } = data[0];
              return `${latitude} ${longitude}`
            }
          },
          {
            title: "End",
            dataIndex: "geometries",
            key: "end",
            render: (data) => {
              const { latitude, longitude } = data[1];
              return `${latitude} ${longitude}`
            }
          }
        ]}
        dataSource={data}
        style={{ height: "100%" }}
        pagination={false}
      />
    </div>
  )
}