import Title from '../components/Title';
import Subtext from './Subtext';
import { IoLogoJavascript } from 'react-icons/io';
import { ImHtmlFive2 } from 'react-icons/im';
import { FaCss3 } from 'react-icons/fa6';
import { SiAstro } from 'react-icons/si';
import {
  RiReactjsLine,
  RiTailwindCssFill,
  RiBootstrapLine,
} from 'react-icons/ri';
import { TbBrandGithubFilled, TbBrandNextjs } from 'react-icons/tb';
import { BiLogoPostgresql } from 'react-icons/bi';
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiGnubash,
  SiD3Dotjs,
} from 'react-icons/si';
import { FaWordpress, FaGitAlt } from 'react-icons/fa';
import V22Card from './V22Card';
import { FiDatabase } from 'react-icons/fi';
import { IoCloudDoneOutline } from 'react-icons/io5';
import { CgScreen } from 'react-icons/cg';

const data = [
  {
    Backend: [
      {
        id: 0,
        text: 'Node.js, Express, Nest.js',
      },
      {
        id: 1,
        text: 'MongoDB (transactions, replica set)',
      },
      {
        id: 2,
        text: 'Redis, JWT',
      },
      {
        id: 3,
        text: 'OpenAPI / Swagger (API documentation)',
      },
      {
        id: 4,
        text: 'Testing & Observability',
      },
    ],
    icon: <FiDatabase className="min-w-8 min-h-8 text-gray-400" />,
  },
  {
    Infra: [
      {
        id: 0,
        text: 'Docker, Fly.io',
      },
      {
        id: 1,
        text: 'Cloudflare Workers',
      },
      {
        id: 2,
        text: 'AWS S3',
      },
    ],
    icon: <IoCloudDoneOutline className="min-w-8 min-h-8 text-gray-400" />,
  },
  {
    Frontend: [
      {
        id: 0,
        text: 'React, React Native, Vite, Redux, Tailwind',
      },
      {
        id: 1,
        text: 'UX orientado a producto',
      },
    ],
    icon: <CgScreen className="min-w-8 min-h-8 text-gray-400" />,
  },
];

function Stack() {
  return (
    <section id="stack" className="font-inter-tight p-5 mt-24 lg:mt-24">
      <div className="2xl:w-[1440px] m-auto xl:px-[72px]">
        <Title title={'Arquitectura & Skills'} />
        <Subtext
          text={'Tecnologías y decisiones técnicas aplicadas en producción.'}
        />
        <V22Card data={data} />
      </div>
    </section>
  );
}

export default Stack;
