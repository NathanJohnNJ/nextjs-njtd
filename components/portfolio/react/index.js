import Hex from './hexagons';
import './styles.css';

export default function React(){
  const catsSite = {
    title: "Cats 4 Lyf",
    image: "/images/portfolio/cats.png",
    link: "https://cats.njtd.xyz",
    skills: ["HTML", "JSX", "CSS", "JavaScript", "ReactJS", "React-Modal",],
    git: "https://github.com/NathanJohnNJ/cats"
  }
  const cookiesSite = {
    title: "The Cookie Club",
    image: "/images/portfolio/cookies.png",
    link: "https://cookies.njtd.xyz",
    skills: ["ReactJS", "React-Modal", "JavaScript", "JSX", "CSS", "HTML", "API", "Express", "NodeJS", "Cors", "dotEnv"],
    git: "https://github.com/NathanJohnNJ/cookies"
  }
  const calcSite = {
    title: "React Calculator",
    image: "/images/portfolio/calc.png",
    link: "https://calc.njtd.xyz",
    skills: ["ReactJS", "JavaScript", "JSX", "CSS", "HTML"],
    git: "https://github.com/NathanJohnNJ/calc"
  }
  const diceSite = {
    title: "Green Bottles Dice Game - Remix",
    image: "/images/portfolio/dice.png",
    link: "https://diceremix.njtd.xyz",
    skills: ["ReactJS", "React-Modal", "JavaScript", "JSX", "CSS", "HTML"],
    git: "https://github.com/NathanJohnNJ/diceGameRemix"
  }
  const njtdSite = {
    title: "The Original NJTD.XYZ",
    image: "/images/portfolio/njtd.png",
    link: "https://www.njtd.xyz",
    skills: ["ReactJS", "React-Modal", "Framer Motion", "Styled Components", "JavaScript", "JSX", "CSS", "HTML"],
    git: "https://github.com/NathanJohnNJ/njtd.xyz"
  }

  const sites = [calcSite, catsSite, cookiesSite, diceSite, njtdSite]

  return(
    <div className="h-[150vh]">
      <div id="reactBanner" className="w-[screen] h-[800px] flex overflow-y-visible overflow-x-hidden sticky top-[50vh]">
        <Hex sites={sites} />
      </div>
    </div>
  )
}