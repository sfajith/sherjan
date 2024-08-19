
function Title({title, position}) {
  return (
    <h2 className={`text-6xl lg:text-[72px] ${position} font-inter-tight font-bold text-[#030712] text-left tracking-[-.02em]`}>{title}</h2>
  )
}

export default Title
