'use client';
import { useState, useLayoutEffect } from 'react';
import { useWindowSize } from '@/hooks';

const Introduction = () => {
  const title = "INTRODCUTION"
  const [windowWidth, windowHeight] = useWindowSize();

  const titleArray = title.split('');
  const titleMultiplier = titleArray.length*1.4;
  const titleWidth = `${titleMultiplier}vw`;
  const titleWidthInPx = (titleMultiplier/100)*(windowWidth);
  const titleHeightInPx = 45;

  const top = (titleWidthInPx/3)*2;
  const bottomSVGY = windowWidth > 1400 ? 170 : 200;
  const titleSide = 45;
  const titleHeight = `${titleSide}px`;
  const path = `M${titleWidthInPx/3},0h${top-titleSide/1.75}c${(titleSide/4)*3},0 ${(titleSide/4)*3},${titleSide} 0,${titleSide}h-${titleWidthInPx-(titleWidthInPx/5)}q-40,0 -40,50v50`;
  return(
    <svg xmlns='http://www.w3.org/2000/svg' width={windowWidth*0.75} height={windowHeight}>
      <defs>
        <linearGradient id="bgGrad" gradientTransform='rotate(-30)'>
          <stop stopColor='white' offset="10%" />
          <stop stopColor='#a0a0a0' offset="90%" />
        </linearGradient>
      </defs>
      <g transform="translate(50,0)">
        <rect x="0" y="0" rx="20" ry="25" width={titleWidthInPx} height={titleHeightInPx} fill="url(#bgGrad)" />
        <text x="0" y="32" className="text-section-title stroke-black fill-black" >
          {title}
        </text>

        <path fill='none' d={path} stroke='#0000009E' strokeWidth='2'/>
        </g>
        <foreignObject width={windowWidth*0.5} height="150" x="60" y="60">
          <p className="introContent text-center font-(--Raleway)" >Having a varied career has allowed me to gain a wide skillset, and experiences, that I enjoy sharing with others and expanding upon. Currently I am looking for a new challenge in a modern and diverse company where I can continue to grow and satisfy my curious mind.</p>
        </foreignObject>
        <path fill='none' d={`M${(windowWidth*0.42)},${bottomSVGY}h${windowWidth*0.1}q40,0 40,-50v-45`} stroke='#0000009E' strokeWidth='2'/>
      </svg>
  )
}

export default Introduction;