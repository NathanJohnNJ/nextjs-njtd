'use client';
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function First() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const nathanY = useTransform(scrollYProgress, [0, 0.25], [400, 0]);
  const nathanOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);
  const johnY = useTransform(scrollYProgress, [0, 0.3], [450, 0]);
  const johnOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const devY = useTransform(scrollYProgress, [0.15, 0.35], [400, 0]);
  const devOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const offeringY = useTransform(scrollYProgress, [0.25, 0.45], [400, 0]);
  const offeringOpacity = useTransform(scrollYProgress, [0.25, 0.45], [0, 1]);

  const textX = useTransform(scrollYProgress, [0.6, 0.9], [0, -600]);
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.85], [1, 0]);
  const imageX = useTransform(scrollYProgress, [0.6, 0.9], ['0vw', '5vw']);
  const imageScale = useTransform(scrollYProgress, [0.6, 0.8], [1, 1.2]);

  const circleFill = useTransform(scrollYProgress, [0, 0.25], [
    'rgba(255, 255, 255, 0)', 'rgba(45, 80, 190, 0.9)']);
  const pictureOpacity = useTransform(scrollYProgress, [0, 0.3, 0.85, 1], [0, 1, 1, 0]);
  const circleRotate = useTransform(scrollYProgress, [0, 0.75], ["0deg", "720deg"]);
  const pathLengthLength = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
  const width = useTransform(scrollYProgress, [0, 0.6, 1], ['100%', '100%', '35%']);

  const text = "Full-Stack Web Developer";
  const developerArray = text.split('');
  const audienceArray = ["reach,", "scale,", "experience,", "          or goals."]

  return (
    <section ref={ref} className="relative h-[500vh] w-[90vw] flex flex-col self-center justify-self-center items-center justify-flex-end mt-[45vh]">
      <motion.div id="stickyDiv" className="sticky top-[38vh] h-[min] flex flex-col p-4 border rounded-4xl shadow-2xl shadow-(color:--darkBorder-color)" style={{ translateX: '-100px', translateY: '100px', width: width }} whileInView={{ opacity: 1, translateX: '0px', translateY: '0px' }} viewport={{ amount: 0.2 }} transition={{ duration: 1.5, ease: 'easeInOut' }}>
        <div id="rowDiv" className="flex md:flex-row flex-col ">

          <motion.div id="imageDiv" className="ml-[12vw] -mt-[4vh] p-0 z-50" style={{ translateX: imageX, scale: imageScale }} >
            <svg width="290" height="290" viewBox="0 0 290 290" className="-translate-x-[25px] translate-y-[300px] overflow-visible" >
              <motion.g style={{ opacity: pictureOpacity }}>
                <motion.circle id="border"  cx="30" cy="80" r="145" className="stroke-[var(--border-color)] -rotate-90" style={{ pathLength: pathLengthLength, strokeDashoffset: 0, strokeWidth: '5%', fill: 'none' }} />
                <motion.g style={{ rotate: circleRotate, translateY: -40 }}>
                  <motion.circle id="biggerCircle"  cx="25" cy="205" r="50" className="-rotate-90" style={{ pathLength: scrollYProgress, strokeDashoffset: '3%', strokeWidth: '5%', strokeWidth: 0, fill: circleFill, fillOpacity: scrollYProgress, opacity: pictureOpacity }} />
                  <motion.circle id="smallerCircle"  cx="-70" cy="85" r="40"  style={{ pathLength: scrollYProgress, strokeWidth: 0, fill: circleFill, strokeDashoffset: '1%', strokeWidth: '5%', fillOpacity: scrollYProgress, opacity: pictureOpacity }} />
                </motion.g>
                <motion.foreignObject x="0" y="0" fill="none" width={290} height={290} className=" rounded-full -translate-y-[175px] -translate-x-[65px]" >
                  <div className="bg-[url('/images/nathan.jpg')] bg-cover bg-top rounded-full w-[290px] h-[290px]" style={{opacity: pictureOpacity}} />
                </motion.foreignObject>
              </motion.g>
            </svg>
          </motion.div>

          <motion.div id="textDiv" className="flex flex-col" style={{ translateX: textX, scale: textOpacity, opacity: textOpacity }}>

            <h1 className="flex text-[5rem] font-black geoFont largeColoredShadow largeShadow text-[var(--mid-color)]">
              <motion.span className="underline"  key="N" style={{translateY: nathanY, opacity: nathanOpacity}}> Nathan</motion.span>
              <span>&nbsp;</span>
              <motion.span className="underline"  key="J" style={{translateY: johnY, opacity: johnOpacity}}> John</motion.span>
            </h1>

            <motion.div className="geoFont text-[var(--dark-color)] smallShadow -mt-[3vh] whitespace-nowrap" style={{translateY: devY, opacity: devOpacity}} >
              {developerArray.map((letter, i) => {
                return(
                  <AnimatePresence key={`arrItem${i}`}>
                    <motion.span className="text-2xl lg:text-5xl" initial={{ opacity: 0, translateY: '300px'}} whileInView={{ opacity: 1, translateY: '0px' }} viewport={{ amount: 0.8 }} transition={{ duration: 0.025, ease: 'linear', delay: 0.5+(i/10)}}> 
                    {/* <motion.span className="text-xl lg:text-4xl" style={`translateY: ${nathanY}+(50*${i})px`}>  */}
                      {letter} 
                    </motion.span>
                  </AnimatePresence>
                  )
              })}
            </motion.div>

            <motion.h3 className="subHeading text-2xl text-left" id="subHeadingSecond" style={{translateY: offeringY, opacity: offeringOpacity}}>
              Offering complete solutions for businesses and individuals, no matter their 
              <div className="gradientText text-[2rem]">
                {audienceArray.map((audience, i) => {
                  return(
                    <AnimatePresence key={i}>
                      <motion.pre className="geoFont" initial={{ opacity: 0, MarginLeft: '-100vw'}} whileInView={{ opacity: 1, marginLeft: `${i*9}vw`,  }} exit={{ opacity: 0}} transition={{ duration: 0.35, ease: 'linear', delay: i/4}}>
                        {audience} <br />
                      </motion.pre>
                    </AnimatePresence>
                  )
                })}
              </div>
            </motion.h3>
          </motion.div>   
        </div>
      </motion.div>
    </section>
  );
}