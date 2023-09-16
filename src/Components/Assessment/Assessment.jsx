import './Assessment.css';
import { AiOutlineLink } from 'react-icons/ai';
import { GoBriefcase } from 'react-icons/go';
import { BsThreeDotsVertical, BsClock } from 'react-icons/bs';

const Assessment = ({
  title,
  jobType,
  date,
  duration = '00',
  questions = '00',
}) => {
  return (
    <div className='assessment'>
      <div className='assessment_top'>
        <div className='assessment_top_left'>
          <div className='assessment_icon'>
            <GoBriefcase />
          </div>
          <div>
            <div className='assessment_title'>{title}</div>
            <div className='assessment_type'>
              {jobType} | <span className='assessment_date'>{date}</span>
            </div>
          </div>
        </div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
      <div className='assessment_bottom'>
        <div className='assessment_bottom_left'>
          <div>
            <p className='text-[0.75rem] font-semibold'>{duration}</p>
            <p className='text-[0.625rem] font-medium'>duration</p>
          </div>
          <div>
            <p className='text-[0.75rem] font-semibold'>{questions}</p>
            <p className='text-[0.625rem] font-medium'>questions</p>
          </div>
        </div>
        <div className='assessment_bottom_right'>
          <button>
            <AiOutlineLink />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
