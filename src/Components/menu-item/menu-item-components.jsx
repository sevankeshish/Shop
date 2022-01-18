import React from "react";
import "./menu-item-styles.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ text, images, sizeLarge, history, linkUrl, match }) => {
  return (
    <div
      className={`${sizeLarge} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(MenuItem);

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
