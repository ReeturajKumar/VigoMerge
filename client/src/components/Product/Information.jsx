import banner from "../../assets/H2.avif";

const Information = () => {
  const features = [
    {
      title: "Predictive Analytics",
      description: "Features derived from historical data to predict future health outcomes or trends.",
      icon: "🔍",
    },
    {
      title: "Genomic Data",
      description: "Information on genetic variations that might affect disease risk and drug responses.",
      icon: "🧬",
    },
    {
      title: "Behavioral Data",
      description: "Information on lifestyle factors such as diet, physical activity, and smoking status.",
      icon: "🏃",
    },
    {
      title: "Patient-Reported",
      description: "Data provided directly by patients about their health status and quality of life.",
      icon: "📝",
    },
  ];

  const useCases = [
    {
      title: "Clinical Decision Support",
      description: "Leveraging data to provide actionable insights to healthcare providers.",
      icon: "💡",
    },
    {
      title: "Population Health Management",
      description: "Analyzing aggregated data to improve community health outcomes.",
      icon: "🌍",
    },
    {
      title: "Personalized Medicine",
      description: "Tailoring treatment plans based on individual patient data, including genetic information.",
      icon: "🧑‍⚕️",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] pt-16 pb-16 px-4 mt-5">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 md:py-18 p-4 rounded-md flex flex-col md:flex-row items-start space-y-8 md:space-y-0">
        
        {/* Left Section */}
        <div className="md:w-2/3 w-full p-6 mr-4"> {/* Added margin right */}
          <h1 className="text-4xl font-bold mb-8 text-[#1842B6] text-left">
          Products Information
          </h1>
        

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="p-4 rounded-lg ">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{feature.icon}</span>
                  <h2 className="font-semibold text-xl text-[#2B4D8C]">{feature.title}</h2>
                </div>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="p-4 rounded-lg ">
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-2">{useCase.icon}</span>
                  <h2 className="font-semibold text-xl text-[#2B4D8C]">{useCase.title}</h2>
                </div>
                <p className="text-gray-700">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={banner}
            alt="Healthcare analytics illustration"
            className="h-[600px] w-full rounded-lg shadow-lg" // Set fixed height and width
          />
        </div>
      </div>
    </section>
  );
}

export default Information;
