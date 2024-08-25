import Title from "../components/Title";
import Subtext from "../components/Subtext";
import Image from "../components/Image";
import TitleMini from "../components/TitleMini";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { GoArrowRight } from "react-icons/go";
function Porfolio() {
  return (
    <section id="portfolio" className="font-inter-tight p-5 mt-24 lg:mt-24">
      <div className="2xl:w-[1440px] m-auto xl:px-[72px]">
      <Title title={"Discover my latest works"} />
      <Subtext
        text={
          "Projects showcasing my journey and passion in front-end development"
        } 
      />

      <div className="lg:grid lg:grid-cols-2 flex flex-col lg:flex-row lg:gap-x-10 lg:items-center mt-10">
        
        <Image url={"/sherjan/kanbanease.jpg"} />
        
        <div className="flex flex-col mt-4 items-center">
          <h3 className="text-4xl font-semibold font-inter-tight text-center lg:text-left w-full">KanbanEase</h3>
          <Subtext
            text={
              "KanbanEase is a web application designed to streamline task management using the Kanban method. Users can organize projects into columns and cards with a modern interface. Developed with React and Tailwind CSS, the app features drag-and-drop functionality for moving cards between columns. This project highlights my ability to create practical and visually appealing solutions, tailored for desktop work environments."
            } position={"lg:text-left"} a={<a 
              href="/sherjan/kanbanease" target='_blank' className="text-[#030712] font-bold hover:text-red-300 transition-colors  ease-linear">Development walkthrough here</a>}
          /> 
          <div className="flex justify-between w-full items-center mt-4 lg:mt-7 ">
            <div className="flex gap-x-2 text-[#374151] text-2xl">
              <ImHtmlFive2 className="transition-all duration-150 ease-linear hover:scale-150 hover:shadow-lg" />
              <FaCss3 className="transition-all duration-150 ease-linear hover:scale-150 hover:shadow-lg" />
              <IoLogoJavascript className="transition-all duration-150 ease-linear hover:scale-150 hover:shadow-lg" />
              <RiReactjsLine className="transition-all duration-150 ease-linear hover:scale-150 hover:shadow-lg" />
              <RiTailwindCssFill className="transition-all duration-150 ease-linear hover:scale-150 hover:shadow-lg" />
              <TbBrandVite className="transition-all duration-150 ease-linear hover:scale-150 hover:shadow-lg" />
            </div>
            <a href="/sherjan/kanbanease/" target='_blank'
              className={`border border-[#030712] px-5 py-2 rounded-full group`}
            >
              <GoArrowRight
                className={`text-xl transition-all duration-150 ease-linear hover:scale-125 group-hover:translate-x-2`}
              />
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Porfolio;
