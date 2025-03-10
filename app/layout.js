'use client';
import { Poppins, Geologica } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Image from "next/image";
import Navbar from "@/components/nav/navbar";
// import Welcome from "@/components/home/welcome";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useEffect, useState } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { usePathname } from "next/navigation";

export const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  variable: "--font-poppins"
});
// export const raleway = Raleway({ 
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   style: ['normal'],
//   variable: "--font-raleway"
// });
// export const spartan = League_Spartan({ 
//   subsets: ['latin'],
//   weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
//   style: ['normal'],
//   variable: "--font-spartan"
// });
// export const gothic = League_Gothic({ 
//   subsets: ['latin'],
//   weight: ['variable'],
//   style: ['normal'],
//   variable: "--font-gothic"
// });
// export const geologica = Geologica({ 
//   subsets: ['latin'],
//   weight: ['variable'],
//   style: ['normal'],
//   variable: "--font-geologica",
//   axes: ["CRSV", "SHRP"]
// });

export default function RootLayout({ children }) {
  const { scrollY, scrollYProgress } = useScroll();
  const [yPosition, setYPosition] = useState(0)
  const current = usePathname();
  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { yPosition: yPosition, scrollYProgress: scrollYProgress });
  })
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setYPosition(latest);
  })
  const [ showFooter,setShowFooter ] = useState(false);
  const [ showNav, setShowNav ] = useState(true);

  useEffect(() => {
    if(yPosition < 0.28){
      setShowNav(true);
    } else{
      setShowNav(false);
    }
    if (yPosition > 0.7){
      setShowFooter(true);
    }  else {
      setShowFooter(false);
    }
  }, [yPosition])


  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(useGSAP)
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased containerBG`}>
        <Navbar yPosition={yPosition} showNav={showNav} setShowNav={setShowNav} scrollY={scrollY} scrollYProgress={scrollYProgress} />
        <AnimatePresence>
          {yPosition <= 0.03 && current === "/" &&
          <motion.div className="flex flex-col items-center justify-center pt-40" whileInView={{ scale:1, opacity: 1 }} exit={{ scale:0, opacity:0 }} transition={{ duration: 1 }} viewPort={{ amount: 1.2}}>

          <svg width="100vw" height="100vh" viewBox="0 0 1000 1000">
          <defs>
              <linearGradient id="Gradient1">
                  <stop offset="0%" stopColor="blue" />
                  <stop offset="20%" stopColor="magenta" />
                  <stop offset="40%" stopColor="red" />
                  <stop offset="60%" stopColor="orange" />
                  <stop offset="80%" stopColor="yellow" />
                  <stop offset="100%" stopColor="greenyellow" />
              </linearGradient>
              <linearGradient id="Gradient2">
                  <stop offset="0%" stopColor="greenyellow" />
                  <stop offset="20%" stopColor="yellow" />
                  <stop offset="40%" stopColor="orange" />
                  <stop offset="60%" stopColor="red" />
                  <stop offset="80%" stopColor="magenta" />
                  <stop offset="100%" stopColor="blue" />
              </linearGradient>
          </defs>
          <text x="50%" y="18%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle" stroke="url(#Gradient1)">
          Thank you for stopping by.
          </text>
          <foreignObject height="500" width="500" x="28%" y="22%" className="flex">

            <div className="firstLogo h-[100%] w-[100%] flex self-center justify-self-center items-center justify-center">
              <Image
                src="./logo.animated.svg"
                alt="NJTD Logo"
                width={500}
                height={500}
              />
            </div>
          </foreignObject>
          <text x="50%" y="75%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle"  stroke="url(#Gradient2)">
          I'm currently redesigning this site.
          </text>
          <text x="50%" y="85%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle"  stroke="url(#Gradient2)">
          The site will be fully functioning again in a week or 2.
          </text>
      </svg>

            {/* <Image id="homeAnimatedLogo" src="./logo.animated.svg" alt="NJTD Logo" className="flex firstLogo" width={400} height={400} priority /> */}

          </motion.div>}
        </AnimatePresence>
          {/* <div className="w-full h-[50vh] flex flex-col items-center sticky top-0">
            <Welcome />
          </div> */}
        <div className="h-fit w-[100vw]">
          {childrenWithProps}
        </div>
        <AnimatePresence>
          {showFooter && 
            <motion.div className="h-[30vh]" animate={{ translateY: yPosition > 0.7 ? 290 : 0, transition: { duration: 100, damping: 10, mass: 1 } }}>
              <Footer yPosition={yPosition} />
            </motion.div>
          }
        </AnimatePresence>
      </body>
    </html>
  );
}
