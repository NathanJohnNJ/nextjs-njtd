'use client';
import { Poppins, Geologica } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AnimatePresence, motion, useScroll, useMotionValueEvent, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

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
export const geologica = Geologica({ 
  subsets: ['latin'],
  weight: ['variable'],
  style: ['normal'],
  variable: "--font-geologica"
});

export default function RootLayout({ children }) {
  const { scrollYProgress } = useScroll();
  const [yPosition, setYPosition] = useState(0)

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setYPosition(latest);
    console.log(latest)
  })
  const [showHeader,setShowHeader] = useState(true);
  const [showFooter,setShowFooter] = useState(false);
  const [ showNav, setShowNav ] = useState(true);

  useEffect(() => {
    if(yPosition > 0.15){
      setShowNav(false)
    }else if(yPosition > 0.3){
      setShowHeader(false);
    } else {
      setShowNav(true)
      setShowHeader(true);
    }
    if (yPosition > 4500){
      setShowFooter(true);
    }  else {
      setShowFooter(false);
    }

  }, [yPosition])

  return (
      <html lang="en">
        <body
          className={`${poppins.variable} ${geologica.variable} antialiased`}
        >
          <AnimatePresence >
            {showHeader &&
              <motion.div className="absolute">
                <Header yPosition={yPosition} showNav={showNav} setShowNav={setShowNav} />
              </motion.div>
            }
          </AnimatePresence>
            {children}
          <AnimatePresence>
            {showFooter && 
              <motion.div
              animate={{
                translateY: yPosition > 4500 ? 290 : 0, transition: { duration: 100, damping: 10, mass: 1 }
              }}>
              <Footer yPosition={yPosition} />
            </motion.div>}
          </AnimatePresence>
        </body>
      </html>
  );
}
