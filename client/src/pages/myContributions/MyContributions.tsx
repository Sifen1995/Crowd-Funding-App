import React from 'react';
import ContributionsTable from '../../components/tabels/ContributionsTabel';

export default function MyContributions() {
  return (
    <div>
      <h1 className='text-center text-[35px] font-bold mt-[40px]' style={{ color: '#6A5A82' }}>The projects you have backed so far</h1>
      <ContributionsTable/>
    </div>
  );
}