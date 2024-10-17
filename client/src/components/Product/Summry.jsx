import { Link } from 'react-router-dom'; // Import Link
import banner from "../../assets/P2.png"; // Ensure correct banner import

const Summry = () => {
  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] pt-16 pb-16 px-4 mt-5">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 md:py-18 p-4 rounded-md h-auto flex flex-col-reverse md:flex-row items-center">
        
        {/* Left Section */}
        <div className="md:w-1/2 w-full p-4 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Product Summary
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            <span className="font-semibold text-[#1842B6]">Innovation</span> is the place where business, design, and strategy meet. It comes with a different way of working.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-4">
            Over the past decade, we have created, sharpened, and scaled our healthcare data and store privacy. Now it is here for you.
          </p>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            Co-creation and collaboration. A <span className="font-semibold text-[#1842B6]">never-assume mindset</span>. Supported by technology.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start">
            <Link to="/contact-us"> {/* Replace <a> with <Link> */}
              <button className="px-10 py-3 bg-[#1842B6] text-white rounded-full mb-4 md:mb-0 md:mr-7 hover:bg-[#132f7e] transition duration-300">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-4 flex justify-center">
          <img
            src={banner}
            alt="Product summary illustration"
            className="h-auto w-full max-w-[700px] max-h-[500px] rounded-lg" // Responsive width and height
          />
        </div>
      </div>
    </section>
  );
};

export default Summry;
