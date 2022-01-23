import React from "react";
import "./form-input-styles.scss";

export const FormInput = ({ handleChange, label, ...otherprops }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherprops} />
      {label ? (
        <label
          className={`${otherprops.value.lenght ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
