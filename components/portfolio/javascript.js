import Cards from './cards';

const Javascript = () => {
  const drumImg = require('../../assets/images/portfolio/drumPreview.png');
  const keycodeImg = require('../../assets/images/portfolio/keycode.png');
  const diceImg = require('../../assets/images/portfolio/dice.png');
  const matrixImg = require('../../assets/images/portfolio/matrix.png');

    const drumkit = { 
        title: "Drumkit",
        image: drumImg,
        link: "https://keycode.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/drumkit"
      }
      const matrix = {
        title: "Matrix",
        image: matrixImg,
        link: "https://matrix.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript", "ReactJS"],
        git: "https://github.com/NathanJohnNJ/matrix"
      }
      const dice = {
        title: "Dice Game",
        image: diceImg,
        link: "https://dice.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/dice"
      }
      const keycode = {
        title: "Keycode Generator",
        image: keycodeImg,
        link: "https://keycode.njtd.xyz",
        skills: ["HTML", "CSS", "JavaScript"],
        git: "https://github.com/NathanJohnNJ/keycode"
      }

    const cardList = [drumkit, keycode, dice, matrix]
     
    return (
      <div className="flex flex-row w-full">
        <Cards cardList={cardList} module="JavaScript" side="left" />
      </div>
    )
}

export default Javascript;