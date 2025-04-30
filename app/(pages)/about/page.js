
'use client';
import Hex from '@/components/portfolio/hex/blank'
import { useSvgSize } from '@/hooks';

export default function Page() {
  const [svgWidth, svgHeight] = useSvgSize();
  return (
    <div className="h-[400vh] mt-[30vh]">
      <svg width="1000" height="1000" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="Gradient1">
            <stop offset="0%" stopColor="blue" />
            <stop offset="20%" stopColor="magenta" />
            <stop offset="40%" stopColor="red" />
            <stop offset="60%" stopColor="orange" />
            <stop offset="80%" stopColor="yellow" />
            <stop offset="100%" stopColor="greenyellow" />
          </linearGradient>
          <linearGradient id="Gradient2">
            <stop offset="0%" stopColor="greenyellow" />
            <stop offset="20%" stopColor="yellow" />
            <stop offset="40%" stopColor="orange" />
            <stop offset="60%" stopColor="red" />
            <stop offset="80%" stopColor="magenta" />
            <stop offset="100%" stopColor="blue" />
          </linearGradient>
        </defs>
        <text x="50%" y="30%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle" stroke="url(#Gradient1)">
          Whoops! Sorry this page
        </text>
        <text x="50%" y="38%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle"  stroke="url(#Gradient2)">
          Is still under construction.
        </text>
        <text x="50%" y="46%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle"  stroke="url(#Gradient1)">
          Check back soon to see the new format.
        </text>
      </svg>
    </div>
  );
}



// <svg height="1024" width="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink">
// <defs>
//   <pattern id="hex" width="100" height="100" viewBox="0 0 100 100">
//     <polygon points="25 0, 75 0, 100 50, 75 100, 25 100, 0 50" stroke="red" fill="black" />
//     {/* 25% 0%, 75% 0%, 100% 50% ,75% 100%, 25% 100%, 0 50% */}
//   </pattern>
// </defs>
// <rect fill="url(#hex)" stroke="none" x="0" y="0" height={svgHeight} width={svgWidth} />
// </svg>