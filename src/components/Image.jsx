
function Image({url}) {
  return (
    <div
        className="w-full bg-cover bg-no-repeat overflow-hidden rounded-[3%] mt-5"
        
      >
        <img src={url} className="w-full h-auto lg:h-[480px]  object-cover transition-transform duration-500 ease-in-out transform hover:scale-110 "/>
      </div>
  )
}

export default Image
