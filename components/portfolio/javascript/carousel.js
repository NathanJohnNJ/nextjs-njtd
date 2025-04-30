'use client';
import './styles.css';
import Image from 'next/image'; 
import Card from './card';
import { motion, AnimatePresence, useScroll } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

export default function Carousel(){
  const [activeIndex, setActiveIndex] = useState(0);
 
  const len = cardList.length;

  useEffect(() => {
  const carouselList = document.getElementById('carousel');
  const carouselWidth = carouselList.offsetWidth;
  const card = carouselList.querySelectorAll('.card');
  const cardWidth = card.offsetWidth;
  let currentPosition = 0;

  function scrollCarousel() {
    if (currentPosition < carouselWidth * -1) {
        currentPosition = 0;
    }
    currentPosition -= cardWidth;
    carouselList.style.transform = `translateX(${currentPosition}px)`;
}
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      scrollCarousel();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, len]);

  function clickHandler(index){
    setActiveIndex(index)
  }
  return (
    <div className="h-min">
      <div className="rainbowBG relative h-fit">
        <ul className="flex flex-row overflow-x-scroll w-[55vw] h-[100%] rounded-2xl py-12 cubes snap-x snap-mandatory" id="carousel" tabIndex="0">
          {cardList.map((card, i) => {
            const ID = `marker${i}`;
            return(
              <motion.li key={i} className="flex flex-col items-center justify-center w-full snap-center rounded-2xl" style={activeIndex === i ? {opacity: 1} : {opacity: 0.5}}>
                <Card card={card} activeIndex={activeIndex} />
              </motion.li>
            )
          })}
        </ul>
        <ul className="absolute w-[75%] h-fit py-1 bg-white bottom-[1vw] flex flex-row justify-evenly left-[50%] -translate-x-[50%]">
          {cardList.map((card, i) => {
            return(
              <Dot key={i} activeIndex={activeIndex} setActiveIndex={setActiveIndex} index={i} />
            )}
          )}
        </ul>
      </div>
    </div>
  )
}


function Dot({ activeIndex, setActiveIndex, index }){
  const ID = `marker${index}`;
  return (
    <li key={index} onClick={() => setActiveIndex(index)}>
      <svg xmlns='http://www.w3.org/2000/svg' xmlnsXlink="http://www.w3.org/1999/xlink" width="50" height="50">
        <motion.circle id={ID} cx="25" cy="25" r="25" fill={index === activeIndex ? '#ff22aa' : '#aa22ff'} stroke={index === activeIndex ? '#ff22aa' : 'none'}  />
      </svg>
    </li>
  )
}

