'use client';
import Image from "next/image";
import { useState } from 'react';
import { useWindowSize } from "@/hooks";
import Link from 'next/link';
import { AnimatePresence } from "motion/react";

export default function TabGallery(){
  const [width, height] = useWindowSize();
    const drumkit = { 
      name: "Drumkit",
      src: "/images/portfolio/drumPreview.png",
      link: "https://drum.njtd.xyz",
      skills: ["HTML", "CSS", "JavaScript"],
      git: "https://github.com/NathanJohnNJ/drumkit"
    };
    const matrix = {
      name: "Matrix",
      src: "/images/portfolio/matrix.png",
      link: "https://matrix.njtd.xyz",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
      git: "https://github.com/NathanJohnNJ/matrix"
    };
    const dice = {
      name: "Dice Game",
      src: "/images/portfolio/dice.png",
      link: "https://dice.njtd.xyz",
      skills: ["HTML", "CSS", "JavaScript"],
      git: "https://github.com/NathanJohnNJ/dice"
    };
    const keycode = {
      name: "Keycode Generator",
      src: "/images/portfolio/keycode.png",
      link: "https://keycode.njtd.xyz",
      skills: ["HTML", "CSS", "JavaScript"],
      git: "https://github.com/NathanJohnNJ/keycode"
    };
  
    const tabs = [drumkit, keycode, dice, matrix];
    
    
    const [ chosenTab, setChosenTab ] = useState(drumkit)

  return(
    <div className="w-[70vw] h-fit flex flex-col items-center justify-center">
      <div className="grid gap-4 w-full">
        <div className="grid-row flex w-full h-full">
          {
            tabs.map((tab, i) => {
              return(
                <div key={i} className="grid-col w-[fit] flex justify-evenly m-4">
                  <Image src={tab.src} alt={tab.name} title={tab.name} width={200} height={200} className="rounded-full hover:scale-[1.2] m-4 hover:rounded-2xl" onClick={()=>setChosenTab(tab)} />
                </div>
              )
            })
          }
        </div>
      </div>
      <AnimatePresence>
        {chosenTab &&
      <div className="container flex flex-col items-center justify-center w-full relative" id="openTab">
        <span onClick={()=>setChosenTab(null)} className="text-5xl text-white/50 hover:text-white/80 font-extrabold bg-linear-to-tr from-slate-400 from-10% via-transparent to-100% to-slate-400 rounded-full absolute right-0 top-0 h-[5vw] w-[5vw] flex items-end justify-center">&times;</span>

        <Image src={chosenTab.src} alt={chosenTab.name} title={chosenTab.name} width={width-200} height={width-200} draggable="false" className="rounded-4xl scale-[0.8]" />

        <div id="z-50 w-full flex flex-col items-center justify-center">
        <h1 className="font-[GeologicaExtraBold] font-extrabold uppercase align-center text-4xl repoTitle w-full text-center" >{chosenTab.name}</h1>

        <p className="font-[Geologica] text-xl -mb-[5] text-(--light-color)"><Link href={chosenTab.link} className="hover:text-2xl hover:text-[var(--border-color)] text-(--highlight-color) no-underline">Click here</Link> to view the app yourself!</p>

        <p className="font-[Geologica] text-xl -mb-[5] text-(--light-color)">Or view the code on <Link href={chosenTab.git} className="hover:text-2xl text-(--highlight-color) hover:text-[var(--border-color)] no-underline">GitHub</Link></p>

        <h2 className="font-[Geologica] text-lg -mb-[20] text-[var(--light-color)]">Skills/Languages used:</h2>
          <ul className="pb-4 w-[50%] flex flex-col justify-start list-disc text-[var(--light-color)] -mb-[20]">
            {chosenTab.skills.map((skill, i) => {
              return(
                <li key={skill} className="font-[Geologica] text-base ml-12">{skill}</li>
              ) 
            })}
          </ul>
        </div>
      </div>
      }
      </AnimatePresence>
    </div>
  )
}