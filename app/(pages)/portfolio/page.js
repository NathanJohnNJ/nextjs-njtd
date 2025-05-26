'use client';
import HTML from '@/components/portfolio/html-css';
import JavaScript from '@/components/portfolio/javascript';
import React from '@/components/portfolio/react';
import TableOfContents from '@/components/contents';
import { TOCContext, useTOCContextValues } from '@/components/portfolio/context/tocContext';
import TrackedSection from '@/components/portfolio/trackedSection';

export default function Page(){
  const { values } = useTOCContextValues();
  return (
    <TOCContext.Provider value={values}>
      <main className="h-[600vh] relative w-full ">
        <TableOfContents />
        <h1 className="title mt-[30vh] sticky top-[40px] text-6xl tracking-[5.25px] font-extrabold filter-(--my-shadow) z-[99]" >Portfolio</h1>
      
        <div className="mt-[30vh] flex flex-col items-center justify-between h-fit">
          
          <TrackedSection sectionId={0} tocTitle="React JS" isFirst className="relative h-fit flex flex-col justify-center mb-60 -mt-40 ">
            <React />
          </TrackedSection>
          <TrackedSection sectionId={1} tocTitle="JavaScript" className="relative h-fit">
            <JavaScript />
          </TrackedSection>
          <TrackedSection sectionId={2} tocTitle="HTML / CSS" isLast className="relative h-[120vh]">
            <HTML />
          </TrackedSection>
        </div>
      </main>
    </TOCContext.Provider>
  );
}
