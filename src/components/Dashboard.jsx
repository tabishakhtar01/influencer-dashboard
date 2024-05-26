import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loading from './Loading';
import SideNav from './SideNav/SideNav';
import Header from './Header/Header';
import InfluencerDashboard from './InfluencerPage/InfluencerDashBoard';
import {ReactComponent as Background1} from '../assets/svgs/Background_1.svg';
import {ReactComponent as Background2} from '../assets/svgs/Background_2.svg';
import {ReactComponent as Background3} from '../assets/svgs/Background_3.svg';
import ErrorPage from './ErrorPage/ErrorPage';
import CampaignDashboard from './CampaignCardPage/CampaignDashboard';
import HomePage from './HomePage';

const Dashboard = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout to simulate loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <Router>
      <div>
        {/* Main siv background Images */}
        <Background1 className='h-2/5 left-0 top-0 fixed z-5'/>
        <Background2 className='h-2/5 right-0 bottom-0 fixed z-5'/>
        <Background3 className='h-2/5 right-0 top-10 fixed z-5'/>
        <div className="flex justify-between">
          {/* SideNav */}
          <div className='w-20'>
            <SideNav />
          </div>
          <div className="flex-1 z-10 pr-9">
            {/* Header Section */}
            <Header />
            {/* Route Section */}
            <main className="p-4">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<InfluencerDashboard />} />
                <Route path="/campaign" element={<CampaignDashboard />} />
                <Route path="*" element={<ErrorPage />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Dashboard;
