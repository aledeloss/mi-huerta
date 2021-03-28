import React from "react";
import "./GenericButton.css";

const GenericButton = ({ label, handleClick }) => {
  return (
    <button className="genBtn" onClick={handleClick}>
      {label}
    </button>
  );
};

export default GenericButton;
