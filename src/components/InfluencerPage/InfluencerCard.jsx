import React from 'react';
import {ReactComponent as YoutubeSmallIcon} from '../../assets/svgs/Youtube_small_icon.svg';
import {ReactComponent as InstagramSmallIcon} from '../../assets/svgs/Instagram_small_icon.svg';
import {ReactComponent as InstagramLogo} from '../../assets/svgs/Instagram.svg';

const InfluencerCard = ({influencerName, influencerHandle, totalFollowers, totalPost}) => {
  return (
    <div className="bg-white border border-gray-200 shadow-md text-black px-4 mb-4 rounded-lg flex hover:shadow-lg hover:scale-101 transition-all duration-300">   
      <input type="checkbox" className="flex h-full items-start mt-4 form-checkbox text-yellow-500" />
      {/* Creator/Instagram Logo */}
      <div>
        <div className="flex flex-col items-center justify-center pl-3 pr-4 w-56 border-r border-gray-300 h-full">
          <InstagramLogo className="rounded-full h-11/12 mt-7" />
          <div className='text-center mt-5'>
            <div className="text-lg font-semibold">{influencerName}</div>
            <div className="text-gray-600">{influencerHandle}</div>
          </div>
        </div>
      </div>
      {/* Post and Followers count */}
      <div className="ml-8 flex-1 pt-3">
        <div className="flex justify-start space-x-20 mb-11 items-center">
          <div className="">
            <div className="text-gray-600 mb-2">Total Followers</div>
            <div className="text-md font-semibold">{totalFollowers}</div>
          </div>
          <div className="">
            <div className="text-gray-600 mb-2">Total Post</div>
            <div className="text-md font-semibold">{totalPost}</div>
          </div>
        </div>
        <div className="flex justify-start items-end mb-3 space-x-8">
          <div className="flex flex-col text-black">
            <div className='flex space-x-1  items-center h-full'>
              <YoutubeSmallIcon className='mt-1 -ml-1'/>
              <span>
                @ youtube
              </span>
            </div>
            <div className='flex items-end justify-between w-60 h-16'>
              <div className="">
                <div className="text-gray-600">Followers</div>
                <div className="text-black font-semibold">645.M</div>
              </div>
              <div className="">
                <div className="text-gray-600">Avg. Likes</div>
                <div className="text-black font-semibold">320</div>
              </div>
              <div className="">
                <div className="text-gray-600">ER</div>
                <div className="text-black font-semibold">0.42%</div>
              </div>
            </div>
          </div>
          <div className='border border-gray-300 border-l py-11'></div>
          <div className="flex flex-col text-black">
            <div className='flex space-x-1 items-center h-full'>
              <InstagramSmallIcon className='mt-1 -ml-1'/>
              <span>
                @ instagram
              </span>
            </div>
            <div className='flex items-end justify-between w-60 h-16'>
              <div className="">
                <div className="text-gray-600">Followers</div>
                <div className="text-black font-semibold">645.M</div>
              </div>
              <div className="">
                <div className="text-gray-600">Avg. Likes</div>
                <div className="text-black font-semibold">320</div>
              </div>
              <div className="">
                <div className="text-gray-600">ER</div>
                <div className="text-black font-semibold">0.42%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reports and campaign Buttons */}
      <div className="flex items-end mb-3 ml-8">
        <button className="bg-white border text-black py-2 px-3 rounded-lg hover:bg-gray-100 transition duration-300">
          ₹
        </button>
        <button className="ml-4 bg-white border text-black py-2 px-3 rounded-lg hover:bg-gray-100 transition duration-300">
          View Report
        </button>
        <button className="ml-4 bg-black text-white py-2 px-3 rounded-lg hover:bg-gray-800 transition duration-300">
          Add to Campaign
        </button>
      </div>
    </div>
  );
};

export default InfluencerCard;
