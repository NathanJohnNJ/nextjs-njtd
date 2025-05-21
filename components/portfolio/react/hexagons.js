'use client';
import { useEffect, useState } from 'react';
import Card from './card';
import useMeasure from 'react-use-measure';
import { useMotionValue, animate, motion } from 'motion/react';

export default function Hexagons(props){
  const { sites } = props;
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;
  const [ duration, setDuration ]= useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const [mustFinish, setMustFinish] = useState(false);

  useEffect(()=> {
    let controls;
    let finalPosition = -3000 / 2 - 1000;
    if(mustFinish){
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
        }
      });
    }
    else{
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatLoop: "loop",
        repeatDelay: 0
      });
    }
    return controls.stop;
  }, [xTranslation, width, duration, mustFinish]);

  
  return (
    <motion.svg id="hexSVG" height="900" width="2400" xmlns="http://www.w3.org/2000/svg" className="-mt-16">
      <defs>
        <motion.pattern id="hexPattern" width="450" height="900" patternUnits="userSpaceOnUse" className="overflow-visible" style={{x:xTranslation}}>
          <g transform="translate(225, 125)">  
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#bbbbbb" strokeWidth="4" fill="#666666" />
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#999999" strokeWidth="2.5" fill="#666666" />  
          </g>
          <g transform="translate(-225, 125)">  
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#bbbbbb" strokeWidth="4" fill="#666666" />
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#999999" strokeWidth="2.5" fill="#666666" />  
          </g>
          <g transform="translate(0, 250)">  
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#bbbbbb" strokeWidth="4" fill="#666666" />
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#999999" strokeWidth="2.5" fill="#666666" />  
          </g>
          <g transform="translate(0,500)" >
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#bbbbbb" strokeWidth="4" fill="#666666" />
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#999999" strokeWidth="2.5" fill="#666666" />
          </g>
          <g transform="translate(225, 625)">  
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#bbbbbb" strokeWidth="4" fill="#666666" />
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#999999" strokeWidth="2.5" fill="#666666" />  
          </g>
          <g transform="translate(-225, 625)">  
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#bbbbbb" strokeWidth="4" fill="#666666" />
            <polygon id="patt" points="0,125 75,0 225,0 300,125 225,250 75,250" stroke="#999999" strokeWidth="2.5" fill="#666666" />  
          </g>
        </motion.pattern>
      </defs>
      <rect x="0" y="0" height="900" width="2400" stroke="none" fill="url(#hexPattern)" />
      <foreignObject x="225" y="375" height="250" width="2400" className="overflow-visible">
        <motion.div className="flex gap-[150px]" ref={ref} style={{x: xTranslation}} 
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }} 
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}>
          {[...sites, ...sites].map((site, i) => {
            const xPosition = (i*300)+(i*150)+300
            return (
              <foreignObject x={xPosition} y="125" height="250" width="300" key={i} className="overflow-visible">
                <Card site={site} />
              </foreignObject>
            )
          })}
        </motion.div>
      </foreignObject>    
    </motion.svg>
  )
}