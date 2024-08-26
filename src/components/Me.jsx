import Title from "../components/Title";
import Subtext from "../components/Subtext";
import TimeLine from "../components/TimeLine";
import { useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import '../styles/timeline.css'

function Me() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect((()=>{
    document.getElementsByTagName('html')[0].style.overflow = open? 'scroll' : 'hidden';
    document.getElementsByTagName('html')[0].style.overflowX= 'hidden'
    return () =>{
      document.getElementsByTagName('html')[0].style.overflow = 'scroll';
      document.getElementsByTagName('html')[0].style.overflowX= 'hidden'
    }

  }),[open])

  return (
    <section id="about" className="p-5 lg:mt-24 dark:bg-[#121212]">
      <div className="2xl:w-[1440px] m-auto xl:px-[72px]">
        <div className="flex flex-col lg:flex-row lg:gap-x-10 items-center">
          <div className="w-full  h-[450px] lg:h-[400px] bg-cover bg-no-repeat overflow-hidden rounded-[3%] my-5">
            <img
              src="/sherjan/sherjan.jpg"
              className="w-full h-full  object-cover object-top transition-transform duration-500 ease-in-out transform hover:scale-110 "
            />
          </div>
          <div className="">
            <Title
              title={"Designs That Encourage Engagement and Inspire Action"}
              position={"lg:text-left"}
            />
            <Subtext
              text={
                "I'm Sherjan, a front-end developer with a passion for creating intuitive and visually appealing web experiences. I focus on blending functionality with design to deliver solutions that captivate and engage users."
              }
              position={"lg:text-left"} a={<button
                className={`mt-2 xl:mt-0 text-[22px] font-bold tracking-[0.02em] text-[#030712] dark:text-[#E5E7EB] text-center lg:text-left font-inter-tighttop-24 hover:text-red-300`}
                onClick={() => {
                  handleOpen();
                }}
              >
                Explore My Journey
              </button>}
            />

          </div>
        </div>
        
              <div className={open? '' : 'prueba'}>
                
        <div
          className={`justify-center contenedorme ${
            open ? "scale-0 fixed" : "scale-100 fixed flex top-16 left-[10%] w-[80%] h-5/6 bg-white dark:bg-[#121212] rounded-xl z-50 overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-900 border"
          } transition-all duration-300`}
        >
          <TimeLine client:only="react" />
        </div>

        <button
              className={`mt-2 xl:mt-0 text-[22px] font-[400] tracking-[0.02em] text-[#030712]  text-center lg:text-left font-inter-tight ${open ? "scale-0" : "scale-100"} fixed transition-all duration-300 top-[35px] right-[12%] z-50 bg-[#030712] dark:bg-[#b6bcc6] px-4 rounded-md`}
              onClick={() => {
                handleOpen();
              }}
            >
              <RiCloseLargeFill className="text-[#b6bcc6] dark:text-[#030712]" />
            </button>
            </div>
      </div>
    </section>
  );
}

export default Me;
