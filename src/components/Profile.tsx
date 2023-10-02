import React, { useState } from "react";
import FormBuilder from "./FormBuilder";

const Profile: React.FC = () => {
  const [toggleValues, setToggleValues] = useState({
    education: false,
    experience: false,
    resume: false,
  });

  const handleToggle = (checkboxName: keyof typeof toggleValues) => {
    setToggleValues((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  return (
    <div className="flex flex-col w-fit rounded-3xl shadow-xl ml-10 mt-4">
      <div className="py-6 px-7 text-xl font-semibold bg-cyan-100 rounded-tl-2xl rounded-tr-2xl">
        Profile
      </div>

      <div className="flex flex-col gap-4 justify-center items-start pb-10 pt-6 px-8">
        <div className="form-control w-full">
          <label className="label -ml-1 flex gap-32 justify-between">
            <div className="flex gap-1 justify-center items-center">
              <span className="label-text text-lg text-gray-600 font-semibold">
                Education
              </span>
            </div>
            <div className="flex gap-10">
              <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success  checkbox-sm"
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    Internal Use
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer flex gap-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm"
                    checked={toggleValues.education}
                    onChange={() => handleToggle("education")}
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    {toggleValues.education ? "Show" : "Hide"}
                  </span>
                </label>
              </div>
            </div>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1 gap-32 flex justify-between">
            <div className="flex gap-1 justify-center items-center">
              <span className="label-text text-lg text-gray-600 font-semibold">
                Experience
              </span>
            </div>
            <div className="flex gap-10">
              <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success  checkbox-sm"
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    Internal Use
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer flex gap-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm"
                    checked={toggleValues.experience}
                    onChange={() => handleToggle("experience")}
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    {toggleValues.experience ? "Show" : "Hide"}
                  </span>
                </label>
              </div>
            </div>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1 gap-32 flex justify-between">
            <div className="flex gap-1 justify-center items-center">
              <span className="label-text text-lg text-gray-600 font-semibold">
                Resume
              </span>
            </div>
            <div className="flex gap-10">
              <div className="form-control">
                <label className="label cursor-pointer flex gap-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-success  checkbox-sm"
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    Internal Use
                  </span>
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer flex gap-1">
                  <input
                    type="checkbox"
                    className="toggle toggle-sm"
                    checked={toggleValues.resume}
                    onChange={() => handleToggle("resume")}
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    {toggleValues.resume ? "Show" : "Hide"}
                  </span>
                </label>
              </div>
            </div>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <FormBuilder />
      </div>
    </div>
  );
};

export default Profile;
