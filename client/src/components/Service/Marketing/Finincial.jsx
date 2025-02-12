import { useState, useEffect } from "react";
import img1 from "../../../assets/F1.avif";
import img2 from "../../../assets/F2.jpg";
import img3 from "../../../assets/F3.jpg";
import ctaBackground from "../../../assets/Data2.avif";
// Replace with actual client logos
import clientLogo1 from "../../../assets/C1.jpg";
import clientLogo2 from "../../../assets/C2.svg";
import clientLogo3 from "../../../assets/C3.png";
import clientLogo4 from "../../../assets/C4.png";
import clientLogo5 from "../../../assets/C5.png";
import Contact from "../Option/Contact";


const images = [img1, img2, img3];

const Finincial = () => {
    
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] py-8 md:py-16">
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
              className="w-full h-[400px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-col md:flex-row gap-6">
      <div className="md:w-8/12 w-full">
        <div className="p-4 rounded-b-lg mt-2">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
          Empower Your Business with Financial Consulting Services
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, our Financial Consulting services are designed to provide businesses with expert guidance in financial analysis, budgeting, forecasting, and investment advice. In a complex financial landscape, having a clear understanding of your finances is essential for making informed decisions that drive growth and sustainability. Our goal is to help you optimize your financial resources and achieve your business objectives.
            <br />
            <br />
            We begin with a thorough financial analysis, assessing your current financial health and identifying key performance indicators (KPIs). By evaluating your financial statements, cash flow, and profitability, we provide you with a comprehensive view of your organization’s financial position. This analysis serves as the foundation for our tailored consulting solutions.
            <br />
            <br />
            A key aspect of our organizational development services is enhancing leadership capabilities. Effective leadership is vital for cultivating a positive work environment and driving employee engagement. We offer tailored leadership development programs that equip your leaders with the skills and knowledge needed to inspire their teams, foster collaboration, and navigate challenges. By investing in leadership growth, you can build a strong pipeline of future leaders who are committed to your organization’s success.
            <br />
            <br />
            Forecasting is another essential aspect of our financial consulting services. We utilize advanced modeling techniques to project future financial performance based on historical data and market trends. This enables you to anticipate challenges, identify opportunities, and make proactive decisions that drive business success. Our forecasting services empower you to navigate uncertainty with confidence, ensuring that your organization is prepared for the future.
            <br />
            <br />
            Investment advice is also a crucial element of our financial consulting offerings. Our experienced consultants provide insights into various investment options, helping you make informed decisions that align with your risk tolerance and financial objectives. Whether you are considering capital investments, mergers and acquisitions, or expanding into new markets, we guide you through the complexities of investment strategy to optimize returns.
            <br />
            <br />
            At Vigomerge, we understand that effective financial management is not a one-time effort but an ongoing process. Our consulting services are designed to provide continuous support, helping you monitor your financial performance and adjust strategies as needed. We prioritize building strong relationships with our clients, ensuring that you have access to expert advice whenever you need it. you can unlock the full potential of your workforce.
            <br />
            <br />
            Partner with Vigomerge to enhance your financial management capabilities and drive your business forward. Our Financial Consulting services equip you with the insights and strategies necessary to optimize your financial resources, make informed decisions, and achieve sustainable growth. Let us help you unlock the full potential of your financial assets and secure a prosperous future for your organization.
          </p>
        </div>
      </div>

      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Expert Financial Analysis</strong>
            </li>
            <li>
              <strong>Customized Budgeting Solutions</strong>
            </li>
            <li>
              <strong>Accurate Forecasting Models</strong>
            </li>
            <li>
              <strong>Informed Investment Guidance</strong>
            </li>
            <li>
              <strong>
              Ongoing Support and Partnership
              </strong>
            </li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div
          className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 text-white rounded-lg mb-6"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        >
          <div className="text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              Ready to Transform Your Data?
            </h2>
            <p className="text-sm sm:text-base mb-4">
              Contact us today to discover how our data analytics services can
              help you gain insights and drive growth.
            </p>
            <a
              href="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Client Logos Section */}
        {/* Client Logos Section */}
        <div className="mt-10">
          <h3 className="text-xl font-bold mb-4">
            Trusted by Leading Brands
          </h3>
          <div className="flex space-x-4 items-center">
            <img
              src={clientLogo1}
              alt="Client Logo 1"
              className="h-12 w-12 rounded-full object-cover"
            />
            <img
              src={clientLogo2}
              alt="Client Logo 2"
              className="h-12 w-12 object-contain"
            />
            <img
              src={clientLogo3}
              alt="Client Logo 3"
              className="h-12 w-12 rounded-full object-cover"
            />
            <img
              src={clientLogo4}
              alt="Client Logo 4"
              className="h-12 w-12 rounded-full object-cover"
            />
            <img
              src={clientLogo5}
              alt="Client Logo 4"
              className="h-12 w-12 rounded-full "
            />
          </div>
        </div>

        {/* Contact Us Form */}
        <Contact/>
      </div>
    </div>
  </section>
  )
}

export default Finincial