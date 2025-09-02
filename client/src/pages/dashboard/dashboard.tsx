import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserOverview from '../../components/cards/UserOverview'


const user = {
  name: 'Jane Doe',
  roles: ['creator', 'backer'], 
};

const Dashboard = () => {
  
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user.name}!</h1>
          <p className="mt-2 text-gray-600">Here's a quick overview of your activity.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex bg-white rounded-t-lg shadow-md border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 font-semibold text-lg transition-colors duration-200 ${
              activeTab === 'overview'
                ? 'border-b-2 border-indigo-600 text-indigo-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Overview
          </button>
          {user.roles.includes('creator') && (
            <button
              onClick={() => setActiveTab('creator')}
              className={`px-6 py-3 font-semibold text-lg transition-colors duration-200 ${
                activeTab === 'creator'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              My Campaigns
            </button>
          )}
          {user.roles.includes('backer') && (
            <button
              onClick={() => setActiveTab('backer')}
              className={`px-6 py-3 font-semibold text-lg transition-colors duration-200 ${
                activeTab === 'backer'
                  ? 'border-b-2 border-indigo-600 text-indigo-600'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              My Contributions
            </button>
          )}
        </div>

       
        <div className="bg-white rounded-b-lg shadow-lg p-6 min-h-[500px]">
          {/* Overview Content */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Dashboard Overview</h2>
              <p className="text-gray-600">This section provides key statistics and recent activity across your creator and backer roles.</p>
             {/* <UserOverview userName={user.name} notifications={[]}/> */}
            </div>
          )}

          {/* Creator Content */}
          {activeTab === 'creator' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">My Campaigns</h2>
              <p className="text-gray-600">Here you can manage your projects, view metrics, and see recent pledges.</p>
             
             <div>
             
             <div className='max-w-[900px] p-5 bg-blue-50 border-none rounded-[10px] shadow-md ml-[10%] mr-[10%] mt-6'>
    <div className='flex justify-between items-center mb-4'>
        <p className='text-lg font-semibold text-gray-800'>Active Campaigns</p>
        <p className='text-3xl font-bold text-indigo-600'>3</p>
    </div>

    <div className='grid grid-cols-2 gap-4 mb-4 text-center'>
        <div>
            <p className='text-sm text-gray-600'>Funds Raised</p>
            <p className='text-lg font-bold text-gray-900'>$5,250</p>
        </div>
        <div>
            <p className='text-sm text-gray-600'>Total Backers</p>
            <p className='text-lg font-bold text-gray-900'>45</p>
        </div>
    </div>

    {/* The new "Days Remaining" info */}
    <div className='flex justify-center my-4'>
        <div className='text-center'>
            <p className='text-sm text-gray-600 mb-1'>Days Remaining for Community Library Project</p>
            <p className='text-4xl font-extrabold text-indigo-600'>21</p>
        </div>
    </div>

    <div className='text-center mt-4'>
       <Link to={'/mycampaigns'}>View all my campaigns</Link>
    </div>
</div>

             </div>
            </div>
          )}   

          {/* Backer Content */}
          {activeTab === 'backer' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">My Contributions</h2>
              <p className="text-gray-600">This page shows all the projects you have contributed to and your total contributions.</p>
              
            <div className='flex flex-row justify-between mt-10 ml-30 mr-30'>
              <div className='min-w-[300px] h-[200px] p-4 bg-blue-50 shadow-md rounded-[10px]'>
               <p className='text-[27px] font-bold mb-10'>Total Amount Contributed</p>
               <p className='text-purple-800 text-center text-[25px] font-bold '>456</p>
              </div>

              <div>
                 <div className='min-w-[300px] h-[200px] p-4 bg-blue-50 shadow-md rounded-[10px]'>
               <p className='text-[27px] font-bold mb-10'>Projects Backed</p>
               <p className='text-purple-800 text-center text-[25px] font-bold '>456</p>
              </div>
              </div>

              
            </div>
                <p className='text-center text-indigo-600 hover:underline text-[24px] mt-12'><Link to={'/mycontributions'} >view all projects</Link></p>
            </div>
            
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;