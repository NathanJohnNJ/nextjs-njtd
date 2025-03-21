'use client';
import FirstSection from "@/components/home/firstSection";
import SecondSection from "@/components/home/secondSection";

export default function Home() {
  return (
    <div className="relative h-[400vh] mt-[200vh] z-10" >
      <FirstSection />
      <SecondSection />
    </div>
  );
}


