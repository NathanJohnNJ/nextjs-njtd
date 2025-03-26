'use client';
import './styles.css';
import Image from 'next/image';

export default function Carousel(){
  const drumkit = { 
    name: "Drumkit",
    src: "/images/portfolio/drumPreview.png",
    link: "https://drum.njtd.xyz",
    skills: ["HTML", "CSS", "JavaScript"],
    git: "https://github.com/NathanJohnNJ/drumkit"
  };
  const matrix = {
    name: "Matrix",
    src: "/images/portfolio/matrix.png",
    link: "https://matrix.njtd.xyz",
    skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
    git: "https://github.com/NathanJohnNJ/matrix"
  };
  const dice = {
    name: "Dice Game",
    src: "/images/portfolio/dice.png",
    link: "https://dice.njtd.xyz",
    skills: ["HTML", "CSS", "JavaScript"],
    git: "https://github.com/NathanJohnNJ/dice"
  };
  const keycode = {
    name: "Keycode Generator",
    src: "/images/portfolio/keycode.png",
    link: "https://keycode.njtd.xyz",
    skills: ["HTML", "CSS", "JavaScript"],
    git: "https://github.com/NathanJohnNJ/keycode"
  };

  const cardList = [drumkit, keycode, dice, matrix];
  const title = "JavaScript";

  return (
    <div className="relative">
      <div className="absolute top-[65px] left-[30vw] z-10 bg-[var(--white-color)] rounded-2xl py-2 px-3 filter-[var(--current-shadow)]">
        <h1 className="text-6xl filter-[var(--current-shadow)]">{title}</h1>
      </div>
      <div data-component="carousel" className="rainbowBG sticky top-[100px] ">
        <ul className="entries flex flex-row overflow-x-scroll w-[100%] h-[100%] rounded-2xl py-12 cubes" tabIndex="0">
          {cardList.map((card, i) => {
            return(
              <li name={`carousel_${i}`} id={`carousel_${i}`} key={i} className="flex flex-col items-center justify-center">
                <div className="w-[30vw] mx-[10vw] h-[100%] flex flex-col items-center justify-center p-4 bg-white border-[5px] border-[var(--border-color)] rounded-2xl shadow-2xl">
                  <a href={card.link}>
                    <Image src={card.src} alt={card.name} title={card.name} width={222} height={184} draggable="false" className="rounded-full scale-[0.8] hover:scale-[1] hover:rounded-2xl" />
                  </a>
                  <h1 className="geoFont font-extrabold uppercase  align-center text-4xl" >{card.name}</h1>
                  <a href={card.link} className="group geoFont text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Click here to view the app yourself!</a>
                  <a href={card.git} className="group geoFont text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Or view the code on GitHub</a>
                  <h2 className="geoFont text-lg -mb-[20] text-[var(--dark-color)]">Skills/Languages used:</h2>
                  <ul className="pb-4 w-[50%] flex flex-col justify-start list-disc text-[var(--dark-color)]">
                    {card.skills.map((skill, i) => {
                      return(
                        <li key={skill} className="geoFont text-base">{skill}</li>
                      )
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
        <ul className="markers absolute w-[15vw] h-[5vh] bg-white bottom-[1vw] flex flex-row justify-evenly left-[50%] -translate-x-[50%]">
          {cardList.map((card, i) => {
            return(
              <li key={`secondList${i}`} className="h-[100%] w-[20%] gap-[5%] rounded-full"><a href={`#carousel_${i}`} className="sr-only rounded-full w-[100%] h-[100%]">{card.name}</a></li>
            )}
          )}
        </ul>
      </div>
    </div>
  )
}
