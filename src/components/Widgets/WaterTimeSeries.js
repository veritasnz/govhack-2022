import { Area } from '@ant-design/plots';


const DATA = [
  { time: "0", level: 45 },
  { time: "1", level: 50 },
  { time: "2", level: 99 },
  { time: "3", level: 45 },
  { time: "4", level: 24 },
  { time: "5", level: 79 },
  { time: "6", level: 86 },
  { time: "7", level: 95 },
  { time: "8", level: 76 },
  { time: "9", level: 99 },
  { time: "10", level: 100 },
  { time: "11", level: 2 },
  { time: "12", level: 11 },
  { time: "13", level: 32 },
  { time: "14", level: 46 },
  { time: "15", level: 49 },
]


export const WaterTimeSeries = ({ waterVelocity }) => {
  const config = {
    xField: "time",
    yField: "level",
    color: "#16ABBD"
  };

  return (
    <div className='metric-container'>
      <Area
        data={DATA}
        {...config}
      />
    </div>
  )
}