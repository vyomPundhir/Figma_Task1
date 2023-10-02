import React from "react";
import Right from "../assets/right.svg";

const Header: React.FC = () => {
  return (
    <div className="text-lg shadow-2xl">
      <ul className="flex justify-around w-[1200px]">
        <li className="px-20 py-5 font-semibold">Program Details </li>
        <li>
          <img className="w-10 mt-3.5" src={Right} alt="right-arrow" />
        </li>
        <li className="px-20 py-5 bg-rose-200 font-semibold">
          Application Form{" "}
        </li>
        <li>
          <img className="w-10 mt-3.5" src={Right} alt="right-arrow" />
        </li>
        <li className="px-20 py-5 font-semibold">Workflow </li>
        <li>
          <img className="w-10 mt-3.5" src={Right} alt="right-arrow" />
        </li>
        <li className="px-20 py-5 font-semibold">Preview</li>
      </ul>
    </div>
  );
};

export default Header;
