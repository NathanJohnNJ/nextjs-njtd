import { useState, useEffect } from "react";
import { motion, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSvgSize } from "@/hooks";
import SideNavButtons from "./sideNavButtons";
import NavButtons from "./navButtons";
import { usePathname } from "next/navigation";

export default function Navbar(props) {
  const [svgWidth, svgHeight ] = useSvgSize();
  const { showNav, setShowNav, yPosition, scrollY, scrollYProgress } = props;
  const [showSideNav, setShowSideNav] = useState(false);
  const { current } = usePathname();
  useEffect(() => {
    if (current === "/") {
      setShowNav(true);
      setShowSideNav(true);
    } else {
      setShowNav(false);
      setShowSideNav(false);
    }
  }, [current]);

  // Value being driven by scrolling (e.g. height)
  const initialValue = 200; // This is initial height of nav bar
  const finalValue = svgHeight; // final height of nav bar
  const thresholdY = 350; // set the scroll position where you want the state change for the content of the nav bar - amount scrolled, not distance from top of screen

  const speed = 1;
  const scrollDistance = ( finalValue - initialValue ) / speed;

  const startY = 0; // scroll position when transition starts - for the growth of the navbar (amount scrolled)
  const endY = startY + scrollDistance;

  const scrollOutput = useTransform(
    scrollY,
    [startY, endY, endY],
    [initialValue, finalValue, finalValue],
    {
      clamp: false
    }
  );
  const sideNavX = useTransform(
    scrollYProgress,
    [0.35, 0.6, 0.6],
    ['-250px', '0px', '0px']
  )

  const [isPastThreshold, setIsPastThreshold] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > thresholdY){
      setIsPastThreshold(true);
    }else {
      setIsPastThreshold(false);
    }
  })
  const firstPath = `M0,0v${svgHeight-(svgHeight/12)}C${svgWidth/10},${svgHeight+30} ${svgWidth/10},${svgHeight-(svgHeight/2)} ${svgWidth/5.5},${svgHeight-(svgHeight/3.2)}c${svgWidth/10},${svgHeight/4} ${svgWidth/8},-${svgHeight/2.5} ${svgWidth/4},-${svgHeight/8}c${svgWidth/8.5},${svgHeight/4} ${svgWidth/3.5},${svgHeight/6} ${svgWidth/1.5},-${svgHeight*1.5}z`;
  const firstCurve =`M0,${svgHeight-(svgHeight/12)}C${svgWidth/10},${svgHeight+30} ${svgWidth/10},${svgHeight-(svgHeight/2)} ${svgWidth/5.5},${svgHeight-(svgHeight/3.2)}c${svgWidth/10},${svgHeight/4} ${svgWidth/8},-${svgHeight/2.5} ${svgWidth/4},-${svgHeight/8}c${svgWidth/8.5},${svgHeight/4} ${svgWidth/3.5},${svgHeight/6} ${svgWidth/1.5},-${svgHeight*1.5}`;
  const secondPath = `M0,0v${svgHeight-(svgHeight/8)}C${svgWidth/10},${svgHeight*0.8} ${svgWidth/10},${svgHeight/9} ${svgWidth/5},${svgHeight*0.64}c${svgWidth/15},${svgHeight/3.5} ${svgWidth/8},-${svgHeight/2} ${svgWidth},-${svgHeight/1.5}v-150z`;
  const secondCurve = `M0,${svgHeight-(svgHeight/8)}C${svgWidth/10},${svgHeight*0.8} ${svgWidth/10},${svgHeight/9} ${svgWidth/5},${svgHeight*0.64}c${svgWidth/15},${svgHeight/3.5} ${svgWidth/8},-${svgHeight/2} ${svgWidth},-${svgHeight/1.5}`;

  return (
    <motion.div className="w-full fixed top-0 flex justify-center items-center z-50">
      <motion.div className="w-full fixed top-0 flex justify-center items-center" style={{ height: scrollOutput }}>
        <motion.svg width={svgWidth} height={svgHeight} className="bg-none"> 
          <AnimatePresence>
            {yPosition < 0.3 &&
              <motion.g id="paths" initial={{ translateY: 0, transition: { duration: 1 } }} animate={{ translateY: 0, transition: { duration: 1 } }} exit={{ translateY: -svgHeight, transition: { duration: 1, delay: 2 } }}>
                <motion.path id="fill" d={firstPath} className="bg-none fill-[var(--second-svg-fill)]" stroke="none" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 3.5, delay: 2.4, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }} exit={{ opacity: 0, transition: {duration: 1 }}} />
                <motion.path id="path" d={firstCurve} className="bg-none stroke-[var(--third-svg-stroke-light)]"  strokeWidth="2.5" fill="none" initial={{ pathLength: 0}} animate={{ pathLength: 1}}  transition={{ duration: 3.5, delay: 2.6, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }} exit={{ pathLength: 0, transition: {duration: 2 }}} />
                <motion.path id="path" d={firstCurve} className="bg-none stroke-[var(--third-svg-stroke)]" fill="none" initial={{ pathLength: 0}} animate={{ pathLength: 1}}  transition={{ duration: 3.5, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }} exit={{ pathLength: 0, transition: {duration: 2 }}} />
          

                <motion.path id="fill" d={secondPath} className="fill-[var(--svg-fill)]" stroke="none" transform={`rotate(-3.5 0 ${svgHeight})`} initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 3.5, delay: 2, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }} exit={{ opacity: 0, transition: {duration: 1 }}}  />
                <motion.path id="path" d={secondCurve} className="stroke-[var(--first-svg-stroke-light)]"  strokeWidth="2.8" fill="none" transform={`rotate(-3.5 0 ${svgHeight})`} initial={{ pathLength: 0}} animate={{ pathLength: 1}} transition={{ duration: 3.5, delay: 2, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }} exit={{ pathLength: 0, transition: {duration: 2 }}} />
                <motion.path id="path" d={secondCurve} className="stroke-[var(--first-svg-stroke)]" fill="none" transform={`rotate(-3.5 0 ${svgHeight})`} initial={{ pathLength: 0}} animate={{ pathLength: 1}}  transition={{ duration: 3.5, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }} exit={{ pathLength: 0, transition: {duration: 2 }}} />

                <motion.path id="fill" d={secondPath} className="bg-none fill-[var(--svg-fill)]" stroke="none" initial={{ opacity: 0}} animate={{ opacity: 1}} transition={{ duration: 3.5, delay: 2.1, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }} exit={{ opacity: 0, transition: {duration: 1 }}} />
                <motion.path id="path" d={secondCurve} className="bg-none stroke-[var(--second-svg-stroke-light)]"  strokeWidth="2.5" fill="none" initial={{ pathLength: 0}} animate={{ pathLength: 1}}  transition={{ duration: 3.5, delay: 2.2, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }} exit={{ pathLength: 0, transition: {duration: 2 }}} />
                <motion.path id="path" d={secondCurve} className="bg-none stroke-[var(--second-svg-stroke)]" stroke="rgba(50,50,50,0.8)" fill="none" initial={{ pathLength: 0}} animate={{ pathLength: 1}}  transition={{ duration: 3.5, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }} exit={{ pathLength: 0, transition: {duration: 2 }}} />

                
                <motion.foreignObject x="0" y="0" width="100%" height="100%">
                  <motion.div className="bg-none flex flex-col items-center" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: isPastThreshold ? 1 : 0, scale: isPastThreshold ? 0.5 : 0 }} transition={{ duration: 1.5 }}>
                    <button onClick={() => setShowNav(!showNav)} className={ showNav ? 'transition-all hover:scale-105 -mt-[5vh]' : '-mt-[5vh] scale-90 transition-all hover:scale-95 z-50' } >
                      <Image id="homeAnimatedLogo" src="./logo.animated.svg" alt="NJTD Logo" className="flex firstLogo bg-none -mt-[10vh]" width={400} height={400} priority />
                    </button>
                  </motion.div>
                    <AnimatePresence>
                      {showNav &&
                      <NavButtons showNav={showNav} setShowNav={setShowNav} />
                      }
                    </AnimatePresence>
                </motion.foreignObject>
              </motion.g>
            }
          </AnimatePresence>
        </motion.svg>
      </motion.div>
      <motion.div style={{translateX: sideNavX}} className="absolute top-0 left-0 z-99">
        <button onClick={() => setShowSideNav(!showSideNav)} className={ showSideNav ? 'transition-all hover:scale-105' : 'scale-90 transition-all hover:scale-95 z-50' } >
          <Image id="sideNavLogo" src="./logo.animated.svg" alt="NJTD Logo" className="firstLogo" width={250} height={250} priority />
        </button>
      </motion.div>
      <AnimatePresence>
        {showSideNav &&
          <SideNavButtons showSideNav={showSideNav} setShowSideNav={setShowSideNav} />
        }
      </AnimatePresence>
    </motion.div>
  );
}
