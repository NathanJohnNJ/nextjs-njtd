import Image from 'next/image';
import Fieldset from './fieldset';
import {
  MdCall,
  MdMail,
  MdLocationOn,
  MdLanguage
} from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Sidebar = () => {
  function frameworks(){
    return(
      <div className="flex flex-col w-[90%]">
        <h1 className="font-geo font-bold text-sm self-start ml-2" >5 YEARS</h1>
        <div className="flex text-xs">
          <ul className="text-left ml-6 font-pop font-extralight list-disc">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <ul className="text-left ml-8 font-pop font-extralight list-disc">
            <li>Python</li>
            <li>MicroPython</li>
            <li>Bash</li>
          </ul>
        </div>
        <h1 className="font-geo font-bold text-sm self-start ml-2 mt-2" >4 YEARS</h1>
        <div className="flex text-xs">
          <ul className="text-left ml-6 font-pop font-extralight list-disc">
            <li>ReactJS</li>
            <li>GSAP</li>
            <li className="whitespace-nowrap">Framer-Motion</li>
          </ul>
          <ul className="text-left ml-8 font-pop font-extralight list-disc">
            <li className="whitespace-nowrap">React-Native</li>
            <li className="whitespace-nowrap">Styled Components</li>
            <li>ZSH</li>
          </ul>
        </div>
        <h1 className="font-geo font-bold text-sm self-start ml-2 mt-2" >≤2 YEARS</h1>
        <div className="flex text-xs">
          <ul className="text-left ml-6 font-pop font-extralight list-disc">
            <li>NextJS</li>
            <li>TailwindCSS</li>
            <li>Angular</li>
            <li>Vue</li>
          </ul>
          <ul className="text-left ml-8 font-pop font-extralight list-disc">
            <li>Java</li>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    )
  }
  function transSkills(){
    return(
      <div className="flex flex-col text-xs font-extralight">
          <ul className="text-left ml-6 font-pop font-extralight list-disc">
            <li>Interpersonal Skills</li>
            <li>Critical Thinking</li>
            <li>Problem Solving</li>
            <li>Complaints Handling</li>
            <li>Customer Service</li>
            <li>Team Management</li>
            <li>Time Management</li>
            <li>Training / Tutoring</li>
            <li>
              Mentoring:
              <ul className="text-left ml-6 font-extralight list-[square]">
                <li>Peer-to-Peer</li>
                <li>Leadership</li>
              </ul>
            </li>
          </ul>
      </div>
    )
  }

  function contact(){
    return(
      <div className="flex flex-col text-xs font-extralight">
          <ul className="text-left ml-6 font-pop font-extralight list-none leading-loose">
            <li className="flex"><a href="+447359235700" target="_blank" rel="noreferrer"  className="flex hover:text-md hover:font-bold mt-[5.5px]"><MdCall className="mr-2 mt-[8.5px]" />07359235700</a></li>
            <li className="flex"><MdMail className="mr-2 mt-[9.5px]" /><a href="mailto:nj@njtd.xyz?subject=CV%20Enquiry" target="_blank" rel="noreferrer"  className="flex hover:text-md hover:font-bold">nj@njtd.xyz</a></li>
            <li className="flex"><MdLocationOn className="mr-2 mt-[7.5px]" />Castleton, Hope Valley, S33</li>
            <li className="flex"><MdLanguage className="mr-2 mt-[9px]" />www.njtd.xyz</li>
            <li className="flex"><a href="https://github.com/NathanJohnNJ" target="_blank" rel="noreferrer"  className="flex hover:text-md hover:font-bold"><FaGithub className="mr-2 mt-[9.5px]" />github.com/NathanJohnNJ</a></li>
            <li className="flex"><a href="https://linkedin.com/in/NathanJohnNJ" target="_blank" rel="noreferrer"  className="flex hover:text-md hover:font-bold"><FaLinkedin className="mr-2 mt-[8px]" />linkedin.com/in/NathanJohnNJ</a></li>
          </ul>
      </div>
    )
  }
  return (
    <div className="w-fit h-[150vh] bg-gradient-to-b from-neutral-300 to-whiteml-[1%] mt-[5%] rounded-tl-[14vw] rounded-tr-[14vw]">
      <Image src='/logo.svg' alt="NJTD Logo" width="300" height="300" className="flex justify-self-center self-center p-2"/>
      <Fieldset title="FRAMEWORKS" content={frameworks()} />
      <Fieldset title="TRANSFERRABLE SKILLS" content={transSkills()} />
      <Fieldset title="CONTACT" content={contact()} />
    </div>
  )
}

export default Sidebar;