
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import { useState } from 'react';

const CaseStudies = () => {
  const [showAll, setShowAll] = useState(false); // State to toggle showing all case studies

  // Sample case study data
  const caseStudies = [
    {
      id: 1,
      image: img1,
      date: "April 01, 2024",
      client: "XYZ Tech Solutions",
    },
    {
      id: 2,
      image: img2,
      date: "April 01, 2024",
      client: "XYZ Tech Solutions",
    },
    {
      id: 3,
      image: img3,
      date: "April 01, 2024",
      client: "XYZ Tech Solutions",
    },
    {
      id: 4,
      image: img1,
      date: "April 01, 2024",
      client: "XYZ Tech Solutions",
    },
    {
      id: 5,
      image: img2,
      date: "April 01, 2024",
      client: "XYZ Tech Solutions",
    },
    {
      id: 6,
      image: img3,
      date: "April 01, 2024",
      client: "XYZ Tech Solutions",
    },
  ];

  // Determine the case studies to show based on the state
  const displayedStudies = showAll ? caseStudies : caseStudies.slice(0, 3);

  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left">
          Learn from Our Case Studies.
        </h1>
        {/* Description */}
        <p className="text-lg text-gray-600 mb-12 text-left">
          Each case study is a testament to our commitment to delivering
          measurable results and driving tangible value for our clients.
        </p>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {displayedStudies.map((study) => (
            <div key={study.id} className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] overflow-hidden relative">
              {/* Date Label */}
              <div className="absolute top-4 left-4 bg-[#1842B6] text-white px-3 py-1 rounded-lg text-sm">
                {study.date}
              </div>
              {/* Image */}
              <img
                src={study.image}
                alt={`Case Study ${study.id}`}
                className="w-full h-68 object-cover"
              />
              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  {/* Client text on the left */}
                  <h3 className="text-xl font-semibold mb-2">
                    Client: {study.client}
                  </h3>
                  {/* Read More button on the right */}
                  <a href="" className="text-[#1842B6] font-bold">
                    Read More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="mt-12 flex justify-end">
            <button
              onClick={() => setShowAll(true)} // Toggle state on click
              className="text-[#1842B6] px-6 py-3 rounded-lg font-bold border border-[#1842B6]"
            >
              View More Case Studies
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
