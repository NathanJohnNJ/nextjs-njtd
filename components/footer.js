import Svg, { Defs, LinearGradient, Stop, G, ForeignObject } from "react-native-svg-web";
import { useSvgSize } from "../hooks";
import { motion } from "motion/react";

const Footer = (props) => {
  const { scrollY } = props;
  const [ svgWidth, svgHeight ] = useSvgSize();
  const firstPath = `M${svgWidth},${svgHeight}h-${svgWidth}C${svgWidth/10},${svgHeight-30} ${svgWidth/10},${svgHeight-(svgHeight/2)} ${svgWidth/5.5},${svgHeight-(svgHeight/3.2)}c${svgWidth/10},${svgHeight/4} ${svgWidth/8},-${svgHeight/2.5} ${svgWidth/4},-${svgHeight/8}c${svgWidth/8.5},${svgHeight/4} ${svgWidth/3.5},${svgHeight/6} ${svgWidth/1.5},-${svgHeight*0.7}z `;

  const secondPath = `M${svgWidth},${svgHeight}h-${svgWidth}v-${svgHeight/8}C${svgWidth/10},${svgHeight*0.99} ${svgWidth/6},${svgHeight/2} ${svgWidth/4.2},${svgHeight*0.7}c${svgWidth/7},${svgHeight/3.5} ${svgWidth/8},-${svgHeight/4.5} ${svgWidth},-${svgHeight/2.5}v-150z `;

  const thirdPath = `M${svgWidth},${svgHeight}h-${svgWidth}v-${svgHeight/4}c${svgWidth/4},${svgHeight/4} ${svgWidth/10},-${svgHeight*0.45} ${svgWidth/3},-${svgHeight/8}c${svgWidth/5},${svgHeight/3.5} ${svgWidth/4},-${svgHeight/1.5} ${svgWidth/3},-${svgHeight/6}c${svgWidth/8},${svgHeight/1.5} ${svgWidth/10},-${svgHeight*0.1} ${svgWidth/3},-${svgHeight/2.3}z `;
  return (
    <motion.div className="bg-none" animate={{ translateY: scrollY > 5250 ? [ svgHeight, 0 ] : [ svgHeight, svgHeight ], transition: { duration: 1 } }}>
      <Svg width={svgWidth} height={svgHeight} fill="none"> 
        <motion.g id="paths" >
          <motion.path id="fill" d={thirdPath} className="fill-[var(--black-color)] stroke-none" animate={{ opacity: [0, 0.85], transition: { duration: 4 } }}  />
          <motion.path id="path" d={thirdPath} className="stroke-[var(--black-color)] fill-none" animate={{ pathLength: [0, 0.85], transition: { duration: 3 } }} />
          <motion.path id="fill" d={secondPath} className="fill-[var(--light-color)] stroke-none" animate={{ opacity: [0, 0.85], transition: { duration: 4 } }} />
          <motion.path id="path" d={secondPath} className="stroke-[var(--light-color)] fill-none" animate={{ pathLength: [0, 0.85], transition: { duration: 3 } }} />
          <motion.path id="fill" d={firstPath} className="fill-[var(--dark-color)] stroke-none" animate={{ opacity: [0, 0.85], transition: { duration: 4 } }} />
          <motion.path id="path" d={firstPath} className="stroke-[var(--dark-color)] fill-none" animate={{ pathLength: [0, 0.75], transition: { duration: 3 } }} />
        </motion.g>
        <ForeignObject width={svgWidth} height={svgHeight} fill="none" className="flex justify-center items-center bg-none">

        </ForeignObject>
      </Svg>
    </motion.div>
  )
}

export default Footer;