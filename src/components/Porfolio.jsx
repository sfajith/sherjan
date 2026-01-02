import Title from '../components/Title';
import Subtext from '../components/Subtext';
import Image from '../components/Image';
import { CiWarning } from 'react-icons/ci';
import { IoCloudDoneOutline } from 'react-icons/io5';
import { VscChip } from 'react-icons/vsc';
import { BsGraphUpArrow } from 'react-icons/bs';
import { CiLogin } from 'react-icons/ci';
import { LuDownload } from 'react-icons/lu';
import V22Card from './V22Card';
import YoutubeVideo from './YoutubeVideo';

const classContainerBox =
  'lg:w-[26rem] lg:min-h-[12rem] w-[70%] min-h-[20rem] rounded-[3%] flex justify-start  p-5 flex-col';

const data = [
  {
    Problema: [
      {
        id: 0,
        text: 'Necesidad de un sistema de redirección rápido, seguro y escalable',
      },
      {
        id: 1,
        text: 'Protección contra abuso, bots y ataques automatizados',
      },
      {
        id: 2,
        text: 'Alta latencia en redirecciones cuando todo depende del backend',
      },
      {
        id: 3,
        text: 'Gestión segura de sesiones y autenticación en aplicaciones públicas',
      },
      {
        id: 4,
        text: 'Seguimiento y visualización de métricas de enlaces para usuarios registrados',
      },
    ],
    icon: <CiWarning className="min-w-8 min-h-8 text-red-400" />,
  },
  {
    Solución: [
      {
        id: 0,
        text: 'Arquitectura backend desacoplada',
      },
      {
        id: 1,
        text: 'Edge routing con Cloudflare Workers',
      },
      {
        id: 2,
        text: 'Redirecciones a nivel edge para minimizar latencia global',
      },
      {
        id: 3,
        text: 'Autenticación robusta con JWT y rotación de tokens',
      },
      {
        id: 4,
        text: 'Sistema de estadísticas y métricas por enlace en tiempo real',
      },
    ],
    icon: <IoCloudDoneOutline className="min-w-8 min-h-8 text-green-400" />,
  },
  {
    Arquitectura: [
      {
        id: 0,
        text: 'Express modular (routes / middlewares / controllers)',
      },
      {
        id: 1,
        text: 'MongoDB Replica Set + transacciones',
      },
      {
        id: 2,
        text: 'Redis para tokens',
      },
      {
        id: 3,
        text: 'JWT Access + Refresh con rotación',
      },
      {
        id: 4,
        text: 'Cloudflare Workers para routing',
      },
      {
        id: 5,
        text: 'Docker + Fly.io',
      },
    ],
    icon: <VscChip className="min-w-8 min-h-8 text-sky-400" />,
  },
];

