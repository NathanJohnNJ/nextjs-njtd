'use client';
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

export default function Statement(){
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [300, 0, 0, 300]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);
  

  return (
    <motion.div className=" sticky font-semibold top-[100px] flex flex-col items-center justify-center text-xl md:text-2xl lg:text-3xl rounded-4xl filter-(--current-shadow) p-4 lg:p-6 bg-gradient-to-tr from-[var(--light-color)] to-white to-95% text-[var(--dark-color)] shadow-lg h-fit" initial={{opacity: 0}} whileInView={{opacity: 1}} style={{translateX: x, translateY: 100, scale: scale}}>
      <p className="text-base lg:text-lg my-4 text-(--mid-color)">This carousel showcases some of my projects that I&apos;ve worked on using just HTML and CSS.</p>
      <p className="text-base lg:text-lg my-4 text-(--mid-color)">The carousel has also been created using just HTML and CSS, taking advantage of the new scroll animation features in CSS.</p>
      <p className="text-sm lg:text-base text-center my-4 text-(--mid-color)">Please note that this feature may not work correctly on all browsers. Please use Chrome if you woukd like to see the full effect.</p>
      <p className="text-base text-(--mid-color) lg:text-lg">You can see the code for all of my carousels on <Link href="https://github.com/NathanJohnNJ/carousels" className="text-[var(--highlight-color)] no-underline hover:text-[var(--border-color)] hover:text-lg lg:hover:text-xl">GitHub</Link>.</p>
    </motion.div>
  )
}