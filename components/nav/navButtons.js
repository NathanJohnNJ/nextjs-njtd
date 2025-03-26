'use client';
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useNavLinks, useSideNavLinks } from '../../hooks';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function NavButtons(props) {
  const { showLinks, setShowLinks } = props;
  const topActions = useNavLinks();
  const sideActions = useSideNavLinks();
  const current = usePathname();
  const [ actions, setActions ] = useState([]);
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.5){
      setActions(topActions);
    }else {
      setActions(sideActions);
    }
  })
  console.log(actions)

  return (
    actions===topActions?
    actions.map((action, i) => {
      return(
          <NavButton key={i} action={action} index={i} showLinks={showLinks} />
      )
    })
    :
    <AnimatePresence>
      {showLinks &&
    <motion.div className="absolute left-[50vw] bg-gradient-to-r from-(--svg-fill) via-90% via-(--third-svg-stroke-light) w-[1500px] h-[100px] z-40 " initial={{scaleX: 0, x: -800}} animate={{ scaleX: 1, x: 0}} exit={{ scaleX: 0, x:-800}} transition={{type: 'tween', ease: [0, 0.71, 0.2, 1.01], dur: 10}}>
      {actions.map((action, i) => {
        return(
          <SideNavButton key={i} action={action} index={i} showLinks={showLinks} />
        )
      })}
    </motion.div>}
    </AnimatePresence>
  );
}

function NavButton( props ) {
  const { action, index, showLinks } = props;
  const current = usePathname();

  return (
    <AnimatePresence>
      { showLinks &&
        <motion.button
        className="lg:m-[50px] md:m-[38px] mx-[200px] flex flex-row items-center md:justify-center justify-between md:mt-[0vh]" 
        transition={{ delay: index * 0.25, duration: 3, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }}
        initial={{
          translateX: -action.x*2.5,
          translateY: action.y ? -action.y*1.5 : 0,
          scale: 0,
          opacity:0
        }}
        animate={{
          translateX: action.x,
          translateY: action.y ? action.y : '20vh',
          scale: action.y ? 0.75 : 1,
          opacity:1
        }}
        exit={{
          translateX: -action.x*2.5,
          translateY: action.y ? -action.y*1.5 : 0,
          scale: 0,
          opacity:0
        }}
        >
          <Link href={action.link} className={ current === action.link ? "flex transition-all text-[var(--light-color)] text-6xl whitespace-nowrap font-[Geologica] font-black z-10 m-[15px] -ml-[3.5vw] filter-[var(--current-shadow)]" : "flex transition-all text-[var(--mid-color)] hover:text-[var(--light-color)] text-5xl hover:text-6xl whitespace-nowrap font-[Geologica] font-extrabold hover:font-black z-10 filter-[var(--my-shadow)]"}>
            {action.name}
          </Link>
        </motion.button>
      }
    </AnimatePresence>
  );
}

function SideNavButton( props ) {
  const { action, index, showLinks } = props;
  const current = usePathname();

  return (
    <AnimatePresence>
      { showLinks &&
        <motion.button
        className="m-[25] absolute" 
        transition={{ delay: index * 0.25, duration: 3, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }}
        initial={{
          left: 0,
          top: 0,
          scale: 0,
          opacity:0
        }}
        animate={{
          left: action.x ? action.x : '3vw',
          top: action.y ? action.y : '0px',
          scale: 1,
          opacity:1
        }}
        exit={{
          left: 0,
          top: 0,
          scale: 0,
          opacity:0
        }}
        >
          <Link href={action.link} className={ current === action.link ? "flex transition-all text-[var(--light-color)] text-6xl whitespace-nowrap font-[Geologica] font-black z-50 -mt-[6.5px] -ml-[3.5vw] filter-[var(--current-shadow)]" : "flex text-right transition-all text-[var(--mid-color)] hover:text-[var(--light-color)] text-5xl hover:text-5xl whitespace-nowrap font-[Geologica] font-extrabold hover:font-black z-50 filter-[var(--my-shadow)]"}>
            {action.name}
          </Link>
        </motion.button>
      }
    </AnimatePresence>
  );
}
