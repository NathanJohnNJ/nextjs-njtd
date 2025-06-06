'use client';
import { useWindowSize } from '@/hooks';

const Section = (props) => {
  const { title, body } = props;
  const [windowWidth, windowHeight] = useWindowSize();

  const titleArray = title.split('');
  const titleMultiplier = titleArray.length*1.4;
  const titleWidth = `${titleMultiplier}vw`;
  const titleWidthInPx = (titleMultiplier/100)*(windowWidth);
  const titleHeightInPx = 45;

  const top = (titleWidthInPx/3)*2;
  const titleSide = 45;
  const titleHeight = `${titleSide}px`;
  const path = `M${titleWidthInPx/3},0h${top-titleSide/1.75}c${(titleSide/4)*3},0 ${(titleSide/4)*3},${titleSide} 0,${titleSide}h-${titleWidthInPx-(titleWidthInPx/5)}q-40,0 -40,50v250`;
  return(
    <svg xmlns='http://www.w3.org/2000/svg' width={windowWidth*0.75} height={windowHeight*2}>
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
        <foreignObject width={(windowWidth/100)*75} height={windowHeight*1.5} x="0" y="45">
          <div className="h-fit">
            <div className="text-center font-(--Raleway)" >{body}</div>
          </div>
        </foreignObject>
        {/* <path fill='none' d={`M${(windowWidth*0.3)},${windowHeight+35}h${(windowWidth*0.21)}q40,0 40,-50v-500`} stroke='#0000009E' strokeWidth='2'/> */}
      </svg>
  )
}

export default Section;