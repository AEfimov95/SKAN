import React from "react";

function ChevronDownIcon({ open }) {
  return (
    <svg
      className={`absolute right-[10px] top-[18px] ${open ? "rotate-180" : ""}`}
      width="20"
      height="11"
      viewBox="0 0 20 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0.717529H19.4351L9.71753 10.4351L0 0.717529Z"
        fill="#D9D9D9"
      />
    </svg>
  );
}
export default ChevronDownIcon;
