import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Style from './cp.module.css';

export default function CreateProject() {
  const navigate = useNavigate();

  const handleExit = () => {
    navigate('/');
  };

  return (
    <div className={Style.bg}>
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

      <div className="max-w-4xl mx-auto relative">
        {/* Motto Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Your Idea. Their Support. Our Community.
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Launch your vision and turn your dream project into a reality.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            {/* Campaign Details Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Campaign Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="campaign-title" className="block text-sm font-medium text-gray-700">
                    Campaign Title
                  </label>
                  <input
                    type="text"
                    id="campaign-title"
                    name="campaign-title"
                    placeholder="e.g., Build a Community Library"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6A5A82] focus:ring-[#6A5A82]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <select
                    id="category"
                    name="category"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6A5A82] focus:ring-[#6A5A82]"
                    required
                  >
                    <option value="">Select a category</option>
                    <option>Education</option>
                    <option>Technology</option>
                    <option>Health</option>
                    <option>Community</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Description and Image Section */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Tell your story. What is your campaign about?"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6A5A82] focus:ring-[#6A5A82]"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="campaign-image" className="block text-sm font-medium text-gray-700">
                Campaign Image
              </label>
              <input
                type="file"
                id="campaign-image"
                name="campaign-image"
                className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#F0EDF2] file:text-[#6A5A82] hover:file:bg-[#E6E1E9]"
                required
              />
            </div>

            {/* Financial Goals Section */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Financial Goals
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="target-amount" className="block text-sm font-medium text-gray-700">
                    Target Amount
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="target-amount"
                      name="target-amount"
                      placeholder="5000"
                      className="block w-full pl-7 pr-12 rounded-md border-gray-300 focus:border-[#6A5A82] focus:ring-[#6A5A82]"
                      required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">USD</span>
                    </div>
                  </div>
                </div>
                <div>
                  <label htmlFor="end-date" className="block text-sm font-medium text-gray-700">
                    Campaign End Date
                  </label>
                  <input
                    type="date"
                    id="end-date"
                    name="end-date"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#6A5A82] focus:ring-[#6A5A82]"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#6A5A82] hover:bg-[#584C69] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6A5A82]"
              >
                Launch Campaign
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}