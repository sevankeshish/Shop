import React from "react";
import "./menu-item-styles.scss";

export const MenuItem = ({props , images, sizeLarge}) => {
  return (
    <div className={`${sizeLarge} menu-item`} style={{backgroundImage: `url(${images})`}}>
      <div className="content">
        <h1 className="title">{props}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};
