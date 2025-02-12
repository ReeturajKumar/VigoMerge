import { useState, useEffect } from "react";
import img1 from "../../../assets/M1.avif";
import img2 from "../../../assets/M2.jpg";
import img3 from "../../../assets/M3.avif";
import ctaBackground from "../../../assets/Data2.avif";
// Replace with actual client logos
import clientLogo1 from "../../../assets/C1.jpg";
import clientLogo2 from "../../../assets/C2.svg";
import clientLogo3 from "../../../assets/C3.png";
import clientLogo4 from "../../../assets/C4.png";
import clientLogo5 from "../../../assets/C5.png";
import Contact from "../Option/Contact";

const images = [img1, img2, img3];

const Management = () => {
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
          Navigate Change with Expert Change Management Services
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, our Change Management services are designed to assist businesses in effectively managing organizational changes, including mergers and acquisitions, restructuring, and process transformations. In today’s dynamic business environment, the ability to navigate change is crucial for maintaining competitiveness and achieving strategic objectives. Our comprehensive approach focuses on minimizing disruption and maximizing the benefits of change initiatives.
            <br />
            <br />
            We begin by conducting a thorough assessment of your organization’s current state and the specific changes you are facing. Our expert team collaborates with key stakeholders to understand the impact of the change on various departments, employees, and overall business operations. This analysis forms the foundation for a tailored change management strategy that addresses your unique challenges.
            <br />
            <br />
            Effective communication is vital during times of change. We help you develop a clear communication plan that keeps all stakeholders informed and engaged throughout the process. Our approach ensures that employees understand the reasons behind the change, the benefits it brings, and their role in the transition. By fostering open communication, we aim to reduce resistance and build trust within the organization.
            <br />
            <br />
            Training and support are also essential components of our change management services. We provide targeted training programs to equip employees with the skills and knowledge they need to adapt to new processes, systems, or organizational structures. Our goal is to empower your workforce, enabling them to embrace change and contribute to a successful transition.
            <br />
            <br />
            We also focus on creating a supportive environment that encourages collaboration and engagement. Change can be challenging, and our team is committed to providing ongoing support throughout the transition. We work with leaders to establish a change champion network, fostering a culture of support and resilience within your organization.
            <br />
            <br />
            Measuring the success of change initiatives is critical for long-term sustainability. We help you establish key performance indicators (KPIs) to track the effectiveness of your change management efforts. By monitoring progress and gathering feedback, we can make necessary adjustments to ensure that the change is embraced and integrated into your organization.
            <br />
            <br />
            Partner with Vigomerge to navigate organizational changes with confidence. Our Change Management services empower you to manage transitions effectively, minimize disruptions, and achieve desired outcomes. Let us help you build a resilient organization that can thrive in the face of change, ensuring that your business remains agile and competitive in today’s fast-paced environment.
          </p>
        </div>
      </div>

      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Proven Change Management Expertise</strong>
            </li>
            <li>
              <strong>Tailored Strategies</strong>
            </li>
            <li>
              <strong>Effective Communication Plans</strong>
            </li>
            <li>
              <strong>Comprehensive Training and Support</strong>
            </li>
            <li>
              <strong>
              Continuous Monitoring and Adjustment
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

export default Management