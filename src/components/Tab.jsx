import React from "react";

const Tab = (props) => {
  return (
    <li
      onMouseOver={props.mouseOver}
      onMouseOut={props.mouseOut}
      className={props.target === props.location ? "selected tab" : "tab"}
      onClick={() => {}}
    >
      {props.children}
    </li>
  );
};

export default Tab;
