import React from "react";
import "./EqualButton.css";

const EqualButton = ({children, onClick}) => {
  return (
    <div className="equal-btn" onClick={onClick}>
      {children}
    </div>
  );
};
export default EqualButton;
