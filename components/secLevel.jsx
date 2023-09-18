import React from "react";

const Sec_Lvl = ["", "TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

const colors = ["bg-p_red", "bg-p_orange", "bg-p_yellow", "bg-p_neon"];

const SecLevel = ({ strengh }) => {
  const color = colors[strengh - 1];

  return (
    <div className="flex items-center bg-p_vd_gray">
      <h2 className="p-4 text-white">{Sec_Lvl[strengh]}</h2>
      <div
        className={`w-3 h-8 m-4 ${
          strengh >= 1 ? `${color}` : ""
        } border-white mx-2 border-2`}
      ></div>
      <div
        className={`w-3 h-8 m-4 ${
          strengh >= 2 ? `${color}` : ""
        } border-white mx-2 border-2`}
      ></div>
      <div
        className={`w-3 h-8 m-4 ${
          strengh >= 3 ? `${color}` : ""
        } border-white mx-2 border-2`}
      ></div>
      <div
        className={`w-3 h-8 m-4 ${
          strengh >= 4 ? `${color}` : ""
        } border-white mx-2 border-2`}
      ></div>
    </div>
  );
};

export default SecLevel;
