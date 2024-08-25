import Title from "../components/Title";
import Subtext from "../components/Subtext";
import TimeLine from "../components/TimeLine";
import { useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";

function Me() {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect((()=>{
    document.getElementsByTagName('html')[0].style.overflow = open? 'scroll' : 'hidden';
    return () =>{
      document.getElementsByTagName('html')[0].style.overflow = 'scroll';
    }

  }),[open])

  return (
    <section id="about" className="p-5 lg:mt-24">
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
              title={"Design that sparks engagement and inspires action"}
              position={"lg:text-left"}
            />
            <Subtext
              text={
                "Concentrate on your primary objective which is expanding your business, and leave it to me to ensure that your business is efficiently portrayed in the digital realm and distinguishes itself from the rivals."
              }
              position={"lg:text-left"}
            />
            <button
              className={`mt-2 xl:mt-0 text-[22px] font-bold tracking-[0.02em] text-[#030712] text-center lg:text-left font-inter-tighttop-24 hover:text-red-300`}
              onClick={() => {
                handleOpen();
              }}
            >
              {open ? "Know my journey" : "Close my journey"}
            </button>
          </div>
        </div>
        

        <div
          className={`justify-center ${
            open ? "scale-0 fixed" : "scale-100 fixed flex top-20 left-[10%] w-[80%] h-5/6 bg-white rounded-xl z-50 overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-900 border shadow-2xl"
          } transition-all duration-300`}
        >
          <TimeLine client:only="react" />
        </div>

        <button
              className={`mt-2 xl:mt-0 text-[22px] font-[400] tracking-[0.02em] text-[#030712]  text-center lg:text-left font-inter-tight ${open ? "scale-0" : "scale-100"} fixed transition-all duration-300 top-[50px] right-[12%] z-50 bg-black px-4 rounded-md`}
              onClick={() => {
                handleOpen();
              }}
            >
              <RiCloseLargeFill className="text-white" />
            </button>
      </div>
    </section>
  );
}

export default Me;
