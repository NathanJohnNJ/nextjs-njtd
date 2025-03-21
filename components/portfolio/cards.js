import { motion } from 'motion/react';
import { Link } from 'next/link';
import Image from 'next/image'

function Title(props){
  const { cardList, module, side } = props;
  return(
    <div className="h-full flex flex-col bg-[var(--white-color)] rounded-[20] items-center justify-center w-fit pt-[1] pb-[1] pl-[2] pr-[2] sticky top-[200px] mt-[50%] drop-shadow-textBox" style={styles.titleDiv}>
      <h1 className="font-[GeoBold] text-3xl drop-shadow-text align-center">
        {(module)?module.toUpperCase():console.log("no title")}
      </h1>
    </div>
  )
}
function Cards(props){
  const { cardList, module, side } = props;
  console.log(cardList);
  return (
        <div className="h-full flex flex-col w-fit relative">
          {cardList.map((card, i) => {
          return(
            <motion.div key={i} className="flex flex-col items-center justify-center ml-[5vw] text-[var(--white-color)] rounded-[20px] w-[350px] h-[500px] mt-[20px] mb-[20px] overflow-visible pt-0 pr-[20px] pl-[20px] pb-[20px]" style={styles.cardDiv}
              variants={{
                hidden: { y: 200, opacity: 0, scale:0 },
                visible: { y: 0, opacity: 1, scale: 1 },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{  margin: "-150px" }}
              transition={{ duration: 1.5, ease: "easeIn", type: "spring", bounce: 0.4}}
              >
            <motion.div className="flex flex-col items-center justify-center relative pt-[20px] mt-0 mr-[8vw] mb-[4vh] ml-[8vw] w-[112%] h-full overflow-visible" key={i} viewport={{ once: true, amount: 0.8 }}>
              <div className="absolute overflow-visible bottom-0 left-1 right-1 top-0 mt-[55px] w-full h-[75vh]" style={styles.splash}>
                <h2 className="fadedTitle">{module}</h2>
              </div>
              <motion.div className="text-lg font-[Poppins] w-[75%] min-h-[600px] h-[80] overflow-y-scroll p-[8px] flex flex-col items-center justify-center mt-[5] mb-[5] ml-[10] bg-white rounded-[20]" style={styles.cardShadow}
              variants={{
                hidden: { y: 300, opacity: 0 },
                visible: {
                    y: 50,
                    rotate: -10,
                    opacity: 1,
                    transition: {
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.8,
                    }
                  },
              }}
              initial="hidden"
              whileInView="visible"
              >
                <h2 className="font-[LeagueSpartan] align-center text-2xl" style={styles.cardTitle}>{card.title}</h2>
                <Image className="w-[18vmin] h-auto rounded-[20] mb-[15]" source={card.image} alt={card.title}></Image>
                <Link href={card.link} className="group"><p className="font-[LeagueSpartan] text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Click here to view the app yourself!</p></Link>
                <Link href={card.git} className="group"><p className="font-[LeagueSpartan] text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Or view the code on GitHub</p></Link>
                <p className="font-[LeagueSpartan] text-xl -mb-[20]">Skills/Languages used:</p>
                {/* <FlatList
                data={card.skills.map((skill, i) => {
                    return(
                      {key: `${skill}`}
                    )
                  })} 
                  renderItem={({item}) => <p className="font-[Poppins] text-lg">{item.key}</p>}/> */}
              </motion.div>
            </motion.div>
          </motion.div>)
          })}
        </div>
  );
}

const Card = (props) => {
  const { cardList, module, side } = props;
  return(
    <motion.div className="flex flex-col w-full"
    variants={{
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }}
    initial="hidden"
    whileInView="visible"
    transition={{ duration: 0.5, ease: "easeIn"}}
    >
      <div className="flex flex-row items-center justify-center">
        {side==="left" ? <Title props={props} /> : <></>}
        <Cards cardList={cardList} module={module} side={side} />
        {side==="right" ? <Title props={props} /> : <></>}
      </div>
    </motion.div>
  )
}

export default Card;


const styles = StyleSheet.create({
  // cardDiv: {
  //   boxShadow: '0 0 1px var(--darkCol) , 0 0 2px var(--darkCol) inset, 0 0 4px var(--lightCol) , 0 0 8px var(--darkCol) inset, 0 0 16px var(--lightCol), 0 0 1px hsl(0deg 0% 0% / 0.075) inset,  0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075) inset,  0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)'
  // },
  splash: {
    backgroundImage: 'linear-gradient(195deg, var(--whiteCol), var(--lightCol))',
    // boxShadow: 'inset 0 0 1px var(--darkCol), 0 0 2px var(--darkCol) inset, 0 0 4px var(--lightCol) inset, 0 0 16px var(--lightCol)inset, inset 0 0 2px hsl(0deg 0% 0% / 0.075), inset 0 0 8px hsl(0deg 0% 0% / 0.075), inset 0 0 16px hsl(0deg 0% 0% / 0.075)',
    clipPath: 'path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")'
  },
  cardShadow: {
    // boxShadow: 'inset 0 0 1px var(--blackCol), 0 0 2px var(--infoCol), 0 0 4px var(--blackCol) , 0 0 8px var(--infoCol), 0 0 16px var(--blackCol), 0 0 1px hsl(0deg 0% 0% / 0.075) inset, 0 0 2px hsl(0deg 0% 0% / 0.075) inset, 0 0 4px hsl(0deg 0% 0% / 0.075) inset, 0 0 8px hsl(0deg 0% 0% / 0.075) inset, 0 0 16px hsl(0deg 0% 0% / 0.075) inset',
    transformOrigin: '10% 60%'
  },
  cardTitle: {
    backgroundImage: 'linear-gradient(45deg, red, magenta, aqua, greenyellow)',
    backgroundClip: 'text',
    webkitBackgroundClip: 'text',
    webkitTextStrokeColor: 'transparent',
    webkitTextStrokeWidth: 3,
    webkitTextFillColor: 'var(--darkCol)'
  },
  titleDiv: {
    // boxShadow: 'inset 0 0 1px var(--darkCol), 0 0 2px var(--darkCol), 0 0 4px var(--lightCol) inset, 0 0 8px var(--darkCol), 0 0 16px var(--lightCol)inset, 0 0 1px hsl(0deg 0% 0% / 0.075), inset 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), inset 0 0 8px hsl(0deg 0% 0% / 0.075), inset 0 0 16px hsl(0deg 0% 0% / 0.075)'
  }
});