import React from 'react';
import { influencerCardData } from '../../constants/influencerCardData';
import InfluencerSearchBar from './InfluencerHeader/InfluencerSearchBar';
import CategorySearchBar from './InfluencerHeader/CategorySearchBar';
import RelevanceBar from './InfluencerHeader/RelevanceBar';
import InfluencerCard from './InfluencerCard';
import {ReactComponent as Avatar1} from '../../assets/svgs/Avatar1.svg';
import {ReactComponent as Avatar2} from '../../assets/svgs/Avatar2.svg';
import {ReactComponent as Avatar3} from '../../assets/svgs/Avatar3.svg';
import {ReactComponent as Avatar4} from '../../assets/svgs/Avatar4.svg';
import {ReactComponent as Avatar5} from '../../assets/svgs/Avatar5.svg';
import {ReactComponent as Avatar6} from '../../assets/svgs/Avatar6.svg';
import {ReactComponent as Avatar7} from '../../assets/svgs/Avatar7.svg';
import BackgroundImage from '../../assets/svgs/Yellow_Background.svg';

const InfluencerDashBoard = () => {

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="addBackground rounded-t-xl border border-gray-400 border-b-0 absolute top-0 left-0 w-full h-64"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#FFC700'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative flex flex-col justify-center h-64 w-full rounded-t-xl px-36 py-10 border border-b-0 border-gray-400">
        <Avatar1 className="absolute top-10 left-12" />
        <Avatar2 className="absolute top-32 left-20" />
        <Avatar3 className="absolute bottom-20 left-6" />
        <Avatar4 className="absolute bottom-10 left-16" />
        <Avatar5 className="absolute top-16 right-6" />
        <Avatar6 className="absolute bottom-12 right-10" />
        <Avatar7 className="absolute bottom-5 right-24" />
        <InfluencerSearchBar />
        <CategorySearchBar />
      </div>
      
      <div className='sticky top-0 z-8'>
        <RelevanceBar />
      </div>
      
      <div className="z-7 px-8 bg-white pt-4 border border-gray-400 border-t-0 rounded-b-xl">
        <div className='pb-4 font-semibold text-sm'>Showing 234 Results</div>
        {influencerCardData?.map((data)=>{
          return <InfluencerCard
                    key={data.influencerId}
                    influencerName={data?.influencerName}
                    influencerHandle={data?.influencerHandle}
                    totalFollowers={data?.totalFollowers}
                    totalPost={data?.totalPost}
                    />
        })}
      </div>
    </div>
  );
};

export default InfluencerDashBoard;
