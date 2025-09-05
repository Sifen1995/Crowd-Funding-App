import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Campaign {
  title: string;
  raised: number;
  target: number;
  category: string;
  country: string;
  image: string;
}

interface CampaignCardProps {
  campaign: Campaign;
}

function CampaignCard({ campaign }: CampaignCardProps) {
  const progress = (campaign.raised / campaign.target) * 100;
  const formattedRaised = `$${campaign.raised.toLocaleString()}`;
  const formattedTarget = `$${campaign.target.toLocaleString()}`;
  const navigate=useNavigate()

  const handelNav=()=>{
    navigate("/project")
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover" />
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{campaign.title}</h3>
        <div className="flex items-center justify-between mb-2">
          <div>
            <p className="text-sm text-gray-600">{formattedRaised}</p>
            <p className="text-xs text-gray-500">raised of {formattedTarget} Target</p>
          </div>
          <div className="text-xs text-gray-500">{progress.toFixed(0)}%</div>
        </div>
        <div className="bg-gray-200 rounded-full h-2 relative overflow-hidden mb-3">
          <div
            className="bg-[#6A5A82] h-full absolute left-0 top-0 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600 mb-2">{campaign.category}</p>
        <p className="text-xs text-gray-500">{campaign.country}</p>
      </div>
      <div className="bg-gray-100 p-4">
        <button className="bg-[#6A5A82] hover:bg-opacity-90 text-white font-semibold py-2 px-4 rounded-md w-full text-sm" onClick={handelNav}>
          Read More & Donate
        </button>
      </div>
    </div>
  );
}

export default CampaignCard;