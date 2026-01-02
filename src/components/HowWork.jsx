import HowCard from './HowCard';
import Subtext from './Subtext';
import Title from './Title';
import TitleMini from './TitleMini';

const datos = [
  {
    id: 0,
    number: '01',
    text: 'Arquitectura desde el día uno',
  },
  {
    id: 1,
    number: '02',
    text: 'Seguridad integrada al diseño',
  },
  {
    id: 2,
    number: '03',
    text: 'MVP primero, escalar después',
  },
  {
    id: 3,
    number: '04',
    text: 'Código mantenible',
  },
  {
    id: 4,
    number: '05',
    text: 'Calidad y observabilidad en producción',
  },
];

function HowWork() {
  return (
    <section id="stack" className="font-inter-tight p-5 my-24">
      <div className="2xl:w-[1440px] m-auto xl:px-[72px]">
        <Title title={'¿Como Trabajo?'} />
        <Subtext text={'Principios que guían mis decisiones técnicas.'} />

        <div className="flex flex-col lg:flex-row mt-5 gap-x-2">
          {datos.map(item => (
            <HowCard key={item.id} number={item.number} text={item.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowWork;
