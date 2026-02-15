import FirstSection from "@/components/home/firstSection";
import SecondSection from "@/components/home/secondSection";

export default function Page() {
  return (
    <div className="relative h-[fit] mt-[200vh] z-10" >
      <FirstSection />
      <div className="mt-[30vh]">
        <SecondSection />
      </div>
    </div>
  );
}


