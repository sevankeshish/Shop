import React from "react";
import "./custom-button-styles.scss";

export const CustomButton = ({ children, ...otherprops }) => {
  return (
    <div className="custom-button" {...otherprops}>
      {children}
    </div>
  );
};
