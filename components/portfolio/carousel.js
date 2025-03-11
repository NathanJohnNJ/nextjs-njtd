import './styles.css';

export default function Carousel(props){
  const { cardList, title } = props;

  return (
    <div className="relative">
      <div className="absolute top-[65px] left-[30vw] z-10 bg-[var(--white-color)] rounded-2xl py-2 px-3 filter-[var(--current-shadow)]">
      <h1 className="text-6xl filter-[var(--current-shadow)]">{title}</h1>
      </div>
    <div data-component="carousel" className="rainbowBG sticky top-[100px] ">
      <div className="w-[100%] h-[100%] rounded-2xl py-12 cubes" >
        <ul className="entries flex flex-row overflow-x-scroll  " tabIndex="0">
        {cardList.map((card, i) => {
          return(
            <li key={i} className="flex flex-col items-center justify-center">
              <div className="w-[30vw] mx-[10vw] h-[100%] flex flex-col items-center justify-center py-4 bg-white border-[5px] border-[var(--border-color)] rounded-2xl shadow-2xl">
                <a href={card.href}>
                  <img src={card.src} alt={card.name} title={card.name} width="222" height="184" draggable="false" />
                </a>
                <h1 className="font-[var(--font-spartan)] font-extrabold uppercase  align-center text-4xl" >{card.title}</h1>
                <a href={card.link} className="group font-[LeagueSpartan] text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Click here to view the app yourself!</a>
                <a href={card.git} className="group font-[LeagueSpartan] text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Or view the code on GitHub</a>
                <h2 className="font-[LeagueSpartan] text-xl -mb-[20]">Skills/Languages used:</h2>
                <ul>
                {card.skills.map((skill, i) => {
                    return(
                      <li key={skill} className="font-[Poppins] text-lg">{skill}</li>
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
      <div className="absolute w-[10vw] bg-white bottom-[1vw] flex flex-row justify-evenly left-[50%] -translate-x-[50%]">
      {cardList.map((card, i) => {
        if (card.name === 'current'){
          return(
            <div key={i} className="w-[2vw] bg-violet-800 rounded-full gap-8 text-violet-800" >.</div>
          )}
          else {
            return(
              <div key={i} className="w-[2vw] bg-amber-500 rounded-full gap-8 text-amber-500" >.</div>
            )
          }
        })}
      </div>
    </div>
    </div>
  )
}