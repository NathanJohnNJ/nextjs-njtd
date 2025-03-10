'use client';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useSideNavLinks } from '../../hooks';

export default function SideNavButtons(props) {
  const { showSideNav, setShowSideNav } = props;
  const actions = useSideNavLinks();
  const current = usePathname();

    useEffect(() => {
      if (current === "/") {
        setShowSideNav(true);
      } else {
        setShowSideNav(false);
      }
    }, []);
  return (
    <motion.div className="flex flex-row justify-center -mt-[200px]">
      {actions.map((action, i) => (
        <SideNavButton key={i} action={action} index={i} showSideNav={showSideNav} />
      ))}
    </motion.div>
  );
}

function SideNavButton({ action, index, showSideNav }) {
  const current = usePathname();

  return (
    <AnimatePresence>
      {showSideNav &&
      <motion.div
      key={index*20}
      className="m-[25] absolute" 
      transition={{ delay: index * 0.25, duration: 3, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }}
      initial={{
        left: 0,
        top: 0,
        scale: 0,
        opacity:0
      }}
      animate={{
        left: action.x,
        top: action.y ? action.y : '8px',
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
        <a href={action.link} className={ current === action.link ? "flex transition-all text-[var(--light-color)] text-5xl whitespace-nowrap font-[Geologica] font-black z-50 m-[15px] -ml-[3.5vw] filter-[var(--current-shadow)]" : "flex text-right transition-all text-[var(--mid-color)] hover:text-[var(--light-color)] text-4xl hover:text-5xl whitespace-nowrap font-[Geologica] font-extrabold hover:font-black z-50 filter-[var(--my-shadow)]"}>
          {action.name}
        </a>
      </motion.div>
}    </AnimatePresence>
  );
}



