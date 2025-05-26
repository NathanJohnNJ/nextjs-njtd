'use client';
import { useTransform, useScroll, motion, useSpring  } from "motion/react";
import { TOCContext } from "./portfolio/context/tocContext";
import { useContext } from 'react';

 export default function TableOfContents(){
  const { sections, activeSection } = useContext(TOCContext);

  const { scrollYProgress } = useScroll();
  const progressHeight = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    bounce: 0.01,
    damping: 2
  });

  return (
    <div className ="h-full px-4 absolute left-0 z-[9999]">
      <div className="sticky top-20 h-[80vh] py-32 flex gap-4">
        <div className="h-full w-0.5 bg-neutral-300 rounded-full overflow-hidden">
          <motion.div className="bg-neutral-800 w-full origin-top" style={{ height: progressHeight}} />
        </div>
        <div className="lg:flex flex-col gap-20 h-full text-sm xl:text-base">
          {sections.map(({id, title}) => {
            return(
            <span key={id} className={`cursor-pointer transition-all duration-200 ${activeSection === id ? "text-slate-600 text-shadow-lg/40 text-3xl font-[GeologicaSemiBold]" : "text-(--foreground-rgb) text-lg opacity-60"}`}
            onClick={() => document.getElementById(`section-${id}`).scrollIntoView({ behaviour: "smooth"})} style={{scrollBehaviour: 'smooth'}}>
              {title}
            </span>)
          })}
        </div>
      </div>
    </div>
  )
 }