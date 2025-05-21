
'use client';
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
