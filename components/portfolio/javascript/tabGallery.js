'use client';
import Image from "next/image";
import { useState } from 'react';
import { useWindowSize } from "@/hooks";
import Link from 'next/link';
import { AnimatePresence, motion } from "motion/react";

export default function TabGallery(){
  const [width, height] = useWindowSize();
    const drumkit = { 
      name: "Drumkit",
      src: "/images/portfolio/drumPreview.png",
      link: "https://drum.njtd.xyz",
      skills: ["HTML", "CSS", "JavaScript"],
      git: "https://github.com/NathanJohnNJ/drumkit",
      gif: "/images/portfolio/drum.gif",
      features: ["Fully interactive drumkit", "Keyboard/mouse control", "Audio feedback"]
    };
    const matrix = {
      name: "Matrix",
      src: "/images/portfolio/matrix.png",
      link: "https://matrix.njtd.xyz",
      skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
      git: "https://github.com/NathanJohnNJ/matrix",
      gif: "/images/portfolio/matrix.gif"
    };
    const dice = {
      name: "Dice Game",
      src: "/images/portfolio/dice.png",
      link: "https://dice.njtd.xyz",
      skills: ["HTML", "CSS", "JavaScript"],
      git: "https://github.com/NathanJohnNJ/dice",
      gif: "/images/portfolio/dice.gif"
    };
    const keycode = {
      name: "Keycode Generator",
      src: "/images/portfolio/keycode.png",
      link: "https://keycode.njtd.xyz",
      skills: ["HTML", "CSS", "JavaScript"],
      git: "https://github.com/NathanJohnNJ/keycode",
      gif: "/images/portfolio/keyGen.gif",
      features: ["Adjustable colour schemes for increased accessibilty/general styling", "Key code & keyboard location output"],

    };
  
    const tabs = [drumkit, keycode, dice, matrix];
    
    
    const [ chosenTab, setChosenTab ] = useState(drumkit);

  return(
    <div className="w-[55vw] h-fit flex flex-col items-center justify-center">
      <div className="grid gap-2 w-fit">
        <div className="grid-row flex w-full h-fit">
          {
            tabs.map((tab, i) => {
              return(
                <div key={i} className="grid-col w-full flex justify-evenly m-4">
                  <Image src={tab.src} alt={tab.name} title={tab.name} width={200} height={200} className="m-4  rounded-full transition-all hover:scale-[1.1] hover:rounded-4xl active:scale-[1.2]" onClick={()=>setChosenTab(tab)} />
                </div>
              )
            })
          }
        </div>
      </div>
      <AnimatePresence>
        {chosenTab &&
        <motion.div className="flex flex-row p-4 relative rounded-2xl m-4 bg-linear-to-tr from-(--background-color) from-65% to-(--background-second) border-(--highlight-color) border-4" initial={{scale:0}} animate={{scale: 1}} exit={{scale: 0}}>
         
            <span onClick={()=>setChosenTab(null)} className="transition-all text-5xl text-white/50 hover:text-white/80 font-extrabold bg-linear-to-tr from-slate-400 from-10% via-transparent to-100% to-slate-400 rounded-full absolute z-50 right-[2%] top-[2%] w-[50px] h-[50px] flex items-center justify-center">&times;</span>
            <h1 className="font-[GeologicaExtraBold] font-extrabold uppercase align-center text-4xl repoTitle text-center absolute top-[2%] left-[50%] -translate-x-[50%]" >{chosenTab.name}</h1>
            
            <motion.div className="container flex flex-col items-center justify-center w-[80%] h-fit mt-20">
              <div id="z-50 w-full flex flex-col items-center justify-center">
              <p className="font-[Geologica] text-xl font-semibold text-(--text-color) whitespace-nowrap"><Link href={chosenTab.link} target="_blank" className=" hover:text-(--border-color) visited:text-(--dark-border) font-bold hover:font-extrabold text-(--highlight-color) no-underline">Click here</Link> to view the app yourself!</p>
              <p className="font-[Geologica] text-xl text-(--text-color) font-semibold text-center">Or you can view the code on <Link href={chosenTab.git} className=" text-(--highlight-color) visited:text-(--dark-border) font-bold hover:font-extrabold hover:text-(--border-color) no-underline">GitHub</Link></p>
              {chosenTab.features&&
                <>
                  <h2 className="font-[Geologica] text-lg text-(--text-color) mt-2">Features:</h2>
                  <ul className="pb-4 w-full flex flex-col justify-start list-disc text-(--text-color)">
                    { chosenTab.features.map((feature, i) => {
                      return(
                        <li key={feature} className="font-[Geologica] text-base ml-8">{feature}</li>
                      ) 
                    })}  
                  </ul>
                </>
              }
              <h2 className="font-[Geologica] text-lg text-(--text-color)">Skills/Languages used:</h2>
              <ul className="w-full flex flex-col justify-start list-disc text-(--text-color) -mb-[20]">
                {chosenTab.skills.map((skill, i) => {
                  return(
                    <li key={skill} className="font-[Geologica] text-base ml-12">{skill}</li>
                  ) 
                })}
              </ul>
            </div>
          </motion.div>
          <div className="w-full h-full mt-4">
          <Image src={chosenTab.gif? chosenTab.gif : chosenTab.src} alt={chosenTab.name} title={chosenTab.name} width={500} height={500} draggable="false" className="rounded-4xl scale-[0.8] mt-8" unoptimized />
          </div>
        </motion.div>
        }
      </AnimatePresence>
    </div>
  )
}