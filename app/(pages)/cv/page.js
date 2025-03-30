'use client';
import CV from '@/components/cv/cv';
// import Image from 'next/image';
import { useWindowSize } from '@/hooks';


export default function Page() {
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <div className="h-[400vh] mt-[20vh] w-[100vw]">
      <CV />
    </div>
  );
}
