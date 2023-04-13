import React, { useEffect, useState } from "react";
import InputMask from "react-input-mask";
import "../../index.css";
import { ChevronDownIcon } from "../icons";

const TheInput = ({ placeholder, max, onChange, type, error }) => {
  const [value, setValue] = useState("");
  const [textError, getTextError] = useState("");

  useEffect(() => {
    getTextError(error);
  }, [error]);

  function handleChange(event) {
    const newValue = event.target.value.replace(/\D/g, "");
    setValue(newValue);
    onChange(event.target.value);
  }
  function dateChange(event) {
    setValue(event.target.value);
    onChange(event.target.value);
  }
  return (
    <div className="relative z-10 w-full md:w-fit">
      {type === "text" && (
        <input
          type="text"
          className={`shadow-[0_0_20px_rgba(0,0,0,0.05)] h-[43px] border-[1px] text-sm ${
            error ? "border-[#FF5959]" : "border-[#C7C7C7]"
          } rounded-[5px] w-full md:w-[242px] px-[17px] py-[13px] placeholder:text-sm placeholder:text-center`}
          placeholder={placeholder}
          onChange={handleChange}
          maxLength={max}
          value={value}
        />
      )}
      {type === "date" && (
        <div className="relative mt-[20px] md:mt-0">
          <InputMask
            className={`shadow-[0_0_20px_rgba(0,0,0,0.05)] h-[43px] border-[1px] text-sm ${
              error ? "border-[#FF5959]" : "border-[#C7C7C7]"
            } rounded-[5px] w-full md:w-[176px] px-[17px] py-[13px] placeholder:text-sm placeholder:text-center`}
            mask="99.99.9999"
            placeholder={placeholder}
            value={value}
            onChange={dateChange}
          />
          <ChevronDownIcon />
        </div>
      )}
      {textError && type === "text" && (
        <p className="text-[#FF5959] w-full text-center text-sm mt-[6px] mb-[8px] absolute">
          {textError}
        </p>
      )}
    </div>
  );
};

export default TheInput;
