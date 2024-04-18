import React from "react";
import "./button.css";

const Button = ({ icon, name, bgColor = 'var(--primary)', color = '#ffffff' }) => {
  return (
    <button className="button">
      <a 
        href="#" 
        className="mainBtn"
        style={{ color: color, background: bgColor }}
      >
        {icon} {name}
      </a>
    </button>
  );
};

export default Button;
