'use client';
export default function Title() {
  function addShadow(){
    const myArray = [
      {
        opacity: '0.1', width: '15'
      },
      {
        opacity: '0.3', width: '12'
      },
      {
        opacity: '0.5', width: '9'
      },
      {
        opacity: '0.7', width: '6'
      },
      {
        opacity: '0.9', width: '4'
      },
      {
        opacity: '1', width: '2'
      }
    ]
    const newArray = myArray.map((item, i) =>{
      return (
        <text key={i} x="50%" y="50%" className="text-6xl font-[GeologicaBlack] stroke-(--border-color) fill-transparent" strokeWidth={item.width} strokeOpacity={item.opacity} textAnchor="middle" stroke="url(#Gradient1)">
          HTML / CSS
        </text>
      )
    })
    return newArray;
  }
  return (
    <div className="">
      <svg width="650" height="250" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <defs>
          <clipPath id="htmlClip">
            <text x="50%" y="50%" className="text-5xl font-[GeologicaBlack] font-black fill-green-500 stroke-amber-700" textAnchor="middle" stroke="url(#Gradient1)">
              HTML / CSS
            </text>
          </clipPath>
        </defs>
        <rect x="25" y="25" width="600" height="200" className="" rx="50" ry="50" fill="red" clipPath="url(#htmlClip)" stroke="green" strokeWidth="5" />
        {addShadow()}
      </svg>
    </div>
  );
}
