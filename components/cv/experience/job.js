
const Job = (props) => {
  return(
    <div className="flex flex-col justify-center m-2">
      <div className="relative flex">
        <div className="h-[2px] w-[30%] bg-black mt-[2%] ml-[4%] absolute left-0" />
        <div className="absolute left-0 right-0">{props.date}</div>
        <div className="h-[2px] w-[30%] bg-black mt-[2%] absolute right-8" />
      </div>
      <div className="mt-6 w-[90%] ml-[5%] font-bold font-pop text-lg">{props.job}</div>
      <div className="mr-4 -mt-2 self-end font-bold font-pop text-sm">{props.employer}</div>
      <div>{props.description}</div>
    </div>
  )
}

export default Job;