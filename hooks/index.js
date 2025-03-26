'use client';
import { useState, useEffect, useLayoutEffect } from 'react';
import { useScroll } from 'motion/react'

export function useSvgSize() {
  const [svgSize, setSvgSize] = useState([0, 0]);
  useEffect(() => {
    function updateSvgSize() {
      setSvgSize([window.innerWidth, window.innerHeight/3]);
    }
    window.addEventListener('resize', updateSvgSize);
    updateSvgSize();
    return () => window.removeEventListener('resize', updateSvgSize);
  }, []);
  return svgSize;
};

export function useNavLinks() {
  const [navLinks, setNavLinks] = useState([]);
  const [width, height] = useSvgSize();

  useLayoutEffect(() => {
    function updateNavLinks() {
      let list = [];
      if (width > 1300){
        list = [
          { link: '/',  name: 'Home', x: '-5vw' },
          { link: '/about',  name: 'About', x:'-4vw' },
          { link: '/cv', name: 'CV', x: '4vw' },
          { link: '/portfolio', name: 'Portfolio', x: '5vw' },
        ]
      }else if(width > 960){
        list = [
          { link: '/',  name: 'Home', x: '4vw', y: '-5vh' },
          { link: '/about',  name: 'About', x:'-4vw', y: '5vh' },
          { link: '/cv', name: 'CV', x: '3vw', y: '-5vh'  },
          { link: '/portfolio', name: 'Portfolio', x: '3vw', y: '5vh' },
        ];
      } else {
        list = [
          { link: '/cv', name: 'CV', x: '0' },
          { link: '/portfolio', name: 'Portfolio', x: '50', y: '-50' }
        ]
      }
      setNavLinks(list);
    }
    window.addEventListener('resize', updateNavLinks);
    updateNavLinks();
    return () => window.removeEventListener('resize', updateNavLinks);
  }, [width]);
  return navLinks;
};

export function useSideNavLinks() {
  const [sideNavLinks, setSideNavLinks] = useState([]);
  const [width, height] = useSvgSize();

  useLayoutEffect(() => {
    function updateSideNavLinks() {
      let list = [];
      if (width > 1000){
        list = [
          { link: '/',  name: 'Home', x: '15vw' },
          { link: '/about',  name: 'About', x:'30vw' },
          { link: '/cv', name: 'CV', x: '48vw' },
          { link: '/portfolio', name: 'Portfolio',  x: '58vw' },
        ]
      } else {
        list=[
          { link: '/',  name: 'Home', y: '15vh' },
          { link: '/about',  name: 'About', y: '25vh' },
          { link: '/cv', name: 'CV', y: '35vh'  },
          { link: '/portfolio', name: 'Portfolio', y: '45vh' },
        ];
      } 
      setSideNavLinks(list);
    }
    window.addEventListener('resize', updateSideNavLinks);
    updateSideNavLinks();
    return () => window.removeEventListener('resize', updateSideNavLinks);
  }, [width]);
  return sideNavLinks;
};