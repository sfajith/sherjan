import Subtext from './Subtext';
import Title from './Title';
import TitleMini from './TitleMini';

function HowWork() {
  return (
    <section id="stack" className="font-inter-tight p-5 my-24">
      <div className="2xl:w-[1440px] m-auto xl:px-[72px]">
        <Title title={'¿Como Trabajo?'} />
        <Subtext text={'Principios que guían mis decisiones técnicas.'} />

        <div className="flex flex-col lg:flex-row mt-5 gap-x-2">
          <div className="flex flex-col lg:flex-row items-start pl-10 lg:pl-0 mb-5 lg:mb-0">
            <div className="flex flex-row items-end gap-2">
              <h3 className="text-[64px] md:text-[70px] md:text-left leading-none font-bold text-[#030712] dark:text-[#d1d5db] tracking-tight text-center lg:mt-5">
                <span className="text-[#b6bcc6] dark:text-[#49535e] font-inter-tight  font-light">
                  01
                </span>
              </h3>
              <h3 className="text-4xl lg:text-2xl font-semibold font-inter-tight text-left w-full text-[#374151] dark:text-[#B0B9BF]">
                Arquitectura desde el día uno
              </h3>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start pl-10 lg:pl-0 mb-5 lg:mb-0">
            <div className="flex flex-row items-end gap-2">
              <h3 className="text-[64px] md:text-[70px] md:text-left leading-none font-bold text-[#030712] dark:text-[#d1d5db] tracking-tight text-center lg:mt-5">
                <span className="text-[#b6bcc6] dark:text-[#49535e] font-inter-tight  font-light">
                  02
                </span>
              </h3>
              <h3 className="text-4xl lg:text-2xl font-semibold font-inter-tight text-left w-full text-[#374151] dark:text-[#B0B9BF]">
                Seguridad integrada al diseño
              </h3>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start pl-10 lg:pl-0 mb-5 lg:mb-0">
            <div className="flex flex-row items-end gap-2">
              <h3 className="text-[64px] md:text-[70px] md:text-left leading-none font-bold text-[#030712] dark:text-[#d1d5db] tracking-tight text-center lg:mt-5">
                <span className="text-[#b6bcc6] dark:text-[#49535e] font-inter-tight  font-light">
                  03
                </span>
              </h3>
              <h3 className="text-4xl lg:text-2xl font-semibold font-inter-tight text-left w-full text-[#374151] dark:text-[#B0B9BF]">
                MVP primero, escalar después
              </h3>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-start pl-10 lg:pl-0 mb-5 lg:mb-0">
            <div className="flex flex-row items-end gap-2">
              <h3 className="text-[64px] md:text-[70px] md:text-left leading-none font-bold text-[#030712] dark:text-[#d1d5db] tracking-tight text-center lg:mt-5">
                <span className="text-[#b6bcc6] dark:text-[#49535e] font-inter-tight  font-light">
                  04
                </span>
              </h3>
              <h3 className="text-4xl lg:text-2xl font-semibold font-inter-tight text-left w-full text-[#374151] dark:text-[#B0B9BF]">
                Código mantenible
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowWork;
