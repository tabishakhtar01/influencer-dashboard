import React from 'react';
import CampaignCard from './CampaignCard';
import CampaignCreatorList from './CampaignCreatorList';

const CampaignDashboard = () => {

  // styling to hide scroll bar
  const hideScrollbarStyle = {
    WebkitOverflowScrolling: 'touch',
    scrollbarWidth: 'none', 
    msOverflowStyle: 'none',
    overflowY: 'auto',
  };

  return (
    // campaign dashboard
   <div className="flex min-h-screen">
      <div className='w-[25%] h-screen rounded-lg border border-gray-400'
       style={{
        ...hideScrollbarStyle,
      }}
      >

      <CampaignCard/>
      </div>
      <div className='w-[75%] h-screen rounded-lg border border-gray-400 ml-2.5'
       style={{
        ...hideScrollbarStyle,
      }}
      >

      <CampaignCreatorList/>
      </div>
    </div>
  );
};

export default CampaignDashboard;
