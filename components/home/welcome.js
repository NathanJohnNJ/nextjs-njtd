import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Welcome() {
  const ref = useRef(null); 
  const { scrollYProgress } = useScroll({target: ref});
  
  const length = useTransform(scrollYProgress, [0, 0.75], [0, 1]);
  const path = "c -58 147 -20 180 60 50 c 3 -7 -1 -7 -5 0 c -60 110 62 113 55 -30 c -17 143 108 2 40 17 c -73 19 -30 131 12 78 c 111 -185 2 -189 14 4 c 1 31 92 -75 69 -82 c -69 -15 -77 130 0 78 c 23 -21 60 -103 23 -66 c -39 43 0 103 40 66 c 71 -86 -68 -95 -19 -57 c 21 5 31 2 41 -13 c 8 -12 23 -22 -6 77 c 40 -133 73 -81 40 0 c 41 -115 68 -85 37 -1 c -3 16 126 -99 63 -81 c -73 19 -19 123 12 78";
  return (
    <div ref={ref} className="w-full h-fit  flex items-start justify-start pt-28 pb-28 mb-40">
      <motion.svg id="welcome" height="300" width="800" xmlns="http://www.w3.org/2000/svg"  >
          <motion.path id="welcomeWriting" d={`M250 100 ${path}`} fill="none" stroke="white"  strokeWidth="10"  style={{ pathLength: length }} >

          </motion.path>
        {/* <path id="writing2" d={`M350 500 ${path}`} pathLength="100" fill="none" stroke="url(#backgroundGrad)" strokeWidth="3" >
          <animate id="writingAnim2" attributeName="stroke-dasharray" href="#writing2" values="0 100; 100 0" begin="3.15s" dur="3.15s" fill="freeze" repeatCount="1" />
        </path> */}
      </motion.svg>
    </div>
  );
}





