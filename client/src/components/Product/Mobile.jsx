import { Link } from 'react-router-dom'; // Import Link
import banner from "../../assets/P3.png";

const Mobile = () => {
  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] pt-10 pb-16 px-4 mt-5">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-4 rounded-md flex flex-col md:flex-row items-stretch">

        {/* Left Section */}
        <div className="md:w-1/2 w-full p-6 md:pr-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1842B6]">
            Mobile Application
          </h1>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            We take pride in saying that we have served over 50 clients from diverse industries and unique problem statements. 
            Our creative solutions have successfully satisfied our clients' needs on time.
          </p>
          
          <h2 className="text-xl font-bold text-[#1842B6] mb-4">What We Offer:</h2>
          
          {/* Feature List */}
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-md ">
                <div className="bg-[#1842B6] text-white rounded-full p-2 mr-4">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div>
                  <strong className="text-lg">{feature.title}</strong>
                  <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Contact Us Button */}
          <div className="flex justify-center md:justify-start mt-6">
            <Link to="/contact-us">
              <button className="px-6 py-3 bg-[#1842B6] text-white rounded-full hover:bg-[#132f7e] transition duration-300">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full flex justify-center items-center p-4">
          <img
            src={banner}
            alt="Mobile application illustration"
            className="h-auto w-full max-w-[600px] object-contain rounded-md "
            style={{ maxHeight: '80vh' }} // Limit the height for better responsiveness
          />
        </div>
      </div>
    </section>
  );
};

// Features Data with Icons
const features = [
  {
    title: "User-Centric Design",
    description: "We focus on intuitive and engaging user experiences.",
    icon: "🎨", // Icon for User-Centric Design
  },
  {
    title: "Cross-Platform Compatibility",
    description: "Our apps work seamlessly on both iOS and Android devices.",
    icon: "📱", // Icon for Cross-Platform Compatibility
  },
  {
    title: "Scalable Solutions",
    description: "Tailored to grow with your business needs and technological advancements.",
    icon: "📈", // Icon for Scalable Solutions
  },
  {
    title: "Robust Security",
    description: "We prioritize security to protect sensitive user data and maintain privacy.",
    icon: "🔒", // Icon for Robust Security
  },
  {
    title: "Timely Delivery",
    description: "Our team ensures that projects are completed within the agreed timeframe.",
    icon: "⏱️", // Icon for Timely Delivery
  },
];

export default Mobile;
