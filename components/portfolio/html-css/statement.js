'use client';
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";

export default function Statement(){
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [300, 0, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  

  return (
    <motion.div className=" sticky font-semibold flex flex-col items-center justify-start text-xl md:text-2xl lg:text-3xl rounded-4xl filter-(--current-shadow) p-4 lg:p-6 bg-gradient-to-tr from-[var(--light-color)] to-white to-95% text-[var(--dark-color)] shadow-lg h-fit" initial={{opacity: 0}} whileInView={{opacity: 1}} style={{translateX: x, translateY: 150, scale: scale}}>
      <p className="text-base lg:text-lg my-4 text-(--mid-color)">This carousel showcases some of my projects that I&apos;ve worked on using HTML and CSS.</p>
      <p className="text-base lg:text-lg my-4 text-(--mid-color)">The carousel has also been created using just HTML and CSS, taking advantage of the new scroll animation features in CSS.</p>
    </motion.div>
  )
}