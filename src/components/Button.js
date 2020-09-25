import React from "react";
import "./Button.css";

const Button = ({ children, onClick }) => {
  const isOperator = (val) => {
    return !isNaN(val) || val === "C" || val === "." || val === "=";
  };

  return (
    <div
      className={`button-wrapper ${isOperator(children) ? null : "operator"}`}
      onClick={() => onClick(children)}
    >
      {children}
    </div>
  );
};

export default Button;
