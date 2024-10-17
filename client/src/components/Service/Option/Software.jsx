import ctaBackground from '../../../assets/Data2.avif';
import img1 from '../../../assets/S1.avif';

const Software = () => {
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
          Innovative Software Prototyping for Effective Product Development
          </h1>
          <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
          At Vigomerge, we offer <strong>Software Prototyping Services</strong> to help businesses visualize their ideas and transform concepts into functional prototypes. Prototyping is a crucial step in the software development lifecycle, allowing organizations to test, validate, and refine their ideas before investing in full-scale development. Our experienced team works closely with you to create prototypes that effectively demonstrate the core functionality, user interface, and overall user experience of your software solution.
            <br />
            <br />
            Our prototyping process begins with understanding your business requirements and objectives. We collaborate with stakeholders to gather feedback and insights, ensuring that the prototype aligns with your vision. By utilizing industry-standard tools and frameworks, we create interactive prototypes that allow you to explore the application’s features and workflows in real time. This iterative process enables you to make informed decisions and adjustments early in the development phase, minimizing the risk of costly changes later on.
            <br />
            <br />
            One of the key advantages of software prototyping is the ability to enhance communication among team members and stakeholders. Visual representations of your software concept facilitate discussions, gather feedback, and address concerns before the actual development begins. This collaborative approach fosters a shared understanding of the project, ensuring that everyone is aligned with the objectives and expectations.
            <br />
            <br />
            Our prototyping service also allows for user testing and validation. We can involve actual users to interact with the prototype, gathering valuable feedback on usability, functionality, and overall satisfaction. This user-centric approach ensures that the final product meets the needs and preferences of your target audience, leading to higher adoption rates and success post-launch.
            <br />
            <br />
            Once the prototype is refined based on feedback, we provide detailed documentation and specifications for the development team. This comprehensive documentation acts as a roadmap for the actual development process, ensuring that all parties have a clear understanding of the project scope, timelines, and deliverables.
            <br />
            <br />
            At Vigomerge, our Software Prototyping service is designed to help you mitigate risks, save time and costs, and ultimately bring your software ideas to life with confidence. By investing in prototyping, you can validate your concepts, improve user satisfaction, and enhance the overall quality of your final product.
          </p>
        </div>
      </div>

      {/* Right Section (30%) */}
      <div className="md:w-4/12 w-full space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-4">Key Values We Offer</h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Early Visualization</strong><br/>
              Transforming concepts into interactive, visual prototypes.
            </li>
            <li>
              <strong>User-Centric Design</strong><br/> 
              Incorporating user feedback for improved usability.
            </li>
            <li>
              <strong>Iterative Development</strong><br/>
              Continuous refinement based on stakeholder input.
            </li>
            <li>
              <strong>Enhanced Communication</strong><br/>
              Facilitating collaboration among teams and stakeholders.
            </li>
            <li>
              <strong>Risk Mitigation</strong><br/>
              Identifying issues early to minimize development risks.Equipping teams with skills for effective automation.
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

export default Software