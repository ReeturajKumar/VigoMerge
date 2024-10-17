import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import banner from "../../assets/H1.avif";

const About2 = () => {
  const [visibleStorageCards, setVisibleStorageCards] = useState(2); 
  const [visibleFeatureCards, setVisibleFeatureCards] = useState(2); 

  // Function to handle "View More" button click for storage cards
  const handleViewMoreStorage = () => {
    setVisibleStorageCards((prevVisible) => prevVisible + 2); // Show 2 more storage cards
  };

  // Function to handle "View More" button click for feature cards
  const handleViewMoreFeatures = () => {
    setVisibleFeatureCards((prevVisible) => prevVisible + 2); // Show 2 more feature cards
  };

  // Array of card data for storage
  const storageCardData = [
    {
      title: "📦 Electronic Health Records (EHRs)",
      description: "Digital versions of patients' paper charts, including medical history, medications, test results, and more.",
    },
    {
      title: "🔗 Health Information Exchanges (HIEs)",
      description: "Networks that allow for sharing health information across different organizations and systems.",
    },
    {
      title: "📊 Databases and Data Warehouses",
      description: "Structured systems for storing large volumes of healthcare data, supporting complex queries and data analytics.",
    },
    {
      title: "💰 Billing Information",
      description: "Insurance details, charges, payments, and claims history.",
    },
  ];

  // Array of card data for features
  const featureCardData = [
    {
      title: "👤 Demographic Information",
      description: "Age, gender, ethnicity, and socioeconomic status.",
    },
    {
      title: "🩺 Clinical Data",
      description: "Vital signs, laboratory test results, imaging results (e.g., X-rays, MRIs).",
    },
    {
      title: "💊 Medication Records",
      description: "Prescriptions, dosage, frequency, and medication adherence.",
    },
    {
      title: "📋 Medical History",
      description: "Previous diagnoses, treatments, surgeries, and family health history.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] pt-10 pb-16 px-4 mt-5">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 p-4">
        {/* Full-Width Title */}
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-10 text-center text-[#1842B6]">
          Healthcare Data Management
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section for Image */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={banner}
              alt="Healthcare Data Management"
              className="w-full h-full object-cover rounded-md" // Make sure image takes full height and width
              style={{ height: "100%", maxHeight: "400px" }} // Adjust max height as needed
            />
          </div>

          {/* Right Section for Cards */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            {/* Section for Healthcare Data Storage */}
            <h2 className="text-xl font-semibold text-[#000] mb-2 text-left">
              Healthcare Data Storage
            </h2>
            {/* Grid Layout for Storage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
              {storageCardData.slice(0, visibleStorageCards).map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                  <h3 className="text-lg font-semibold text-[#1842B6] mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                  <Link to={`/storage/${index}`} className="text-blue-600 hover:underline mt-2 block">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>

            {/* View More Button for Storage Cards */}
            {visibleStorageCards < storageCardData.length && (
              <div className="flex justify-end">
                <button
                  onClick={handleViewMoreStorage}
                  className="px-4 py-2 bg-[#1842B6] text-white rounded-full hover:bg-[#132f7e] transition duration-300"
                >
                  View More
                </button>
              </div>
            )}

            {/* Section for Healthcare Data Features */}
            <h2 className="text-xl font-semibold text-[#000] mb-2 text-left">
              Healthcare Data Features
            </h2>
            {/* Grid Layout for Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featureCardData.slice(0, visibleFeatureCards).map((card, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl">
                  <h3 className="text-lg font-semibold text-[#1842B6] mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm">{card.description}</p>
                  <Link to={`/features/${index}`} className="text-blue-600 hover:underline mt-2 block">
                    Learn More
                  </Link>
                </div>
              ))}
            </div>

            {/* View More Button for Feature Cards */}
            {visibleFeatureCards < featureCardData.length && (
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleViewMoreFeatures}
                  className="px-4 py-2 bg-[#1842B6] text-white rounded-full hover:bg-[#132f7e] transition duration-300"
                >
                  View More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
