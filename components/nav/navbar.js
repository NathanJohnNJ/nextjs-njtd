'use client';
import { useState, useEffect } from "react";
import { motion, useTransform, useScroll, useSpring } from "motion/react";
import Image from "next/image";
import { useSvgSize } from "@/hooks";
import { usePathname } from "next/navigation";
import Menu from "./menuButton";

export default function Navbar(props) {
  const [svgWidth, svgHeight ] = useSvgSize();
  const { scrollYProgress } = useScroll();
  const path = usePathname();
  const current = path===[]?'/':path;

  const homeOutput = useTransform(
    scrollYProgress,
    [0, 0.1, 0.5, 1],
    [0, 1, 0, 0],
    {
      clamp: false
    }
  );
  const otherOutput = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 1],
    [1, 0.5, 0, 0],
    {
      clamp: false
    }
  );
  const [scrollOutput, setScrollOutput] = useState(homeOutput)

  useEffect(()=> {
    if(current === '/'){
      setScrollOutput(homeOutput);
    } else  {
      setScrollOutput(otherOutput)
    }
  }, [current, otherOutput, homeOutput])

  const firstPath = `M0,0v${svgHeight-(svgHeight/12)}C${svgWidth/10},${svgHeight+30} ${svgWidth/10},${svgHeight-(svgHeight/2)} ${svgWidth/5.5},${svgHeight-(svgHeight/3.2)}c${svgWidth/10},${svgHeight/4} ${svgWidth/8},-${svgHeight/2.5} ${svgWidth/4},-${svgHeight/8}c${svgWidth/8.5},${svgHeight/4} ${svgWidth/3.5},${svgHeight/6} ${svgWidth/1.5},-${svgHeight*1.5}z`;
  const firstCurve =`M0,${svgHeight-(svgHeight/12)}C${svgWidth/10},${svgHeight+30} ${svgWidth/10},${svgHeight-(svgHeight/2)} ${svgWidth/5.5},${svgHeight-(svgHeight/3.2)}c${svgWidth/10},${svgHeight/4} ${svgWidth/8},-${svgHeight/2.5} ${svgWidth/4},-${svgHeight/8}c${svgWidth/8.5},${svgHeight/4} ${svgWidth/3.5},${svgHeight/6} ${svgWidth/1.5},-${svgHeight*1.5}`;
  const secondPath = `M0,0v${svgHeight-(svgHeight/8)}C${svgWidth/10},${svgHeight*0.8} ${svgWidth/10},${svgHeight/9} ${svgWidth/5},${svgHeight*0.64}c${svgWidth/15},${svgHeight/3.5} ${svgWidth/8},-${svgHeight/2} ${svgWidth},-${svgHeight/1.5}v-150z`;
  const secondCurve = `M0,${svgHeight-(svgHeight/8)}C${svgWidth/10},${svgHeight*0.8} ${svgWidth/10},${svgHeight/9} ${svgWidth/5},${svgHeight*0.64}c${svgWidth/15},${svgHeight/3.5} ${svgWidth/8},-${svgHeight/2} ${svgWidth},-${svgHeight/1.5}`;

  return (
    <div className="w-screen flex justify-center items-center relative">
      <motion.svg width={svgWidth} height={svgHeight} className="fixed top-0 z-40">  
        <motion.path id="fill" d={firstPath} className="bg-none fill-[var(--svg-fill)]" stroke="none" opacity={scrollOutput} />
        <motion.path id="path" d={firstCurve} className="bg-none stroke-[var(--first-svg-stroke-light)]" strokeWidth="2.5" fill="none" pathLength={scrollOutput} />
        <motion.path id="path" d={firstCurve} className="bg-none stroke-[var(--first-svg-stroke)]" fill="none" pathLength={scrollOutput} />
  
        <motion.path id="fill" d={secondPath} className="fill-[var(--second-svg-fill)]" stroke="none" transform={`rotate(-3.5 0 ${svgHeight})`} opacity={scrollOutput} />
        <motion.path id="path" d={secondCurve} className="stroke-[var(--second-svg-stroke-light)]" strokeWidth="2.8" fill="none" transform={`rotate(-3.5 0 ${svgHeight})`}  pathLength={scrollOutput}/>
        <motion.path id="path" d={secondCurve} className="stroke-[var(--second-svg-stroke)]" fill="none" transform={`rotate(-3.5 0 ${svgHeight})`} pathLength={scrollOutput} />

        <motion.path id="fill" d={secondPath} className="bg-none fill-[var(--third-svg-fill)]" stroke="none" opacity={scrollOutput} />
        <motion.path id="path" d={secondCurve} className="bg-none stroke-[var(--third-svg-stroke-light)]" strokeWidth="2.5" fill="none"  pathLength={scrollOutput} />
        <motion.path id="path" d={secondCurve} className="bg-none stroke-[var(--third-svg-stroke)]" stroke="rgba(50,50,50,0.8)" fill="none" pathLength={scrollOutput} />
      </motion.svg>
      <Menu />
    </div>
  );
}
