'use client';
import { useSvgSize } from "../hooks";
import { motion, useTransform, useScroll } from "framer-motion";
import Link from "next/link";


const Footer = (props) => {
  const [ svgWidth, svgHeight ] = useSvgSize();
  const { scrollYProgress } = useScroll();

   const scrollOutput = useTransform(
      scrollYProgress,
      [0, 0.975, 1],
      [0, 0, 1],
      {
        clamp: false
      }
    );
    const scrollVisibility = useTransform(
      scrollYProgress,
      [0, 0.975, 1],
      ['hidden', 'hidden', 'visible'],
      {
        clamp: false
      }
    );
    const strokeOutput = useTransform(
      scrollYProgress,
      [0, 0.975, 1],
      [0, 0, 1],
      {
        clamp: false
      }
    );
  
  const firstPath = `M${svgWidth},${svgHeight}h-${svgWidth}v-${svgHeight/2}C${svgWidth/10},${svgHeight-30} ${svgWidth/10},${svgHeight-(svgHeight/2)} ${svgWidth/5.5},${svgHeight-(svgHeight/3.2)}c${svgWidth/10},${svgHeight/4} ${svgWidth/8},-${svgHeight/2.5} ${svgWidth/4},-${svgHeight/8}c${svgWidth/8.5},${svgHeight/4} ${svgWidth/3.5},${svgHeight/6} ${svgWidth/1.5},-${svgHeight*0.7}z `;

  const secondPath = `M${svgWidth},${svgHeight}h-${svgWidth}v-${svgHeight/4}C${svgWidth/10},${svgHeight*0.9} ${svgWidth/6},${svgHeight/2} ${svgWidth/4.2},${svgHeight*0.7}c${svgWidth/7},${svgHeight/3.5} ${svgWidth/8},-${svgHeight/4.5} ${svgWidth},-${svgHeight/2.5}v-150z `;

  const thirdPath = `M${svgWidth},${svgHeight}h-${svgWidth}v-${svgHeight/4}c${svgWidth/4},${svgHeight/4} ${svgWidth/10},-${svgHeight*0.45} ${svgWidth/3},-${svgHeight/8}c${svgWidth/5},${svgHeight/3.5} ${svgWidth/4},-${svgHeight/1.5} ${svgWidth/3},-${svgHeight/6}c${svgWidth/8},${svgHeight/1.5} ${svgWidth/10},-${svgHeight*0.1} ${svgWidth/3},-${svgHeight/2.3}z `;
  
  
  return (
    <motion.div className="w-full flex justify-center items-center">
      <motion.svg width={svgWidth} height={svgHeight} fill="none" className="fixed bottom-0"> 
        <motion.g id="paths" >
          <motion.path id="fill" d={thirdPath} className="fill-[var(--svg-fill)] stroke-none" opacity={scrollOutput}   />
          <motion.path id="path" d={thirdPath} className="stroke-[var(--first-svg-stroke)] fill-none" strokeWidth="2.5" pathLength={strokeOutput} />
          <motion.path id="path" d={thirdPath} className="stroke-[var(--first-svg-stroke-light)] fill-none" strokeWidth="2.5" pathLength={strokeOutput} />
          <motion.path id="fill" d={secondPath} className="fill-[var(--second-svg-fill)] stroke-none" opacity={scrollOutput} />
          <motion.path id="path" d={secondPath} className="stroke-[var(--second-svg-stroke] fill-none" strokeWidth="2.5" pathLength={strokeOutput} />
          <motion.path id="path" d={secondPath} className="stroke-[var(--second-svg-stroke-light] fill-none" strokeWidth="2.5" pathLength={strokeOutput} />
          <motion.path id="fill" d={firstPath} className="fill-[var(--third-svg-fill)] stroke-none" opacity={scrollOutput} />
          <motion.path id="path" d={firstPath} className="stroke-[var(--third-svg-stroke)] fill-none" strokeWidth="2.5" pathLength={strokeOutput} />
          <motion.path id="path" d={firstPath} className="stroke-[var(--third-svg-stroke-light)] fill-none" strokeWidth="2.5" pathLength={strokeOutput} />
        </motion.g>
        <motion.foreignObject width={svgWidth} height={svgHeight} visibility={scrollVisibility} className="relative">
          <Link href="/privacy" className="subTitle absolute left-40 bottom-1 text-[var(--light-color)] hover:text-[var(--dark-color)] hover:filter-[var(--my-shadow)]">
            Privacy
          </Link>
          <Link href="/terms" className="subTitle absolute right-35 bottom-1 text-[var(--light-color)] hover:text-[var(--dark-color)] hover:filter-[var(--my-shadow)]">
            Terms & Conditions
          </Link>
        </motion.foreignObject>
      </motion.svg>
    </motion.div>
  )
}

export default Footer;