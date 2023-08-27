import './Header.css';
import { MdSort } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';
import { sidebarAtom } from '../../recoil/atoms';

// variable for setting which type of assessment is selected (not implemented)
const selected = true;

const Header = () => {
  // state to control the sidebar in smaller screens
  const setIsSidebarActive = useSetRecoilState(sidebarAtom);

  return (
    <div className='header'>
      {/* sidebar icon and title */}
      <div className='header_top'>
        <div
          className='sidebar_button'
          onClick={() => setIsSidebarActive(true)}
        >
          <MdSort className='sidebar_button_icon' />
        </div>
        <p className='title'>Assessment</p>
      </div>

      {/* assessment types */}
      <div className='assessmentTypes'>
        <div
          className={`assessmentType_container ${
            selected ? 'border-accentColor' : 'border-slate-100'
          }`}
        >
          <p className={`${selected && 'text-accentColor'}`}>My Assessments</p>
        </div>
        <div className='assessmentType_container border-slate-100'>
          <p className=''>Unstop Assessments</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
