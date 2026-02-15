'use client';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState, useEffect } from 'react';

const ThirdSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 75%"]
  });
  const translateX = useTransform(scrollYProgress, [0, 0.5, 0.8], ['100vw','25vw', '25vw'])
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0.6, 1])
  const [repos, setRepos] = useState([])
  let side = 150;

  const fetchData = async () => {
    try {
      const url = 'https://api.github.com/users/NathanJohnNJ/repos?per_page=5&sort=pushed';
      const response = await fetch(url, {
        headers:{"Accept" : "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
        }
      })
      if (!response.ok) {
        throw new Error(response.statusText)
        }
      const data = await response.json()
      const repoData = data.map((x, i) => {
        return {
          date: `${x.pushed_at.slice(8, 10)}/${x.pushed_at.slice(5, 7)}/${x.pushed_at.slice(0, 4)}`,
          url:  `https://github.com/${x.full_name}`,
          name: x.name,
          homepage: x.homepage,
          html_url: x.html_url,
          description: x.description
        }
      })
      console.log(repoData)
      setRepos(repoData);
    } catch (err) { 
      console.log(err)
    }
  } 
  useEffect(() => { 
     fetchData()
  }, []);

  return(
    <motion.div ref={ref} className="relative h-[150vh] w-[90vw] flex flex-col self-center mb-[20vh] justify-self-center items-center justify-flex-end pb-16">
      <motion.div className="sticky top-[2vh] w-[85%] flex flex-col pl-16 pr-16">    
        <motion.h1 className='font-[GeologicaExtraBold] text-(--dark-color) font-bold whitespace-wrap text-4xl text-center self-center coloredShadow' style={{opacity: opacity, scale: opacity}}>
          Recently Updated GitHub Repositories
        </motion.h1>
        <motion.div className="flex w-full flex-col justify-center items-center text-center" id="mainGit" style={{opacity: opacity, scale: opacity}}>
          <motion.div className="flex flex-col items-center w-[80vw] relative font-(--font-poppins) text-xl text-(--mid-color) self-center">
            {repos.map((repo, i) => {
              const ID = `git${i}`
              const divID = `div${ID}`
              side = side * -1
            return(
              <motion.div key={i} id={divID} className="flex flex-col w-min max-w-[60%] mt-5 p-4 bg-(--light-color) animate-(--rainbowBG) hover:animate-(--reverseRainbowBG) rainbowBG shadow-2xl"
                variants={{
                  hidden: { opacity: 0.6 },
                  visible: { x: 0, opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport= '0.2'
                transition={{ ease: "easeIn", type: "spring", bounce: 0.4}}
                style={{ translateX: side }}
                >
                  <motion.h2 className="font-geologica font-semibold text-xl -mt-4 text-(--light-color) filter-(--my-shadow)">{repo.name}</motion.h2>
                  <motion.div className="text-left" id={ID}>
                  <motion.p className="whitespace-nowrap text-sm"><b>URL:</b><a href={repo.url} target="_blank" rel="noreferrer" className="no-underline font-semibold text-(--dark-color) hover:text-(--light-color) text-sm"> {repo.url}</a></motion.p>
                  {repo.description?<p className="text-sm w-[85%]"><b>Description:</b> {repo.description}</p>:<></>}
                  </motion.div>
                  </motion.div>)
            })}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}; 

export default ThirdSection;

