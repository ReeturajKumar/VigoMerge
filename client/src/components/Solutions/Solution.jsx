import { useEffect, useState } from 'react';
import { solution, servicesContent } from '../../utils/Solution';
// import { useNavigate } from 'react-router-dom'; 
import Numbers from '../Home/Numbers';
import Testimonials from '../Home/Testimonils';
import FAQ from '../Service/Faq';
import Blog from '../Home/Blog';
import Custom from '../Home/Custom';

const Solution = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const navigate = useNavigate(); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % solution.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); 
  }, []);

  // const handleCardClick = (url) => {
  //   navigate(url); // Redirect to the specific service detail page
  // };

  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] py-8 md:py-16">
      <div className="relative overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {solution.map((image, index) => (
            <div key={index} className="min-w-full">
              <img 
                src={image.src} 
                alt={`Slider Image ${index + 1}`} 
                className="w-full h-[250px] md:h-[350px] object-cover" 
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h2 className="text-2xl font-bold text-left mb-6">
          <span className="text-[#1842B6]">Explore Our Solutions</span>
        </h2>
        <p className="text-gray-700 mb-4">
          Our range of services is designed to help your business thrive. From innovative technology solutions to dedicated support, we are here to meet your needs.
        </p>
        
        {/* New Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {servicesContent.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="w-full h-32 object-cover rounded-md mb-4 cursor-pointer" 
                // onClick={() => handleCardClick(service.url)} // Redirect when image is clicked
              />
              <h3 
                className="text-lg font-semibold mb-2 text-[#1842B6] cursor-pointer" 
                // onClick={() => handleCardClick(service.url)} // Redirect when title is clicked
              >
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Numbers />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <FAQ />
        <Blog />
        <Custom />
        <Testimonials />
      </div>
    </section>
  );
};

export default Solution;
