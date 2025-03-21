import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useMotionValueEvent, AnimatePresence, useScroll } from "framer-motion";
import Image from "next/image";
import { useSvgSize } from "@/hooks";
import SideNavButtons from "./sideNavButtons";
import NavButtons from "./navButtons";
import { usePathname } from "next/navigation";

// Logo button who's position should change depending on the page scroll position.

export default function Navbar(props) {
  const [showSVG, setShowSVG] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [showSideLinks, setShowSideLinks] = useState(false);
  const  current  = usePathname();
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    if (current <= "/") {
      console.log(current);
      // setShowSVG(true);
    } else {
      console.log(current);
      // setShowSVG(false);
    }
  }, [current]);
  

  const scrollOutput = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ['50vh', '50vh', '0vh'],
    {
      clamp: false
    }
  );
  const logoTop = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ['55vh', '20vh', '5vh'],
    {
      clamp: false
    }
  );
  const logoLeft = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    ['0vw', '0vw', '-40vw'],
    {
      clamp: false
    }
  );
  const logoScale = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    [2, 1, 0.5],
    {
      clamp: false
    }
  );

  function clickHandler(){
    if(scrollYProgress.current < 0.7) {
      console.log('showLinks, scrollYProgress:', scrollYProgress);
      setShowLinks(!showLinks)
    } else {
      console.log('showSideLinks, scrollYProgress:', scrollYProgress);
      setShowSideLinks(!showSideLinks)
    }
  }

  return (
    <motion.div className=" fixed flex flex-col items-center justify-center w-[100%] z-50" style={{ translateX: logoLeft, translateY: logoTop, scale: logoScale }}>
      <button onClick={clickHandler} style={{ width: '400px', height: 'auto' }} className={ showLinks || showSideLinks ? 'transition-all absolute  hover:scale-105 flex items-center justify-center' : 'absolute items-center justify-center flex scale-90 transition-all hover:scale-95' }>
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
