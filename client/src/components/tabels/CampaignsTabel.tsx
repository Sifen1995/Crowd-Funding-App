import React from 'react'
import { campaignData } from '../../types/campaignData'
import type { Campaign } from '../../types/campaignData';

export default function CampaignsTabel() {

    const getStatusStyles = (status: Campaign['status']) => {
        switch (status) {
            case 'active':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'completed':
                return 'bg-blue-100 text-blue-800';
            case 'cancelled':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className='max-w-7xl mx-auto mt-8 px-4'>
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Title</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Description</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Raised</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Target</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Category</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Start Date</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>End Date</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Status</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                        {campaignData.map((campaign) => (
                            <tr key={campaign.id} className="hover:bg-gray-100 transition-colors">
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{campaign.title}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{campaign.description}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>${campaign.raised}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>${campaign.target}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{campaign.category}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{campaign.start_date}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{campaign.end_date}</td>
                               <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyles(campaign.status)}`}>
                                        {campaign.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}