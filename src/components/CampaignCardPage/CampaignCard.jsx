import React from 'react'
import {ReactComponent as LockIcon } from '../../assets/svgs/LockIcon.svg' 
import {ReactComponent as ApplicationIcon} from '../../assets/svgs/Application_Icon.svg'
import {ReactComponent as ContentIcon} from '../../assets/svgs/Content_Icon.svg'
import {ReactComponent as GoLiveIcon} from '../../assets/svgs/Go_Live_Icon.svg'
import {ReactComponent as ApplicationsIcon} from '../../assets/svgs/Applications.svg'
import {ReactComponent as ShortlistedIcon} from '../../assets/svgs/Shortlisted.svg'
import {ReactComponent as BudgetIcon} from '../../assets/svgs/Budget.svg'
import {ReactComponent as ShorlistedSmallIcon} from '../../assets/svgs/Shortlisted_Small.svg'
import {ReactComponent as OverallBudgetIcon} from '../../assets/svgs/Overall_Budget.svg'
import {ReactComponent as ProjectionIcon} from '../../assets/svgs/Projection.svg'
import {ReactComponent as NicheIcon} from '../../assets/svgs/Niche.svg'
import {ReactComponent as LanguageIcon} from '../../assets/svgs/Language.svg'
import { ReactComponent as Hero} from '../../assets/svgs/Hero.svg'
import { Link } from 'react-router-dom'


const CampaignCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Campaign Hero Image */}
        <div className="relative">
          <div className='p-1.5'>
            <div className="rounded-lg overflow-hidden flex justify-center items-center">
              <Hero className="w-full h-full object-cover" />
            </div>
          </div>
          <Link to="/">
          <button className="absolute text-sm top-4 left-4 bg-white text-gray-800 px-2 border border-black py-0.5 font-semibold rounded-full shadow hover:bg-gray-100">
            &lt; Back
          </button>
          </Link>
        </div>
        <div className="px-3.5 pt-3">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-lg font-semibold">Summer Campaign</h2>
            <span className="border border-gray-200 text-black text-xs font-semibold px-2 py-1 rounded-xl" style={{backgroundColor: "#FFF9E6"}}>Live</span>
          </div>
          <div className="text-black text-sm mb-1 flex items-center">
            <span className="mr-2">
              <LockIcon/>
              </span> Closed campaign
          </div>
          <p className="text-black text-xs mb-4">
            Black mirror is a television series released by Netflix and it's 6th season is here, the main objective of this campaign is to target millennial audiences who are into watching movies and TV series...
          </p>
          <div className="border border-2 p-4 rounded-lg mb-4">
            <div className="mb-4">
              <div className="flex items-center text-black text-xs font-semibold mb-1">
                <ApplicationIcon/>
                <div className='ml-3'>
                 <span>
                 Applications deadline
                  </span>
                <div className="text-gray-500">Feb 27, 2024 11:59 PM</div>
                </div>
              </div>
            </div>
            <div className="mb-4">
            <div className="flex items-center text-black text-xs font-semibold mb-1">
                <ContentIcon/>
                <div className='ml-3'>
                 <span>
                 Content Submission deadline
                  </span>
                <div className="text-gray-500">Feb 27, 2024 11:59 PM</div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center text-black text-xs font-semibold mb-1">
                <GoLiveIcon/>
                <div className='ml-3'>
                 <span>
                 Go Live deadline
                  </span>
                <div className="text-gray-500">Feb 27, 2024 11:59 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-black text-xs mb-4">Accepting applications till<br/> Feb 27, 2024 11:59 PM</div>
          <button className="px-4 bg-black text-white py-1.5 rounded-lg hover:bg-gray-800 transition duration-300 mb-4">
            View Report
          </button>
          <div className="p-4 rounded-lg mb-4" style={{backgroundColor: "#FFF9E6"}}>
            <div className="mb-4">
              <div className="flex items-center text-black font-semibold">
                <ApplicationsIcon/>
                <div className='flex flex-col ml-3'>
                 <span className='text-yellow-800 text-xs'>
                 Total applications
                  </span>
                <div className="text-black font-semibold text-md -mt-1">1 creator</div>
                </div>
              </div>
            </div>
            <div className="mb-4">
            <div className="flex items-center text-black font-semibold">
                <ShortlistedIcon/>
                <div className='flex flex-col ml-3'>
                 <span className='text-yellow-800 text-xs'>
                 Shortlisted
                  </span>
                <div className="text-black font-semibold text-md -mt-1">0 creators</div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center text-black font-semibold">
                <BudgetIcon/>
                <div className='flex flex-col ml-3'>
                 <span className='text-yellow-800 text-xs'>
                 Budget Exhausted
                  </span>
                <div className="text-black font-semibold text-md -mt-1">₹0</div>
                </div>
              </div>
            </div>
          </div>

      <div className="grid grid-cols-2 gap-2 p-4 rounded-lg mb-4 border border-2">
            <div className="mb-4">
              <div className="flex items-center text-black font-semibold">
                <ShorlistedSmallIcon/>
                <div className='flex flex-col ml-3'>
                 <span className='text-gray-500 text-xs'>
                 Shorlisted
                  </span>
                <div className="text-black font-semibold text-md -mt-1">40</div>
                </div>
              </div>
            </div>
            <div className="mb-4">
            <div className="flex items-center text-black font-semibold">
                <OverallBudgetIcon/>
                <div className='flex flex-col ml-3'>
                 <span className='text-gray-500 text-xs'>
                 Overall budget
                  </span>
                <div className="text-black font-semibold text-md -mt-1">₹40k</div>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center text-black font-semibold">
                <ProjectionIcon/>
                <div className='flex flex-col ml-3'>
                 <span className='text-gray-500 text-xs'>
                 Overall projection
                  </span>
                <div className="text-black font-semibold text-md -mt-1">40k</div>
                </div>
              </div>
            </div>
          </div>

         
          <div className="mb-6">
            <div className="flex items-start text-black font-semibold mb-2">
              <NicheIcon/>
              <div className='ml-4'>
                <span>
                  Niche
                  </span>
                  <div className="flex flex-wrap gap-2 text-black mt-3">
                    <span className="border border-2 text-xs font-semibold px-2 py-1 rounded-xl">Fashion/beauty</span>
                    <span className="border border-2 text-xs font-semibold px-2 py-1 rounded-xl">Software products</span>
                    <span className="border border-2 text-xs font-semibold px-2 py-1 rounded-xl">Education</span>
                </div>
              </div>
            </div>
            
          </div>
          <div className='mb-5'>
            <div className="flex items-start text-black font-semibold mb-2">
              <LanguageIcon/>
              <div className='ml-4'>
              <span>
              Language
              </span>
              <div className="flex flex-wrap gap-2 text-black mt-3">
              <span className="border border-2 text-xs font-semibold px-2 py-1 rounded-xl">English</span>
              <span className="border border-2 text-xs font-semibold px-2 py-1 rounded-xl">Hindi</span>
              <span className="border border-2 text-xs font-semibold px-2 py-1 rounded-xl">Marathi</span>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default CampaignCard