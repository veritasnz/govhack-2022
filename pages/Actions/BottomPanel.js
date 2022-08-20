import { Table } from "antd"

const CONTAINER_STYLE = {
  flexGrow: 1,
  background: "black",
  padding: "8px",
  display: "flex",
  gap: "16px"
}

export default function BottomPanel() {
  return (
    <div style={CONTAINER_STYLE}>
      <LeftPanel />
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
  return (
    <div style={{ ...ITEM_STYLE, flexGrow: 4 }}>
      <Table
        columns={[]}
        dataSource={[]}
        style={{ height: "100%" }}
      />
    </div>
  )
}