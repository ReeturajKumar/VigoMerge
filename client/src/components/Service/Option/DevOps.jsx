import img1 from '../../../assets/Software.jpg';
import ctaBackground from '../../../assets/Data2.avif';
import Contact from './Contact';

const DevOps = () => {
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
          Efficient DevOps Automation for Accelerated Software Delivery
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, we offer <strong>DevOps Automation Services</strong> designed to streamline your software development and deployment processes. In today’s fast-paced digital landscape, organizations must be agile and efficient to remain competitive. Our DevOps Automation solutions enable you to automate repetitive tasks, improve collaboration between development and operations teams, and accelerate the delivery of high-quality software.
            <br />
            <br />
            Our approach to DevOps Automation starts with a thorough assessment of your existing workflows and processes. We work closely with your teams to identify bottlenecks and areas for improvement, ensuring that our automation solutions are tailored to your specific needs. By leveraging industry-leading tools and technologies, we help you automate critical functions such as continuous integration (CI), continuous delivery (CD), and infrastructure management.
            <br />
            <br />
            One of the primary benefits of DevOps Automation is the ability to reduce manual errors and increase consistency across development and deployment processes. By automating routine tasks, teams can focus on more strategic initiatives, leading to faster development cycles and improved product quality. Our consultants implement CI/CD pipelines that facilitate rapid and reliable software releases, allowing your organization to respond quickly to market demands and customer feedback.
            <br />
            <br />
            In addition to streamlining software development, we emphasize the importance of monitoring and feedback loops in the DevOps process. Our DevOps Automation service includes setting up automated monitoring and alerting systems, which provide real-time insights into application performance and infrastructure health. This enables teams to identify and resolve issues proactively, ensuring a seamless user experience.
            <br />
            <br />
            Security is also a crucial aspect of DevOps Automation. We incorporate security practices into the DevOps lifecycle, a methodology known as DevSecOps, to ensure that security is considered at every stage of development. This includes automating security checks, vulnerability assessments, and compliance validation to safeguard your applications and data.
            <br />
            <br />
            Our DevOps Automation services are not just about implementing tools; they are about fostering a culture of collaboration and continuous improvement within your organization. We provide training and support to your teams, ensuring they are equipped with the skills and knowledge necessary to leverage automation effectively.
            <br />
            <br />
            At Vigomerge, our DevOps Automation service empowers businesses to enhance productivity, increase software quality, and drive innovation by creating a more agile and efficient development environment.
          </p>
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Key Values We Offer</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Streamlined Development Processes</strong><br/>
              Automating tasks for faster and more efficient workflows.
            </li>
            <li>
              <strong>Continuous Integration and Delivery</strong><br/> 
              Implementing CI/CD pipelines for rapid software releases.
            </li>
            <li>
              <strong>Proactive Monitoring and Feedback</strong><br/>
              Real-time insights to identify and resolve issues swiftly.
            </li>
            <li>
              <strong>Security Integration</strong><br/>
              Embedding security practices into the DevOps lifecycle.
            </li>
            <li>
              <strong>Team Empowerment and Training</strong><br/>
              Equipping teams with skills for effective automation.
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

export default DevOps