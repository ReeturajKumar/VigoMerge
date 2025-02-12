import img1 from '../../../assets/Data1.avif';
import ctaBackground from '../../../assets/Data2.avif'; 
import Contact from './Contact';

const Data = () => {
  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex flex-col md:flex-row gap-6">
        {/* Left Section (70%) */}
        <div className="md:w-8/12 w-full">
          <div className="relative">
            <img
              src={img1}
              alt="Banner"
              className="w-full h-48 sm:h-64 lg:h-72 xl:h-80 object-cover rounded-lg"
            />
          </div>
          <div className="  p-4 rounded-b-lg mt-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
            Tailored Custom Software Development for Optimized Business Solutions
            </h1>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
            At Vigomerge, our <strong>Custom Software Development</strong> service is designed to provide tailored solutions that align perfectly with your business objectives. In an era where off-the-shelf solutions may not fully meet your unique needs, we take pride in delivering software that is built specifically for you, enhancing your business operations, increasing efficiency, and driving innovation.
              <br />
              <br />
              We understand that every business has its distinct challenges and goals, which is why we take a collaborative approach to custom software development. Our team of skilled developers, designers, and engineers works closely with you to understand your business processes, workflows, and pain points. We focus on building software that solves your specific problems while offering flexibility for future growth and adaptability to the evolving market.
              needs.
              <br />
              <br />
              The process begins with a thorough consultation to assess your requirements, followed by the creation of a roadmap that outlines the development stages, timelines, and expected outcomes. This ensures transparency throughout the project lifecycle and allows you to remain involved at every step. Whether you need a complete end-to-end solution or specific functionalities integrated into your existing system, we are equipped to handle projects of all sizes and complexities.
              <br />
              <br />
              Our development methodology is centered around scalability, performance, and security. We use the latest technologies and development frameworks to build solutions that are not only robust but also future-proof, allowing your software to evolve as your business grows. Additionally, we prioritize user experience (UX) and design, ensuring the final product is not only functional but intuitive and easy to use for your employees, customers, or end-users.
              <br />
              <br />
              One of the key benefits of custom software is its ability to integrate seamlessly with your existing systems. We ensure that your custom-built solution is compatible with your current infrastructure, whether it is enterprise resource planning (ERP) systems, customer relationship management (CRM) platforms, or other specialized tools. This reduces downtime, mitigates risks, and ensures a smooth transition to new software.
              <br />
              <br />
              Moreover, custom software offers the advantage of enhanced security. Off-the-shelf products may pose risks of vulnerabilities, but with custom development, security protocols are built specifically to safeguard your data and operations. We adhere to industry standards and implement best practices in cybersecurity to ensure your software is protected against potential threats.

              <br />
              <br />
              At Vigomerge, we are committed to delivering high-quality software that drives your business forward. Our custom software development service empowers businesses to operate more efficiently, stay competitive, and achieve long-term success through technology-driven solutions tailored to their specific needs.
            </p>
          </div>
        </div>

        {/* Right Section (30%) */}
        <div className="md:w-4/12 w-full space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Key Values We Offer</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>
                <strong>Personalized Solutions</strong> <br/>
                Tailored software built specifically for your business needs.

              </li>
              <li>
                <strong>Seamless Integration</strong> <br/>
                Integrates smoothly with existing systems and workflows.
              </li>
              <li>
                <strong>Scalability and Flexibility</strong><br/>
                Designed to grow and adapt with your business.
              </li>
              <li>
                <strong>Enhanced Security</strong><br/>
                Custom-built security features to protect sensitive data.
              </li>
              <li>
                <strong>User-Centric Design</strong> <br/>
                Intuitive interfaces ensuring optimal user experience and functionality.
              </li>
            </ul>
          </div>

          {/* Call to Action Section */}
          <div
            className="bg-cover bg-center text-white py-6 rounded-lg mb-6"
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Contact Us Form */}
          <Contact/>
        </div>
      </div>
    </section>
  );
};

export default Data;
