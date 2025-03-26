import HTML from '@/components/portfolio/html-css';
import JavaScript from '@/components/portfolio/javascript';

export default function Portfolio(){
  return (
    <div className="h-[300vh] mt-[50vh]">
      <div  className="mt-[40vh] flex flex-col items-center justify-center">
        <HTML />
        {/* <JavaScript /> */}
      </div>
      <div className="flex items-center justify-center">
      <svg width="1500" height="1000" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink">
        <text x="50%" y="30%" dy=".35em" className="text-5xl font-[GeologicaBlack] font-black" textAnchor="middle">
          I&apos;m still adding more to this page...
        </text>
        <text x="50%" y="40%" dy=".35em" className="text-5xl font-[GeologicaBlack] font-black" textAnchor="middle">
          Check back soon to see what else 
        </text>
        <text x="50%" y="46%" dy=".35em" className="text-5xl font-[GeologicaBlack] font-black" textAnchor="middle">
          I&apos;ve been working on!
        </text>
      </svg>
      </div>
    </div>
  );
}
