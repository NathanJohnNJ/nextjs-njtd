'use client';
import { Poppins, League_Spartan } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Image from "next/image";
import Navbar from "@/components/nav/newNavbar";
// import Welcome from "@/components/home/welcome";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import React, { useEffect, useState } from "react";
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
export const spartan = League_Spartan({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  variable: "--font-spartan"
});
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
    if (yPosition > 0.85){
      setShowFooter(true);
    }  else {
      setShowFooter(false);
    }
  }, [yPosition])

  return (
    <html lang="en">
      <head>
        
      </head>
      <body className={`${poppins.variable} ${spartan.variable} antialiased containerBG`}>
      <div className="pt-8 mt-[20px]">
        <Navbar yPosition={yPosition} showNav={showNav} setShowNav={setShowNav} scrollY={scrollY} scrollYProgress={scrollYProgress} />
      </div>
          {/* */}
          
          {/* <div className="w-full h-[50vh] flex flex-col items-center sticky top-0">
            <Welcome />
          </div> */}
        <div className="h-[600vh] w-[100vw]">
          {childrenWithProps}
        </div>
        <AnimatePresence>
          {showFooter && 
            <motion.div className="h-[30vh] " animate={{ translateY: yPosition > 0.7 ? 290 : 0, transition: { duration: 100, damping: 10, mass: 1 } }}>
              <Footer yPosition={yPosition} />
            </motion.div>
          }
        </AnimatePresence>
      </body>
    </html>
  );
}
