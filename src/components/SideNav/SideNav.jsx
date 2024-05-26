import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/svgs/Logo.svg';
import NavIcon1 from '../NavIcons/NavIcon1';
import NavIcon2 from '../NavIcons/NavIcon2';
import NavIcon3 from '../NavIcons/NavIcon3';
import NavIcon4 from '../NavIcons/NavIcon4';
import NavIcon5 from '../NavIcons/NavIcon5';
import NavIcon6 from '../NavIcons/NavIcon6';

const SideNav = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { path: '/', icon: NavIcon1, alt: 'Home' },
    { path: '/campaign', icon: NavIcon2, alt: 'Announcements' },
    { path: '/dashboard', icon: NavIcon3, alt: 'Dashboard' },
    { path: '/metrics', icon: NavIcon4, alt: 'Metrics' },
    { path: '/photos', icon: NavIcon5, alt: 'Photos' },
    { path: '/settings', icon: NavIcon6, alt: 'Settings' },
  ];

  return (
    <div className="h-screen text-black w-20 flex flex-col items-center py-4 fixed z-5">
      {/* Head Logo */}
      <div className="mb-14 mt-2 z-10">
        <Logo className="w-10 h-10 hover:animate-pulse" />
      </div>
      {/* Navlinks Icons */}
      <div className="flex flex-col items-center space-y-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="group z-10"
            onClick={() => setActiveIndex(index)}
          >
            <div className={`w-10 h-10 flex justify-center items-center transition-transform duration-300 transform hover:scale-110 ${activeIndex === index ? 'bg-black rounded-xl' : ''}`}>
              <item.icon strokeColor={activeIndex === index ? 'white' : 'black'} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
