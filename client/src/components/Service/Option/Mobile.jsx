import img1 from '../../../assets/Cloud.avif';
import ctaBackground from '../../../assets/Data2.avif';

const Mobile = () => {
  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] py-8 md:py-16">
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
          Custom Mobile Application Development for Engaging and Scalable Solutions
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, we provide cutting-edge <strong>Mobile Application Development</strong> services designed to create intuitive, high-performing mobile apps that meet your business objectives. In today mobile-first world, having a seamless and engaging mobile app is essential for reaching customers and improving business operations. Our team specializes in developing mobile apps that offer excellent user experiences, run smoothly across all devices, and adapt to your evolving business needs.
            <br />
            <br />
            Our approach begins with understanding your specific goals and requirements. We work closely with you to design and develop a custom mobile app that not only reflects your brand but also enhances the user experience. Whether you are looking to build an e-commerce app, a customer engagement platform, or an internal tool for your employees, we ensure the final product is built with precision and efficiency.
            <br />
            <br />
            Using the latest mobile development frameworks and tools, we create apps for both iOS and Android platforms, ensuring broad market reach and compatibility. We prioritize performance optimization, making sure the apps we develop load quickly, run efficiently, and deliver a smooth experience. Furthermore, our focus on user experience (UX) design ensures that your app is easy to navigate, visually appealing, and engaging for users.
            <br />
            <br />
            Security is a major consideration in our development process. From secure logins to data encryption and compliance with industry standards, we build mobile apps that protect your data and maintain the privacy of your users. We implement the best practices for mobile app security to safeguard your business and user data from potential threats.
            <br />
            <br />
            Additionally, we integrate your mobile app with existing systems, such as your website, CRM, or ERP platforms, ensuring seamless data synchronization and operational continuity. This integration helps streamline processes and enhances your business’s overall efficiency.
            <br />
            <br />
            To ensure long-term success, we also offer ongoing maintenance and support. As your business grows, your mobile app will need to evolve with it, and we are here to provide updates, implement new features, and optimize performance as required.
            <br />
            <br />
            At Vigomerge, our Mobile Application Development service provides your business with the tools to stay competitive in an increasingly mobile-driven world, allowing you to connect with your customers and streamline operations through custom mobile solutions.
          </p>
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Key Values We Offer</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Custom-Built Mobile Solutions</strong> <br/>
              Seamlessly transition from on-premises systems to the cloud with minimal disruption and maximum efficiency.
            </li>
            <li>
              <strong>Cross-Platform Development</strong><br/> 
              We manage and optimize your cloud infrastructure to ensure peak performance, security, and cost-effectiveness.
            </li>
            <li>
              <strong>User-Centric Design</strong><br/> 
              Intuitive interfaces that offer seamless user experiences.
            </li>
            <li>
              <strong>Robust Security Features</strong><br/>
              Secure data protection and compliance with industry standards.
            </li>
            <li>
              <strong>Ongoing Maintenance and Support</strong> <br/>
              Continuous updates to enhance performance and scalability.
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
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border border-gray-300 rounded-md"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Mobile