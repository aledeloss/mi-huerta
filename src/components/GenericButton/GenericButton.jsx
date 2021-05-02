import React from "react";
import "./GenericButton.scss";

const GenericButton = ({ label, handleClick }) => {
  return (
    <button className="genBtn" onClick={handleClick}>
      {label}
    </button>
  );
};

export default GenericButton;
