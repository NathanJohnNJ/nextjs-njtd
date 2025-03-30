import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (
      <div className="flex flex-col items-center justify-center w-[85vw] ml-[7.5vw] h-max p-8 relative">
        <div className="w-full h-[50vh] bg-gradient-to-tr from-[var(--background-start-rgb)] to-[var(--background-end-rgb)]  -mt-16 sticky top-0 flex flex-col items-center justify-center">
          <Image src="/images/njtd.svg" alt="NJTD" width={400} height={100}  />
          <h2 className="subTitle -mt-16">Website Usage Terms & Conditions</h2>
        </div>
        <p className="text-2xl text-[var(--mid-color)] mt-8 font-medium font-[poppins]">Welcome to <Link href="/" className="text-2xl text-[var(--light-color)] no-underline font-semibold">NJTD.xyz</Link></p> 
        <p className="text-base text-[var(--mid-color)] mt-4 font-medium font-[poppins]">If you continue to browse and use this website, you are agreeing to comply with, and be bound by, the following terms and conditions of use. These, together with my privacy policy govern NJTD&apos;s relationship with you in relation to this website. Any further interactions between you and anyone representing NJTD beyond this website, such as receiving a service offered by NJTD, will be subject to further terms which are available on request.</p>
        <p className="text-base text-[var(--mid-color)] mt-4 font-medium font-[poppins]"> If you disagree with any part of these terms and conditions, please do not use my website. You can <a className="text-lg text-[var(--light-color)] mt-8 mb-4 font-semibold font-[poppins] no-underline" href="#">click here </a>to close this tab and open a blank page in your browser.</p>
        <p className="text-base text-[var(--mid-color)] mt-3 font-medium font-[poppins]">The term &apos;NJTD&apos; or &apos;me&apos; refers to the owner of this website (<a href="/about" className="text-lg text-[var(--light-color)] mt-8 mb-4 font-semibold font-[poppins] no-underline">Nathan Hynes</a>) whose registered office is in Hope Valley, S33, UK, and anyone representing them.</p>
        <p className="subHeading text-2xl mt-8">The use of this website is subject to the following terms of use:</p>
          <ul className="text-base text-[var(--mid-color)] mt-4 mb-4 font-medium font-[poppins] list-disc w-[70vw]">
            <li>The content of the pages of this website is for your general information and use only. It is subject to change without notice.</li>
            <li>This website uses cookies to monitor browsing preferences. If you do allow cookies to be used, the following personal information may be stored by me for use by third parties:
              <ul className="list-disc ml-[2.5vw] w-[20vw]">
                <li>Visits to site</li>
                <li>Pages visited</li>
                <li>Date/Time of visits</li>
              </ul>
            </li>
            <li>Neither me, nor any third parties, provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose. You acknowledge that such information and materials may contain inaccuracies or errors and I expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
            <li>Your use of any information or materials on this website is entirely at your own risk, for which I shall not be liable. It shall be your own responsibility to ensure that any products, services or information available through this website meet your specific requirements.</li>
            <li>This website contains material which is owned by or licensed to me. This material includes, but is not limited to, the design, layout, look, appearance and graphics of the website. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.</li>
            <li>All trademarks reproduced in this website, which are not the property of, or licensed to the operator, are acknowledged on the website.</li>
            <li>Unauthorised use of this website may give rise to a claim for damages and/or be a criminal offence.</li>
            <li>This website also includes links to other websites. These links are provided for your convenience to provide further information. They do not signify that I endorse the website(s). I have no responsibility for the content of the linked website(s).</li>
            <li>Your use of this website and any dispute arising out of such use of the website is subject to the laws of England, Northern Ireland, Scotland and Wales.</li>
          </ul>
      </div>
    )
};

export default Page;




