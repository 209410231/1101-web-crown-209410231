import React from 'react';
import './CollectionItem_31.scss';

const CollectionItem_31 = ({ name, remoteUrl, price }) => {
  return (
    <div className="collection-item">
      <img className="image" src={remoteUrl} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button className="custom-button">Add to Card</button>
    </div>
  );
};

export default CollectionItem_31;
