import React from "react";

const InputComponent = ({
  htmlFor = "myinput",
  label = "string",
  type = "text",
  id = "myinput",
  name = "myinput",
  placeholder = "enter your text",
}) => {
  return (
    <div className="w-full border border-red-500 shadow-inner rounded -2 relative bg-Sada">
      <label
        htmlFor={htmlFor}
        className="absolute bg-Sada -top-2 left-3 border-[1px] border-Secondary2 text-[10px] px-1 rounded"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="w-full px-3 py-2 border-b-2 border-transparent focus:outline-none focus:border-red-500 transition duration-300 pt-2 rounded"
      />
    </div>
  );
};

export default InputComponent;
