
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import Logo from "@/public/logo";
import { usePathname } from 'next/navigation';
import { useSvgSize } from '../hooks';

export default function ActionMenu(props) {

  const { showNav, setShowNav, yPosition } = props;
  const [width, height] = useSvgSize();
  const [actions, setActions] = useState([]);

  useEffect(()=>{
    if(width < 812){
      const list = [
        {
          link: '/cv',
          name: 'CV',
          side: 'left'
        },
        {
          link: '/portfolio',
          name: 'Portfolio',
          side: 'right'
        },
      ]
      setActions(list);
    } else {
       const list = [
        {
          link: '/',
          name: 'Home',
          side: 'left'
        },
        {
          link: '/about',
          name: 'About',
          side: 'left'
        },
        {
          link: '/cv',
          name: 'CV',
          side: 'right'
        },
        {
          link: '/portfolio',
          name: 'Portfolio',
          side: 'right'
        },
      ]
      setActions(list);
    }
  }, [width])
  
  return (
    <motion.div
    animate={{ translateX: yPosition > 0.25 & !showNav ? '-40vw' : 0, scale: yPosition > 0.2 & !showNav ? 0.8 : 1 }}
      transition={{
        duration: 2,
        type: 'timing'
      }}
    >
      <button onClick={() => setShowNav(!showNav)} className={ showNav ? ' flex self-center justify-self-center items-center justify-center h-[235px] w-[235px] bg-gradient-to-tr from-[var(--dark-color)] via-[var(--mid-color)] to-[var(--light-color)] transition-all border-[var(--highlight-color)] border-2 rounded-[50%] z-50' : ' flex self-center justify-self-center items-center justify-center h-[160px] w-[160px] mt-[25px] bg-gradient-to-tr from-[var(--dark-color)] via-[var(--mid-color)] to-[var(--light-color)] transition-all border-[var(--border-color)] border-2 rounded-[50%] hover:h-[195px] hover:w-[195px] z-50 group' } >
        <motion.div style={{ scale: showNav ? 1.2 : 0.8 }} className="flex self-center justify-self-center group-hover:scale-[1.2] transition-all" transition={{ duration: 4, type: 'timing', delay: 4 }} >
          <Logo size={190} />
        </motion.div>
      </button>
      <AnimatePresence>
        {/* {showNav && (
          <div className="flex flex-row justify-center -mt-[200px]">
            {actions.map((action, i) => (
              // <ActionButton key={i} action={action} index={i} showNav={showNav} />
            ))}
          </div>
        )} */}
      </AnimatePresence>
    </motion.div>
  );
}

function ActionButton({ action, index }) {
  const current = usePathname();;
  const translateVar = action.side === 'left' ? -65 * (index * 1.5) : 35 * (index/2);
  const initialX = action.side === 'left' ? 65 * (index * 3) : -65 * (index * 1.5);
  return (
     <motion.div
      key={index}
      className="m-[70px]"
      transition={{ delay: index * 0.2, damping:10, duration: 0.35 }}
      from={{
        translateX: initialX,
        scale: 0,
      }}
      animate={{
        translateX: translateVar,
        scale: 1
      }}
      exit={{
        translateX: initialX,
        scale: 0,
      }}
    >
      <a href={action.link} className={ current === action.link ? "flex transition-all text-gray-400 text-6xl whitespace-nowrap font-[Geologica] font-black z-10" : "flex transition-all text-[var(--black-color)] hover:text-gray-600 text-5xl hover:text-6xl whitespace-nowrap font-[Geologica] font-extrabold hover:font-black z-10"}>
        {action.name}
      </a>
    </motion.div>
  );
}



