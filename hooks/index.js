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
    // eslint-disable-next-line
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
          { link: '/',  name: 'Home', side: 'left', x: '-5vw' },
          { link: '/about',  name: 'About', side: 'left', x:'-4vw' },
          { link: '/cv', name: 'CV', side: 'right', x: '4vw' },
          { link: '/portfolio', name: 'Portfolio',  side: 'right', x: '5vw' },
        ]
      }else if(width > 960){
        list=[
          { link: '/',  name: 'Home', side: 'left', x: '4vw', y: '-5vh' },
          { link: '/about',  name: 'About', side: 'left', x:'-4vw', y: '5vh' },
          { link: '/cv', name: 'CV', side: 'right', x: '3vw', y: '-5vh'  },
          { link: '/portfolio', name: 'Portfolio',  side: 'right', x: '3vw', y: '5vh' },
        ];
      } else {
        list = [
          { link: '/cv', name: 'CV', side: 'left', x: '0' },
          { link: '/portfolio', name: 'Portfolio',  side: 'right', x: '50', y: '-50' }
        ]
      }
      setNavLinks(list);
    }
    window.addEventListener('resize', updateNavLinks);
    updateNavLinks();
    return () => window.removeEventListener('resize', updateNavLinks);
    // eslint-disable-next-line
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
          { link: '/',  name: 'Home', x: '25vw' },
          { link: '/about',  name: 'About', x:'40vw' },
          { link: '/cv', name: 'CV', x: '58vw' },
          { link: '/portfolio', name: 'Portfolio',  x: '68vw' },
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
    // eslint-disable-next-line
  }, [width]);
  return sideNavLinks;
};