import "../styles/timeline.css";
import { useState } from "react";

function TimeLine() {
  
  const moreHandler = (idContainer) =>{
    setItems((prevItems) =>
      prevItems.map((item, index) =>
        index === idContainer ? { ...item, open: !item.open} : item
      )
    );
  }

  const [items, setItems] = useState([
    {
      id : 0,
      clase: "container left-container",
      imagen: "/sherjan/images/uno.png",
      imagend:"/sherjan/images/unod.png",
      titulo: "The Start - From Engineering to Code",
      fecha: "2017",
      resumen:
        "My journey began with a focus on engineering, where I built a strong foundation in logic and structured thinking. However, my true passion always lay in technology and design, leading me to explore web development.",
      more: "At that time, I was creating websites using WordPress while my friend handled the company’s branding. I learned design concepts by following the branding designs, which significantly influenced my approach to front-end development. Discover how these early experiences with graphic design and branding were crucial in guiding me towards a career change, and how they shaped my passion for combining design and functionality.",
      flecha: "left-container-arrow",
      open: false
    },
    {
      id : 1,
      clase: "container right-container",
      imagen: "/sherjan/images/dos.png",
      imagend:"/sherjan/images/dosd.png",
      titulo: "From Student to Entrepreneur",
      fecha: "2018",
      resumen:
        "I left university to start a footwear business with my wife. While the business was initially successful, we faced significant challenges, which led me to explore other avenues.",
        more: "Developing the order management system with VBA brought me immense satisfaction, as I felt a sense of accomplishment creating a tool with a specific function. This experience marked the beginning of my journey into programming. Learn about the satisfaction I experienced while building the order management system and how it left a lasting impression on my approach to problem-solving and development.",
      flecha: "right-container-arrow",
      open: false
    },
    {
      id : 2,
      clase: "container left-container",
      imagen: "/sherjan/images/tres.png",
      imagend:"/sherjan/images/tresd.png",
      titulo: "Crisis and Rebirth - Facing Adversity",
      fecha: "2022 - 2023",
      resumen:
        "After the business closure, I found a new opportunity to reinvent myself through programming. I decided to learn JavaScript and immerse myself in web development despite the challenges.",
      more:"Facing difficulties with faith and the support of my wife, I set a life goal to master JavaScript. I saw it as the first step toward achieving my ambitions, and each achievement in JavaScript became a source of motivation. Explore how I confronted difficult times with faith and support, and how setting a goal to master JavaScript became a pivotal step in my journey.",  
      flecha: "left-container-arrow",
      open: false
    },
    {
      id : 3,
      clase: "container right-container",
      imagen: "/sherjan/images/cuatro.png",
      imagend:"/sherjan/images/cuatrod.png",
      titulo: "Building My Technical Foundation - Early Achievements",
      fecha: "2023",
      resumen:
        "As I improved in JavaScript, I began completing projects on FreeCodeCamp, ranging from a tribute page to an interactive data visualizer.",
      more:"Each project, such as the Palindrome Checker and the Random Quote Machine, represented a new challenge and an opportunity to apply what I had learned. These projects solidified my knowledge and boosted my confidence.",
      flecha: "right-container-arrow",
      open: false,
      codepen: <a className="text-red-300 font-bold" href="https://codepen.io/collection/kNZqvR?grid_type=grid&cursor=eyJwYWdlIjoxfQ==" target="_blank">(Details of projects are available on CodePen.)</a>
    },
    {
      id : 4,
      clase: "container left-container",
      imagen: "/sherjan/images/cinco.png",
      imagend:"/sherjan/images/cincod.png",
      titulo: "From JavaScript to React - Expanding My Skillset",
      fecha: "2023-2024",
      resumen:
        "I mastered tools like React, Next.js, and Astro, enhancing my ability to create modern and efficient applications.",
      more: "Using frameworks and deployment tools transformed my projects from mere code snippets on CodePen into fully functional applications. Discover how mastering modern frameworks and deployment tools helped me elevate my projects from simple code snippets to functional applications.",
      flecha: "left-container-arrow",
      open: false
    },
    {
      id : 5,
      clase: "container right-container",
      imagen: "/sherjan/images/seis.png",
      imagend:"/sherjan/images/seisd.png",
      titulo: "Fullstack Development - Continuing the Learning Journey",
      fecha: "2024 and Beyond",
      resumen:
        "My goal is to become a fullstack developer, with a focus on creating exceptional user experiences. To achieve this, I am enrolled in the Software Analysis program at SENA, which will allow me to expand my backend skills and complement my frontend knowledge.",
      more:" I am committed to continuing to refine my skills in UI/UX and explore new opportunities that will allow me to grow as a developer.",
      flecha: "right-container-arrow",
      open: false
    },
  ]);

  return (
    <div className="timeline">
      {
        items.map((item) => (
          <div key={item.id} className={item.clase}>
        <img src={item.imagen} alt="" className="block dark:hidden"/>
        <img src={item.imagend} alt="" className="hidden dark:block"/>
        <div className="text-box">
          <h2>{item.titulo}</h2>
          <small>{item.fecha}</small>
          <p>
            {item.resumen}
          </p>
          <p className={`${
    item.open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
  } overflow-hidden transition-all duration-500 ease-in-out`}>{item.more} {item.codepen} </p>
          <button className={`text-[#030712] dark:text-[#d1d5db] font-bold`} onClick={() =>{moreHandler(item.id)}}>{!item.open? 'Show More...': 'Show Less...'}</button>
          <span className={item.flecha}></span>
        </div>
      </div>
        ))
      }
      

    </div>
  );
}

export default TimeLine;
