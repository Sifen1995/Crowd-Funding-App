import React, { useRef,useState } from 'react';
import Header from '../../components/header/Header';
import Carousel from '../../components/carousel/Carousel';
import CampaignCard from '../../components/cards/CampaignCard';
import { campaignData } from '../../types/campaignData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import FeatureSection from '../../components/cards/FeatureSection';
import Footer from '../../components/footer/Footer';




export default function Landing() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);


    const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // This function would be called when a user logs out
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 300; 
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 300; 
    }
  };

  return (
    <div>
      
      <Header/>
      <Carousel/>
       <section className="py-12 relative  overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Leatest</h2>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-[#6A5A82] rounded-full shadow-md p-2 cursor-pointer z-10"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide"
          >
            {campaignData.map((campaign, index) => (
              <div key={index} className="flex-none w-72">
                <CampaignCard campaign={campaign} />
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-white bg-opacity-75 hover:bg-opacity-100 text-[#6A5A82] rounded-full shadow-md p-2 cursor-pointer z-10"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </section>

<div>
  <FeatureSection/>
</div>

<footer>
  <Footer/>
</footer>
    </div>
  )
}