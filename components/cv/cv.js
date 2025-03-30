'use client';
import Sidebar from './sidebar';
import Experience from './experience';
import Education from './education';
import PersonalStatement from './personalStatement';
import { useWindowSize } from '@/hooks';
import Section from './section';
import Link from 'next/link';

const CV = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  const pageWidth = windowWidth?windowWidth-240:1000
  const pageHeight = 1600

  return (
    <svg width={windowWidth} height={windowHeight*4} className="mt-[25vh]" xmlns='http://www.w3.org/2000/svg' xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <clipPath id="topClip">
          <rect x={125} y={45} width={pageWidth} height={275} />
        </clipPath>
        <linearGradient id="topGrad">
          <stop stopColor='#d8d8d8' offset="0%" />
          <stop stopColor='#707070' offset="100%" />
        </linearGradient>
      </defs>
      <g id="page1">
        <rect x={121} y={50} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.1)" strokeWidth="8" fill="white" />
        <rect x={122} y={49} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.15)" strokeWidth="6" fill="white" />
        <rect x={123} y={48} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.2)" strokeWidth="4" fill="white" />
        <rect x={124} y={47} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.25)" strokeWidth="2" fill="white" />
        <rect x={125} y={45} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="white" />
        <rect x={125} y={45} width={pageWidth} height={300} rx="25" ry="25" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="url(#topGrad)" clipPath='url(#topClip)' />
        <text x={((pageWidth/4)*2)} y={120} fill="white" className="text-spartan-bold text-4xl md:text-6xl whitespace-nowrap font-extrabold">NATHAN JOHN</text>
        <text x={((pageWidth/4)*2.55)} y={185} className="text-spartan-light text-4xl md:text-6xl" fill="white">HYNES</text>
        <text x={((pageWidth/4)*1.9)} y={235} className="text-spartan-bold text-3xl/7 md:text-4xl/7 font-medium" fill="white">Full-Stack Web Developer</text>
        <rect x={((pageWidth/4)*1.95)} y={250} fill="white" stroke="white" width={(pageWidth/2)} height="2" />
        <text x={((pageWidth/4)*2.1)} y={290} fill="white" className="font-[GeologicaLight] text-xl md:text-2xl py-1 tracking-[2.5px]">Diversity | Collaborative | Agile</text>
        <foreignObject x={0} y={0} width={pageWidth*1.5} height={windowHeight*3}>
          <div className="fixed w-max left-35" style={{top: 100}}>
            <Sidebar />
          </div>
          <div className="relative w-max">
            <div className="fixed left-100 top-70 flex flex-col">
              <Section title="INTRODUCTION" body="Having a varied career has allowed me to gain a wide skillset, and experiences, that I enjoy sharing with others and expanding upon. Currently I am looking for a new challenge in a modern and diverse company where I can continue to grow and satisfy my curious mind."/>
            </div>
            <div className="fixed left-35 top-100 flex flex-col w-[55vw]">
              <Experience />
            </div>
            <div className="fixed left-40 top-280 text-spartan-bold flex flex-col text-center">
              Click here to go to my <Link className="font-[GeologicaBlack] text-3xl hover:text-4xl text-(--mid-color) hover:text-(--light-color) text-center" href="/portfolio">Portfolio</Link>
            </div>
          </div>
        </foreignObject>
      </g>

      <g id="page2" className="relative">
        <rect x={121} y={pageHeight+100} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.1)" strokeWidth="8" fill="white" />
        <rect x={122} y={pageHeight+99} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.15)" strokeWidth="6" fill="white" />
        <rect x={123} y={pageHeight+98} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.2)" strokeWidth="4" fill="white" />
        <rect x={124} y={pageHeight+97} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.25)" strokeWidth="2" fill="white" />
        <rect x={125} y={pageHeight+95} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="white" />
        <foreignObject x={0} y={pageHeight} width={pageWidth*1.5} height={pageHeight}>
          <div className="relative w-max">
            <div className="fixed left-35 top-20 flex flex-col w-[55vw]">
              <PersonalStatement title="PERSONAL STATEMENT" />              
            </div>
            <div className="fixed left-30 top-150 flex flex-col w-[80vw]">
              <Education />
            </div>
            
          </div>
        </foreignObject>
      </g>    
    </svg>
  )
}

export default CV;