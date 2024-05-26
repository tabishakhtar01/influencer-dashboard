import React, { useState } from 'react';
import {ReactComponent as FilterIcon} from '../../../assets/svgs/Filter.svg';
import {ReactComponent as MagnifierIcon} from '../../../assets/svgs/Magnifer.svg';

const CategorySearchBar = () => {
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isLocationDropdownOpen, setIsLocationDropdownOpen] = useState(false);

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownOpen(!isCategoryDropdownOpen);
  };

  const toggleLocationDropdown = () => {
    setIsLocationDropdownOpen(!isLocationDropdownOpen);
  };

  return (
    <div className="flex justify-between z-10">
      {/* Category Dropdown */}
      <div className="relative w-48 mt-4">
        <div
          className="flex items-center justify-between cursor-pointer bg-white shadow-md rounded-xl py-3 px-4 transition duration-300 ease-in-out hover:bg-gray-100"
          onClick={toggleCategoryDropdown}
        >
          <span className="px-4 text-black font-semibold">Any category</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isCategoryDropdownOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        {isCategoryDropdownOpen && (
          <div className="absolute mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-10">
            <ul className="py-1">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 1</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 2</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Category 3</li>
            </ul>
          </div>
        )}
      </div>

      {/* Location Dropdown and Search */}
      <div className="mt-4 w-4/6">
        {/* Location Dropdown */}
        <div className="relative flex items-center w-full bg-white rounded-xl shadow-md transition-all duration-300 hover:border-gray-500">
          {/* Dropdown */}
          <div className="relative">
            <div
              className="flex items-center justify-between cursor-pointer bg-white rounded-xl py-3 px-4 transition duration-300 ease-in-out hover:bg-gray-100 focus:outline-none"
              onClick={toggleLocationDropdown}
            >
              <span className="text-black font-semibold">Anywhere</span>
              <svg
                className={`w-4 h-4 ml-4 transition-transform duration-300 ${
                  isLocationDropdownOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {isLocationDropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                <ul className="py-1">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Anywhere</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Location 1</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Location 2</li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Location 3</li>
                </ul>
              </div>
            )}
          </div>
          {/* Search Input */}
          <div className="h-8 border-l border-gray-300 mx-2"></div>
          <div className="flex items-center w-full pl-4">
            <input
              type="text"
              placeholder="Type Name, Categories, Topics, bio keywords..."
              className="w-full px-6 py-2 text-gray-700 bg-white border-none rounded-xl focus:outline-none focus:ring-0"
            />
            <MagnifierIcon
              className="absolute left-26 -ml-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>
        </div>
      </div>

      {/* Filter Button */}
      <button className="mt-4 flex items-center px-4 py-3 bg-white rounded-xl shadow-md transition duration-300 ease-in-out hover:bg-gray-100">
        <FilterIcon className="h-4 mr-2" />
        <span className="text-black font-semibold">More filters</span>
      </button>
    </div>
  );
};

export default CategorySearchBar;
