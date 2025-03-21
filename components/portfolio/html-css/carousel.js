import './styles.css';

export default function Carousel(){
  const cloneSite = {
    name: "Website Clone Project",
    src: 'images/portfolio/clone.png',
    href: "https://clone.njtd.xyz",
    skills: ["HTML", "CSS", "JavaScript"],
    git: "https://github.com/NathanJohnNJ/clone"
  }
const dragSite = {
    name: "Drag Race S14 Final 4",
    src: 'imsges/portfolio/dragSite.jpg',
    href: "https://drag.njtd.xyz",
    skills: ["HTML", "CSS"],
    git: "https://github.com/NathanJohnNJ/drag"
  }

  const cardList = [cloneSite, dragSite]
  const title = "HTML/CSS "
  return (
    <div className="relative">
      <div className="absolute top-[65px] left-[30vw] z-10 bg-[var(--white-color)] rounded-2xl py-2 px-3 filter-[var(--current-shadow)]">
      <h1 className="text-6xl filter-[var(--current-shadow)]">{title}</h1>
      </div>
    <div data-component="carousel" className="rainbowBG sticky top-[100px] ">
      <div className="w-[100%] h-[100%] rounded-2xl py-12 cubes" >
        <ul className="entries flex flex-row overflow-x-scroll" tabIndex="0">
        {cardList.map((card, i) => {
          return(
            <li name={`carousel_${i}`} id={`carousel_${i}`} key={i} className="flex flex-col items-center justify-center">
              <div className="w-[30vw] mx-[10vw] h-[100%] flex flex-col items-center justify-center p-4 bg-white border-[5px] border-[var(--border-color)] rounded-2xl shadow-2xl">
                <a href={card.href}>
                  <img src={card.src} alt={card.name} title={card.name} width={222} height={184} draggable="false" className="rounded-full scale-[0.8] hover:scale-[1] hover:rounded-2xl" />
                </a>
                <h1 className="geoFont font-extrabold uppercase  align-center text-4xl" >{card.title}</h1>
                <a href={card.link} className="group geoFont text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Click here to view the app yourself!</a>
                <a href={card.git} className="group geoFont text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Or view the code on GitHub</a>
                <h2 className="geoFont text-lg -mb-[20] text-[var(--dark-color)]">Skills/Languages used:</h2>
                <ul className="pb-4 w-[50%] flex flex-col justify-start list-disc text-[var(--dark-color)]">
                {card.skills.map((skill, i) => {
                    return(
                      <li key={skill} className="geoFont text-base">{skill}</li>
                    )
                  })
                  }
                </ul>
              </div>
            </li>
          )
        })}
      </ul>

      </div>
      <ul className="markers absolute w-[15vw] h-[5vh] bg-white bottom-[1vw] flex flex-row justify-evenly left-[50%] -translate-x-[50%]">
      {cardList.map((card, i) => {
        return(
          <li key={`secondList${i}`} className="h-[100%] w-[20%] gap-[5%] rounded-full"><a href={`#carousel_${i}`} className="sr-only rounded-full w-[100%]  h-[100%]">{card.name}</a></li>
        )})}
      </ul>
    </div>
    </div>
  )
}
