'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ReactTyped } from 'react-typed';
import './home.css';
import GitHub from './social/github';
import LinkedIn from './social/linkedIn';
import Twitter from './social/twitter';

export default function First() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const textX = useTransform(scrollYProgress, [0, 0.4], [-200, -50]);
  const textOpacity = useTransform(scrollYProgress, [0.6, 0.85], [1, 0]);
  const pictureOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 1, 1, 0]);
  const textOpacity2 = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const translateX = useTransform(scrollYProgress, [0, 0.4, 0.7], ['100vw', '25vw', '25vw']);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const gitOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
  const linkedOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const xOpacity = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);

  return (
    <motion.section ref={ref} className="h-[500vh] w-[90vw] flex flex-col self-center justify-self-center items-center justify-flex-end mt-[45vh]">
      <motion.div id="stickyDiv" className="card sticky top-[30vh] w-fit h-min" style={{ translateX: '-100px', translateY: '100px' }} whileInView={{ opacity: 1, translateX: '0px', translateY: '0px' }} viewport={{ amount: 0.2 }}>
        <motion.div className="inner h-[min] w-fit flex flex-col p-4 rounded-4xl" >
          <motion.div id="rowDiv" className="flex md:flex-row flex-col w-fit -mt-8">
            <motion.svg width="350" height="350" viewBox="0 0 350 350" className="overflow-visible z-20" style={{ opacity: pictureOpacity }} >
              <motion.defs>
                <linearGradient id="glowGradient">
                  <motion.stop stopColor='#b35dffaa' offset="0%" />
                  <motion.stop stopColor='#ff5bdbaa' offset="50%" />
                  <motion.stop stopColor='#ff7c43aa' offset="100%" />
                  <animate attributeName="x1" values="0%; 0%; 100%; 100%; 0%" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="y1" values="100%; 0%; 0%; 100%; 100%" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="x2" values="100%; 100%; 0%; 0%; 100%" dur="10s" repeatCount="indefinite" />
                  <animate attributeName="y2" values="50%; 50%; 50%; 0%; 50%" dur="10s" repeatCount="indefinite" />
                </linearGradient>
                <filter id="blurredEdge">
                  <feGaussianBlur in="SourceGraphic" stdDeviation={5} />
                </filter>
              </motion.defs>
              <motion.circle cx="125" cy="175" r="135" fill="url(#glowGradient)" filter="url(#blurredEdge)" />
              <motion.image href="/images/nathan.png" width="250" height="250" x="0" y="50"  />
            </motion.svg>
            <motion.div id="textDiv" className="flex flex-col mt-16" style={{ translateX: textX }}>
              <motion.h1 className="font-[Geologica] font-medium text-[2rem]">
                <motion.span className="" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ amount: 1, once: true }}>Hi,</motion.span>
              </motion.h1>
              <motion.h1 className="flex text-[2rem] text-(--text-color) font-[Geologica] font-medium">
                <motion.span className="" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ amount: 1, once: true }}>I'm</motion.span>
                &nbsp;
                <motion.span className="underline nameText" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ amount: 1, once: true }}>Nathan</motion.span>
                &nbsp;
                <motion.span className="underline nameText" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ amount: 1, once: true }}>John</motion.span>
              </motion.h1>
              <motion.p id="typedTitle" className="font-[Geologica] font-medium text-(--text-color) whitespace-nowrap text-2xl lg:text-4xl">I'm a <ReactTyped className="font-[Geologica] font-extrabold" strings={["full-stack developer.", "software engineer.", "freelancer.", "creative.", "critical thinker.", "problem solver."]} typeSpeed={100} backSpeed={50} backDelay={2000} loop />
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.h1 className='geoFont text-(--text-color) font-extrabold whitespace-nowrap text-4xl self-center coloredShadow -mt-8 ' style={{ opacity: textOpacity2, scale: textOpacity2 }}>
            Find Me On...
          </motion.h1>
          <motion.div className='flex flex-row mt-[3vh] mb-[2vh] justify-evenly'>
            <motion.a href="https://www.github.com/NathanJohnNJ" target="_blank" rel="noreferrer" style={{ opacity: gitOpacity, scale: gitOpacity }}>
              <GitHub />
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/NathanJohnNJ" target="_blank" rel="noreferrer" style={{ opacity: linkedOpacity, scale: linkedOpacity }}>
              <LinkedIn />
            </motion.a>
            <motion.a href="https://www.x.com/codesnj" target="_blank" rel="noreferrer" style={{ opacity: xOpacity, scale: xOpacity }}>
              <Twitter />
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}