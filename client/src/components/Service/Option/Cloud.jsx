import img1 from '../../../assets/Big1.avif';
import ctaBackground from '../../../assets/Data2.avif';
const Cloud = () => {
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
          Comprehensive Cloud Consulting for Strategic Business Transformation
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, we offer <strong>Cloud Consulting Services</strong> to help businesses navigate the complexities of cloud technology and fully harness its potential. Cloud computing has transformed the way companies operate, offering increased flexibility, scalability, and cost-efficiency. However, migrating to the cloud or optimizing cloud infrastructure requires expert guidance. That’s where our Cloud Consulting services come in.
            <br />
            <br />
            Our team of experienced cloud consultants works closely with your organization to develop a strategic plan tailored to your business goals. Whether you’re looking to move existing infrastructure to the cloud, optimize your current cloud environment, or integrate cloud-based solutions into your operations, we provide the expertise and insights needed to ensure success. We begin with an in-depth assessment of your current IT infrastructure, analyzing your needs, workloads, and security requirements to determine the best cloud strategy for your business.
            <br />
            <br />
            One of the primary benefits of our Cloud Consulting service is the ability to implement cost-effective solutions that maximize operational efficiency. By transitioning to cloud-based services, businesses can significantly reduce the overhead costs associated with maintaining physical hardware, allowing for more agile operations. Our consultants help identify the right cloud service providers—whether it’s public, private, or hybrid cloud—and assist with cloud architecture design, ensuring your systems are scalable and secure.
            <br />
            <br />
            We also focus on enhancing your security posture within the cloud environment. Data protection, compliance, and security protocols are critical when managing cloud infrastructure, and our team ensures that best practices are followed at every step. From encryption and access controls to monitoring and disaster recovery planning, we ensure your cloud setup is safe and compliant with industry regulations.
            <br />
            <br />
            Our Cloud Consulting services don’t end with the implementation phase. We offer ongoing support to help manage and optimize your cloud environment as your business grows. This includes regular assessments to ensure your cloud infrastructure is meeting performance expectations, cost evaluations, and recommendations for future improvements.
            <br />
            <br />
            At Vigomerge, our goal is to help you unlock the full potential of the cloud, allowing you to operate more efficiently, scale with ease, and drive innovation within your industry.
          </p>
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Key Values We Offer</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Strategic Cloud Migration</strong><br/>
              Tailored cloud strategies for seamless migration and scalability.
            </li>
            <li>
              <strong>Cost Optimization</strong><br/>
              Maximizing efficiency and reducing infrastructure costs.
            </li>
            <li>
              <strong>Security and Compliance</strong><br/>
              Ensuring data protection and adherence to industry standards.
            </li>
            <li>
              <strong>Cloud Architecture Design</strong><br/>
              Building scalable, secure, and reliable cloud environments.
            </li>
            <li>
              <strong>Ongoing Support and Optimization</strong><br/> 
              Continuous monitoring, management, and performance improvement.
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

export default Cloud