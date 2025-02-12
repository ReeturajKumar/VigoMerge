import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const CaseStudies = () => {
  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-sm font-bold text-[#1842B6] mb-4">Case studies</h1>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Learn from Our Case Studies.
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 mb-12">
          Each case study is a testament to our commitment to delivering
          measurable results and driving tangible value for our clients.
        </p>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] overflow-hidden relative">
            <div className="absolute top-4 left-4 bg-[#1842B6] text-white px-3 py-1 rounded-lg text-sm">
              April 01, 2024
            </div>
            <img
              src={img1}
              alt="Case Study 1"
              className="w-full h-68 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Client: XYZ Tech Solutions
                </h3>
                {/* Replacing <a> with <Link> */}
                <Link to="/case-study/1" className="text-[#1842B6] font-bold">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] overflow-hidden relative">
            <div className="absolute top-4 left-4 bg-[#1842B6] text-white px-3 py-1 rounded-lg text-sm">
              April 01, 2024
            </div>
            <img
              src={img2}
              alt="Case Study 2"
              className="w-full h-68 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Client: XYZ Tech Solutions
                </h3>
                {/* Replacing <a> with <Link> */}
                <Link to="/case-study/2" className="text-[#1842B6] font-bold">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] overflow-hidden relative">
            <div className="absolute top-4 left-4 bg-[#1842B6] text-white px-3 py-1 rounded-lg text-sm">
              April 01, 2024
            </div>
            <img
              src={img3}
              alt="Case Study 3"
              className="w-full h-68 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Client: XYZ Tech Solutions
                </h3>
                {/* Replacing <a> with <Link> */}
                <Link to="/case-study/3" className="text-[#1842B6] font-bold">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] overflow-hidden relative">
            <div className="absolute top-4 left-4 bg-[#1842B6] text-white px-3 py-1 rounded-lg text-sm">
              April 01, 2024
            </div>
            <img
              src={img4}
              alt="Case Study 4"
              className="w-full h-68 object-cover"
            />
            <div className="p-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold mb-2">
                  Client: XYZ Tech Solutions
                </h3>
                {/* Replacing <a> with <Link> */}
                <Link to="/case-study/4" className="text-[#1842B6] font-bold">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          {/* Replacing <a> with <Link> */}
          <Link
            to="/blog"
            className="text-[#1842B6] px-6 py-3 rounded-lg font-bold border border-[#1842B6]"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
