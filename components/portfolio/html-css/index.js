'use client';
import Carousel from "./carousel";
import Statement from "./statement";
import { motion } from "framer-motion";

const HTML = () => {

  return(
    <div className="flex flex-row w-[80vw] h-[150vh] relative">
      <div className="absolute top-[5px] left-[5vw] z-10 bg-gradient-to-tr from-(--black-color) to-(--white-color) rounded-2xl py-2 px-3 filter-[var(--current-shadow)]">
        <h1 className="text-5xl filter-[var(--current-shadow)] font-[GeologicaBlack] repoTitle ">HTML / CSS</h1>
      </div>
      <div className="sticky top-[150px] flex">
        <Carousel />
        <Statement />
      </div>
    </div>
  )
};

export default HTML;