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
      titulo: "El Comienzo - De la Ingenieria al Codigo",
      fecha: "2018 - 2019",
      resumen:
        "Empece mi carrera en ingenieria mecanica, donde desarrolle habilidades de logica y pensamiento estructurado. Sin embargo, mi verdadera pasion siempre estuvo en la tecnologia y la creatividad",
      flecha: "left-container-arrow",
      open: false
    },
    {
      id : 1,
      clase: "container right-container",
      imagen: "/sherjan/images/dos.png",
      titulo: "La Transicion - De Estudiante a Emprendedor",
      fecha: "2018 - 2019",
      resumen:
        "Deje la universidad por falta de recursos economicos y funde junto con mi esposa una tienda en linea de calzado. Aunque la empresa fue exitosa inicialmente, enfrentamos desafios que me llevaron a explorar otras vias",
      flecha: "right-container-arrow",
      open: false
    },
    {
      id : 2,
      clase: "container left-container",
      imagen: "/sherjan/images/tres.png",
      titulo: "El Quiebre - Redefiniendo Mi Camino",
      fecha: "2018 - 2019",
      resumen:
        " El negocio quebro, sumiéndonos en una crisis economica. Pero en medio de la adversidad, encontre en la programacion un nuevo proposito",
      flecha: "left-container-arrow",
      open: false
    },
    {
      id : 3,
      clase: "container right-container",
      imagen: "/sherjan/images/cuatro.png",
      titulo: "Los Primeros Logros - Construyendo Mi Base",
      fecha: "2018 - 2019",
      resumen:
        "A medida que mejoraba en JavaScript, empece a completar proyectos en freeCodeCamp, desde una página de tributo hasta un visualizador de datos interactivo",
      flecha: "right-container-arrow",
      open: false,
      codepen: <a className="text-red-300 font-bold" href="https://codepen.io/collection/kNZqvR?grid_type=grid&cursor=eyJwYWdlIjoxfQ==" target="_blank">See My Proyects</a>
    },
    {
      id : 4,
      clase: "container left-container",
      imagen: "/sherjan/images/cinco.png",
      titulo: "Perfeccionando Mis Habilidades - De React a Astro",
      fecha: "2018 - 2019",
      resumen:
        "Domine herramientas como React, Next.js, y Astro, ampliando mi capacidad para crear aplicaciones modernas y eficientes",
      flecha: "left-container-arrow",
      open: false
    },
    {
      id : 5,
      clase: "container right-container",
      imagen: "/sherjan/images/seis.png",
      titulo: "El Futuro - UI/UX y Mas Alla",
      fecha: "2018 - 2019",
      resumen:
        "Estoy enfocado en mejorar KanbanEase y avanzar en mi carrera, con el objetivo de especializarme en UI/UX front-end. Tambien estoy inscrito en un programa de analisis de software del SENA para seguir aprendiendo",
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
  } overflow-hidden transition-all duration-500 ease-in-out`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus obcaecati, nam nihil accusamus molestias architecto? {item.codepen} </p>
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
