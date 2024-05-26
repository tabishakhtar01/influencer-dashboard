import React, { useState } from 'react';
import {ReactComponent as SortIcon} from '../../../assets/svgs/Sort.svg'
import {ReactComponent as VerifiedCheck} from '../../../assets/svgs/Verified_Check.svg'
import {ReactComponent as AddSquare} from '../../../assets/svgs/Add_Square.svg'

const RelevanceBar = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleSwitch = () => {
    setIsToggled(!isToggled);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center bg-white justify-between px-8 py-4 border border-gray-400 border-t-0">
      <div className="flex items-center">
        {/* Relevance Filter */}
        <button className="flex items-center justify-between bg-white border text-black py-2 px-4 mr-16 rounded-md hover:bg-gray-300 transition duration-300 z-10">
          <span>
            Best Relevance
            </span>
        <SortIcon className='ml-3'/>
        </button>
        <div className="ml-4 flex items-center">
          {/* Verified Check Toggle */}
        <div className='flex justify-between items-center space-x-3'>
        <VerifiedCheck />
        <span className="ml-2 text-black">App Creators</span>
        </div>
          <label className="relative mx-4 inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={isToggled}
              onChange={toggleSwitch}
            />
            <div
              className={`block w-11 h-5 rounded-full transition duration-300 ${isToggled ? 'bg-yellow-500' : 'bg-gray-300'}`}
            ></div>
            <div
              className={`dot absolute left-1 top-1 bg-white w-3 h-3 rounded-full transition transform duration-300 ${isToggled ? 'translate-x-6' : 'translate-x-0'}`}
            ></div>
          </label>
          
        </div>
      </div>
      {/* Add Creator Button */}
      <div className="relative">
        <button 
          onClick={toggleDropdown} 
          className="flex items-center text-white py-2 px-4 bg-black rounded-md hover:bg-gray-800 transition duration-300"
        >
          <span className="flex mr-2 mb-2 h-4">
            <AddSquare className=''/>
          </span>
          Add Creators
          <svg
            className={`ml-2 w-4 h-4 transition-transform transform ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {/* Add Creator Dropdown */}
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-10">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Creator Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter creator name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Creator Handle
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter creator handle"
                />
              </div>
              <button
                type="submit"
                className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Creator
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RelevanceBar;
