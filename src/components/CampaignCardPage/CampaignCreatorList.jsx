import React, { useState } from 'react';
import { creatorActiveData, creatorApprovedData, creatorInvitedData, creatorPendingData } from '../../constants/campaignCreatorData';
import {ReactComponent as SearchIcon} from '../../assets/svgs/Search.svg'
import CampaignCreatorCard from './CampaignCreatorCard';
import ChatBox from '../ChatBox';

const CampaignCreatorList = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [activeCreatorTab, setActiveCreatorTab] = useState('Creators');
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [isSortVisible, setIsSortVisible] = useState(false);
    const [isOpen,setIsOpen] = useState(false);

    const tabs = [
        { name: 'All', count: creatorActiveData.length },
        { name: 'Invited', count: creatorInvitedData.length },
        { name: 'Pending cost approval', count: creatorPendingData.length },
        { name: 'Approved', count: creatorApprovedData.length }
    ];

    const handleCloseApplications = () => {
        alert('Close Applications clicked');
    };

    return (
        <div className="shadow-lg rounded-lg overflow-hidden px-6 py-4 bg-white z-9">
            {/* Toggle Button */}
            <div className="flex justify-start mt-2 mb-4">
                <div className="flex h-12 justify-between space-x-2 bg-yellow-100 p-1 rounded-full w-72 font-semibold border border-yellow-500">
                    <button
                        onClick={() => setActiveCreatorTab('Creators')}
                        className={`px-3 text-sm rounded-full ${activeCreatorTab === 'Creators' ? 'bg-yellow-500 text-white' : 'text-gray-700'} hover:bg-yellow-500 hover:text-white transition-colors`}
                    >
                        Creators
                    </button>
                    <button
                        onClick={() => setActiveCreatorTab('Medium and content')}
                        className={`px-3 text-sm rounded-full ${activeCreatorTab === 'Medium and content' ? 'bg-yellow-500 text-white' : 'text-gray-700'} hover:bg-yellow-500 hover:text-white transition-colors`}
                    >
                        Medium and content
                    </button>
                </div>
            </div>

            {/* Search and Filter/Sort Section */}
            <div className="relative flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Search creators"
                    className="flex-1 max-w-lg pr-4 pl-12 py-2 border border-gray-400 rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:scale-105 focus:scale-105"
                />
            
        <SearchIcon
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
                <div className="flex space-x-2 ml-4">
                    <button
                        onClick={() => setIsFiltersVisible(!isFiltersVisible)}
                        className="flex items-center font-semibold px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <svg
        className="w-4 h-4 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 7h18M6 12h12m-9 5h6"
        />
      </svg>
                        <span>

                        Filters
                        </span>
                    </button>
                    <button
                        onClick={() => {
                            setIsSortVisible(!isSortVisible)
                            setIsOpen(!isOpen)
                        }
                    }
                        className="flex items-center space-x-1 font-semibold px-4 py-2 border border-gray-400 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                        <span>

                        Sort
                        </span>
                        <svg
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
                    </button>

                </div>
            </div>
            
            {/* Filters and Sort Content */}
            {isFiltersVisible && <div className="mb-4 p-4 border rounded shadow-sm">Filter functionality to be added later...</div>}
            {isSortVisible && <div className="mb-4 p-4 border rounded shadow-sm">Sort functionality to be added later...</div>}
            
            {/* Tabs and Close Applications Button Section */}
            <div className="flex justify-between items-center pb-2">
                <div className="flex space-x-4">
                    {tabs.map(tab => (
                        <button
                            key={tab.name}
                            onClick={() => setActiveTab(tab.name)}
                            className={`px-3 py-1 text-sm ${activeTab === tab.name ? 'border-b-2 border-yellow-500 text-gray-700' : 'text-gray-700'} hover:border-b-2 hover:border-yellow-500 transition-colors`}
                        >
                            {tab.name} ({tab.count})
                        </button>
                    ))}
                </div>
                <button 
                    onClick={handleCloseApplications}
                    className="px-4 py-2 border rounded-lg hover:bg-gray-200 text-black font-semibold border-black transition-colors"
                >
                    Close Applications (14)
                </button>
            </div>

            {/* Chat box */}
            <ChatBox/>

            {/* Changing cards on Active Tabs */}
            {activeTab === "All" && creatorActiveData?.map((data)=>{
                return <CampaignCreatorCard
                key={data.creatorId}
                creatorName={data.creatorName}
                CreatorIcon={data.CreatorIcon}
                creatorHandle={data.creatorHandle}
                paymentMod={data.paymentMod}
                approval={data.approval}
                approvalTheme={data.approvalTheme}
            />
            })}
            {activeTab === "Invited" && creatorInvitedData?.map((data)=>{
                return <CampaignCreatorCard
                key={data.creatorId}
                creatorName={data.creatorName}
                CreatorIcon={data.CreatorIcon}
                creatorHandle={data.creatorHandle}
                paymentMod={data.paymentMod}
                approval={data.approval}
                approvalTheme={data.approvalTheme}
            />
            })}

            {activeTab === "Pending cost approval" && creatorPendingData?.map((data)=>{
                return <CampaignCreatorCard
                key={data.creatorId}
                creatorName={data.creatorName}
                CreatorIcon={data.CreatorIcon}
                creatorHandle={data.creatorHandle}
                paymentMod={data.paymentMod}
                approval={data.approval}
                approvalTheme={data.approvalTheme}
            />
            })}

            {activeTab === "Approved" && creatorApprovedData?.map((data)=>{
                return <CampaignCreatorCard
                key={data.creatorId}
                creatorName={data.creatorName}
                CreatorIcon={data.CreatorIcon}
                creatorHandle={data.creatorHandle}
                paymentMod={data.paymentMod}
                approval={data.approval}
                approvalTheme={data.approvalTheme}
            />
            })}
        </div>
    );
};

export default CampaignCreatorList;
