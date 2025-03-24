'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useNavLinks } from '../../hooks';

export default function NavButtons(props) {
  const { showLinks, setShowLinks } = props;
  const actions = useNavLinks();

  return (

    <AnimatePresence>
      {showLinks &&
    <motion.div className="flex flex-row justify-center -mt-[200px]">
      {actions.map((action, i) => (
        <NavButton key={i} action={action} index={i} showLinks={showLinks} />
      ))}
    </motion.div>
  }    </AnimatePresence>
  );
}

function NavButton({ action, index, showLinks }) {
  const current = usePathname();
  return (
      <motion.button
      key={index*20}
      className="lg:m-[50px] md:m-[38px] mx-[200px] flex flex-row items-center justify-between md:justify-center  md:mt-[0vh]" 
      transition={{ delay: index * 0.25, duration: 3, type: 'tween', ease: [0, 0.71, 0.2, 1.01] }}
      initial={{
        translateX: -action.x*2.5,
        translateY: action.y ? -action.y*1.5 : 0,
        scale: 0,
        opacity:0
      }}
      animate={{
        translateX: action.x,
        translateY: action.y ? action.y : 0,
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
        <a href={action.link} onClick={()=>setShowLinks(!showLinks)} className={ current === action.link ? "flex transition-all text-[var(--light-color)] text-6xl whitespace-nowrap font-[Geologica] font-black z-10 m-[15px] -ml-[3.5vw] filter-[var(--current-shadow)]" : "flex transition-all text-[var(--mid-color)] hover:text-[var(--light-color)] text-5xl hover:text-6xl whitespace-nowrap font-[Geologica] font-extrabold hover:font-black z-10 filter-[var(--my-shadow)]"}>
          {action.name}
        </a>
      </motion.button>
  );
}