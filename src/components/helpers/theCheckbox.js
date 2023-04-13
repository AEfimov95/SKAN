import React, { useState } from "react";
import "../../assets/styles/checkbox.css";

function TheCheckbox({ label, onChange }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setChecked(event.target.checked);
    onChange(event.target.checked);
  };

  return (
    <div className="flex mb-[15px]">
      <label className="checkbox-label flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="checkbox-input"
        />
        <span className="checkbox-custom"></span>
        <span className={`${checked ? "" : "opacity-[0.4]"}`}>{label}</span>
      </label>
    </div>
  );
}

export default TheCheckbox;
