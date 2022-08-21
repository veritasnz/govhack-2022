import { Liquid } from '@ant-design/plots';
import { useEffect, useState } from 'react';

export const WaterLevel = ({ index, waterLevel }) => {
  const [currentLevel, setCurrentLevel] = useState(waterLevel);
  useEffect(() => {
    if (!currentLevel) {
      setCurrentLevel(waterLevel)
    }

    if ((index % 100) == 0) {
      console.log("updated")
      setCurrentLevel(Math.min(waterLevel, 1));
    }
  }, [index]);

  const config = {
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
      <Liquid percent={currentLevel} {...config} />
    </div>
  )
}