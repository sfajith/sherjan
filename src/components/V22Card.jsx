import { CiWarning } from 'react-icons/ci';
import { IoCloudDoneOutline } from 'react-icons/io5';
import { VscChip } from 'react-icons/vsc';
import { FiDatabase } from 'react-icons/fi';
import { IoIosCloudOutline } from 'react-icons/io';
import { SlScreenDesktop } from 'react-icons/sl';

function V22Card({ data }) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex flex-col lg:flex-row flex-wrap lg:gap-6 justify-center items-center lg:items-stretch">
        {data.map((item, index) => {
          const title = Object.keys(item).find(key => key !== 'icon');

          const list = item[title];

          return (
            <div
              key={index}
              className="lg:w-[26rem] lg:min-h-[12rem] w-[90%] rounded-[3%] flex justify-start  p-5 flex-col"
            >
              <div className="flex flex-row gap-x-3 items-center">
                {item.icon}
                <h3 className="text-2xl font-semibold text-center lg:text-left  font-inter-tight text-[#374151] dark:text-[#B0B9BF]">
                  {title}
                </h3>
              </div>

              <ul className="mt-2">
                {list.map((item, index) => (
                  <li
                    key={index}
                    className="mt-3 flex flex-row gap-x-2 items-center"
                  >
                    <div className="min-w-2 min-h-2 rounded-full "></div>
                    <span className="text-[#374151] dark:text-[#B0B9BF] leading-none font-inter-tight font-[400] text-lg">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default V22Card;
