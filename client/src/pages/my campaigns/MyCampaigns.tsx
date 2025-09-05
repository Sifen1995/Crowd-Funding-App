import React from 'react';
import CampaignsTabel from '../../components/tabels/CampaignsTabel';

export default function MyCampaigns() {
  return (
    <div>
      <h1 className='text-center text-[35px] font-bold mt-[40px]' style={{ color: '#6A5A82' }}>The projects you have so far</h1>
      <CampaignsTabel/>
    </div>
  );
}