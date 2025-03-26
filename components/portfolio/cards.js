import { motion } from 'motion/react';
import { Link } from 'next/link';
import Image from 'next/image'

function Cards(props){
  const { cardList, module, side } = props;
  console.log(cardList);
  return (
    <div className="h-full flex flex-col w-fit relative">
      {cardList.map((card, i) => {
        return(
          <motion.div key={i} className="flex flex-col items-center justify-center ml-[5vw] text-[var(--white-color)] rounded-[20px] w-[350px] h-[500px] mt-[20px] mb-[20px] overflow-visible pt-0 pr-[20px] pl-[20px] pb-[20px]" 
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
              <div className="absolute overflow-visible bottom-0 left-1 right-1 top-0 mt-[55px] w-full h-[75vh]" >
                <h2 className="fadedTitle">{module}</h2>
              </div>
              <motion.div className="text-lg font-[Poppins] w-[75%] min-h-[600px] h-[80] overflow-y-scroll p-[8px] flex flex-col items-center justify-center mt-[5] mb-[5] ml-[10] bg-white rounded-[20]"
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
              <h2 className="font-[LeagueSpartan] align-center text-2xl">{card.title}</h2>
              <Image className="w-[18vmin] h-auto rounded-[20] mb-[15]" src={card.image} alt={card.title} />
              <Link href={card.link} className="group">
                <p className="font-[LeagueSpartan] text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Click here to view the app yourself!</p>
              </Link>
              <Link href={card.git} className="group">
                <p className="font-[LeagueSpartan] text-xl group-hover:text-2xl -mb-[5] text-[var(--black-color) group-hover:text-[var(--dark-color)] no-underline">Or view the code on GitHub</p>
              </Link>
              <p className="font-[LeagueSpartan] text-xl -mb-[20]">Skills/Languages used:</p>
            <ul className="pb-4 w-[50%] flex flex-col justify-start list-disc text-[var(--dark-color)]">
              {card.skills.map((skill, i) => {
                return(
                  <li key={skill} className="geoFont text-base">{skill}</li>
                )
              })}
            </ul>
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
        <Cards cardList={cardList} module={module} side={side} />
      </div>
    </motion.div>
  )
}

export default Card;