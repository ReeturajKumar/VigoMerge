import ctaBackground from '../../../assets/Data2.avif';
import img1 from '../../../assets/I2.jpg';
import Contact from './Contact';

const System = () => {
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
          Seamless Systems Integration for Enhanced Operational Efficiency
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, we offer <strong>Systems Integration</strong> services designed to streamline your business operations by ensuring seamless communication and data exchange between various software applications and systems. In today’s complex technology landscape, organizations often rely on multiple platforms, tools, and applications to manage their processes. Our Systems Integration solutions help unify these disparate systems, creating a cohesive infrastructure that enhances efficiency and productivity.
            <br />
            <br />
            Our approach to Systems Integration begins with a thorough assessment of your existing systems and processes. We work closely with your team to understand your business requirements and identify integration challenges. By developing a tailored integration strategy, we ensure that your systems work together effectively, facilitating smooth data flow and real-time communication.
            <br />
            <br />
            One of the key benefits of our Systems Integration service is the elimination of data silos. When systems are integrated, data can be accessed and shared across departments, leading to better collaboration and informed decision-making. This interconnectedness enables your organization to respond quickly to market changes and customer demands.
            <br />
            <br />
            We utilize industry-standard integration methodologies and tools to implement robust solutions that are scalable and secure. Our team has extensive experience with various integration patterns, including API integration, middleware solutions, and cloud-based integration. This flexibility allows us to adapt to your specific technology stack and business needs.
            <br />
            <br />
            In addition to improving data flow, our Systems Integration services enhance process automation. By connecting systems, we enable automated workflows that reduce manual intervention and minimize errors. This not only saves time but also increases the reliability of your operations.
            <br />
            <br />
            Security is also a top priority in our integration solutions. We ensure that data is securely transmitted between systems, implementing encryption and access controls to protect sensitive information. Our team follows best practices for compliance and data governance, ensuring that your integrated systems adhere to industry standards.
            <br />
            <br />
            At Vigomerge, our Systems Integration service empowers businesses to optimize their technology investments, improve operational efficiency, and drive innovation. By creating a connected environment, we enable you to harness the full potential of your software ecosystem, positioning your organization for success in a rapidly evolving marketplace.
          </p>
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Key Values We Offer</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Seamless Connectivity</strong><br/>
              Enabling smooth communication between disparate systems.
            </li>
            <li>
              <strong>Data Centralization</strong><br/> 
              Eliminating data silos for informed decision-making.
            </li>
            <li>
              <strong>Process Automation</strong><br/>
              Streamlining workflows to reduce manual intervention.
            </li>
            <li>
              <strong>Scalable Solutions</strong><br/>
              Designing integration strategies that grow with your business.Providing clear reports for informed decision-making.
            </li>
            <li>
              <strong>Security and Compliance</strong><br/>
              Ensuring data protection and adherence to regulations.
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

export default System