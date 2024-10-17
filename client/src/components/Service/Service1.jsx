import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import img1 from '../../assets/Service.jpg';
import img2 from '../../assets/Service1.jpg';
import img3 from '../../assets/Service2.jpg';
import img4 from '../../assets/Service3.avif';
import img5 from '../../assets/Service4.jpg';
import services from '../../utils/ServceData'; 
import Key from './Key';
import MarketingSection from './MarketingSection';
import FAQ from './Faq';
import Numbers from '../Home/Numbers';
import CaseStudies from './../Home/CaseStudies';

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
];

const Service1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6); // Show 6 services initially

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const handleViewMore = () => {
    setVisibleCount((prevCount) => prevCount + 3); // Show 3 more services
  };

  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] py-8 md:py-16">
      {/* Full-width Slider */}
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full">
              <img 
                src={image} 
                alt={`Slider Image ${index + 1}`} 
                className="w-full h-[200px] md:h-[400px] object-cover" // Responsive height
              />
            </div>
          ))}
        </div>
      </div>

      {/* Rest of the Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-left mb-6">
          <span className="text-[#1842B6]">Explore Our Services</span>
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Map through the services data to create service cards */}
          {services.slice(0, visibleCount).map((service, index) => (
            <div key={index} className="p-6 rounded-lg flex flex-col h-full shadow-md">
              {/* Container for icon and title inline */}
              <div className="flex items-center mb-4">
                <img src={service.icon} alt="" className="w-10 h-10 mr-3" />
                <h3 className="text-xl md:text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-600 flex-grow mb-4 text-sm md:text-base">{service.description}</p>
              <Link // Use Link instead of a
                to={service.link} // Use the service's link here
                className="text-[#1842B6] cursor-pointer hover:underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>

        {/* Show View More button if there are more services to display */}
        {visibleCount < services.length && (
          <div className="text-right mt-6">
            <button 
              onClick={handleViewMore} 
              className="bg-[#1842B6] text-white py-2 px-4 rounded "
            >
              View More
            </button>
          </div>
        )}

        <Key/>
      </div>
      <Numbers/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <MarketingSection/>
        <FAQ/>
        <CaseStudies/>
      </div>
    </section>
  );
};

export default Service1;
