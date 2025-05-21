import { motion } from 'motion/react';
import './style.css';


export default function Hexagon(props){
  const { x, y } = props;

  // const r = document.getElementById('root');
  // r.style.setProperty("--x", x);
  // r.style.setProperty("--y", y);

  return(
    <motion.svg id="animatedLogo" height="90" width="110" viewBox="-5 -5 110 110" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className="z-50 transition-all duration-300 scale-[95%] hover:scale-[105%]">
      <defs>
        <radialGradient id="radialGrad">
          <stop stopColor="red" offset="9%" />
        </radialGradient>
      </defs>
      <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="white" strokeWidth="1" opacity="0.3" />
      <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="white" strokeWidth="2" opacity="0.3" />
      <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="white" strokeWidth="1.75" opacity="0.175" />
      <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="blue" strokeWidth="2.25" opacity="0.5" />
      <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="white" strokeWidth="1" />
      <g transform="scale(0.95)" transformOrigin="center">
        <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="url(#radialGrad)" stroke="white" strokeWidth="6" opacity="0.4" />
        <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="white" strokeWidth="4" opacity="0.3" />
        <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="white" strokeWidth="2.75" opacity="0.175" />
        <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="blue" strokeWidth="1.25" opacity="0.5" />
        <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="white" strokeWidth="0.5" />
      </g>
      <motion.polygon points="25,0 75,0 100,50 75,100 25,100, 0,50" fill="none" stroke="aqua" strokeWidth="3"transform="scale(0.95)" transformOrigin="center" opacity="0.5"/>

      
      
    </motion.svg>

  )
}