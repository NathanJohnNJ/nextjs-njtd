'use client';
import { useState, useEffect, useRef } from "react";
import { motion, useTransform, useMotionValueEvent, AnimatePresence, useScroll } from "motion/react";
import Image from "next/image";
import { useSvgSize } from "@/hooks";
import NavButtons from "./navButtons";
import { usePathname } from "next/navigation";
import AnimatedLogo from "@/public/animatedLogo";

// Logo button who's position should change depending on the page scroll position.

export default function MenuButton() {
  const [showSVG, setShowSVG] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const  path  = usePathname();
  const current = path===''?'/':path;
  const { scrollYProgress } = useScroll();

  const homeLogoTop = useTransform(
    scrollYProgress,
    [0, 0.1, 0.6, 1],
    ['50vh', '9.5vh', '4.5vh', '4vh']
  );
  const homeLogoLeft = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ['0vw', '0vw', '-40vw', '-40vw'],
    {
      clamp: false
    }
  );
  const homeLogoScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.4, 1],
    [2, 1, 0.5, 0.5],
    {
      clamp: false
    }
  );
 
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
    [0, 0.2, 1],
    ['0vw', '-40vw', '-40vw'],
    {
      clamp: false
    }
  );
  const otherLogoScale = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0.7, 0.5, 0.5],
    {
      clamp: false
    }
  );
  
  const [ logoTop, setLogoTop ] = useState(homeLogoTop);
  const [ logoLeft, setLogoLeft ] = useState(homeLogoLeft);  
  const [ logoScale, setLogoScale ] = useState(homeLogoScale);

  useEffect(()=> {
    if(current != '/'){
      setLogoTop(otherLogoTop);
      setLogoLeft(otherLogoLeft);
      setLogoScale(otherLogoScale);
    }else{
      setLogoTop(homeLogoTop);
      setLogoLeft(homeLogoLeft);
      setLogoScale(homeLogoScale);
    }
  }, [current, otherLogoLeft, otherLogoTop, otherLogoScale, homeLogoLeft, homeLogoScale, homeLogoTop])

  return (
    <motion.div className="fixed flex flex-col items-center justify-center w-[100%] z-50" style={{ translateX: logoLeft, translateY: logoTop, scale: logoScale }}>
      <AnimatedLogo size="256" setShowLinks={setShowLinks} showLinks={showLinks} />
      <div className="flex flex-row items-center fixed justify-center w-[100%] z-40">
        <NavButtons showLinks={showLinks} setShowLinks={setShowLinks} />
      </div>
    </motion.div>
  );
}
