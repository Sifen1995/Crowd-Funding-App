import charityEducation from '../assets/images/Banner.png';
import saveChildren from '../assets/images/Banner.png';
import sheRides from '../assets/images/Banner.png';
import pledgeSmile from '../assets/images/Banner.png';

export interface Campaign {
  id:number
  title: string;
  description: string,
  raised: number;
  target: number;
  category: string;
  start_date:string
  end_date :string
  status :'active'|'pending'|'completed'|'cancelled'
  image: string;     
   
}

export const campaignData: Campaign[] = [
  {
    id:1,
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    description: 'b jhbhj',
    category: 'Education',
    start_date:'785t9',
    end_date :'58648',
    status :'active',
    image: charityEducation,
  },
  {
    id:2,
    title: 'Save Children',
    raised: 12730,
    target: 20000,    
    category: 'Disability',
    description: 'b jhbhj',
    start_date:'785t9',
    end_date :'58648',
    status :'active',
    image: saveChildren,
  },
  {
    id:3,
    title: 'She Rides',
    raised: 3562,
    target: 5000,
    category: 'Business Idea', description: 'b jhbhj',
    start_date:'785t9',
    end_date :'58648',
    status :'active',   
    image: sheRides,
  },
  {
    id:4,
    title: 'Pledge A Smile',
    raised: 13562,
    target: 15000,
    category: 'Health & Medical',
     description: 'b jhbhj',
    start_date:'785t9',
    end_date :'58648',
    status :'active',    
    image: pledgeSmile,
  },
   {
    id:5,
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    category: 'Education',
    description: 'b jhbhj',
    start_date:'785t9',
    end_date :'58648',
    status :'active',
    image: charityEducation,
  },
   {
    id:6,
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    category: 'Education',
     description: 'b jhbhj',
    start_date:'785t9',
    end_date :'58648',
    status :'active',
    image: charityEducation,
  },
   {
    id:7,
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    category: 'Education',
     description: 'b jhbhj',
    start_date:'785t9',
    end_date :'58648',
    status :'active',
    image: charityEducation,
  },
   {
    id:8,
    title: 'Charity for Education',
    raised: 10848,
    target: 10000,
    category: 'Education',
    description: 'b jhbhj',
    start_date:'785t9',
    end_date :'58648',
    status :'active',
    image: charityEducation,
  },
];