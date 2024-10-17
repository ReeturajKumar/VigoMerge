import banner from "../../assets/banner.png";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] pt-16 pb-16 px-4 mt-5">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 md:py-18 p-4 rounded-md h-auto flex flex-col-reverse md:flex-row items-center">
        {/* Left Section */}
        <div className="md:w-1/2 w-full p-4 text-center md:text-left">
          <h2 className="text-sm font-semibold text-white bg-[#1842B6] p-2 mb-2 inline-block rounded-full px-5">
            Strategize & Succeed
          </h2>
          <h1 className="text-3xl md:text-6xl font-bold mb-6">
            Driving Success Through Strategic Guidance.
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            These services can be tailored to meet the specific needs and
            challenges of each client, providing valuable expertise and support
            to drive business success.
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start">
            {/* Replacing <a> with <Link> */}
            <Link to="/contact-us">
              <button className="px-10 py-3 bg-[#1842B6] text-white rounded-full mb-4 md:mb-0 md:mr-7 bg-[##1842B6]">
                CONTACT US
              </button>
            </Link>
          </div>

          {/* Social Media Icons Section */}
          <div className="mt-8 text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us On</h3>
            <div className="flex justify-center md:justify-start space-x-6 text-2xl">
              <a
                href="https://www.facebook.com/vigomerge"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFacebook className="hover:text-[#1842B6] transition duration-300" />
              </a>
              <a
                href="https://www.instagram.com/vigomerge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="hover:text-[#1842B6] transition duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/company/vigomerge/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LuLinkedin className="hover:text-[#1842B6] transition duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full p-4 flex justify-center">
          <img
            src={banner}
            alt="Hero section illustration"
            className="h-auto w-full max-w-[700px] max-h-[500px] rounded-md" // Responsive width and height
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
