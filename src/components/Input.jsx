import React from "react";

function Input({
  label,
  placeholder,
  readOnly,
  classInput,
  state,
  change,
  name,
  type,
}) {
  return (
    <div className="column inputColumn">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        readOnly={readOnly}
        className={classInput}
        value={state}
        onChange={change}
        name={name}
        type={type}
      />
    </div>
  );
}

export default Input;
