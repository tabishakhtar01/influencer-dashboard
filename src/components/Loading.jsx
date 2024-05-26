import React from 'react';
import Loader from '../assets/images/Loader.png'

const Loading = () => {
  return (
    // Brand Logo Loader
    <div className="flex items-center justify-center h-screen">
      <img src={Loader} alt="loader" className='animate-bounce'/>
    </div>
  );
};

export default Loading;
