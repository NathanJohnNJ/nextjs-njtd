import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function First() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const circleFill = useTransform(scrollYProgress, [0, 0.25], [
    'rgba(255, 255, 255, 0)', 'rgba(45, 80, 190, 0.9)']);
  const pictureOpacity = useTransform(scrollYProgress, [0, 0.7, 0.9], [1, 1, 0]);
  const circleRotate = useTransform(scrollYProgress, [0, 0.75], ["0deg", "720deg"]);
  const pathLengthLength = useTransform(scrollYProgress, [0, 0.75], [0, 1])

  const text = "Full-Stack Web Developer";
  const developerArray = text.split('');
  const audienceArray = ["reach,", "scale,", "experience,", "\n\b\n\b\n\b\n\b\n\b\n\b\n\b\n\b\n\b\n\bor goals."]

  return (
    <section ref={ref} className="relative h-[500vh] w-[90vw] flex flex-col self-center justify-self-center items-center justify-flex-end mt-[45vh]">
      <div id="stickyDiv"  className="sticky top-[250px] w-[85%] flex flex-col p-4 border rounded-4xl shadow-2xl shadow-(color:--darkBorder-color)">
        <div id="rowDiv" className="flex lg:flex-row flex-col">
          <div id="imageDiv" className="ml-[12vw] p-0" >
            <svg width="290" height="290" viewBox="0 0 290 290" className="-translate-x-[25px] translate-y-[300px] overflow-visible" >
              <motion.g style={{ opacity: pictureOpacity }}>
                <motion.circle id="border"  cx="30" cy="80" r="145" className="stroke-[var(--border-color)] -rotate-90" style={{ pathLength: pathLengthLength, strokeDashoffset: 0, strokeWidth: '5%', fill: 'none' }} />
                <motion.g style={{ rotate: circleRotate, translateY: -40 }}>
                  <motion.circle id="biggerCircle"  cx="25" cy="205" r="50" className="-rotate-90" style={{ pathLength: scrollYProgress, strokeDashoffset: '3%', strokeWidth: '5%', strokeWidth: 0, fill: circleFill, fillOpacity: scrollYProgress, opacity: pictureOpacity }} />
                  <motion.circle id="smallerCircle"  cx="-70" cy="85" r="40"  style={{ pathLength: scrollYProgress, strokeWidth: 0, fill: circleFill, strokeDashoffset: '1%', strokeWidth: '5%', fillOpacity: scrollYProgress, opacity: pictureOpacity }} />
                </motion.g>
                <motion.foreignObject x="0" y="0" fill="none" width={290} height={290} className=" rounded-full -translate-y-[175px] -translate-x-[65px]" >
                  <motion.div className="bg-[url('/images/nathan.jpg')] bg-cover bg-top rounded-full w-[290px] h-[290px]" style={{opacity: pictureOpacity}} ></motion.div>
                </motion.foreignObject>
              </motion.g>
            </svg>
          </div>
          <div id="textDiv" className="flex flex-col">
            <h1 className="flex text-[5rem] font-black geoFont largeColoredShadow largeShadow text-[var(--mid-color)]">
              <motion.span className="underline"  key="N" initial={{ opacity: 0, translateY: '300px'}} whileInView={{ opacity: 1, translateY: '0px' }} viewport={{ amount: 0.1 }} transition={{ duration: 0.5, ease: 'linear', delay: 0}}> Nathan</motion.span>
              <span>&nbsp;</span>
              <motion.span className="underline"  key="J" initial={{ opacity: 0, translateY: '300px'}} whileInView={{ opacity: 1, translateY: '0px' }} viewport={{ amount: 0.1 }} transition={{ duration: 0.5, ease: 'linear', delay: 1}}> John</motion.span>
            </h1>
            <div className="geoFont text-[3.2rem] text-[var(--dark-color)] smallShadow -mt-[3vh]" >
              {developerArray.map((letter, i) => {
                return(
                  <AnimatePresence key={`arrItem${i}`}>
                    <motion.span initial={{ opacity: 0, translateY: '300px'}} whileInView={{ opacity: 1, translateY: '0px' }} viewport={{ amount: 0.4 }} transition={{ duration: 0.05, ease: 'linear', delay: 1.5+(i/10)}}> 
                      {letter} 
                    </motion.span>
                  </AnimatePresence>
                  )
              })}
            </div>
            <h3 className="subHeading text-3xl text-left" id="subHeadingSecond">
              Offering complete solutions for businesses and individuals, no matter the<br/>
              <div className="gradientText text-[2.05rem]">
                {audienceArray.map((audience, i) => {
                  return(
                    <AnimatePresence key={i}>
                      <motion.span initial={{ opacity: 0, MarginLeft: '-100vw'}} whileInView={{ opacity: 1, marginLeft: `${i*9}vw`,  }} exit={{ opacity: 0}} transition={{ duration: 0.75, ease: 'easeInOut', delay: i}}>
                        {audience} <br />
                      </motion.span>
                    </AnimatePresence>
                  )
                })}
              </div>
            </h3>
          </div>   
        </div>
      </div>
    </section>
  );
}