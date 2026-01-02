import Subtext from './Subtext';
import Title from './Title';
import TitleMini from './TitleMini';

function Projects() {
  return (
    <section id="about" className="p-5 mt-24 dark:bg-[#121212]">
      <div className="2xl:w-[1440px] m-auto xl:px-[72px]">
        <Title title={'Otros proyectos'} position={'lg:text-left'} />
        <Subtext text={'Exploraciones técnicas y proyectos complementarios.'} />
        <div className="flex flex-col lg:flex-row lg:gap-x-5 lg:items-center">
          <div className="flex flex-col lg:flex-row lg:gap-x-10 items-center lg:w-[50%] mb-10 lg:mb-0">
            <div className="min-w-[250px]  h-[450px] lg:h-[375px] bg-cover bg-no-repeat overflow-hidden rounded-[3%] my-5">
              <img
                src="/phone.jpg"
                className="w-full h-full object-cover  transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="flex flex-col justify-center lg:justify-end">
              <TitleMini
                text={'Mvp mobile para startup de hospedaje'}
                position={'lg:text-left'}
              />
              <div className="mt-4 text-[18px] font-[400] tracking-[0.02em] text-[#374151] dark:text-[#B0B9BF] text-center font-inter-tight lg:text-left">
                Desarrollo del MVP mobile de una plataforma de hospedaje con
                React Native, integrando servicios backend desacoplados. Enfoque
                en mantenibilidad, seguridad y calidad técnica, con pruebas
                automatizadas en flujos críticos y logging estructurado para
                facilitar debugging y evolución del producto. Responsable del
                diseño técnico y desarrollo completo del MVP.
              </div>
              <div className="w-1/4 lg:w-1/2 flex justify-center border rounded-xl bg-[#B0B9BF] ">
                <h4 className=" text-white text-[12px] font-inter-tight">
                  Startup (no público)
                </h4>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-x-10 items-center lg:w-[50%]">
            <div className="">
              <TitleMini text={'KanbanEase'} position={'lg:text-right'} />
              <div className="mt-4  text-[18px] font-[400] tracking-[0.02em] text-[#374151] dark:text-[#B0B9BF] text-center font-inter-tight lg:text-right">
                Proyecto frontend desarrollado para fortalecer habilidades en
                React y diseño de interfaces. Inspirado en tableros Kanban tipo
                Trello, enfocado en la gestión visual de tareas, manejo de
                estado y experiencia de usuario.
              </div>
              <div className="w-full flex justify-center lg:justify-end mt-5 mb-10">
                <a
                  href="https://sfajith.github.io/KanbanEase/"
                  target="_blank"
                  className="bg-[#030712] dark:bg-[#d1d5db] dark:text-[#030712] hover:dark:text-[#d1d5db] text-white py-4  rounded-full text-[18px] font-[600] flex justify-center items-center transition-all duration-300 ease-linear hover:bg-[#262628] hover:tracking-wider group w-1/2 text-center px-5"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
            <div className="min-w-[250px]  h-[450px] lg:h-[375px] bg-cover bg-no-repeat overflow-hidden rounded-[3%] my-5">
              <img
                src="/kanban.jpg"
                className="w-full h-full object-cover  transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
