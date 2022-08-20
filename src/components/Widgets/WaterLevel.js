import { Liquid } from '@ant-design/plots';

export const WaterLevel = ({ waterLevel }) => {
  const config = {
    percent: waterLevel,
    shape: 'rect',
    outline: {
      border: 2,
      distance: 4,
    },
    wave: {
      length: 128,
    },
  };


  return <Liquid {...config} />
}