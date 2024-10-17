import ctaBackground from '../../../assets/Data2.avif';
import img1 from '../../../assets/Q1.jpg';
import Contact from './Contact';

const Quality = () => {
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
          Comprehensive Quality Assurance for Flawless Software Solutions
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, we offer comprehensive <strong>Quality Assurance (QA)</strong> services to ensure that your software products meet the highest standards of quality and performance. In today’s competitive market, delivering a flawless user experience is essential for the success of any application. Our dedicated QA team employs industry best practices and advanced testing methodologies to identify and resolve issues before your product reaches the market.
            <br />
            <br />
            Our QA process begins with a thorough understanding of your project requirements and objectives. We collaborate closely with your development team to establish testing strategies tailored to your specific needs. Our QA experts utilize both manual and automated testing techniques to cover all aspects of your software, including functionality, performance, security, and usability.
            <br />
            <br />
            One of the key components of our Quality Assurance service is our commitment to early and continuous testing. We believe that quality should be an integral part of the development lifecycle, not just a final step. By implementing QA processes from the outset, we can catch defects early, reduce development costs, and accelerate time to market. Our continuous integration and continuous testing practices ensure that any changes or new features are rigorously tested before they are deployed.
            <br />
            <br />
            Our QA services encompass a wide range of testing types, including functional testing, regression testing, performance testing, security testing, and user acceptance testing (UAT). We use the latest tools and technologies to automate testing processes where appropriate, allowing us to execute tests more efficiently and accurately. This automation not only speeds up the testing cycle but also enhances the consistency and reliability of test results.
            <br />
            <br />
            Furthermore, we emphasize the importance of thorough documentation throughout the QA process. Our team provides detailed test plans, test cases, and reports, enabling stakeholders to understand the testing outcomes and make informed decisions. This transparency fosters trust and confidence in the quality of the final product.
            <br />
            <br />
            At Vigomerge, our Quality Assurance service is designed to help you deliver exceptional software solutions that exceed user expectations. By ensuring your applications are thoroughly tested and free of defects, we empower you to build a strong reputation in the market and achieve long-term success.
          </p>
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Key Values We Offer</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Comprehensive Testing Coverage</strong><br/>
              Ensuring every aspect of software is thoroughly tested.
            </li>
            <li>
              <strong>Early and Continuous Testing</strong><br/> 
              Identifying defects early to minimize costs and delays.
            </li>
            <li>
              <strong>Automated Testing Solutions</strong><br/>
              Streamlining testing processes for efficiency and accuracy.
            </li>
            <li>
              <strong>Detailed Documentation</strong><br/>
              Providing clear reports for informed decision-making.
            </li>
            <li>
              <strong>User-Centric Focus</strong><br/>
              Enhancing user satisfaction through rigorous quality checks.
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

export default Quality