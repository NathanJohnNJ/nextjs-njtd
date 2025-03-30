import Image from "next/image";

const Page = () => {
  return (
    <div className="h-[150vh] text-[var(--mid-color)] ">
      <div className="flex flex-col items-center justify-around h-[80vh] p-[25vh]">
        <div className="flex flex-col items-center justify-center">
        <Image src="/images/njtd.svg" alt="NJTD" width={400} height={100} className="-mb-16" />
        <h2 className="subTitle">Privacy Policy</h2>
        <h2 className="flex text-xl align-center font-[poppins] text-[var(--mid-color)]">NJTD does not collect or hold any information from/about the visitors to this site.</h2>
        <h2 className="flex text-xl align-center font-[poppins] text-[var(--mid-color)]">This is subject to change at any time, without prior notification.</h2>
        <h2 className="flex text-xl align-center font-[poppins] text-[var(--mid-color)]">Should this change, the privacy policy will be updated to reflect how information is used and stored.</h2>
      </div>
      <div className="flex flex-col justify-center items-center">
            <h2 className="subTitle">Contact Details:</h2>
            <div className="flex justify-center flex-col items-start text-left text-base ">
              <p className="text-2xl font-[poppins] font-semibold"><strong>Name:</strong> Nathan Hynes</p>
              <p className=" text-2xl font-[poppins] font-semibold"><strong>Address:</strong> Castleton, Hope Valley, S33, UK</p>
              <p className=" text-2xl font-[poppins] font-semibold"><strong>E-Mail:</strong> <a href="mailto:nj@njtd.xyz" className="leading-[24px] text-left font-[poppins] text-2xl font-bold text-[var(--light-color)] inline-flex no-underline">nj@njtd.xyz</a></p>
            </div>
          <h2 className="flex self-center text-xl text-center font-[poppins] font-semibold text-[var(--mid-color)] justify-self-center ml-[20vw]">Date updated: 01/03/25</h2>
        </div>
        </div>
    </div>
  )
};

export default Page;