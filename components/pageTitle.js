'use client';
import { useScroll, useTransform, useSpring, motion } from "motion/react";
import { useSvgSize } from "@/hooks";

export default function PageTitle(props){
  const { scrollYProgress } = useScroll();
    const [svgWidth, svgHeight] = useSvgSize();
  const titlePosition = useTransform(scrollYProgress, [0, 0.2, 1], ['28vh', '5vh', '5vh'])
  
  const scrollOpacity = useTransform(scrollYProgress, [0,0.5,1], [0,0,0.8]);
  const scrollDashArray = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.5, 0.6, 1], ["0% 100%", "0% 100%", "50% 10%", "10% 50%", "50% 30%", "100% 0%"]);
  const springDasharray = useSpring(scrollDashArray, {
    stiffness: 8,
    damping: 1.7,
    mass: 1
  });
  
  const secondCurve = `M ${svgWidth/3} 80
   C ${svgWidth*0.125} -${svgHeight*0.1} ${svgWidth*0.4} ${svgHeight*0.25} ${svgWidth*0.2} ${svgHeight*0.5} 
   C ${svgWidth*0.1} ${svgHeight*0.55} ${svgWidth*0.35} ${svgHeight*0.7} ${svgWidth*0.25} ${svgHeight*1.1} 
   C ${svgWidth*0.45} ${svgHeight*0.9} ${svgWidth*0.45} ${svgHeight*0.8} ${svgWidth*0.45} ${svgHeight*1.1} 
   C ${svgWidth*0.5} ${svgHeight} ${svgWidth*0.6} ${svgHeight*0.8} ${svgWidth*0.75} ${svgHeight} 
   
   Q ${svgWidth*0.65} ${svgHeight*0.5} ${svgWidth*0.85} ${svgHeight*0.3} 
   
   C ${svgWidth*0.6} ${svgHeight*0.5} ${svgWidth*0.55} ${svgHeight*0.25} ${svgWidth*0.6} ${svgHeight*0.1} 
   Q ${svgWidth*0.5} ${svgHeight*0.4} ${svgWidth/3} 80`;
  return(
    <div className="w-full flex items-center justify-center">
      <motion.svg width={svgWidth} height={svgHeight} viewBox={`-${svgWidth*0.1} ${svgHeight*0} ${svgWidth*1.2} ${svgHeight*1.3}`} className="fixed z-40 mt-4" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink">  
      <defs>
        <linearGradient id="grad">
          <stop offset="0%" stopColor="rgba(255,0,0,1)" >
            <animate attributeName="stop-color" values="rgba(255,0,0,0.75); rgba(255,255,0,0.75); rgba(0,255,0,0.75); rgba(0,255,255,0.75); rgba(0,0,255,0.75); rgba(0,255,255,0.75); rgba(0,255,0,0.75); rgba(255,255,0,0.75); rgba(255,0,0,0.75);" dur="30s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="rgba(0,255,0,1)">
            <animate attributeName="stop-color" values="rgba(0,255,0,0.75); rgba(0,255,255,0.75); rgba(0,0,255,0.75); rgba(0,255,255,0.75); rgba(0,255,0,0.75); rgba(255,255,0,0.75); rgba(255,0,0,0.75); rgba(255,255,0,0.75); rgba(0,255,0,0.75);" dur="30s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="rgba(0,0,255,1)">
            <animate attributeName="stop-color" values="rgba(0,0,255,0.75); rgba(0,255,0,0.75); rgba(255,255,0,0.75); rgba(255,0,0,0.75); rgba(255,255,0,0.75); rgba(0,255,0,0.75); rgba(0,255,255,0.75); rgba(0,0,255,0.75);" dur="30s" repeatCount="indefinite" />
          </stop>
          {/* <animateTransform attributeName="gradientTransform" type="rotate" from={`0 0 0`} to={`360 0 ${svgHeight/2}`} dur="10s" repeatCount="indefinite" /> */}
        </linearGradient>
      </defs>
        {/* <motion.path id="fill" d={secondCurve} className="fill-[var(--second-svg-stroke)]" stroke="url('#grad')" strokeWidth="10" fillOpacity={scrollOpacity} strokeDasharray={scrollDashArray} style={{scaleY: 0.55, translateY:70}} > */}
          {/* <animate attributeName="stroke-dasharray" values="20% 80%; 100% 0%; 50% 10%; 0% 100%; 60% 40%; 100% 0%; 20% 80%;" repeatCount="indefinite" dur="15s" /> */}
        {/* </motion.path> */}
        {/* <motion.path id="fill" d={secondCurve} className="fill-[var(--first-svg-stroke-light)]" stroke="url('#grad')" strokeWidth="12" opacity={scrollOpacity} strokeDasharray={scrollDashArray}> */}
          {/* <animate attributeName="stroke-dasharray" values="0% 100%; 100% 0%;" repeatCount="indefinite" dur="15s" /> */}
        {/* </motion.path> */}
        {/* <motion.path id="path" d={firstCurve} className=" stroke-[var(--first-svg-stroke-light)]" strokeWidth="6" fill="none" pathLength={scrollYProgress} transform="scale(0.98)" transformOrigin="center" /> */}
        {/* <motion.path id="path" d={firstCurve} className=" stroke-[var(--third-svg-stroke)]" strokeWidth="4" fill="none" pathLength={scrollYProgress} transform="scale(0.98)" transformOrigin="center" /> */}
        {/* <motion.path id="path" d={secondCurve} className="stroke-[var(--second-svg-stroke-light)]" strokeWidth="5" fill="none" pathLength={scrollYProgress} transform="scale(0.98)" transformOrigin="center"/> */}
        {/* <motion.path id="path" d={secondCurve} className="stroke-[var(--third-svg-stroke)]" strokeWidth="3" fill="none"  pathLength={scrollYProgress} transform="scale(0.98)" transformOrigin="center" /> */}
        {/* <motion.path id="path" d={secondCurve} className=" stroke-[var(--third-svg-stroke-light)]" strokeWidth="4" fill="none" pathLength={scrollYProgress} transform="scale(0.98)" transformOrigin="center" /> */}
        {/* <motion.path id="path" d={secondCurve} className=" stroke-[var(--third-svg-stroke)]" strokeWidth="2" fill="none" pathLength={scrollYProgress} transform="scale(0.98)" transformOrigin="center" /> */}
        {/* <circle cx={svgWidth/2} cy={svgHeight/2} r={svgHeight/2} fill="url(#grad)" /> */}
      </motion.svg>
    <motion.h1 className={`title fixed text-6xl tracking-[5.25px] font-extrabold filter-(--current-shadow) z-[999]`} style={{ top: titlePosition}}>{props.title}</motion.h1>
    </div>
  )
};