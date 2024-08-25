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
      titulo: "The Start - From Engineering to Code",
      fecha: "2017",
      resumen:
        "My career began in mechanical engineering, where I developed a strong foundation in logic and structured thinking. However, my true passion has always been in technology and design, which led me to explore web development.",
      more: "While working with a graphic designer friend, I gained skills in tools like Illustrator and Photoshop, sparking my interest in front-end development. This allowed me to combine design and functionality, something that has excited me from the start.",
      flecha: "left-container-arrow",
      open: false
    },
    {
      id : 1,
      clase: "container right-container",
      imagen: "/sherjan/images/dos.png",
      titulo: "From Student to Entrepreneur",
      fecha: "2018",
      resumen:
        "I left university to start a footwear business with my wife. As we faced the challenges of entrepreneurship, I developed an order management tool in VBA, which introduced me to the world of programming.",
        more: "Despite the difficulties, this experience taught me how to apply logic and management skills to programming, laying the groundwork for my future career in web development.",
      flecha: "right-container-arrow",
      open: false
    },
    {
      id : 2,
      clase: "container left-container",
      imagen: "/sherjan/images/tres.png",
      titulo: "Crisis and Rebirth - Facing Adversity",
      fecha: "2022 - 2023",
      resumen:
        "After the business closed, I found a new opportunity to reinvent myself through programming. I decided to learn JavaScript and immerse myself in web development, despite the challenges.",
      more:" It was a tough process, but my determination led me to complete courses and practice daily, viewing every small achievement as a victory.",  
      flecha: "left-container-arrow",
      open: false
    },
    {
      id : 3,
      clase: "container right-container",
      imagen: "/sherjan/images/cuatro.png",
      titulo: "Building My Technical Foundation - Early Achievements",
      fecha: "2023",
      resumen:
        "As I honed my skills in JavaScript, I completed projects on FreeCodeCamp, from a simple tribute page to an interactive data visualizer. Each project represented a new challenge and an opportunity to apply what I had learned.",
      more:"These projects solidified my knowledge in programming and gave me the confidence to continue advancing in my career as a web developer.",
      flecha: "right-container-arrow",
      open: false,
      codepen: <a className="text-red-300 font-bold" href="https://codepen.io/collection/kNZqvR?grid_type=grid&cursor=eyJwYWdlIjoxfQ==" target="_blank">See My Proyects</a>
    },
    {
      id : 4,
      clase: "container left-container",
      imagen: "/sherjan/images/cinco.png",
      titulo: "From JavaScript to React - Expanding My Skillset",
      fecha: "2023-2024",
      resumen:
        "Currently, I am focused on perfecting my skills in modern tools like React, Next.js, and Astro. These skills have allowed me to develop projects like KanbanEase, which reflect not only my technical abilities but also my passion for creating intuitive and efficient user interfaces.",
      more: "Additionally, I have learned to use Git and GitHub to manage and deploy projects, demonstrating my ability to work in collaborative environments and with modern development practices.",
      flecha: "left-container-arrow",
      open: false
    },
    {
      id : 5,
      clase: "container right-container",
      imagen: "/sherjan/images/seis.png",
      titulo: "Fullstack Development - Continuing the Learning Journey",
      fecha: "2024 and more",
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
        <img src={item.imagen} alt="" />
        <div className="text-box">
          <h2>{item.titulo}</h2>
          <small>{item.fecha}</small>
          <p>
            {item.resumen}
          </p>
          <p className={`${
    item.open ? 'max-h-28 opacity-100' : 'max-h-0 opacity-0'
  } overflow-hidden transition-all duration-500 ease-in-out`}>{item.more} {item.codepen} </p>
          <button className={`text-[#030712] font-bold`} onClick={() =>{moreHandler(item.id)}}>{!item.open? 'Show More...': 'Show Less...'}</button>
          <span className={item.flecha}></span>
        </div>
      </div>
        ))
      }
      

    </div>
  );
}

export default TimeLine;
