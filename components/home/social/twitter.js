import './styles.css';
import { useState } from 'react';
const Twitter = () => {
 const [visibility, setVisibility] = useState("hidden");

  return(
    <div className="relative">
      <button className="Btn" id="X" onMouseEnter={()=>setVisibility("visible")} onMouseLeave={()=>setVisibility("hidden")}>
        <span className="svgContainer">
          <svg className="socialSvg" viewBox="0 0 512 512" height="1.7em" xmlns="http://www.w3.org/2000/svg" fill="white">
            <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
          </svg>
        </span>
        <span className="BG shadow-2xl" />
      </button>
      <h1 id="xLabel" style={{visibility: visibility}} className="text-6xl justify-self-center font-bold fontGeo absolute coloredShadow top-[80%] left-[30%] text-[var(--mid-color)] rounded-2xl bg-[var(--light-color)] p-[8px] shadow-2xl shadow-(color:--darkBorder-color)">X</h1>
    </div>
  )
};

export default Twitter;