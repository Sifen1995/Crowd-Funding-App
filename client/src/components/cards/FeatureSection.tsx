import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faRocket, faUser } from '@fortawesome/free-solid-svg-icons';

interface FeatureItem {
  icon: any; 
  title: string;
  description: string;
}

const featureItems: FeatureItem[] = [
  {
    icon: faGift,
    title: 'Charities',
    description:
      'If you represent a Charity, you can register your Charity here. Once your Charity is approved, you and your supporters can create Causes for it. The funds go automatically to your Charity.',
  },
  {
    icon: faRocket,
    title: 'Businesses',
    description:
      'We have always believed, and said, that while charity is important in any society, one of the best ways to support people, and the economy, is by encouraging small businesses. You can register your business here and create Projects for it.',
  },
  {
    icon: faUser,
    title: 'Individuals',
    description:
      'Sometimes, life can throw us some challenges. One of these challenges can come in the form of illness. That is why Wegenfund allows individuals with medical emergencies to create a Cause and raise funds for it.',
  },
];

const FeatureCard = ({ icon, title, description }: FeatureItem) => (
  <div className="bg-white rounded-lg p-6 flex flex-col items-center shadow-md">
    <div className="bg-[#6A5A82] text-white rounded-full p-3 mb-4">
      <FontAwesomeIcon icon={icon} size="lg" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{title}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const FeatureSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">InnovateFund is for ...</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureItems.map((item, index) => (
          <FeatureCard key={index} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default FeatureSection;