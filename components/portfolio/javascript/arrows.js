function Arrows({ prevSlide, nextSlide }) {
  return (
    <div className="arrows">
      <span className="cursor-pointer z-[100] absolute top-[5%] w-auto p-[1rem] text-[40px] font-bold rounded-md left-0 text-transparent" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="cursor-pointer z-[100] absolute top-[5%] w-auto p-[1rem] text-[40px] font-bold rounded-md right-0 text-transparent" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

export default Arrows;