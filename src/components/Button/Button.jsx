import React from "react";

import scss from "./Button.module.scss";

function Button({ children, onClick, className }) {
  return (
    <button onClick={onClick} className={`${scss[className]}`}>
      {children}
    </button>
  );
}

export default Button;
