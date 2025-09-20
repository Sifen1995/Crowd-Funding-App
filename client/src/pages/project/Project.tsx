// src/pages/project/Project.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/images/Banner.png';
import donateBg from '../../assets/images/bg.jpg';

// Define the type for a project object
interface ProjectData {
  id: string;
  title: string;
  goal: number;
  pledged: number;
  backers: number;
}

// Mock data for the project.
const projectData: ProjectData = {
  id: 'build-a-community-library',
  title: 'Build a Community Library',
  goal: 10000,
  pledged: 5250,
  backers: 45,
};

export default function Project() {
  const navigate = useNavigate();

  const progressPercentage = (projectData.pledged / projectData.goal) * 100;

  const handleContribute = () => {
    navigate('/payment', { state: { project: projectData } });
  };

  const handleExit = () => {
    // Navigate back to the root URL
    navigate('/');
  };

  const contentBackgroundStyle = {
    backgroundImage: `url(${donateBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'overlay',
  };

  return (
    <div>
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        {/* Exit Button at the top right */}
        <div className="absolute top-4 right-4 z-50">
          <button
            onClick={handleExit}
            className="bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300"
            aria-label="Exit"
          >
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>
        </div>

        <div
          className="max-w-6xl mx-auto rounded-lg shadow-xl p-8 relative"
          style={contentBackgroundStyle}
        >
          {/* Campaign Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              {projectData.title}
            </h1>
            <p className="mt-2 text-lg text-gray-600">
              A project to bring education and resources to our neighborhood.
            </p>
            <div className="mt-4 text-gray-500">
              <span className="font-medium">Created by:</span> John Doe
            </div>
          </div>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Campaign Story & Description */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt="Campaign Image"
                  className="w-full object-cover"
                />
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Our Story
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Funding and Rewards */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="text-center">
                  <h3 className="text-3xl font-extrabold text-[#6A5A82]">
                    ${projectData.pledged.toLocaleString()}
                  </h3>
                  <p className="text-lg text-gray-500">
                    pledged of ${projectData.goal.toLocaleString()} target
                  </p>
                </div>
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-[#6A5A82] h-3 rounded-full"
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-gray-500 text-sm">
                    <span className="font-bold text-gray-800">
                      {projectData.backers}
                    </span>{' '}
                    backers
                    <br />
                    <span className="font-bold text-gray-800">21</span> days to
                    go
                  </p>
                </div>
                <button
                  onClick={handleContribute}
                  className="mt-6 w-full py-3 px-4 rounded-md text-white font-semibold bg-[#6A5A82] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6A5A82]"
                >
                  Contribute
                </button>
              </div>

              {/* Rewards Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">Rewards</h2>
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <p className="text-lg font-bold text-gray-800">$25+</p>
                  <h4 className="font-semibold text-gray-700 mt-2">
                    Digital Thank You Note
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Receive a heartfelt digital thank you note from the creator
                    and a mention on our project website.
                  </p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <p className="text-lg font-bold text-gray-800">$50+</p>
                  <h4 className="font-semibold text-gray-700 mt-2">
                    Exclusive T-shirt
                  </h4>
                  <p className="mt-1 text-sm text-gray-500">
                    Get an exclusive, limited-edition project T-shirt.
                  </p>
                  <p className="mt-2 text-xs text-gray-400">Limited to 100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}