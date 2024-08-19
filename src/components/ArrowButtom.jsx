import { GoArrowRight } from "react-icons/go";

function ArrowButtom({color, link}) {
  return (
    <a href={link} className={`border px-5 py-2 rounded-full group hidden md:block`} style={{borderColor: color}}>
    <GoArrowRight className={`text-xl transition-all duration-150 ease-linear hover:scale-125 group-hover:translate-x-2`} style={{color: color}}/>
    
  </a>
  )
}

export default ArrowButtom
