import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useEffect, useState, useRef } from "react";
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
  const navRef = useRef(null)

  useEffect(()=>{
    let handler = (e) =>{
      if(!navRef.current.contains(e.target)){
        setOpen(true)
      }
    }

    document.addEventListener('mousedown', handler)
    return () =>{
      document.removeEventListener('mousedown', handler);
    }
  },[open])


const openHandler = () => {
  setOpen((prev) => !prev);
};


  return (
    <nav ref={navRef} className="font-inter-tight relative">

  <div className={`relative z-10 flex justify-between items-center p-5 transition-colors duration-300 ease-linear ${open? "bg-[#fff] dark:bg-[#121212]" : "bg-[#030712]"}`} >
    <div className="flex justify-between w-full items-center 2xl:w-[1433px] m-auto xl:px-[72px]">
      <a href="/sherjan">
      <img src={open ? "/sherjan/logo.png" : "/sherjan/logo-white.png"} alt="" width="100px" className="block dark:hidden"/>
      <img src="/sherjan/logo-white.png" alt="" width="100px" className="hidden dark:block"/>
      </a>
      <button onClick={openHandler} className={`px-6 py-3 rounded-full border ${open ? 'border-[#030712] dark:border-[#d1d5db]' : 'border-white'}`}>
        {open ? <FiMenu className="text-xl text-[#030712] dark:text-[#d1d5db]" /> : <MdClose className="text-xl text-white" />}
      </button>
    </div>
  </div>
 
  <div className={`absolute w-full bg-[#030712] z-0  transition-all duration-300 ease-linear ${open? "-top-[730px]" : "top-[86px]"}`} >
    <div className="2xl:w-[71.5%] m-auto">
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
      <p className="text-[22px] font-[400] tracking-[0.02em] text-[#374151] text-left font-inter-tight">You're here, and that's a win for me</p>
    </div>
    </div>
  </div>
</nav>

  );
}

export default ResponsiveMenu;
