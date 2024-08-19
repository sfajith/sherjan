import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import UpButton from "./UpButton";
import ArrowButtom from "./ArrowButtom";

function ResponsiveMenu() {
  const items = [
    { id: 0, name: "About me", numer: "(01)", link: '#about' },
    { id: 1, name: "Works", numer: "(02)", link: '#portfolio' },
    { id: 2, name: "Stack", numer: "(03)", link: '#stack' },
    { id: 3, name: "Education", numer: "(04)", link: '#education' },
  ];

  const [open, setOpen] = useState(true)

useEffect(()=>{
  setOpen(true)
},[])

//toggle

const openHandler = () => {
  setOpen((prev) => !prev);
};


  return (
    <nav className="font-inter-tight relative">

  <div className={`relative z-10 flex justify-between items-center p-5 transition-colors duration-300 ease-linear ${open? "bg-[#fff]" : "bg-[#030712]"}`} >
    <div className="flex justify-between w-full items-center xl:w-[92%] 2xl:w-[67.3%] m-auto">
      <img src={open ? "/sherjan/logo.png" : "/sherjan/logo-white.png"} alt="" width="100px" />
      <button onClick={openHandler} className={`px-6 py-3 rounded-full border ${open ? 'border-[#030712]' : 'border-white'}`}>
        {open ? <FiMenu className="text-xl text-[#030712]" /> : <MdClose className="text-xl text-white" />}
      </button>
    </div>
  </div>
 
  <div className={`absolute w-full bg-[#030712] z-0  transition-all duration-300 ease-linear ${open? "-top-[730px]" : "top-[86px]"}`} >
    <div className="xl:w-[92%] 2xl:w-[67.5%] m-auto">
    <hr className="border-[#374151]" />
    <div className="pb-5">
      {items.map((item) => (
        <div  key={item.id} className="flex justify-between items-center pr-6 mt-9 mb-5">
          <a href={item.link}>
        <h2  className="text-6xl font-inter-tight font-semibold text-white text-left px-5 tracking-[-.02em] hover:text-[#b6bcc6] transition-color duration-150 ease-linear">
          {item.name} <span className="text-xl text-[#374151] font-medium">{item.numer}</span>
        </h2>
          </a>
        <ArrowButtom color={"#ffffff"} link={item.link}/>
        </div>
      ))}
    </div>
    <hr className="border-[#374151]" />
    <div className="px-5 pb-10">
      <p className="mt-7 text-[22px] font-bold tracking-[0.02em] text-[#374151] text-left font-inter-tight">Follow Me.</p>
      <div className="flex justify-between md:justify-start gap-x-10">
        <UpButton text={'LINKEDIN'} color={'text-white'} hover={'text-[#b6bcc6]'}/>
        <UpButton text={'GITHUB'} color={'text-white'} hover={'text-[#b6bcc6]'}/>
        <UpButton text={'INSTAGRAM'} color={'text-white'} hover={'text-[#b6bcc6]'}/>
      </div>
      <p className="text-[22px] font-[400] tracking-[0.02em] text-[#374151] text-left font-inter-tight">You're here, and that's a win for me</p>
    </div>
    </div>
  </div>
</nav>

  );
}

export default ResponsiveMenu;
