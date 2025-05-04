'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import GitHub from './social/github';
import LinkedIn from './social/linkedIn';
import Twitter from './social/twitter';

const SecondSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const translateX = useTransform(scrollYProgress, [0, 0.4, 0.7], ['100vw','25vw', '25vw']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const gitOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const linkedOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const xOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.3, 0.75, 1], [0, 1, 1, 0]);
  

  return(
    <motion.div ref={ref} className="relative h-[500vh] w-[90vw] flex flex-col self-center justify-self-center items-center justify-flex-end" style={{scale: scrollScale}}>
      <motion.div className="sticky top-[15vh] w-[78%] flex flex-col p-8 border rounded-4xl shadow-2xl shadow-(color:--darkBorder-color)" >    
        <motion.h1 className='geoFont text-[var(--dark-color)] font-extrabold whitespace-nowrap text-5xl mt-[3vh] self-center coloredShadow ' style={{opacity: opacity, scale: opacity}}>
          Find Me On...
        </motion.h1>
        <motion.div className='flex flex-row mt-[4vh] mb-[2vh] justify-evenly'>
          <motion.a href="https://www.github.com/NathanJohnNJ" target="_blank" rel="noreferrer" style={{opacity: gitOpacity, scale: gitOpacity}}>
            <GitHub />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/NathanJohnNJ" target="_blank" rel="noreferrer" style={{opacity: linkedOpacity, scale: linkedOpacity}}>
            <LinkedIn />
          </motion.a>
          <motion.a href="https://www.x.com/codesnj" target="_blank" rel="noreferrer" style={{opacity: xOpacity, scale: xOpacity}}>
            <Twitter />
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div className="sticky top-[60vh] bg-[#b0b0b0] w-[45%] flex flex-col p-4 border rounded-4xl shadow-2xl shadow-(color:--darkBorder-color)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, ease: 'linear', delay:2}} style={{ translateX: translateX }}>
        <motion.h2 className='geoFont font-light text-[1.05rem] text-white'>
          Feel free to take a look at what I’ve been working on, and follow me so I can keep you updated with exciting new projects along the way.
        </motion.h2>
      </motion.div>
    </motion.div>
  )
}; 

export default SecondSection;

