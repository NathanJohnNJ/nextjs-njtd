import HTML from '@/components/portfolio/html-css';
import JavaScript from '@/components/portfolio/javascript';
import React from '@/components/portfolio/react';

export default function Page(){
  return (
    <div className="h-[600vh] relative w-full">
      <h1 className="title mt-[30vh] sticky top-[40px] text-6xl tracking-[5.25px] font-extrabold filter-(--my-shadow) z-[99]" >Portfolio</h1>
      <div className="mt-[30vh] flex flex-col items-center justify-between h-fit">
        <div className="relative h-fit flex flex-col justify-center mb-60 -mt-40 ">
          <React />
        </div>
        <div className="relative h-fit">
          <JavaScript />
        </div>
        <div className="relative h-[120vh]">
          <HTML />
        </div>
      </div>
    </div>
  );
}
