import React from "react";
import { FaBeer } from "react-icons/fa";
import Style from "./Button.module.css";
function Button(props) {
  return (
    <button className={props.isoutline ? Style.outline : Style.primary}>
      {props.icon}
      {props.name}
    </button>
  );
}

export default Button;
