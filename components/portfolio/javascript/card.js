import Image from "next/image";

export default function Card(props){
  const { card, activeIndex } = props;
  return (
    <div className="w-full card" id={card}>
      <div className="w-[30vw] mx-[10vw] h-[100%] flex flex-col items-center justify-center p-4 bg-white border-[5px] border-[var(--border-color)] rounded-2xl shadow-2xl">
        <a href={card.link}>
          <Image src={card.src} alt={card.name} title={card.name} width={222} height={184} draggable="false" className="rounded-full scale-[0.8] hover:scale-[1] hover:rounded-2xl" />
        </a>
        
      </div>
    </div>
  )
}