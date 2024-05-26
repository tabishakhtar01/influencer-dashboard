import React from 'react';

const InfluencerSearchBar = () => {
  return (
<>
    <div className="flex justify-between items-center p-4 bg-white shadow-md rounded-xl transition duration-300 ease-in-out hover:bg-gray-100">
      <div className="flex gap-8 divide-x divide-gray-300">
        {/* Audience Loaction SearchBar */}
        <div className="flex flex-col items-start px-4">
          <span className="text-gray-500">Audience Location</span>
          <span className="text-black font-semibold">All</span>
        </div>
        {/* Influencer Size */}
        <div className="flex flex-col items-start px-4">
          <span className="text-gray-500">Influencer Size</span>
          <span className="text-black font-semibold">Choose size</span>
        </div>
        {/* Audience Age */}
        <div className="flex flex-col items-start px-4">
          <span className="text-gray-500">Audience Age</span>
          <span className="text-black font-semibold">Any</span>
        </div>
        {/* Audience Gender */}
        <div className="flex flex-col items-start px-4">
          <span className="text-gray-500">Audience Gender</span>
          <span className="text-black font-semibold">Any</span>
        </div>
      </div>

    {/* Result Button */}
      <button className="bg-black text-white px-6 py-2 rounded-xl font-semibold">
        Show 4M results
      </button>
    </div>
</>

  );
}

export default InfluencerSearchBar;
