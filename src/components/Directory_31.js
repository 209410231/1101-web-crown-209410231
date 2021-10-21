import React, { useState } from 'react';
import './Directory_31.scss';
import MenuItem_31 from './MenuItem_31';
import items from './menu-items-data';

const Directory_31 = () => {
  const [menuItems, setMenuItems] = useState(items);
  console.log('meniItems', menuItems);
  return (
    <div>
      <div className='directory-menu'>
        {menuItems.map((item) => {
          const { id, name, remote_url, size } = item;
          return (
            <MenuItem_31
              key={id}
              name={name}
              remote_url={remote_url}
              size={size}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Directory_31;