function Porfolio() {
  return (
    <section
      id="portfolio"
      className="font-inter-tight p-5 mt-24 lg:mt-24 dark:bg-[#121212]"
    >
      <div className="2xl:w-[1440px] m-auto xl:px-[72px] w-full">
        <Title title={'V22 Acortador de enlaces'} />
        <Subtext text={'Plataforma SaaS de acortamiento de enlaces'} />

        {/* Cards */}
        <div className="w-full flex justify-center mt-5">
          <div className="w-full flex flex-col lg:flex-row flex-wrap gap-y-10 justify-center">
            <V22Card data={data} />
          </div>
        </div>

        {/* Image + Content */}
        <div className="w-full flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-5 lg:items-center">
          {/* Image */}
          <div className="w-full bg-cover bg-no-repeat overflow-hidden rounded-xl mt-5">
            <YoutubeVideo
              videoId="QtGIapWhUKg"
              title="Demo del proyecto V22"
              poster="hqdefault"
              client:load
            />
          </div>

          {/* Right column */}
          <div className="flex flex-col w-full gap-y-6 mt-5 lg:mt-0">
            {/* Results */}
            <div className=" w-full h-auto rounded-xl flex justify-start p-5 flex-col">
              <div className="flex flex-row gap-x-3 items-center">
                <BsGraphUpArrow className="min-w-8 min-h-8 text-blue-400" />
                <h3 className="text-2xl font-semibold text-center lg:text-left font-inter-tight text-[#374151] dark:text-[#B0B9BF]">
                  Resultados reales:
                </h3>
              </div>

              <ul className="mt-2">
                <li className="mt-3 flex flex-row gap-x-2 items-center">
                  <div className="min-w-2 min-h-2 rounded-full bg-[#374151] dark:bg-[#B0B9BF]" />
                  <span className="text-[#374151] dark:text-[#B0B9BF] leading-none font-inter-tight font-[400] text-lg">
                    Producto SaaS desplegado y accesible públicamente
                  </span>
                </li>
                <li className="mt-3 flex flex-row gap-x-2 items-center">
                  <div className="min-w-2 min-h-2 rounded-full bg-[#374151] dark:bg-[#B0B9BF]" />
                  <span className="text-[#374151] dark:text-[#B0B9BF] leading-none font-inter-tight font-[400] text-lg">
                    Redirecciones ejecutadas a nivel edge con latencia mínima
                  </span>
                </li>
                <li className="mt-3 flex flex-row gap-x-2 items-center">
                  <div className="min-w-2 min-h-2 rounded-full bg-[#374151] dark:bg-[#B0B9BF]" />
                  <span className="text-[#374151] dark:text-[#B0B9BF] leading-none font-inter-tight font-[400] text-lg">
                    Lighthouse Score 97 en frontend
                  </span>
                </li>
                <li className="mt-3 flex flex-row gap-x-2 items-center">
                  <div className="min-w-2 min-h-2 rounded-full bg-[#374151] dark:bg-[#B0B9BF]" />
                  <span className="text-[#374151] dark:text-[#B0B9BF] leading-none font-inter-tight font-[400] text-lg">
                    Sistema de métricas activo para enlaces y cuentas de usuario
                  </span>
                </li>
                <li className="mt-3 flex flex-row gap-x-2 items-center">
                  <div className="min-w-2 min-h-2 rounded-full bg-[#374151] dark:bg-[#B0B9BF]" />
                  <span className="text-[#374151] dark:text-[#B0B9BF] leading-none font-inter-tight font-[400] text-lg">
                    Tráfico protegido y mitigado con Cloudflare
                  </span>
                </li>
                <li className="mt-3 flex flex-row gap-x-2 items-center">
                  <div className="min-w-2 min-h-2 rounded-full bg-[#374151] dark:bg-[#B0B9BF]" />
                  <span className="text-[#374151] dark:text-[#B0B9BF] leading-none font-inter-tight font-[400] text-lg">
                    API documentada con OpenAPI (Swagger)
                  </span>
                </li>
                <li className="mt-3 flex flex-row gap-x-2 items-center">
                  <div className="min-w-2 min-h-2 rounded-full bg-[#374151] dark:bg-[#B0B9BF]" />
                  <span className="text-[#374151] dark:text-[#B0B9BF] leading-none font-inter-tight font-[400] text-lg">
                    Deuda técnica controlada propia de un producto en evolución
                  </span>
                </li>
              </ul>
            </div>

            {/* Access */}
            <div className=" w-full h-auto rounded-xl flex justify-start border-border-light border p-5 flex-col">
              <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4">
                <div className="flex flex-row gap-x-2 items-center">
                  <CiLogin className="min-w-8 min-h-8 text-green-400" />
                  <h3 className="text-2xl font-semibold text-center lg:text-left font-inter-tight text-[#374151] dark:text-[#B0B9BF]">
                    Acceso al proyecto:
                  </h3>
                </div>

                <a
                  href="https://www.v22.lat/"
                  target="_blank"
                  className="bg-[#030712] dark:bg-[#d1d5db] dark:text-[#030712] hover:dark:text-[#d1d5db] text-white py-4 w-full rounded-full text-[22px] font-[600] flex justify-center items-center transition-all duration-300 ease-linear hover:bg-[#262628] hover:tracking-wider group lg:w-1/3"
                >
                  Ir al sitio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Porfolio;
