import roadmap from "../../assets/road.png";
import roadmap2 from "../../assets/road2.png";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Marketing = () => {
  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center pr-8">
          <h3 className="text-[#1842B6] font-bold text-sm">
            Strategic Planning
          </h3>
          <h1 className="text-4xl font-bold text-gray-800 mt-2">
            Market Insights and Analysis.
          </h1>
          <p className="text-gray-600 mt-4">
            Help businesses improve their operations, achieve their goals, and
            stay competitive in today's market.
          </p>

          {/* Replacing <a> with <Link> */}
          <Link to="/service">
            <button className="mt-6 px-4 py-2 w-[130px] border border-[#1842B6] text-[#1842B6] font-semibold rounded hover:bg-[#1842B6] hover:text-white transition-colors text-center">
              VIEW ALL
            </button>
          </Link>
        </div>

        {/* Right Section - Two Cards */}
        <div className="w-full md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="p-6 rounded-lg">
            <div className="text-4xl mb-4">
              <img
                src={roadmap}
                alt="Roadmap for Strategic Planning"
                className="cursor-pointer"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Strategic Planning Services
            </h2>
            <p className="text-gray-600 mb-6">
              Business consultants can assist clients in developing long-term
              strategic plans to achieve their goals.
            </p>

            {/* Replacing <a> with <Link> */}
            <Link
              to="/service/strategic-planning-services"
              className="text-[#1842B6] font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>

          {/* Card 2 */}
          <div className="p-6 rounded-lg">
            <div className="text-4xl mb-4">
              <img
                src={roadmap2}
                alt="Roadmap for Market Research"
                className="cursor-pointer"
              />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Market Research & Analysis
            </h2>
            <p className="text-gray-600 mb-6">
              Conduct thorough market research to provide insights into market
              trends, customer behaviors, and others.
            </p>

            {/* Replacing <a> with <Link> */}
            <Link
              to="/market-research-analysis"
              className="text-[#1842B6] font-semibold hover:underline"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;
