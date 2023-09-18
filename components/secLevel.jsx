import React from "react";

const Sec_Lvl = ["", "TOO WEAK!", "WEAK", "MEDIUM", "STRONG"];

const SecLevel = ({ strengh }) => {
  return (
    <div className="flex items-center border">
      <h2 className="p-4 text-white">{Sec_Lvl[strengh]}</h2>
      <div
        className={`w-3 h-8 m-4 ${
          strengh >= 1 ? "bg-yellow-400" : ""
        } border-white mx-2 border-2`}
      ></div>
      <div
        className={`w-3 h-8 m-4 ${
          strengh >= 2 ? "bg-yellow-400 border-2" : ""
        } border-white mx-2 border-2`}
      ></div>
      <div
        className={`w-3 h-8 m-4 ${
          strengh >= 3 ? "bg-yellow-400" : ""
        } border-white mx-2 border-2`}
      ></div>
      <div
        className={`w-3 h-8 m-4 ${
          strengh >= 4 ? "bg-yellow-400" : ""
        } border-white mx-2 border-2`}
      ></div>
    </div>
  );
};

export default SecLevel;
