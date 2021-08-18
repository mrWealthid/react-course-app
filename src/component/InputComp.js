import React from "react";

const InputComp = (props) => {
  let wrapperClass = "mb-3";
  let inputClass = "form-control";
  if (props.error && props.error.length > 0) {
    wrapperClass += " has-error";
    inputClass += " error-border";
  }
  return (
    <div className={wrapperClass}>
      <label htmlFor="Title" className="form-label">
        {props.label}
      </label>
      <input
        type={props.type}
        name={props.name}
        className={inputClass}
        value={props.value}
        onChange={props.onChange}
      />{" "}
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};
export default InputComp;
