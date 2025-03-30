import Job from './job';
import Section from './section';

const Experience = () => {
  function firstJob(){
    return (
      <ul className="list-disc text-left ml-[15%]">
        <li>
          Primarily web development for private clients (Example: <a href="https://www.lizhynestherapy.co.uk" target="_blank" rel="noreferrer" className="hover:text-md hover:font-bold">https://www.lizhynestherapy.co.uk</a>) as well as taking part in build/hackathon events
        </li>
      </ul>
    )
  }
  function secondJob(){
    return (
      <ul className="list-disc text-left ml-[15%]">
        <li>
          Organising diary and scheduling appointments. Booking flights, trains, hotels and hire cars. Completing invoice requests, expenses and tax returns.
        </li>
        <li>
          Primarily working with HTML, CSS, JavaScript, Tailwind CSS, React JS
        </li>
      </ul>
    )
  }
  function thirdJob(){
    return (
      <ul className="list-disc text-left ml-[15%]">
        <li>
          Whilst working in the contact centre industry I was lucky enough to work in a variety of roles, and a variety of sectors. I especially enjoyed being part of the L&D team, and working as an EDI Specialist as I found these roles the most rewarding and loved helping to shape and diversify my work environment.
        </li>
      </ul>
    )
  }
  function fourthJob(){
    return (
      <ul className="list-disc text-left ml-[15%]">
        <li>
          Creating an online presence through HTML, CSS, and social media web development for myself and several salons in Warrington and Manchester
        </li>
        <li>
          Setting my own targets and tracking KPI’s
        </li>
        <li>
          Keeping track and ordering of my own stock
        </li>
        <li>
          Time/Column management
        </li>
      </ul>
    )
  }
function Body(){
  return (
    <div className="">
      <Job date="2023 - Present" employer="Freelance - NJTD" job="Full-Stack Web Developer" description={firstJob()}/>
      <Job date="2021 - 2024" employer="BJBG Coaching" job="Personal Assistant / Web Developer" description={secondJob()}/>
      <Job date="2017 - 2021" employer="Various Contact Centres" job="Team Manager, EDI Specialist, L&D, Complaints Handler, Sales Advisor, Customer Service" description={thirdJob()}/>
      <Job date="2009 - 2017" employer="Freelance - Nathan John HMUA" job="Hair & Makeup Artist" description={fourthJob()}/>
    </div>
  )
}
  return(
    <div className="ml-[45%] mt-[10%]">
    <Section title="EXPERIENCE" body={<Body />} />
      
    </div>
  )
}

export default Experience;