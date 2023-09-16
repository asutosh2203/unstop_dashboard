import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { FaFilter } from 'react-icons/fa';
import {
  MdOutlineBarChart,
  MdOutlineViewAgenda,
  MdLink,
  MdOutlinePeopleAlt,
} from 'react-icons/md';
import { TbWorldShare } from 'react-icons/tb';
import './Banner.css';

const Banner = () => {
  const [isStatsActive, setIsStatsActive] = useState(true);

  return (
    <div className='banner'>
      {/* stats section */}

      <div className={`banner_stats ${isStatsActive && 'isVisible'}`}>
        <div className='banner_stats_top flex border-b border-b-borderColor'>
          <div className='flex-1 border-r border-r-borderColor py-2 px-2'>
            <p className='pb-2 text-sm font-medium'>Total Assessment</p>
            <div className='flex items-center gap-3'>
              <div className='h-10 w-10 flex items-center justify-center bg-accentPurpleLight rounded-lg'>
                <MdOutlineViewAgenda className='text-lg text-accentPurple' />
              </div>
              <p className='font-semibold text-primaryColor'>34</p>
            </div>
          </div>
          <div className='flex-1 py-2 px-2'>
            <p className='pb-2 text-sm font-medium'>Total Purpose</p>
            <div className='flex items-center gap-3'>
              <div className='h-10 w-10 flex items-center justify-center bg-secondaryLight rounded-lg'>
                <MdLink className='text-lg text-secondaryColor' />
              </div>
              <p className='font-semibold text-primaryColor'>34</p>
            </div>
          </div>
        </div>
        <div className='banner_stats_middle py-2 px-2 border-b border-b-borderColor'></div>
        <div className='banner_stats_bottom py-2 px-2'></div>
      </div>

      {/* title */}
      <div className='banner_title'>
        <p>My Assessment</p>
        <div className='banner_title_icons'>
          <div>
            <FiSearch />
          </div>
          <div>
            <FaFilter />
          </div>
          <div
            onClick={() => setIsStatsActive(!isStatsActive)}
            className={`${isStatsActive && 'selected'}`}
          >
            <MdOutlineBarChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
