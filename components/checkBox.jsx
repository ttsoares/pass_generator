import React from "react";

/**
 * @typedef Props
 * @prop {string} name
 * @prop {string} title
 * @prop {()=>void} handleChange
 */

/**
 * @param {Props} props
 */
const CheckBox = ({ name, title, handleChange }) => {
  return (
    <div>
      <input
        value="false"
        name={name}
        type="checkbox"
        className="appearance-none relative peer w-5 h-5 border-white bg-p_d_gray border checked:border-none checked:bg-p_neon "
        onChange={handleChange}
      />
      <span className="ml-3 text-white">{title}</span>
      <svg
        className="absolute w-4 h-4 -mt-6 ml-[2px] hidden peer-checked:block pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
};

export default CheckBox;
