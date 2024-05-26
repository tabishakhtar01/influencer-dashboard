import React from 'react';
import {ReactComponent as SearchIcon} from '../../assets/svgs/Search.svg'
import {ReactComponent as Coin} from '../../assets/svgs/Coin.svg'
import {ReactComponent as Notification} from '../../assets/svgs/Notification.svg'
import {ReactComponent as Broadcast} from '../../assets/svgs/Broadcast.svg'
import ProfileDropdown from './ProfileDropdown';

const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 pt-6 pb-2">

      {/* Search Bar */}
      <div className="flex-1 relative max-w-xs">
        <input
          type="text"
          placeholder="Search key word..."
          className="p-2 pl-10 border border-black rounded-full w-full transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
        />
        <SearchIcon
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">

          {/* Earned Coins */}
          <span className= "pointer border border-black rounded-full px-2 py-1 text-sm flex items-center space-x-1">
            <Coin className="w-5 h-5 animate-spin" />
            <span>25,635 coins</span>
          </span>

          {/* Notification section */}
          <div className="relative w-8 h-8">
            <Notification
              className="w-full h-full rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            />
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></div>
          </div>
        </div>

        {/* Broadcast Section */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center transition duration-300 ease-in-out transform hover:scale-105">
            <Broadcast className="w-8 h-8" />
          </div>
        </div>

        {/* User Profile Dropdown */}
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
