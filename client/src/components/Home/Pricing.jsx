

const Pricing = () => {
  return (
    <div className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] py-10 px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-10">
      <h2 className="text-base font-semibold text-[#1842B6] uppercase">Pricing Plans</h2>
      <h1 className="text-4xl font-extrabold text-gray-900">Pricing That Suits Your Needs.</h1>
      <p className="mt-4 text-gray-600">
        Whether you are a startup on a tight budget or a multinational corporation looking for comprehensive support.
      </p>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Basic Plan */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-5xl font-semibold text-[#1842B6]">Basic Plan.</h3>
        <p className="mt-2 text-gray-500">Ideal for startups and small businesses looking for affordable consulting services.</p>
        <div className="text-4xl font-extrabold mt-4 text-gray-900">$49 <span className="text-lg text-black">/session</span></div>
        <ul className="mt-6 space-y-4 text-gray-700">
          <li className="flex items-center">
            <span className="text-[#1842B6]">✓</span>
            <span className="ml-3">Initial consultation session to assess your needs and goals.</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#1842B6]">✓</span>
            <span className="ml-3">Customized recommendations and actionable insights.</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#1842B6]">✓</span>
            <span className="ml-3">Limited support via email or phone.</span>
          </li>
        </ul>
        <button className="mt-6 w-full border border-[#1842B6] text-black py-2 rounded-lg hover:bg-blue-600">Learn More</button>
      </div>

      {/* Standard Plan */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-5xl font-semibold text-[#1842B6]">Standard Plan.</h3>
        <p className="mt-2 text-gray-500">Perfect for growing businesses in need of comprehensive consulting support.</p>
        <div className="text-4xl font-extrabold mt-4 text-gray-900">$69 <span className="text-lg text-black">/session</span></div>
        <ul className="mt-6 space-y-4 text-gray-700">
          <li className="flex items-center">
            <span className="text-[#1842B6]">✓</span>
            <span className="ml-3">Initial consultation session to assess your needs and goals.</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#1842B6]">✓</span>
            <span className="ml-3">Customized recommendations and actionable insights.</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#1842B6]">✓</span>
            <span className="ml-3">Limited support via email or phone.</span>
          </li>
        </ul>
        <button className="mt-6 w-full bg-[#1842B6] text-white py-2 rounded-lg">Learn More</button>
      </div>

      {/* Premium Plan */}
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-5xl font-semibold text-[#1842B6]">Premium Plan.</h3>
        <p className="mt-2 text-gray-500">For established companies seeking strategic guidance and transformational solutions.</p>
        <div className="text-4xl font-extrabold mt-4 text-gray-900">$99 <span className="text-lg text-black">/session</span></div>
        <ul className="mt-6 space-y-4 text-gray-700">
          <li className="flex items-center">
            <span className="text-[#1842B6]">✓</span>
            <span className="ml-3">Initial consultation session to assess your needs and goals.</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#1842B6]">✓</span>
            <span className="ml-3">Customized recommendations and actionable insights.</span>
          </li>
          <li className="flex items-center">
            <span className="text-[#1842B6]">✓</span>
            <span className="ml-3">Limited support via email or phone.</span>
          </li>
        </ul>
        <button className="mt-6 w-full border border-[#1842B6] text-black py-2 rounded-lg">Learn More</button>
      </div>
    </div>

    <div className="mt-8 text-center">
      <a href="" className="text-[#1842B6] hover:underline">Reach us for more details! Contact Us</a>
    </div>
  </div>
);
};


export default Pricing