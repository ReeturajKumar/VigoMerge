import services from '../../utils/Marketing';
import { Link } from 'react-router-dom'; // Import Link

const MarketingSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        <div className="container mx-auto p-6">
          <h2 className="text-3xl font-bold text-left mb-4">
            Market <span className="text-[#1842B6]">Insights & Analysis.</span>
          </h2>
          <p className="text-left mb-8">
            Help businesses improve their operations, achieve their goals, and stay competitive in today’s.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg p-6 flex flex-col">
                <div className="text-4xl mb-4 text-left">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-left">{service.title}</h3>
                <p className="text-gray-700 mb-4 text-left">{service.description}</p>
                <Link // Use Link instead of a
                  to={service.link} // Use the service's link here
                  className="text-[#1842B6]"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MarketingSection;
