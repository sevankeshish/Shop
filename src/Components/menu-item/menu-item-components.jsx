import React from "react";
import "./menu-item-styles.scss";

export const MenuItem = ({ text, images, sizeLarge }) => {
  return (
    <div className={`${sizeLarge} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${images})` }}
      ></div>
      <div className="content">
        <h1 className="title">{text.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

// export const MenuItem = (props) => {
//   return (
//     <div className={`${props.sizeLarge} menu-item`} style={{backgroundImage: `url(${props.images})`}}>
//       <div className="content">
//         <h1 className="title">{props.text}</h1>
//         <span className="subtitle">SHOP NOW</span>
//       </div>
//     </div>
//   );
// };
