
function Subtext({text, position, a}) {
  return (
    <p className={`mt-2 xl:mt-0 text-[22px] font-[400] tracking-[0.02em] text-[#374151] text-center lg:text-left font-inter-tight ${position}`}>
    {text}  {a}
  </p>
  )
}

export default Subtext
