import ctaBackground from '../../../assets/Data2.avif';
import img1 from '../../../assets/S1.avif';
import Contact from './Contact';

const Software = () => {
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
          <div className="p-4 rounded-b-lg mt-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4">
              Innovative Software Design for Effective Product Development
            </h1>
            <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
              At Vigomerge, we offer <strong>Software Design Services</strong> to help businesses conceptualize, structure, and transform ideas into robust designs. Software design is a critical step in the development lifecycle, enabling organizations to create clear frameworks and workflows before full-scale implementation. Our experienced team collaborates with you to craft designs that effectively represent functionality, user interfaces, and overall user experience.
              <br />
              <br />
              Our design process begins with understanding your business goals and technical requirements. We work closely with stakeholders to ensure the design aligns with your vision. By utilizing industry-standard tools, we create detailed design artifacts, including diagrams, wireframes, and workflows, that guide the development phase. This approach minimizes the risk of costly changes later and ensures project efficiency.
              <br />
              <br />
              One of the key benefits of software design is improved communication among team members and stakeholders. Detailed designs foster discussions, provide clarity, and address concerns before development begins. This collaborative approach ensures alignment on project objectives and expectations.
              <br />
              <br />
              Our design service also includes user-centered methodologies. We incorporate feedback from users and stakeholders to refine usability and functionality, ensuring that the final product meets target audience needs. This leads to improved user satisfaction and a higher likelihood of post-launch success.
              <br />
              <br />
              Once the design is finalized, we deliver comprehensive documentation and specifications for the development team. This documentation acts as a blueprint for the development process, outlining the project scope, timelines, and deliverables.
              <br />
              <br />
              At Vigomerge, our Software Design service is aimed at reducing risks, optimizing time and costs, and ensuring the successful execution of your software projects. By investing in design, you can achieve clarity, improve user satisfaction, and deliver high-quality software solutions.
            </p>
          </div>
        </div>

        {/* Right Section (30%) */}
        <div className="md:w-4/12 w-full space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-4">Key Values We Offer</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>
                <strong>Structured Planning</strong><br />
                Transforming ideas into clear, structured designs.
              </li>
              <li>
                <strong>User-Centric Focus</strong><br />
                Incorporating user insights to enhance usability and functionality.
              </li>
              <li>
                <strong>Efficient Collaboration</strong><br />
                Facilitating effective communication among teams and stakeholders.
              </li>
              <li>
                <strong>Risk Reduction</strong><br />
                Identifying potential issues early to minimize development risks.
              </li>
              <li>
                <strong>Documentation Excellence</strong><br />
                Providing detailed specifications for seamless development.
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
                Ready to Transform Your Ideas?
              </h2>
              <p className="text-sm sm:text-base mb-4">
                Contact us today to discover how our software design services can help you achieve your vision.
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
          <Contact />
        </div>
      </div>
    </section>
  );
};

export default Software;
