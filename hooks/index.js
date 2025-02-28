import { useState, useEffect } from 'react';
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

