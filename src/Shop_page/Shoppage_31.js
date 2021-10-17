import React, { useState } from 'react';
import './Shoppage_31.scss';
import CollectionItem_31 from './CollectionItem_31';
import items from './sneakers_data';

const Shoppage_31 = () => {
  const [menuItems, setCollectionItems] = useState(items);
  console.log('menuItems', menuItems);
  return (
    <div className="collection-overview">
      <div className="collection-preview">
        <h2 className="title">Sneakers</h2>
        <div className="preview">
          {menuItems.map((item) => {
            const { id, name, remoteUrl, price } = item;
            return (
              <CollectionItem_31
                key={id}
                name={name}
                remoteUrl={remoteUrl}
                price={price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Shoppage_31;
