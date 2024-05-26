import React, { useState } from 'react';
import {ReactComponent as OptionIcon} from '../../assets/svgs/Option.svg'
import {ReactComponent as InstaFace} from '../../assets/svgs/InstaFace.svg'

const CampaignCreatorCard = ({creatorName, CreatorIcon, creatorHandle, paymentMod, approval, approvalTheme}) => {
    const [isOptionsVisible, setIsOptionsVisible] = useState(false);

    const handleOptionsClick = () => {
        setIsOptionsVisible(!isOptionsVisible);
    };

    return (
        <div className="relative flex items-center w-full p-4 mb-4 bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300">
            {/* Creator Info Section */}
            <div className='w-1/4 border rounded-xl p-3 mr-5'>
                <div className='flex items-center px-8'>
                    <CreatorIcon/>
                    <div>
                    <div className="font-semibold ml-2 truncate">{creatorName}</div>
                    <div className="text-gray-500 ml-2 truncate">{creatorHandle}</div>
                    </div>
                </div>
                <div className='flex justify-start px-8 mt-2'>
                    <InstaFace/>
                </div>
            </div>

            {/* Deliverables Section */}
            <div className="w-1/4">
                <div className="text-sm">
                    <div className="text-gray-500">Deliverables</div>
                    <div>Instagram reel <span className='text-gray-500'>x 1</span></div>
                    <div>Youtube Short</div>
                    <div className="text-black underline mt-6 inline-block cursor-pointer">
                        View bidding history
                    </div>
                </div>
            </div>

            {/* Stats and Payment Section */}
            <div className="flex flex-col w-1/2">
                <div className="flex justify-between text-center mb-2">
                    <div>
                        <div className="text-sm text-gray-500">Followers</div>
                        <div className="font-semibold">410K</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-500">Reach</div>
                        <div className="font-semibold">3M</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-500">Views</div>
                        <div className="font-semibold">3.4K</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-500">Engagement</div>
                        <div className="font-semibold">3.4K</div>
                    </div>
                    <div>
                        <div className="text-sm text-gray-500">Last bid</div>
                        <div className="font-semibold">₹22.4K</div>
                    </div>
                    <div className="relative">
                        <button 
                            onClick={handleOptionsClick}
                            className="text-gray-500 hover:text-gray-700 transition-colors focus:outline-none"
                        >
                            <OptionIcon/>
                        </button>
                        {isOptionsVisible && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                                <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors">Update</button>
                                <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 transition-colors">Delete</button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-between text-center mt-10">
                    <div>
                        <div className="text-sm text-gray-500">Mod of payment <span className='text-black font-semibold'>{paymentMod}</span></div>
                    </div>
                    <span className="text-black text-xs font-semibold px-2 py-1 rounded-full" style={{backgroundColor: approvalTheme}}>
                        {approval}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CampaignCreatorCard;
