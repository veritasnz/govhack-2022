import { Gauge } from '@ant-design/plots';

export const WaterVelocity = ({ waterVelocity }) => {
  const config = {
    percent: waterVelocity,
    gaugeStyle: {
      fill: "#16ABBD",
      stroke: "white",
    },
    indicator: {
      pointer: {
        style: {
          stroke: "#16ABBD"
        }
      },
      pin: {
        style: {
          stroke: "#16ABBD"
        }
      }
    }
  };


  return (
    <div className='metric-container'>
      <Gauge {...config} />
    </div>
  )
}