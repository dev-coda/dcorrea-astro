import React, { useState } from "react";
import Short from "./tabs/Short";
import Shortest from "./tabs/Shortest";
import Long from "./tabs/Long";
import VeryLong from "./tabs/VeryLong";

const TwoCols = () => {
  const [tab, setTab] = useState(1);
  const contents = [<Shortest />, <Short />, <Long />, <VeryLong />];

  const handleClick = (e) => {
    const prev = document.querySelector(".tab-active");
    prev && prev.classList.remove("tab-active");
    e.target.classList.add("tab-active");
    setTab(e.target.value);
  };

  return (
    <>
      <h2 className="rowdies text-5xl text-left lg:text-left lg:text-5xl p-2 mt-4">
        Here's more about my life.
      </h2>
      <ul className="tabs tabs-boxed p-2 flex mt-4 align-middle text-center">
        <li
          value="0"
          className="tab cursor-pointer text-sm border-2 border-collapse flex-1 p-1"
          onClick={handleClick}
        >
          Shortest
        </li>
        <li
          className="tab cursor-pointer text-sm tab-active border-collapse border-2 flex-1 p-1"
          value="1"
          onClick={handleClick}
        >
          Short
        </li>
        <li
          className="tab cursor-pointer text-sm border-2 border-collapse flex-1 p-1"
          value="2"
          onClick={handleClick}
        >
          Long
        </li>
        <li
          className="tab cursor-pointer text-sm border-2 border-collapse flex-1 p-1"
          value="3"
          onClick={handleClick}
        >
          Longest
        </li>
      </ul>
      <div className="p-2 text-md w-full tabs-content">{contents[tab]}</div>
    </>
  );
};

export default TwoCols;
