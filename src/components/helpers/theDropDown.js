import React, { useState } from "react";
import "../../index.css";
import { ChevronDownIcon } from "../icons";

const TheDropDown = ({ onChange, elements }) => {
  const [isClicked, getClick] = useState(false);
  const [currentElement, getElement] = useState("Любая");

  const changeValue = (elem, value) => {
    getElement(elem);
    getClick(false);
    onChange(value);
  };

  return (
    <div className="relative w-full md:w-fit">
      <div className="">
        <div
          className="shadow-[0_0_20px_rgba(0,0,0,0.05)] h-[43px] border-[1px] text-sm border-[#C7C7C7] rounded-[5px]  md:w-[242px] px-[17px] py-[13px] placeholder:text-sm placeholder:text-center"
          onClick={() => getClick(!isClicked)}
        >
          {currentElement}
          <ChevronDownIcon open={isClicked} />
        </div>
      </div>
      {isClicked && (
        <div className="absolute w-full bg-white py-[8px] top-[44px] shadow-md z-30 overflow-y-auto rounded-[8px]">
          {elements.map((elem, id) => (
            <div key={id}>
              <div
                className="transition duration-300 z-30 ease-out hover:bg-admin-gray"
                onClick={() => changeValue(elem.name, elem.value)}
              >
                <div className="p-[8px] z-50">{elem.name}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TheDropDown;
