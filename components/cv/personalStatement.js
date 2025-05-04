'use client';
import { useWindowSize } from '@/hooks';

const PersonalStatement = (props) => {
  const { title } = props;
  const [windowWidth, windowHeight] = useWindowSize();
  const pageWidth = windowWidth - 500;

  const titleArray = title.split('');
  const titleMultiplier = titleArray.length*1.4;
  const titleWidth = `${titleMultiplier}vw`;
  const titleWidthInPx = (titleMultiplier/100)*(windowWidth);
  const titleHeightInPx = 45;

  const top = (titleWidthInPx/3)*2;
  const titleSide = 45;
  const titleHeight = `${titleSide}px`;
  const path = `M${titleWidthInPx/3},0h${top-titleSide/1.75}c${(titleSide/4)*3},0 ${(titleSide/4)*3},${titleSide} 0,${titleSide}h-${titleWidthInPx-(titleWidthInPx/5)}q-40,0 -40,50v50`;
  return(
    <svg xmlns='http://www.w3.org/2000/svg' width={windowWidth*0.75} height={windowHeight}>
      <defs>
        <linearGradient id="bgGrad" gradientTransform='rotate(-30)'>
          <stop stopColor='white' offset="10%" />
          <stop stopColor='#a0a0a0' offset="90%" />
        </linearGradient>
      </defs>
      <g transform="translate(50,50)">
        <rect x="0" y="0" rx="20" ry="25" width={titleWidthInPx} height={titleHeightInPx} fill="url(#bgGrad)" />
        <text x="0" y="32" className="text-section-title stroke-black fill-black" >
          {title}
        </text>

        <path fill='none' d={path} stroke='#0000009E' strokeWidth='2'/>
        </g>
        <foreignObject width={pageWidth} height={windowHeight} x="80" y="110">
          <p className="text-left font-(--Raleway)" >
            As a driven, self-motivated, and passionate individual, I take pride in every task I set my mind to and always strive to not only achieve my goals, but surpass them, and learn something from the experience. Whilst at school my love for logical thought processes and problem solving was discovered through critical thinking courses, summer schools, and representing my school at various Mathematics and Chess Championships.
          </p>
          <p className="text-left font-(--Raleway)">
            Having these skills enabled me to make the most out of every avenue my life has taken me down, and to get the most out of every learning opportunity I&apos;ve had. During my career as a HMUA I was fortunate enough to receive world class training helping to develop &apos;customer-focused&apos; service skills and a range of interpersonal skills, on top of time management, KPI measurement, and delivery skills. It was also during this time I began turning my love for technology and coding into a profession by building an online presence for my own brand, as well as for a few salons across the north west.
          </p>
          <p className="text-left font-(--Raleway)">
            My last position in the contact centre industry, before embarking on my new career path, saw me quickly promoted to Team Manager, which was a role in which I could naturally marry my gained skill set with my education. Now, after gaining some freelance clients, and a qualification from Coding &apos;Master Bootcamp&apos;, I am looking for a career in a company in which I can grow and develop further. I am very open minded to new technologies, and a very quick learner who will always aim to deliver and be an asset to any company I work for.
          </p>
        </foreignObject>
      </svg>
  )
}

export default PersonalStatement;