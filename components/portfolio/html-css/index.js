import Carousel from "./carousel";
import Statement from "./statement";

export default function HTML(){

  return(
    <div className="w-full h-fit sticky flex flex-col items-center top-[50vh] py-8" >
      <div className="flex flex-row w-[80vw] h-fit relative">
        <div className="absolute top-[5px] left-[5vw] z-50 bg-gradient-to-tr from-(--black-color) to-(--white-color) rounded-2xl py-2 px-3 filter-(--current-shadow)">
          <h1 className="text-5xl filter-(--current-shadow) font-[GeologicaBlack] repoTitle z-50 ">HTML / CSS</h1>
        </div>
        <div className="sticky top-[150px] flex">
          <Carousel />
          <Statement />
        </div>
      </div>
    </div>
  )
};