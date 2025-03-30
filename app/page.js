import FirstSection from "@/components/home/firstSection";
import SecondSection from "@/components/home/secondSection";
import ThirdSection from "@/components/home/thirdSection";

export default function Page() {
  return (
    <div className="relative h-[fit] mt-[200vh] z-10" >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}


