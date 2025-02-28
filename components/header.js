'use client';
// import Svg, { Defs, LinearGradient, Stop, G, ForeignObject } from "react-native-svg-web";
import { useSvgSize } from "../hooks";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import ActionMenu from "./actionMenu.js";

const Header = (props) => {
  const { yPosition, showNav, setShowNav } = props;
  const [ svgWidth, svgHeight ] = useSvgSize();
  const firstPath = `M0,0v${svgHeight-(svgHeight/12)}C${svgWidth/10},${svgHeight+30} ${svgWidth/10},${svgHeight-(svgHeight/2)} ${svgWidth/5.5},${svgHeight-(svgHeight/3.2)}c${svgWidth/10},${svgHeight/4} ${svgWidth/8},-${svgHeight/2.5} ${svgWidth/4},-${svgHeight/8}c${svgWidth/8.5},${svgHeight/4} ${svgWidth/3.5},${svgHeight/6} ${svgWidth/1.5},-${svgHeight*1.5}z`;
  const firstCurve =`M0,${svgHeight-(svgHeight/12)}C${svgWidth/10},${svgHeight+30} ${svgWidth/10},${svgHeight-(svgHeight/2)} ${svgWidth/5.5},${svgHeight-(svgHeight/3.2)}c${svgWidth/10},${svgHeight/4} ${svgWidth/8},-${svgHeight/2.5} ${svgWidth/4},-${svgHeight/8}c${svgWidth/8.5},${svgHeight/4} ${svgWidth/3.5},${svgHeight/6} ${svgWidth/1.5},-${svgHeight*1.5}`;
  const secondPath = `M0,0v${svgHeight-(svgHeight/8)}C${svgWidth/10},${svgHeight*0.8} ${svgWidth/10},${svgHeight/9} ${svgWidth/5},${svgHeight*0.64}c${svgWidth/15},${svgHeight/3.5} ${svgWidth/8},-${svgHeight/2} ${svgWidth},-${svgHeight/1.5}v-150z`;
  const secondCurve = `M0,${svgHeight-(svgHeight/8)}C${svgWidth/10},${svgHeight*0.8} ${svgWidth/10},${svgHeight/9} ${svgWidth/5},${svgHeight*0.64}c${svgWidth/15},${svgHeight/3.5} ${svgWidth/8},-${svgHeight/2} ${svgWidth},-${svgHeight/1.5}`;
  return (
    <motion.div id="header" className="bg-none fixed">
      <svg width={svgWidth} height={svgHeight} fill="none" className="bg-none"> 
        <AnimatePresence>
          {yPosition < 0.3 &&
            <motion.g id="paths" from={{ translateY: 0, transition: { duration: 1 } }} animate={{ translateY: 0, transition: { duration: 1 } }} exit={{ translateY: -svgHeight, transition: { duration: 1 } }}>
              <motion.path id="fill" d={secondPath} className="bg-none" stroke="none" fill="rgba(75,75,75,0.75)" transform={`rotate(-3.5 0 ${svgHeight})`} animate={{ opacity: [0, 1], transition: { duration: 4, delay: 2 } }}  />
              <motion.path id="path" d={secondCurve} className="bg-none" stroke="rgba(180,180,180,0.85)" strokeWidth="2.8" fill="none" transform={`rotate(-3.5 0 ${svgHeight})`} animate={{ pathLength: [0, 1], transition: { duration: 4, delay: 2 } }} exit={{ pathLength: 0 }} />
              <motion.path id="path" d={secondCurve} className="bg-none" stroke="rgba(60,60,60,0.75)" fill="none" transform={`rotate(-3.5 0 ${svgHeight})`} animate={{ pathLength: [0, 1], transition: { duration: 4 } }} exit={{ pathLength: 0 }} />

              <motion.path id="fill" d={secondPath} className="bg-none" stroke="none" fill="rgba(75,75,75,0.75)" animate={{ opacity: [0, 1], transition: { duration: 4, delay: 2.3 } }} />
              <motion.path id="path" d={secondCurve} className="bg-none" stroke="rgba(150,150,150,0.8)" strokeWidth="2.5" fill="none" animate={{ pathLength: [0, 1], transition: { duration: 4, delay: 2.4 } }} exit={{ pathLength: 0 }} />
              <motion.path id="path" d={secondCurve} className="bg-none" stroke="rgba(50,50,50,0.8)" fill="none" animate={{ pathLength: [0, 1], transition: { duration: 4 } }} exit={{ pathLength: 0 }} />

              <motion.path id="fill" d={firstPath} className="bg-none" stroke="none" fill="rgba(75,75,75,0.75)" animate={{ opacity: [0, 1], transition: { duration: 4, delay: 2.6 } }} />
              <motion.path id="path" d={firstCurve} className="bg-none" stroke="rgba(175,175,175,0.65)" strokeWidth="2.5" fill="none" animate={{ pathLength: [0, 1], transition: { duration: 4, delay: 2.8 } }} exit={{ pathLength: 0 }} />
              <motion.path id="path" d={firstCurve} className="bg-none" stroke="rgba(75,75,75,0.75)" fill="none" animate={{ pathLength: [0, 1], transition: { duration: 4 } }} exit={{ pathLength: 0 }} />
            </motion.g>
          }
        </AnimatePresence>
        <foreignObject width={svgWidth} height={svgHeight} fill="none" className="flex justify-center items-center bg-none">
          <motion.div className="flex flex-row justify-center p-[10] bg-none w-full" animate={{ opacity: [0, 1], transition: { duration: 2, delay: 2.7 } }}>
            <ActionMenu showNav={showNav} setShowNav={setShowNav} yPosition={yPosition} />
          </motion.div>
        </foreignObject>
      </svg>
    </motion.div>
  )
}

export default Header;