'use client';
import Sidebar from './sidebar';
import Experience from './experience';
import Education from './education';
import PersonalStatement from './personalStatement';
import { useWindowSize } from '@/hooks';
import Introduction from './introduction';
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
        <g id="shadow">
          <rect x={120} y={50} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.1)" strokeWidth="8" fill="none" />
          <rect x={120.5} y={49.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.1)" strokeWidth="7" fill="none" />
          <rect x={121} y={49} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.125)" strokeWidth="6" fill="none" />
          <rect x={121.5} y={48.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.125)" strokeWidth="5" fill="none" />
          <rect x={122} y={48} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.15)" strokeWidth="4" fill="none" />
          <rect x={122.5} y={47.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" />
          <rect x={123} y={47} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.175)" strokeWidth="2" fill="none" />
          <rect x={123.5} y={46.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.175)" strokeWidth="1" fill="none" />
          <rect x={124} y={46} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />
          <rect x={124.5} y={45.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.2)" strokeWidth="0.25" fill="none" />
        </g>
        <rect x={125} y={45} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="white" />
        <rect x={125} y={45} width={pageWidth} height={300} rx="25" ry="25" stroke="rgba(0,0,0,0.3)" strokeWidth="1" fill="url(#topGrad)" clipPath='url(#topClip)' />
        <foreignObject x={pageWidth*0.4} y={70} width={pageWidth*0.65} height="250">
          <div className="flex flex-col items-center justify-center w-[100%]">
            <p fill="white" className="text-spartan-bold text-4xl md:text-6xl text-white whitespace-nowrap font-extrabold">NATHAN JOHN</p>
            <p className="text-spartan-light text-4xl md:text-6xl text-white">HYNES</p>
            <p className="text-spartan-bold text-3xl/7 md:text-4xl/7 font-medium text-white">Full-Stack Web Developer</p>
            <p className="font-[GeologicaLight] text-white text-xl md:text-2xl py-1 tracking-[2.5px] border-t-white border-t-2 w-[80%] text-center mt-2">Diversity | Collaborative | Agile</p>
          </div>
        </foreignObject>
        <foreignObject x={0} y={0} width={pageWidth*1.5} height={windowHeight*3}>
          <div className="fixed w-max left-35" style={{top: 100}}>
            <Sidebar />
          </div>
          <div className="relative w-max">
            <div className="fixed left-100 top-70 flex flex-col">
              <Introduction />
            </div>
            <div className="fixed left-10 top-100 flex flex-col w-[55vw]">
              <Experience />
            </div>
            <div className="fixed left-40 top-280 text-spartan-bold flex flex-col text-center">
              Click here to go to my <Link className="font-[GeologicaBlack] text-3xl hover:text-4xl text-(--mid-color) hover:text-(--light-color) text-center" href="/portfolio">Portfolio</Link>
            </div>
          </div>
        </foreignObject>
      </g>
      <g id="page2" className="relative">
        <g id="shadow">
          <rect x={120} y={pageHeight+100} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.1)" strokeWidth="8" fill="none" />
          <rect x={120.5} y={pageHeight+99.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.1)" strokeWidth="7" fill="none" />
          <rect x={121} y={pageHeight+99} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.125)" strokeWidth="6" fill="none" />
          <rect x={121.5} y={pageHeight+98.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.125)" strokeWidth="5" fill="none" />
          <rect x={122} y={pageHeight+98} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.15)" strokeWidth="4" fill="none" />
          <rect x={122.5} y={pageHeight+97.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.15)" strokeWidth="3" fill="none" />
          <rect x={123} y={pageHeight+97} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.175)" strokeWidth="2" fill="none" />
          <rect x={123.5} y={pageHeight+96.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.175)" strokeWidth="1" fill="none" />
          <rect x={124} y={pageHeight+96} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.2)" strokeWidth="0.5" fill="none" />
          <rect x={124.5} y={pageHeight+95.5} width={pageWidth} height={pageHeight} rx="25" ry="25" stroke="rgba(0,0,0,0.2)" strokeWidth="0.25" fill="none" />
        </g>
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