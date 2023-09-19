import React from "react";

/**
 * @typedef Props
 * @prop {string} name
 * @prop {string} title
 * @prop {*} handleChange
 */

/**
 * @param {Props} props
 */
const CheckBox = ({ name, title, handleChange }) => {
  return (
    <div className="flex items-center my-4">
      <div className="relative">
        <input
          value="false"
          name={name}
          type="checkbox"
          className="appearance-none peer w-5 h-5 border-white hover:border-p_neon bg-p_d_gray border-2 checked:border-none checked:bg-p_neon "
          onChange={handleChange}
        />
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
      <span className="ml-3 md:ml-6 -mt-2 text-sm md:text-lg text-white">
        {title}
      </span>
    </div>
  );
};

export default CheckBox;
