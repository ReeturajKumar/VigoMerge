import { useState, useEffect } from "react";
import img1 from "../../../assets/D1.jpg";
import img2 from "../../../assets/D2.jpg";
import img3 from "../../../assets/D3.jpg";
import ctaBackground from "../../../assets/Data2.avif";
// Replace with actual client logos
import clientLogo1 from "../../../assets/C1.jpg";
import clientLogo2 from "../../../assets/C2.svg";
import clientLogo3 from "../../../assets/C3.png";
import clientLogo4 from "../../../assets/C4.png";
import clientLogo5 from "../../../assets/C5.png";
import Contact from "../Option/Contact";

const images = [img1, img2, img3];

const Organization = () => {
  
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
          Strengthen Your Business with Organizational Development Services
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, our Organizational Development services are designed to provide comprehensive guidance on organizational structure, culture, and leadership development. In a rapidly changing business environment, fostering a productive and engaged workforce is essential for achieving long-term success. Our approach focuses on creating a strong foundation that enhances collaboration, drives innovation, and maximizes employee performance.
            <br />
            <br />
            We start by assessing your current organizational structure and culture. Our experienced team conducts thorough evaluations to understand how your organization functions, identifying strengths and areas for improvement. This analysis enables us to provide actionable recommendations that align with your business goals.
            <br />
            <br />
            A key aspect of our organizational development services is enhancing leadership capabilities. Effective leadership is vital for cultivating a positive work environment and driving employee engagement. We offer tailored leadership development programs that equip your leaders with the skills and knowledge needed to inspire their teams, foster collaboration, and navigate challenges. By investing in leadership growth, you can build a strong pipeline of future leaders who are committed to your organization’s success.
            <br />
            <br />
            Additionally, we focus on shaping a positive organizational culture that supports your strategic objectives. A strong culture promotes employee satisfaction, retention, and productivity. We work with you to define your core values and create initiatives that reinforce them throughout your organization. This may include team-building activities, recognition programs, and communication strategies that enhance trust and collaboration among employees.
            <br />
            <br />
            We also provide guidance on optimizing organizational structure to improve efficiency and responsiveness. By aligning roles, responsibilities, and reporting relationships, we help you create a structure that supports effective decision-making and enhances agility. This ensures that your organization can adapt to changing market conditions and capitalize on new opportunities.
            <br />
            <br />
            Our Organizational Development services are designed to deliver sustainable results. We focus on creating a culture of continuous improvement where feedback is encouraged, and employees feel empowered to contribute their ideas. By fostering an inclusive and innovative environment, you can unlock the full potential of your workforce.
            <br />
            <br />
            Partner with Vigomerge to strengthen your organization from the inside out. Our expertise in organizational development enables you to build a productive, engaged workforce that drives business success. Let us help you create an environment where employees thrive, collaboration flourishes, and your organization achieves its strategic goals.
          </p>
        </div>
      </div>

      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Tailored Organizational Solutions</strong>
            </li>
            <li>
              <strong>Holistic Assessment</strong>
            </li>
            <li>
              <strong>Expert Guidance</strong>
            </li>
            <li>
              <strong>Focus on Culture and Engagement</strong>
            </li>
            <li>
              <strong>
              Sustainable Growth
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

export default Organization