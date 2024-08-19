import Title from '../components/Title'
import Subtext from './Subtext'
import TitleMini from './TitleMini'
import { GoArrowUpRight } from "react-icons/go";

function Education() {

  const formation = [{id:0, name: "Responsive Web Design", year: 2023, url: "https://www.freecodecamp.org/certification/fcc6ab998c8-bca9-41d1-a9af-273b77d57798/responsive-web-design"}, {id:1, name: "JavaScript Algorithms and Data Structures", year: 2023, url: "https://www.freecodecamp.org/certification/fcc6ab998c8-bca9-41d1-a9af-273b77d57798/javascript-algorithms-and-data-structures"}, {id:2, name: "Front End Development Libraries", year: 2024, url: "https://www.freecodecamp.org/certification/fcc6ab998c8-bca9-41d1-a9af-273b77d57798/front-end-development-libraries"}, {id:3, name: "Data Visualization", year: 2024, url: "https://www.freecodecamp.org/certification/fcc6ab998c8-bca9-41d1-a9af-273b77d57798/data-visualization"}]

  return (
    <section id='education' className="font-inter-tight p-5 xl:px-[72px] mb-24 mt-24 lg:mt-36">
      <div className='2xl:w-[71.5%] m-auto'>
     <Title title={"Education"} />
     <Subtext text={"Building a strong foundation in web development through continuous learning"}/>
     {
      formation.map(course => (
        <>
        <div className='flex justify-between items-center mt-10'>
        <div className='mt-6'>
          <TitleMini text={course.name}/>
          <h4 className='font-inter-tight text-lg font-light'>{course.year} - freeCodeCamp</h4>
        </div>
        <a href={course.url} target='_blank'>
        <div type="button" className='bg-[#f9fafb] transition-all duration-300 ease-linear hover:text-gray-500 hover:scale-125 cursor-pointer rounded-full' ><GoArrowUpRight className="ml-1 text-2xl" /></div></a>
      </div>
      <hr className='mt-5' />
      </>
      ))
     }
     </div>
    </section>
  )
}

export default Education
