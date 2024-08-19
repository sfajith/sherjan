import Title from '../components/Title'
import Subtext from '../components/Subtext'

function Me() {
  return (
    <section id="about" className="p-5 lg:px-[72px] lg:mt-28">
      <div className="2xl:w-[71.5%] m-auto">
      <div className="flex flex-col lg:flex-row lg:gap-x-10 items-center">
      <div
        className="w-full  h-[450px] lg:h-[400px] bg-cover bg-no-repeat overflow-hidden rounded-[3%] my-5"
        
      >
        <img src="/provisional.jpg" className="w-full h-full  object-cover object-top transition-transform duration-500 ease-in-out transform hover:scale-110 "/>
      </div>
      <div className="">
      <Title title={"Design that sparks engagement and inspires action"} position={"lg:text-left"}/>
      <Subtext text={"Concentrate on your primary objective which is expanding your business, and leave it to me to ensure that your business is efficiently portrayed in the digital realm and distinguishes itself from the rivals."} position={"lg:text-left"}/>
      </div>
      </div>
      </div>
    </section>
  )
}

export default Me
