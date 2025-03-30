import HTML from '@/components/portfolio/html-css';
import JavaScript from '@/components/portfolio/javascript';

export default function Page(){
  return (
    <div className="h-[300vh] mt-[50vh]">
      <div  className="mt-[40vh] flex flex-col items-center justify-center">
        <HTML />
        {/* <JavaScript /> */}
      </div>
      <div className="flex items-center justify-center">
      <svg width="1500" height="1000" xmlns="http://www.w3.org/2000/svg"  xmlnsXlink="http://www.w3.org/1999/xlink">
        <text x="50%" y="25%" dy=".35em" className="text-5xl font-[GeologicaBlack] font-black" textAnchor="middle">
         I&apos;m constantly working on exciting updates
        </text>
        <text x="50%" y="35%" dy=".35em" className="text-5xl font-[GeologicaBlack] font-black" textAnchor="middle">
          for this page, so Keep checking back
        </text>
        <text x="50%" y="45%" dy=".35em" className="text-5xl font-[GeologicaBlack] font-black" textAnchor="middle">
          —you&apos;ll soon discover what I&apos;ve been
        </text>
        <text x="50%" y="55%" dy=".35em" className="text-5xl font-[GeologicaBlack] font-black" textAnchor="middle">
          creating and refining. Stay tuned!
        </text>
      </svg>
      </div>
    </div>
  );
}
