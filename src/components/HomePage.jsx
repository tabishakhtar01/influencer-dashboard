import React from 'react';
import Intro from '../assets/videos/intro.mp4';
import {ReactComponent as Blob} from '../assets/svgs/blob.svg'

const HomePage = () => {
  return (
    <div className="relative flex flex-col h-screen rounded-xl" style={{backgroundColor: "#EEEEEE"}}>
        <Blob className='absolute h-full z-0' />
      {/* Main Content */}
      <div className="z-9 flex justify-between h-full">
        {/* Brand Name */}
        <div className='z-10 w-1/2 p-8 flex flex-col justify-center'>
        <h1 className="text-6xl font-bold text-black italic">BigBang.Social</h1>
        <h1 className='font-semibold text-sm mt-3 ml-1'>A collective Artists Network Initiative.</h1>
        <div className='text-5xl font-bold text-black'>
        <h1 className='mt-7 mb-5'>Powering</h1>
        <h1>
        "Human Influence" at Scale
        </h1>
        </div>
        </div>
        
        {/* Video Content */}
        <div className='w-1/2  flex items-start justify-end z-9'>
          <video
            autoPlay
            loop
            muted
            controls={false}
            style={{ display: 'block', width: '80%', height: 'auto' }}
            className='rounded-t-xl '
          >
            <source src={Intro} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
