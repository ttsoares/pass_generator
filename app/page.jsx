// @ts-nocheck
"use client";

import SecLevel from "@/components/secLevel";
import CheckBox from "@/components/checkBox";

import passGenerator from "@/utils/PassGen";

import React, { useState } from "react";
import Image from "next/image";

const zxcvbn = require("zxcvbn");

import Slider from "react-input-slider";

//---------------------------------
export default function Home() {
  const [genPass, setGenPass] = useState("P4$5W0rD!");
  const [passStrengh, setPassStrengh] = useState(0);
  const [chars, setChars] = useState({ x: 8 });
  const [features, setFeatures] = useState([
    { type: "minuscules", actv: false },
    { type: "maiuscules", actv: false },
    { type: "numbers", actv: false },
    { type: "symbols", actv: false },
  ]);

  function handleChange(event) {
    const newState = features.map((elm) => {
      if (elm.type === event.target.name) {
        return { type: event.target.name, actv: event.target.checked };
      } else return elm;
    });
    setFeatures(newState);
  }

  function generate(event) {
    event.preventDefault();

    const number_of_chars = Number(chars.x);

    // Array with only the indexes of features which actv is true
    const array_features_nums = features
      .map((elm, index) => {
        if (elm.actv) {
          return index;
        } else return null;
      })
      .filter((elm) => elm != null);

    if (array_features_nums.length === 0) {
      console.log("Error");
      return;
    }

    const password = passGenerator(array_features_nums, number_of_chars);
    setGenPass(password);
    const strengh = zxcvbn(password);

    setPassStrengh(strengh.score);
  }

  function copyPass() {
    navigator.clipboard.writeText(`${genPass}`);
  }

  return (
    <main className="flex flex-col items-center justify-center w-full h-full bg-p_vd_gray">
      <header className="w-[540px]">
        <h1 className="py-4 text-2xl font-bold text-center text-p_gray">
          Password Generator
        </h1>
        <div className="flex flex-col items-center justify-center w-full mb-6 h-fit bg-p_d_gray">
          <div className="flex items-center justify-between w-full p-6 ">
            <h2
              className={`text-3xl font-bold ${
                genPass === "P4$5W0rD!"
                  ? "text-p_gray opacity-40"
                  : "text-p_white"
              } `}
            >
              {genPass}
            </h2>

            <div onClick={copyPass}>
              <svg
                className="h-8 w-6 fill-current text-p_neon hover:cursor-pointer hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.341 3.091 17.909.659A2.25 2.25 0 0 0 16.319 0H8.25A2.25 2.25 0 0 0 6 2.25V4.5H2.25A2.25 2.25 0 0 0 0 6.75v15A2.25 2.25 0 0 0 2.25 24h10.5A2.25 2.25 0 0 0 15 21.75V19.5h3.75A2.25 2.25 0 0 0 21 17.25V4.682a2.25 2.25 0 0 0-.659-1.591ZM12.469 21.75H2.53a.281.281 0 0 1-.281-.281V7.03a.281.281 0 0 1 .281-.281H6v10.5a2.25 2.25 0 0 0 2.25 2.25h4.5v1.969a.282.282 0 0 1-.281.281Zm6-4.5H8.53a.281.281 0 0 1-.281-.281V2.53a.281.281 0 0 1 .281-.281H13.5v4.125c0 .621.504 1.125 1.125 1.125h4.125v9.469a.282.282 0 0 1-.281.281Zm.281-12h-3v-3h.451c.075 0 .147.03.2.082L18.667 4.6a.283.283 0 0 1 .082.199v.451Z" />
              </svg>
            </div>
          </div>
        </div>
      </header>

      <section className="w-[540px] h-[528px] bg-p_d_gray ">
        <div className="w-full px-7">
          <div className="flex justify-between w-full p-6">
            <h2 className="text-p_white">Character Lenght</h2>
            <h2 className="text-xl text-p_neon">{chars?.x} </h2>
          </div>

          <div className="w-full px-4 py-6 text-center">
            <Slider
              axis="x"
              xstep={1}
              xmin={3}
              xmax={20}
              x={chars.x}
              onChange={({ x }) => setChars({ x: parseFloat(x) })}
              styles={{
                track: {
                  backgroundColor: "#18171F",
                  width: 450,
                },
                active: {
                  backgroundColor: "#A4FFAF",
                },
                thumb: {
                  width: 30,
                  height: 30,
                  backgroundColor: "#ffffff",
                  border: "solid 2px #A4FFAF",
                },
              }}
            />
          </div>
          <form className="space-y-3" onSubmit={generate}>
            <CheckBox
              name="maiuscules"
              title="Include Uppercase Letter"
              handleChange={handleChange}
            />

            <CheckBox
              name="minuscules"
              title="Include Lowercase Letters"
              handleChange={handleChange}
            />

            <CheckBox
              name="numbers"
              title="Include Numbers"
              handleChange={handleChange}
            />

            <CheckBox
              name="symbols"
              title="Include Symbols"
              handleChange={handleChange}
            />

            <div className="flex items-center justify-between w-full bg-p_vd_gray">
              <h2 className="p-4 text-p_gray">STRENGTH</h2>

              <SecLevel strengh={passStrengh} />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center w-full p-6 space-x-5 font-bold text-center border-2 hover:fill-p_neon hover:text-p_neon border-p_neon bg-p_neon hover:bg-p_d_gray text-p_vd_gray"
            >
              <h2>GENERATE</h2>

              <svg
                className="w-4 h-4"
                width="12"
                height="12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" />
              </svg>
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
