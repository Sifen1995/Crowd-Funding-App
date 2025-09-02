import React from 'react'
import type { FundedProjects } from '../../types/fundedProjectsData';
import { data } from '../../types/fundedProjectsData';

export default function ContributionsTable() {

    const getStatusStyles = (status: FundedProjects['payment_status']) => {
        switch (status) {
            
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'completed':
                return 'bg-blue-100 text-blue-800';
            case 'failed':
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
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>campaign_title</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>amount</th>                       
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>contribution_date</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>payment_status </th>
                           
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                        {data.map((d) => (
                            <tr key={d.contribution_id} className="hover:bg-gray-100 transition-colors">
                                <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{d.campaign_title}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{d.amount}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>${d.contribution_date}</td>
                                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusStyles(d.payment_status)}`}>
                                        {d.payment_status}
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