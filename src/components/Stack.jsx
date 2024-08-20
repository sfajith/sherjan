import Title from "../components/Title";
import Subtext from "./Subtext";
import { IoLogoJavascript } from "react-icons/io";
import { ImHtmlFive2 } from "react-icons/im";
import { FaCss3 } from "react-icons/fa6";
import { SiAstro } from "react-icons/si";
import { RiReactjsLine, RiTailwindCssFill, RiBootstrapLine } from "react-icons/ri";
import { TbBrandGithubFilled, TbBrandNextjs } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiAdobephotoshop, SiAdobeillustrator, SiGnubash, SiD3Dotjs  } from "react-icons/si";
import { FaWordpress, FaGitAlt } from "react-icons/fa";


function Stack() {
  const frontend = [
    { id: 1, component: <ImHtmlFive2 />, name: "HTML" },
    { id: 2, component: <FaCss3 />, name: "CSS" },
    { id: 3, component: <IoLogoJavascript />, name: "JavaScript" },
    { id: 4, component: <RiReactjsLine />, name: "React" },
    { id: 5, component: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { id: 6, component: <SiAstro />, name: "Astro" },
    { id: 7, component: <TbBrandNextjs />, name: "Next.js" },
    { id: 8, component: <SiD3Dotjs />, name: "D3.js" },
  ];

  const version = [
    { id: 1, component: <FaGitAlt />, name: "Git" },
    { id: 2, component: <TbBrandGithubFilled />, name: "GitHub" },
  ];

  const backend = [
    { id: 1, component: <SiGnubash />, name: "Bash" },
    { id: 2, component: <BiLogoPostgresql />, name: "PostgreSQL" },
  ];

  const design = [
    { id: 1, component: <FaWordpress />, name: "Wordpress" },
    { id: 2, component: <SiAdobephotoshop />, name: "Adobe Photoshop" },
    { id: 2, component: <SiAdobeillustrator />, name: "Adobe Illustrator" },
  ]

  return (
    <section id="stack" className="font-inter-tight p-5 xl:px-[72px] mt-24 lg:mt-24">
      <div className="2xl:w-[71.5%] m-auto">
      <Title title={"Tools & Technologies"} />
      <Subtext
        text={
          "A versatile stack that empowers me to create modern and intuitive web experiences"
        }
      />
      <h3 className="text-2xl font-semibold text-center lg:text-left my-10 font-inter-tight text-[#374151]">
        Frontend Development
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4  font-inter-tight text-[#374151] py-5">
        {frontend.map((icon) => (
          <div
            key={icon.id}
            className="flex items-left gap-x-3 text-4xl p-4 border rounded transition-all duration-150 ease-linear hover:scale-110 hover:shadow-lg hover:text-[#030712] hover:bg-white"
          >
            {icon.component}
            <span className="text-lg font-semibold">{icon.name}</span>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-semibold text-center lg:text-left my-10 font-inter-tight text-[#374151]">
        Version Control & Deployment
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4  font-inter-tight text-[#374151] py-5">
        {version.map((icon) => (
          <div
            key={icon.id}
            className="flex items-center gap-x-3 text-4xl p-4 border rounded transition-all duration-150 ease-linear hover:scale-110 hover:shadow-lg hover:text-[#030712] hover:bg-white"
          >
            {icon.component}
            <span className="text-lg font-semibold">{icon.name}</span>
          </div>
        ))}
      </div>


      <h3 className="text-2xl font-semibold text-center lg:text-left my-10 font-inter-tight text-[#374151]">
        Design & Tools
      </h3>
      <div className="grid grid-cols-1  sm:grid-cols-3  gap-4  font-inter-tight text-[#374151] py-5">
        {design.map((icon) => (
          <div
            key={icon.id}
            className="flex items-center gap-x-3 text-4xl p-4 border rounded transition-all duration-150 ease-linear hover:scale-110 hover:shadow-lg hover:text-[#030712] hover:bg-white" 
          >
            {icon.component}
            <span className="text-lg font-semibold">{icon.name}</span>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default Stack;
