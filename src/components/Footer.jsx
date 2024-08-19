import { GoArrowUpRight } from "react-icons/go";
import Subtext from "./Subtext";

function Footer() {
  return (
    <section className="p-5 bg-[#030712] font-inter-tight flex flex-col justify-center text-center">
      <div className="text-white font-[500] text-2xl tracking-wide mt-5">
        LIKED WHAT YOU SAW? LET'S GET IN TOUCH!
      </div>
      <h3 className="text-[64px] leading-none font-bold text-white tracking-tight text-center mt-10">
        <span className="text-[#b6bcc6]">sfajith</span>
        @gmail.com
      </h3>

      <button className="bg-[#1f2937] text-white transition-colors duration-300 ease-linear hover:text-gray-500 cursor-pointer w-16 h-16 flex justify-center items-center rounded-full m-auto mt-7">
        <GoArrowUpRight className="ml-1 text-4xl" />
      </button>
      <hr className="mt-5 border-none h-[1px] bg-[#636466]" />
      <div className="flex justify-center gap-x-5 mt-10 mb-5">
        <a href="#" className="text-white font-semibold text-sm underline transition-colors duration-300 ease-linear hover:text-[#b6bcc6]">HOME</a>
        <a href="#" className="text-white font-semibold text-sm underline transition-colors duration-300 ease-linear hover:text-[#b6bcc6]">ABOUT ME</a>
        <a href="#" className="text-white font-semibold text-sm underline transition-colors duration-300 ease-linear hover:text-[#b6bcc6]">WORKS</a>
        <a href="#" className="text-white font-semibold text-sm underline transition-colors duration-300 ease-linear hover:text-[#b6bcc6]">STACK</a>
      </div>
      <Subtext text={"Striving for progress, one step at a time"}/>
      <hr className="my-10 border-none h-[1px] bg-[#636466]" />
      <div className="text-[#636466] font-[500] text-sm tracking-wide mt-5">
      Crafted with passion and precision. 2024 Sherjan.
      </div>
    </section>
  );
}

export default Footer;
