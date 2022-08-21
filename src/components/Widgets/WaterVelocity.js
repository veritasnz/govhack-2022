import { Gauge } from '@ant-design/plots';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

export const WaterVelocity = ({ index }) => {
  const [waterVelocity, setwaterVelocity] = useState(0);
  const randomNextIndex = useRef(Math.floor(Math.random() * 40000));
  const [randomSeed, setRandomSeed] = useState(Math.random());
  const [randomProfile, setRandomProfile] = useState(Math.floor(Math.random() * 9));
  useEffect(() => {
    if ((index % 100) == 0) {
      axios.get(
        process.env.NEXT_PUBLIC_ENDPOINT + "/sensor/generate/",
        {
          params: {
            start_idx: randomNextIndex.current,
            end_idx: randomNextIndex.current + 1,
            seed: randomSeed,
            noise_profile_idx: randomProfile
          }
        }
      ).then(res => {
        randomNextIndex.current = randomNextIndex.current + 1;
        setwaterVelocity(Math.min(res.data.values[0], 1));
      });
    }
  }, [index])
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
      <Gauge percent={waterVelocity} {...config} />
    </div>
  )
}