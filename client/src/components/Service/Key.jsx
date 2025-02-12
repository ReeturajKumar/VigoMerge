import banner from '../../assets/5.png';
import { Link } from 'react-router-dom'; // Import Link

const Key = () => {
  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Content */}
        <div className="lg:w-1/2 lg:pr-16 text-center lg:text-left">
          {/* Small Heading */}
          <h3 className="text-[#1842B6] text-lg font-semibold mb-2">
            Support
          </h3>
          {/* Main Heading */}
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Key Features of{" "}
            <span className="text-[#1842B6]"> Our Services</span>
          </h2>
          {/* Description */}
          <p className="text-gray-600 mb-6">
            When you choose Vigomerge, you are not just hiring a consulting firm – 
            you are partnering with a team of dedicated professionals who are invested 
            in your success.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center">
              <span className="text-[#1842B6] mr-2">✔</span> 
              <span>Customization</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#1842B6] mr-2">✔</span> 
              <span>Scalability</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#1842B6] mr-2">✔</span> 
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#1842B6] mr-2">✔</span> 
              <span>Collaborative Partnership</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#1842B6] mr-2">✔</span> 
              <span>Ethical Standards</span>
            </div>
            <div className="flex items-center">
              <span className="text-[#1842B6] mr-2">✔</span> 
              <span>Results-Driven Approach</span>
            </div>
          </div>

          {/* Read More Button */}
          <div className="flex justify-center lg:justify-start">
            <Link // Use Link instead of a
              to="/solutions" // Replace with your desired path
              className="bg-[#1842B6] text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
            >
              READ MORE
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="relative">
            {/* You can adjust or remove this div based on your needs */}
            <div className="absolute -top-6 -right-6 w-full h-full rounded-lg"></div>
            <img
              src={banner}
              alt="Team presenting on a whiteboard"
              className="relative rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Key;
