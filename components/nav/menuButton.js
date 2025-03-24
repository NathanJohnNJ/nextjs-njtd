'use client';
import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useMotionValueEvent, AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";
import { useSvgSize } from "@/hooks";
import SideNavButtons from "./sideNavButtons";
import NavButtons from "./navButtons";
import { usePathname } from "next/navigation";

// Logo button who's position should change depending on the page scroll position.

export default function MenuButton(props) {
  const [showSVG, setShowSVG] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showSideLinks, setShowSideLinks] = useState(false);
  const  current  = usePathname();
  const { scrollY, scrollYProgress } = useScroll();

  const homeLogoTop = useTransform(
    scrollYProgress,
    [0, 0.2, 0.6, 1],
    ['50vh', '18vh', '4.5vh', '4vh']
  );
  const homeLogoLeft = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1],
    ['0vw', '0vw', '-40vw', '-40vw'],
    {
      clamp: false
    }
  );
  const homeLogoScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.6, 1],
    [2, 1, 0.5, 0.5],
    {
      clamp: false
    }
  );

  const [ logoTop, setLogoTop ] = useState(homeLogoTop);
  const [ logoLeft, setLogoLeft ] = useState(homeLogoLeft);  
  const [ logoScale, setLogoScale ] = useState(homeLogoScale);
 
  
  const otherLogoTop = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ['6vh', '5vh', '5vh'],
    {
      clamp: false
    }
  );
  const otherLogoLeft = useTransform(
    scrollYProgress,
    [0, 0.4, 1],
    ['0vw', '-40vw', '-40vw'],
    {
      clamp: false
    }
  );
  const otherLogoScale = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [0.8, 0.5, 0.5],
    {
      clamp: false
    }
  );

  function clickHandler(){
    if(scrollYProgress.current < 0.6) {
      console.log('showLinks, scrollYProgress:', scrollYProgress.current);
      setShowLinks(!showLinks)
    } else {
      console.log('showSideLinks, scrollYProgress:', scrollYProgress.current);
      setShowSideLinks(!showSideLinks)
    }
  }
  useEffect(()=> {
    if(current != '/'){
      setLogoTop(otherLogoTop);
      setLogoLeft(otherLogoLeft);
      setLogoScale(otherLogoScale);
    }
  },[])

  return (
    <motion.div className="fixed flex flex-col items-center justify-center w-[100%] z-50" style={{ translateX: logoLeft, translateY: logoTop, scale: logoScale }}>
      <button onClick={clickHandler} style={{ width: '400px', height: 'auto' }} className={ showLinks || showSideLinks ? 'transition-all hover:scale-[85%] scale-[80%] flex items-center justify-center' : 'items-center justify-center flex scale-75 transition-all hover:scale-[80%]' }>
        <Image id="homeAnimatedLogo" src="./logo.animated.svg" alt="NJTD Logo" className="firstLogo" width="400"height="400" priority />
      </button>
      <AnimatePresence>
        { showLinks &&
          <motion.div>
            <NavButtons showLinks={showLinks} setShowLiks={setShowLinks} />
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence>
        { showSideLinks &&
          <motion.div>
            <SideNavButtons showSideLinks={showSideLinks} setShowSideLinks={setShowSideLinks} />
          </motion.div>
        }
      </AnimatePresence>
    </motion.div>
  );
}
