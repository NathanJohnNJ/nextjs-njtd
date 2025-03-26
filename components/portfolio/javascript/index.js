'use client';
import Carousel from "./carousel";
import Statement from "./statement";
import { motion } from "framer-motion";

export default function JavaScript(){

  return(
    <div className="flex flex-row w-[80vw] h-[70vh] relative">
      <div className="absolute top-[5px] left-[30vw] z-10 bg-[var(--white-color)] rounded-2xl py-2 px-3 filter-[var(--current-shadow)]">
        <h1 className="text-5xl filter-[var(--current-shadow)]">JavaScript</h1>
      </div>
      <Statement />
      <Carousel />
    </div>
  )
}