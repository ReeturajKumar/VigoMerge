import img1 from '../../../assets/Web.avif';
import ctaBackground from '../../../assets/Data2.avif';
import Contact from './Contact';

const Web = () => {
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
          Innovative Web Application Development for Enhanced Business Performance
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, we offer <strong>Web Application Development</strong> services that are designed to empower your business with robust, user-friendly, and highly functional web applications. As businesses continue to digitize, a strong web presence is no longer optional—it is essential. Our custom web applications are built to meet your specific needs, ensuring that your business can operate more efficiently, engage users effectively, and scale with ease.
            <br />
            <br />
            Our team of expert developers, designers, and engineers work collaboratively with you to build applications that align with your business goals. We take a user-centric approach, ensuring the final product is intuitive and provides a seamless experience for your customers, employees, or end-users. Whether you are looking to create a dynamic e-commerce platform, a content management system (CMS), or a custom business application, we have the skills and experience to deliver a solution that fits your exact requirements.
            <br />
            <br />
            We use cutting-edge technologies and frameworks to develop scalable web applications that are not only robust but future-proof. This means the application will remain agile and adaptable as your business grows or evolves. Our development process emphasizes flexibility, allowing us to incorporate additional features or make adjustments as needed during or after the initial deployment.
            <br />
            <br />
            Security is at the forefront of our development process. We implement best practices to protect your web application from vulnerabilities, ensuring your data and that of your users is secure. From secure logins and encrypted data transmission to regular security updates, we make sure your web application is built with the latest security measures in place.
            <br />
            <br />
            Performance optimization is another critical element of our web application development service. We ensure that your web applications load quickly, perform well under heavy traffic, and provide a smooth user experience across different devices and browsers. This includes making your web application mobile-friendly, which is crucial in today’s mobile-driven world.
            <br />
            <br />
            Additionally, we offer ongoing maintenance and support services to ensure your web application remains up-to-date and runs efficiently. Our dedicated support team is always ready to assist with updates, troubleshooting, or scaling your web application as your business evolves.
            <br />
            <br />
            At Vigomerge, our Web Application Development service is designed to provide your business with a competitive edge, enabling you to streamline operations, engage users, and drive growth through innovative web-based solutions.
          </p>
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Key Values We Offer</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Custom Web Development</strong><br/>
              Build responsive, scalable web applications tailored to your unique business needs.
            </li>
            <li>
              <strong>Scalability</strong><br/>
              Applications built to grow with your expanding business.
            </li>
            <li>
              <strong>Enhanced Security</strong><br/>
              Robust security features to protect sensitive data and users.
            </li>
            <li>
              <strong>Cross-Platform Compatibility</strong> <br/>
              Seamless performance across all devices and browsers.
            </li>
            <li>
              <strong>Support and Maintenance</strong><br/>
              Continuous updates and support for optimal performance.
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
  )
}

export default Web