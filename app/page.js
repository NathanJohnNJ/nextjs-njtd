import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-[10vmax] overflow-y-scroll overflow-x-hidden">

      <div className="min-h-[150px] bg-black"></div>
      <div className="min-h-[1000px] bg-black flex flex-col items-center justify-center">

      <div className="flex items-center justify-center">
                
                <svg width="100vw" height="100vh" viewBox="0 0 1000 1000">
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
                <text x="50%" y="18%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle" stroke="url(#Gradient1)">
                Thank you for stopping by.
                </text>
                <foreignObject height="500" width="500" x="28%" y="22%" className="flex">

                  <div className="firstLogo h-[100%] w-[100%] flex self-center justify-self-center items-center justify-center">
                    <Image
                      src="./logo.animated.svg"
                      alt="NJTD Logo"
                      width={500}
                      height={500}
                    />
                  </div>
                </foreignObject>
                <text x="50%" y="75%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle"  stroke="url(#Gradient2)">
                I'm having a bit of a re-shuffle currently,
                </text>
                <text x="50%" y="85%" dy=".35em" className="update text-5xl font-[Geologica] font-black" textAnchor="middle"  stroke="url(#Gradient2)">
                the site will be up and running again in a week or 2.
                </text>
            </svg>
        </div>
      <h1 className="update text-5xl font-[Geologica] font-black"></h1>
      
      <h1 className=""></h1>
      <h1 className="update text-5xl font-[Geologica] font-black"> </h1>
      </div>
      <div className="min-h-[1000px] bg-black"></div>
      <div className="min-h-[1000px] bg-black"></div>
      <div className="min-h-[1000px] bg-black"></div>
    </div>
  );
}
