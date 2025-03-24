// import Carousel from '@/components/portfolio/html-css/carousel';
export default function Portfolio() {

    const drumkit = { 
        title: "Drumkit",
        src: 'images/portfolio/drumPreview.png',
        href: "https://keycode.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/drumkit"
      }
      const matrix = {
        title: "Matrix",
        src: 'images/portfolio/matrix.png',
        href: "https://matrix.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
        git: "https://github.com/NathanJohnNJ/matrix"
      }
      const dice = {
        title: "Dice Game",
        src: 'images/portfolio/dice.png',
        href: "https://dice.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/dice"
      }
      const keycode = {
        title: "Keycode Generator",
        src: 'images/portfolio/keycode.png',
        href: "https://keycode.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/keycode"
      }

    const cardList = [drumkit, keycode, dice, matrix]
  return (
    <div className="h-[300vh]">
      {/* <div  className="mt-[40vh]">
      <Carousel cardList={cardList} title="JavaScript" />
      </div> */}
      <svg width="1000" height="1000" viewBox="0 0 1000 1000">
        <defs>
          <linearGradient id="Gradient1">
            <stop offset="0%" stopColor="blue" />
            <stop offset="20%" stopColor="magenta" />
            <stop offset="40%" stopColor="red" />
            <stop offset="60%" stopColor="orange" />
            <stop offset="80%" stopColor="yellow" />
            <stop offset="100%" stopColor="greenyellow" />
          </linearGradient>
          <linearGradient id="Gradient2">
            <stop offset="0%" stopColor="greenyellow" />
            <stop offset="20%" stopColor="yellow" />
            <stop offset="40%" stopColor="orange" />
            <stop offset="60%" stopColor="red" />
            <stop offset="80%" stopColor="magenta" />
            <stop offset="100%" stopColor="blue" />
          </linearGradient>
        </defs>
        <text x="50%" y="30%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle" stroke="url(#Gradient1)">
          Whoops! Sorry this page
        </text>
        <text x="50%" y="38%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle"  stroke="url(#Gradient2)">
          Is still under construction.
        </text>
        <text x="50%" y="46%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle"  stroke="url(#Gradient1)">
          Check back soon to see the new format.
        </text>
      </svg>
    </div>
  );
}
