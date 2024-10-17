import { useState, useEffect } from "react";
import img1 from "../../../assets/A1.avif";
import img2 from "../../../assets/A2.avif";
import img3 from "../../../assets/A3.avif";
import ctaBackground from "../../../assets/Data2.avif";
// Replace with actual client logos
import clientLogo1 from "../../../assets/C1.jpg";
import clientLogo2 from "../../../assets/C2.svg";
import clientLogo3 from "../../../assets/C3.png";
import clientLogo4 from "../../../assets/C4.png";
import clientLogo5 from "../../../assets/C5.png";
import Contact from "../Option/Contact";


const images = [img1, img2, img3];

const Analysis = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] py-8 md:py-16">
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
          Unlock Growth with In-Depth Market Research & Analysis
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, our Market Research & Analysis services are designed to help businesses make well-informed, data-driven decisions by providing a deep understanding of their markets, customers, and competitors. We believe that effective market research is essential for identifying growth opportunities, minimizing risks, and staying competitive in today’s dynamic business landscape. Whether you’re launching a new product, entering a new market, or refining your strategies, our tailored research solutions empower you with actionable insights.
            <br />
            <br />
            We employ a comprehensive approach to market research, gathering and analyzing data from a variety of sources to offer a 360-degree view of the market landscape. Our research methods include both quantitative and qualitative techniques, such as surveys, interviews, focus groups, and advanced data analytics. This ensures that the insights we provide are not only accurate but also relevant to your specific business needs.
            <br />
            <br />
            One of the key areas we focus on is consumer behavior analysis. By studying customer preferences, purchasing patterns, and emerging trends, we help you understand your target audience at a granular level. This insight allows you to develop products and services that resonate with your customers and design marketing strategies that effectively engage them. The result is enhanced customer satisfaction, loyalty, and ultimately, increased revenue.
            <br />
            <br />
            In addition to consumer analysis, we conduct thorough competitor analysis. This involves assessing the strategies, strengths, weaknesses, and market positioning of your competitors. By understanding how your competitors operate and where they fall short, you can identify gaps in the market and develop strategies that give your business a competitive edge. Whether it’s pricing strategies, product offerings, or customer service, our competitor analysis ensures you stay one step ahead.
            <br />
            <br />
            We also specialize in market trend analysis, helping you stay on top of industry changes and emerging market conditions. By tracking historical data and forecasting future trends, we provide you with a clear picture of where the market is headed. This enables you to anticipate shifts in consumer demand, technological advancements, or regulatory changes that may impact your business. With this foresight, you can proactively adjust your strategies to capitalize on new opportunities or mitigate potential challenges.
            <br />
            <br />
            Our Market Research & Analysis services are not one-size-fits-all. We tailor our research solutions to your unique business objectives, ensuring that the insights we provide are aligned with your strategic goals. Whether you are a startup looking to enter a new market or an established enterprise refining its competitive strategies, we help you leverage data to drive business growth.
            <br />
            <br />
            At Vigomerge, we turn data into strategic insight, helping you navigate the complexities of the market with confidence. Let us help you uncover hidden opportunities, optimize your market strategies, and position your business for long-term success.
          </p>
        </div>
      </div>

      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Tailored Solutions</strong>
            </li>
            <li>
              <strong>Comprehensive Market Insights</strong>
            </li>
            <li>
              <strong>Data-Driven Strategies</strong>
            </li>
            <li>
              <strong>Expert Team</strong>
            </li>
            <li>
              <strong>
              Proactive Support
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

export default Analysis