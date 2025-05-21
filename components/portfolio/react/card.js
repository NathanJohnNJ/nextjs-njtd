'use client';
import { useState } from 'react';
import Image from "next/image";
import { motion, AnimatePresence } from 'motion/react';
import Modal from 'react-modal';
import Link from 'next/link';
import './styles.css';


export default function Card(props){
  const { site } = props;
  const [ showOverlay, setShowOverlay ] = useState(false);
  const [ modalIsOpen, setModalIsOpen ] = useState(false)

  function closeModal(){
    setModalIsOpen(false);
  }

  Modal.setAppElement(':root');


  return (
  <motion.div className="relative overflow-hidden h-[260px] w-[300px] bg-slate-400 flex items-center rounded-2xl justify-center" id="card"
  onHoverStart={()=> setShowOverlay(true)}
  onHoverEnd={()=> setShowOverlay(false)}
  onClick={()=>setModalIsOpen(true)}>
    <AnimatePresence>
    {showOverlay && (
      <motion.div className="absolute inset-0 z-10 flex justify-center items-center"
      initial={{opacity:0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
        <motion.h1 className="bg-white font-semibold font-[GeologicaSemiBold] text-lg z-10 px-3 py-2 flex items-center hover:opacity-75 rounded-3xl"
        initial={{y:10}}
        animate={{y: 0}}
        exit={{y: 10}}>
          <span className="text-center">Check out <br></br>{site.title}</span>
        </motion.h1>
      </motion.div>
    )}
    </AnimatePresence>
  {site.image === "/site.images/portfolio/cats.png" ?
    <Image src={site.image} alt={site.image} height="400" width="400" style={{objectFit: 'cover', minHeight: '300px'}} priority />
  :
    <Image src={site.image} alt={site.image} height="400" width="400" style={{objectFit: 'cover', minHeight: '300px'}} />
  }
    <Modal isOpen={modalIsOpen}
    onRequestClose={closeModal}
    aria-hidden="true"
    className="pt-16 mt-20 w-[80%]  z-[999] bg-linear-to-tr from-neutral-950 via-zinc-600 to-white flex flex-col items-center justify-center justify-self-center rounded-4xl"
    contentLabel={`${site.title} modal.`}>
      <h1 className="font-[GeologicaExtraBold] font-extrabold uppercase align-center text-5xl repoTitle text-center mt-16" >{site.title}</h1>
      <h1 className="font-[GeologicaExtraBold] font-extrabold uppercase align-center text-3xl absolute top-[12%] right-[12%]" onClick={()=>setModalIsOpen(false)} >X</h1>
        <div id="flex flex-col items-center justify-center text-center w-[60%]">
          <p className="font-[Geologica] text-xl font-semibold text-(--text-color) whitespace-nowrap"><Link href={site.link} target="_blank" className=" hover:text-(--border-color) visited:text-(--dark-border) font-bold hover:font-extrabold text-(--highlight-color) no-underline">Click here</Link> to view the app yourself! Or you can view the code on <Link href={site.git} className=" text-(--highlight-color) visited:text-(--dark-border) font-bold hover:font-extrabold hover:text-(--border-color) no-underline">GitHub</Link></p>
          <div className="flex">
      <div className="w-[75%] h-full -mt-16">
        <Image src={site.image} alt={site.title} title={site.title} width="500" height="500" className="rounded-4xl scale-[0.8] mt-8" unoptimized  style={{height: 'auto'}} />
      </div>
      <div className="flex flex-col mt-8">
          <h2 className="font-[Geologica] text-lg text-(--text-color) mb-2">Skills/Languages used:</h2> 
          <div className="flex">
            <ul className="flex flex-col list-disc text-(--text-color) whitespace-nowrap">
              {site.skills.map((skill, i) => {
                if(i<6){
                  return(
                  <li key={skill} className="font-[Geologica] text-base ml-12">{skill}</li>
                ) 
                }
              })}
            </ul>
            <ul className="flex flex-col list-disc text-(--text-color)">
              {site.skills.map((skill, i) => {
                if(i>5){
                  return(
                  <li key={skill} className="font-[Geologica] text-base ml-12">{skill}</li>
                ) 
                }
              })}
            </ul>
          </div>
          </div>
        </div>
        </div>
    </Modal>
  </motion.div>
  )
}