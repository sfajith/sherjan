import { LuDownload } from "react-icons/lu";
import UpButton from "./UpButton";

function Description() {
  return (
    <section id="home" className="font-inter-tight p-5 xl:px-[72px]">
      <div className="">
      <h3 className="text-[22px] md:text-[28px] font-[500] tracking-[0.02em] mb-3 md:pl-1">
        Hello! Glad you're here!
      </h3>
      <h1 className="text-[64px] md:text-[104px] md:text-left leading-none font-bold text-[#030712] tracking-tight text-center lg:mt-5">
        Designing seamless and engaging user interfaces
        <span className="text-[#b6bcc6]"> for the web</span>
      </h1>

      <div className="flex flex-col justify-center ">

        <div className="flex flex-col justify-between text-white my-10">
          <div className="flex gap-x-8">
          <hr className="border-[#b6bcc6] mb-7  w-2/3 lg:w-1/3 my-auto hidden md:block "/>
          <p className="mt-7 md:text-left text-[22px] font-[400] tracking-[0.02em] text-[#374151] text-center font-inter-tight">
          A passionate front-end developer committed to bringing ideas to life through clean, effective code
          </p>
 
          </div>
        
        </div>
        
      </div>
      <div className="mt-7 flex flex-col lg:flex-row justify-between  gap-8 items-center">

      <div className="flex flex-row justify-end lg:mt-0 gap-x-5 items-center">
        <UpButton link={"https://www.linkedin.com/in/sherjan-marun-291163278/"}  text={'LINKEDIN'} color={'text-[#030712]'} hover={'text-[#b6bcc6]'}/>
        <UpButton link={"https://github.com/sfajith"} text={'GITHUB'} color={'text-[#030712]'} hover={'text-[#b6bcc6]'}/>
        <UpButton text={'E-MAIL'} color={'text-[#030712]'} hover={'text-[#b6bcc6]'}/>
      </div>
      <button className="bg-[#030712] text-white py-4 w-full rounded-full text-[22px] font-[600] flex justify-center items-center transition-all duration-300 ease-linear hover:bg-[#262628] hover:tracking-wider group lg:w-1/3">Download Resume <LuDownload className="ml-2 transition-all duration-300 ease-linear group-hover:scale-110"/></button>
      </div>
      </div>
    </section>
  );
}

export default Description;
