import Course from './course';
import Section from './section';

const Experience = () => {
  function firstCourse(){
    return [
      "HTML & CSS",
      "JavaScript & JSON",
      "API's",
      {title: "Back-End Development",
        points: [
          "MongoDB & MySQL",
          "NodeJS/NPM & Express"
        ]
      },
      {title: "Front-End Development",
        points: [
          "ReactJS",
          "NodeJS/NPM"
        ]
      }
    ]
  }
  function secondCourse(){
    return [
      "Improving Productivity Using IT",
      "Website Software",
      "Using Collaborative Technologies"
    ]
  }
function Body(){
  return (
    <ul className="list-disc ml-[15%] w-[80vw]">
      <Course date="2023" school="Code Nation" course="Master: Coding Bootcamp" points={firstCourse()}/>
      <Course date="2023" school="Code Nation" course="Certificate in IT User Skills (Open Systems and Enterprise)" points={secondCourse()}/>
      <Course date="2009" school="Priestley College" course="3 AS Levels (A*/A) including Mathematics and Further Mathematics" />
      <Course date="2008" school="St. Gregory's RCHS" course="10 GCSE’s (A*-B) including Applied ICT (Dual Award)" />
    </ul>
  )
}
  return(
    <div className="">
    <Section title="RELEVANT EDUCATION" body={<Body />} />
      
    </div>
  )
}

export default Experience;