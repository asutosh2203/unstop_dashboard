import React, { useEffect, useRef } from 'react';
import './Sidebar.css';
import SidebarItem from './SidebarItem';
import {
  MdClose,
  MdOutlineDashboard,
  MdOutlineLibraryBooks,
} from 'react-icons/md';
import { PiNotePencilDuotone } from 'react-icons/pi';
import { sidebarAtom } from '../../recoil/atoms';
import { useRecoilState } from 'recoil';
const Sidebar = () => {
  // state to control the sidebar in smaller screens
  const [isSidebarActive, setIsSidebarActive] = useRecoilState(sidebarAtom);

  // used to close sidebar when clicked outside
  const sidebarRef = useRef(null);
  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener('mousedown', handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarActive(false);
    }
  }

  return (
    <div
      ref={sidebarRef}
      className={`sidebar ${!isSidebarActive && 'sidebar_hidden'}`}
    >
      <div className='sidebar_title'>
        <p>Menu</p>
        <MdClose
          className='sidebar_close'
          onClick={() => {
            setIsSidebarActive(false);
          }}
        />
      </div>

      {/* options in sidebar */}
      <div className='sidebar_items'>
        <SidebarItem Icon={MdOutlineDashboard} title={'dashboard'} />
        <SidebarItem
          Icon={PiNotePencilDuotone}
          title={'assessment'}
          isSelected
        />
        <SidebarItem Icon={MdOutlineLibraryBooks} title={'My Library'} />
      </div>

      {/* footer of sidebar */}
      <div className='mt-2'>
        <SidebarItem
          Icon={MdOutlineLibraryBooks}
          title={'Round Status'}
          isAdminRequired
        />
      </div>
    </div>
  );
};

export default Sidebar;
