import React from 'react'
import CampaignsTabel from '../../components/tabels/CampaignsTabel'

export default function MyCampaigns() {
  return (
    <div>
      <h1 className='text-center text-[35px] font-bold mt-[40px]'>The projects you have so far</h1>
      <CampaignsTabel/>
    </div>
  )
}
