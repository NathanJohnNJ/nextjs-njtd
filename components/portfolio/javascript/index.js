import TabGallery from "./tabGallery";

export default function JavaScript(){

  return(
    <div className="rainbowBG">
      <div className="flex cubes rounded-4xl flex-col items-center w-full h-fit sticky top-[30vh] py-8 pb-20 mv-[30vh] border-8">
          <div className="absolute top-0 left-[50%] -translate-x-[50%] z-10 bg-gradient-to-tr from-(--black-color) to-(--white-color) rounded-2xl py-2 px-3 filter-(--current-shadow)">
            <h1 className="text-5xl filter-(--current-shadow) font-[GeologicaBlack] repoTitle ">JavaScript</h1>
          </div>
          <div className="mt-8">
            <TabGallery />
          </div>
      </div>
    </div>
  )
}