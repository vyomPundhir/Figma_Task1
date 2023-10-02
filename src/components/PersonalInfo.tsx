import React, { useState } from "react";
import FormBuilder from "./FormBuilder";

const PersonalInfo: React.FC = () => {
  const [toggleValue, setToggleValue] = useState(false);

  const handleToggle = () => {
    setToggleValue((prev) => !prev);
  };

  return (
    <div className="flex flex-col w-fit rounded-3xl shadow-xl ml-10 mt-4">
      <div className="py-6 px-7 text-xl font-semibold bg-cyan-100 rounded-tl-2xl rounded-tr-2xl">
        Personal Info
      </div>

      <div className="flex flex-col gap-4 justify-center items-start pb-10 pt-6 px-8">
        <div className="form-control w-full">
          <label className="label -ml-1">
            <span className="label-text text-lg text-gray-600 font-semibold">
              First Name
            </span>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1">
            <span className="label-text text-lg text-gray-600 font-semibold">
              Last Name
            </span>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1">
            <span className="label-text text-lg text-gray-600 font-semibold">
              Email
            </span>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1 flex gap-10">
            <div className="flex gap-1 justify-center items-center">
              <span className="label-text text-lg text-gray-600 font-semibold">
                Phone
              </span>
              <span className="label-text text-sm text-gray-600 font-normal">
                (without dial code)
              </span>
            </div>
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
                  checked={toggleValue}
                  onChange={handleToggle}
                />
                <span className="label-text text-sm text-gray-600 font-normal">
                  {toggleValue ? "Show" : "Hide"}
                </span>
              </label>
            </div>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1 flex justify-between">
            <div className="flex gap-1 justify-center items-center">
              <span className="label-text text-lg text-gray-600 font-semibold">
                Nationality
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
                    checked={toggleValue}
                    onChange={handleToggle}
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    {toggleValue ? "Show" : "Hide"}
                  </span>
                </label>
              </div>
            </div>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1 flex justify-between">
            <div className="flex gap-1 justify-center items-center">
              <span className="label-text text-lg text-gray-600 font-semibold">
                Current Residence
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
                    checked={toggleValue}
                    onChange={handleToggle}
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    {toggleValue ? "Show" : "Hide"}
                  </span>
                </label>
              </div>
            </div>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1 flex justify-between">
            <div className="flex gap-1 justify-center items-center">
              <span className="label-text text-lg text-gray-600 font-semibold">
                ID Number
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
                    checked={toggleValue}
                    onChange={handleToggle}
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    {toggleValue ? "Show" : "Hide"}
                  </span>
                </label>
              </div>
            </div>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1 flex justify-between">
            <div className="flex gap-1 justify-center items-center">
              <span className="label-text text-lg text-gray-600 font-semibold">
                Date of Birth
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
                    checked={toggleValue}
                    onChange={handleToggle}
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    {toggleValue ? "Show" : "Hide"}
                  </span>
                </label>
              </div>
            </div>
          </label>
        </div>

        <div className="w-full border border-gray-600"></div>

        <div className="form-control w-full">
          <label className="label -ml-1 flex justify-between">
            <div className="flex gap-1 justify-center items-center">
              <span className="label-text text-lg text-gray-600 font-semibold">
                Gender
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
                    checked={toggleValue}
                    onChange={handleToggle}
                  />
                  <span className="label-text text-sm text-gray-600 font-normal">
                    {toggleValue ? "Show" : "Hide"}
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

export default PersonalInfo;
