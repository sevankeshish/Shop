import React from "react";
import "./collection-item-styles.scss";

export const CollectionItem = ({ id, itemsName, itemsPrice, itemsImage }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${itemsImage})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{itemsName}</span>
        <span className="price">{itemsPrice}</span>
      </div>
    </div>
  );
};
