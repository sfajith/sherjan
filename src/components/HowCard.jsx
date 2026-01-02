function HowCard({ number, text }) {
  return (
    <div className="flex flex-col lg:flex-row items-start pl-10 lg:pl-0 mb-5 lg:mb-0">
      <div className="flex flex-row items-end gap-2">
        <h3 className="text-[64px]  md:text-left leading-none font-bold text-[#030712] dark:text-[#d1d5db] tracking-tight text-center lg:mt-5">
          <span className="text-[#b6bcc6] dark:text-[#49535e] font-inter-tight  font-light">
            {number}
          </span>
        </h3>
        <h3 className="text-4xl lg:text-xl font-semibold font-inter-tight text-left w-full text-[#374151] dark:text-[#B0B9BF]">
          {text}
        </h3>
      </div>
    </div>
  );
}

export default HowCard;
