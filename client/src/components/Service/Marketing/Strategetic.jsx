import { useState, useEffect } from "react";
import img1 from "../../../assets/Market1.avif";
import img2 from "../../../assets/Market2.avif";
import img3 from "../../../assets/Market3.avif";
import ctaBackground from "../../../assets/Data2.avif";
// Replace with actual client logos
import clientLogo1 from "../../../assets/C1.jpg";
import clientLogo2 from "../../../assets/C2.svg";
import clientLogo3 from "../../../assets/C3.png";
import clientLogo4 from "../../../assets/C4.png";
import clientLogo5 from "../../../assets/C5.png";
import Contact from "../Option/Contact";

const images = [img1, img2, img3];

const Strategetic = () => {
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
              Empowering Businesses with Cutting-Edge Web and Mobile Application
              Solutions
            </h1>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              At Vigomerge, we are committed to helping businesses thrive in the
              digital age by providing innovative web and mobile application
              development services. Whether you are looking to establish a
              powerful online presence, create user-centric mobile experiences,
              or develop custom solutions that streamline your operations, we
              deliver applications that are designed to meet your unique needs
              and fuel your growth.
              <br />
              <br />
              Our expert development team is skilled in building robust,
              scalable, and secure web applications using modern technologies
              such as React, Node.js, and other leading frameworks. We
              specialize in crafting dynamic, responsive websites and
              applications that offer seamless user experiences across all
              devices. From e-commerce platforms to enterprise-level software,
              our web solutions are built to be fast, secure, and easy to
              manage, ensuring your business stays ahead of the competition.
              <br />
              <br />
              In the mobile domain, our services encompass both iOS and Android
              app development, ensuring that your business can engage customers
              wherever they are. We work with native app development as well as
              cross-platform solutions using technologies like Flutter and React
              Native, ensuring high performance and a consistent user experience
              on all devices. Our mobile applications are designed with user
              engagement in mind, offering intuitive interfaces and powerful
              functionality that enhances user satisfaction.
              <br />
              <br />
              At the heart of every application we build is a focus on usability
              and performance. Our design and development process is
              collaborative, working closely with you to ensure that the final
              product not only meets your expectations but exceeds them. We
              follow a user-centric design approach, ensuring that your
              customers enjoy an intuitive, seamless experience while navigating
              your app. We also place strong emphasis on performance
              optimization, security, and scalability, ensuring that your
              applications can grow alongside your business.
              <br />
              <br />
              From concept to deployment and ongoing maintenance, we provide
              full-cycle development services. Our agile development process
              ensures that we deliver projects on time and within budget, while
              maintaining the flexibility to adapt to evolving requirements.
              After launch, we offer continuous support and updates to ensure
              that your applications remain secure, up-to-date, and aligned with
              the latest technological advancements.
              <br />
              <br />
              With Vigomerge’s web and mobile application services, you’re not
              just building software—you’re creating solutions that drive
              engagement, streamline processes, and foster innovation. Let us
              help you transform your vision into a reality by crafting powerful
              applications that serve your business goals and deliver
              exceptional user experiences.
            </p>
          </div>
        </div>

        <div className="md:w-4/12 w-full space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>
                <strong>Proven track record of successful projects</strong>
              </li>
              <li>
                <strong>Customized solutions tailored to your needs</strong>
              </li>
              <li>
                <strong>Expert team with industry knowledge</strong>
              </li>
              <li>
                <strong>Comprehensive support from start to finish</strong>
              </li>
              <li>
                <strong>
                  Agile methodology for efficient project delivery
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
  );
};

export default Strategetic;
