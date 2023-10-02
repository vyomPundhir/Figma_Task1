import React from "react";
import Home from "../assets/home.svg";
import Users from "../assets/users.svg";
import Calendar from "../assets/calendar.svg";
import Share from "../assets/share.svg";
import Left from "../assets/left.svg";
import Settings from "../assets/settings.svg";
import Profile from "../assets/profile.svg";

const Sidebar: React.FC = () => {
  return (
    <aside className="flex h-screen w-16 flex-col items-center overflow-y-auto border-r bg-white py-8 shadow-xl">
      <nav className="flex flex-1 flex-col items-center space-y-6">
        <a href="#">
          <img
            className="rounded-lg p-1.5  transition-colors duration-200 hover:bg-gray-200 focus:outline-none w-9"
            src={Home}
            alt="homeIcon"
          />
        </a>
        <a href="#">
          <img
            className="rounded-lg p-1  transition-colors duration-200 hover:bg-gray-200 focus:outline-none w-9"
            src={Users}
            alt="homeIcon"
          />
        </a>

        <a href="#">
          <img
            className="rounded-lg p-1.5  transition-colors duration-200 hover:bg-gray-200 focus:outline-none w-10"
            src={Calendar}
            alt="homeIcon"
          />
        </a>

        <a href="#">
          <img
            className="rounded-lg p-1.5  transition-colors duration-200 hover:bg-gray-200 focus:outline-none w-9"
            src={Share}
            alt="homeIcon"
          />
        </a>

        <a href="#">
          <img
            className="rounded-lg p-1  transition-colors duration-200 hover:bg-gray-200 focus:outline-none w-7"
            src={Left}
            alt="homeIcon"
          />
        </a>
      </nav>

      <div className="flex flex-col items-center space-y-6">
        <a href="#">
          <img
            className="rounded-lg p-1.5  transition-colors duration-200 hover:bg-gray-200 focus:outline-none w-9"
            src={Settings}
            alt="homeIcon"
          />
        </a>

        <a href="#">
          <img
            className="rounded-lg p-1  transition-colors duration-200 hover:bg-gray-200 focus:outline-none w-10"
            src={Profile}
            alt="homeIcon"
          />
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
