import { Link } from 'react-router-dom'; // Import Link
import banner from "../../assets/A4.avif";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] pt-10 pb-16 px-4 mt-5">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 md:py-18 p-4 rounded-md h-auto flex flex-col-reverse md:flex-row items-center">
        
        {/* Left Section: Image */}
        <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          <img
            src={banner}
            alt="Hero section illustration"
            className="h-auto w-full max-w-[700px] max-h-[500px] rounded-lg"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left md:pl-10">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Welcome to{" "}
            <span className="text-[#1842B6]">Vigomerge</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
            Based in Pune, Maharashtra, India, we specialize in delivering cutting-edge IT services and solutions tailored to meet your business needs.
          </p>

          <h2 className="text-xl font-semibold text-[#1842B6] mb-3">Our Approach</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4">
            We are dedicated to understanding and addressing your specific needs. Let’s explore how we can assist you with a range of tailored solutions. Once we have a clear understanding of your needs, we can recommend specific IT solutions that align with your digital goals. 
          </p>
          
          <h2 className="text-xl font-semibold text-[#1842B6] mb-3">Our Mission</h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
            The mission of our AI-based company is to harness the power of artificial intelligence to solve complex problems, enhance human productivity, and drive innovation across various industries. We are committed to developing cutting-edge AI solutions that empower businesses, organizations, and individuals to thrive in the digital age.
          </p>

          <Link to="/service"> {/* Replace <a> with <Link> */}
            <button className="px-6 py-3 bg-[#1842B6] text-white rounded-full mb-6 md:mb-8 text-sm sm:text-base hover:bg-[#132f7e] transition duration-300">
              READ MORE
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
