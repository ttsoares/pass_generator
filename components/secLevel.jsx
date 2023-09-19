import React from "react";

const Sec_Lvl = ["", "TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];
const colors = ["bg-p_red", "bg-p_orange", "bg-p_yellow", "bg-p_neon"];

/**
 * @typedef Props
 * @prop {number} strengh
 */

/**
 * @param {Props} props
 */
const SecLevel = ({ strengh }) => {
  const color = colors[strengh - 1];

  return (
    <div className="flex items-center bg-p_vd_gray">
      <h2 className="p-2 lg:p-4 text-white text-base md:text-2xl">
        {Sec_Lvl[strengh]}
      </h2>
      <div
        className={`w-3 md:w-3 h-8 m-2 border-2 ${
          strengh >= 1 ? `${color} border-0` : ""
        } border-white mx-1 border-2`}
      ></div>
      <div
        className={`w-3 md:w-3 h-8 m-2 border-2 ${
          strengh >= 2 ? `${color} border-0` : ""
        } border-white mx-1 border-2`}
      ></div>
      <div
        className={`w-3 md:w-3 h-8 m-2 border-2 ${
          strengh >= 3 ? `${color} border-0` : ""
        } border-white mx-1 border-2`}
      ></div>
      <div
        className={`w-3 md:w-3 h-8 m-1 border-2 ${
          strengh >= 4 ? `${color} border-0` : ""
        } border-white mx-2 border-2 md:mr-4`}
      ></div>
    </div>
  );
};

export default SecLevel;
