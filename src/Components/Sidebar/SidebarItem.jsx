import React from 'react';
import './SidebarItem.css';

const SidebarItem = ({
  Icon,
  title,
  isSelected = false,
  isAdminRequired = false,
}) => {
  return (
    <div className={`sidebarItem ${isSelected ? 'selected' : ''}`}>
      <div className={`sidebarItem_main `}>
        {/* icon */}
        <Icon className='sidebarItem_icon' />
        {/* title */}
        <p className='sidebarItem_title'>{title}</p>
      </div>
      {/* {isAdminRequired && <p className='sidebarItem_admin'>Admin</p>} */}
    </div>
  );
};

export default SidebarItem;
