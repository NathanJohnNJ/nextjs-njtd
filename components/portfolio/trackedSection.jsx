'use client';
import { useContext, useEffect, useRef } from 'react';
import { TOCContext } from './context/tocContext';
import { useScroll } from 'motion/react';

export default function TrackedSection ( {sectionId, tocTitle, isFirst, isLast, ...props} ) {
  const { registerSection, setActiveSection } = useContext(TOCContext);
  useEffect(() => {
    registerSection({id: sectionId, title: tocTitle})
  }, [])

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
      target: container,
      offset: ["start center", "end center"]
    });

    scrollYProgress.on('change', (value) => {
      if (value > 0 && value < 1){
        setActiveSection(sectionId)
      }
      if ((value <= 0 && isFirst) || (value >= 1 && isLast)){
        setActiveSection(-1)
      }
    })

  return (
    <section ref={container} {...props} id={`section-${sectionId}`}  />
  )
};

