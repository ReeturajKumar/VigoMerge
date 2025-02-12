import { useState, useEffect } from "react";
import img1 from "../../../assets/O1.jpg";
import img2 from "../../../assets/O2.jpg";
import img3 from "../../../assets/O3.avif";
import ctaBackground from "../../../assets/Data2.avif";
// Replace with actual client logos
import clientLogo1 from "../../../assets/C1.jpg";
import clientLogo2 from "../../../assets/C2.svg";
import clientLogo3 from "../../../assets/C3.png";
import clientLogo4 from "../../../assets/C4.png";
import clientLogo5 from "../../../assets/C5.png";
import Contact from "../Option/Contact";

const images = [img1, img2, img3];


const Operation = () => {

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
          Optimize Performance with Operations Improvement Services
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, we specialize in Operations Improvement services aimed at evaluating and enhancing your business processes, workflows, and overall efficiency. In today’s competitive landscape, organizations must continuously refine their operations to boost productivity and minimize costs. Our tailored approach focuses on identifying bottlenecks and inefficiencies, allowing your business to thrive and adapt to changing market demands.
            <br />
            <br />
            We begin by conducting a thorough assessment of your current operations. Our expert team analyzes existing workflows and processes to identify areas for improvement. By leveraging advanced analytics and industry best practices, we pinpoint inefficiencies that may be hindering your organization’s performance. This comprehensive evaluation serves as the foundation for our improvement strategies.
            <br />
            <br />
            Our approach emphasizes collaboration, working closely with your teams to understand their challenges and gather insights into day-to-day operations. This ensures that our solutions are not only effective but also practical and tailored to your specific business context. We believe that engaging employees in the improvement process fosters a culture of continuous enhancement, leading to more sustainable outcomes.
            <br />
            <br />
            Once we identify improvement opportunities, we develop targeted strategies to streamline processes and enhance productivity. This may involve redesigning workflows, implementing automation solutions, or optimizing resource allocation. Our goal is to create more efficient operations that enable your organization to deliver greater value to customers while reducing operational costs.
            <br />
            <br />
            In addition to process improvement, we focus on enhancing communication and collaboration across departments. By breaking down silos and fostering teamwork, we help create a more agile and responsive organization. This holistic approach not only boosts efficiency but also enhances employee satisfaction and engagement.
            <br />
            <br />
            Our Operations Improvement services are designed to deliver measurable results. We track key performance indicators (KPIs) and provide ongoing support to ensure that implemented changes lead to sustained improvements. By continually monitoring and refining processes, we help your organization remain competitive and adaptable in an ever-evolving market.
            <br />
            <br />
            Partner with Vigomerge to transform your operations and unlock new levels of productivity. Our expertise in operations improvement empowers you to optimize your workflows, reduce costs, and enhance overall performance, positioning your business for long-term success. Let us help you achieve operational excellence and drive meaningful growth in your organization.
          </p>
        </div>
      </div>

      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Customized Improvement Strategies</strong>
            </li>
            <li>
              <strong>Holistic Assessment</strong>
            </li>
            <li>
              <strong>Expert Team</strong>
            </li>
            <li>
              <strong>Measurable Results</strong>
            </li>
            <li>
              <strong>
              Collaborative Approach
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

export default Operation