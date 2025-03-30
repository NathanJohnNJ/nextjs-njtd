'use client';
import './styles.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Carousel(){
  const cloneSite = {
    title: "Website Clone Project",
    src: '/images/portfolio/clone.png',
    href: "https://clone.njtd.xyz",
    skills: ["HTML", "CSS", "JavaScript"],
    git: "https://github.com/NathanJohnNJ/clone"
  }
const dragSite = {
    title: "Drag Race S14 Final 4",
    src: '/images/portfolio/dragSite.jpg',
    href: "https://drag.njtd.xyz",
    skills: ["HTML", "CSS"],
    git: "https://github.com/NathanJohnNJ/drag"
  }

  const cardList = [cloneSite, dragSite]
  return (
    <div className="relative m-4 mt-8 h-min">
      <div data-component="carousel" className="rainbowBG relative h-fit ">
        <ul className="entries flex flex-row w-[100%] h-fit rounded-2xl py-20 cubes">
          {cardList.map((card, i) => {
            return(
              <li name={`carousel_${i}`} id={`carousel_${i}`} key={i} className="w-[70%] mx-[10vw] h-min flex flex-col items-center justify-center p-2 bg-gradient-to-br from-neutral-300 via-white via-45% to-neutral-200 to-70% filter-(--my-shadow) rounded-2xl shadow-xl">
                <h1 className="geoFont repoTitle font-extrabold uppercase align-center text-center text-3xl w-[65%] " >{card.title}</h1>
                <Link href={card.href}>
                  <Image src={card.src} alt={card.title} title={card.title} width={200} height={200} draggable="false" className="rounded-full scale-[0.75] hover:scale-[0.9] hover:rounded-2xl" />
                </Link>
                <p className="geoFont text-base -mb-[5] text-[var(--black-color)"><Link href={card.href} className="hover:text-xl hover:text-[var(--border-color)] text-(--highlight-color) no-underline">Click here</Link> to view the app yourself!</p>
                <p href={card.git} className="geoFont text-base -mb-[5] text-[var(--black-color)">Or view the code on <Link href={card.git} className="hover:text-xl text-(--highlight-color) hover:text-[var(--border-color)] no-underline">GitHub</Link></p>
                <h2 className="geoFont text-base -mb-[20] text-[var(--dark-color)]">Skills/Languages used:</h2>
                <ul className="pb-4 w-[50%] flex flex-col justify-start list-disc text-[var(--dark-color)] -mb-[20]">
                  {card.skills.map((skill, i) => {
                    return(
                      <li key={skill} className="geoFont text-sm ml-12">{skill}</li>
                    ) 
                  })}
                </ul>
              </li>
            )
          })}
          <ul className="markers w-[100%] h-min  bottom-5 flex flex-row justify-evenly">
            {cardList.map((card, i) => {
              return(
                <li key={`secondList${i}`} className="h-[50px] w-[50px] gap-[5%] rounded-full"></li>
              )}
            )}
          </ul>
        </ul>
      </div>
    </div>
  )
}
