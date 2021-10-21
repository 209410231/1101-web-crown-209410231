import React, { useState, useEffect } from 'react';
import './Directory_31.scss';
import MenuItem_31 from './MenuItem_31';
import axios from 'axios';
// import items from './menu-items-data';

const Directory2_31 = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL =
        'https://heroku-crown31.herokuapp.com/api_31/category_31';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api_31/category_31', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);

  console.log('menuItems', menuItems);
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

export default Directory2_31;
