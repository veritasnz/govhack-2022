import { Liquid } from '@ant-design/plots';

export const WaterLevel = ({ waterLevel }) => {
  const config = {
    percent: waterLevel,
    shape: 'circle',
    outline: {
      border: 2,
      distance: 4,
    },
    wave: {
      length: 128,
    },
    liquidStyle: {
      fill: "#16ABBD"
    },
    autoFit: true
  };


  return (
    <div className='metric-container'>
      <Liquid {...config} />
    </div>
  )
}