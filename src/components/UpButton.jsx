import { GoArrowUpRight } from "react-icons/go";

function UpButton({text, color, hover, link, dark}) {
  return (
    <a href={link} target="_blank" className={`flex justify-center items-center rounded-full ${color} text-[16px] font-[600] tracking-[.23px] transition-all ease-linear hover:${hover} ${dark}`}>
    {text} <GoArrowUpRight className="ml-1 text-2xl" />
  </a>
  )
}

export default UpButton
