'use client';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import GitHub from './social/github';
import LinkedIn from './social/linkedIn';
import Twitter from './social/twitter';

const ThirdSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const translateX = useTransform(scrollYProgress, [0, 0.5, 0.8], ['100vw','25vw', '25vw'])
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1])
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
      setRepos(repoData);
    } catch (err) { 
      console.log(err)
    }
  } 
  useEffect(() => { 
    fetchData()
  }, []);

  return(
    <div ref={ref} className="relative h-[150vh] w-[90vw] flex flex-col self-center mb-[20vh] justify-self-center items-center justify-flex-end pb-16">
      <div className="sticky top-[2vh] w-[85%] flex flex-col pl-16 pr-16">    
        <motion.h1 className='geoFont text-[var(--dark-color)] font-bold whitespace-nowrap text-4xl self-center coloredShadow' style={{opacity: opacity, scale: opacity}}>
          Latest GitHub Repository Updates
        </motion.h1>
        <motion.div className="flex w-full flex-col justify-center items-center text-center" id="mainGit" style={{opacity: opacity, scale: opacity}}>
          <div className="flex flex-col items-center w-[80vw] relative font-[var(--font-poppins)] text-xl text-[var(--mid-color)] self-center">
            {repos.map((repo, i) => {
              const ID = `git${i}`
              const divID = `div${ID}`
              side = side * -1
            return(
              <motion.div key={i} id={divID} className="flex flex-col w-[min] max-w-[60vw] mt-[20px] p-4 bg-[var(--light-color)] animate-[var(--rainbowBG)] hover:animate-[var(--reverseRainbowBG)] rainbowBG shadow-2xl"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { x: 0, opacity: 1 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport= '0.2'
                transition={{ duration: 1.5, ease: "easeIn", type: "spring", bounce: 0.4}}
                style={{ translateX: side }}
                >
                  <p className="-mb-[10px] group font-geologica font-semibold text-xl -mt-4 repoTitle">{repo.name}</p>
                  <div className="text-left group" id={ID}>
                  <p className="whitespace-nowrap text-sm"><b>URL:</b><a href={repo.url} target="_blank" rel="noreferrer" className="no-underline font-semibold text-[var(--dark-color)] hover:text-[var(--light-color)] text-sm"> {repo.url}</a></p>
                  <p className="text-sm"><b>Description:</b> {repo.description}</p>
                  </div>
                  </motion.div>)
            })}
          </div>
        </motion.div>
      </div>
    </div>
  )
}; 

export default ThirdSection;

