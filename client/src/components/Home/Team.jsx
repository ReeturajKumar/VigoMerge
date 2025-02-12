

const Team = () => {
  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF]  py-16 px-4">

      {/* Grid for Our Team Text and Team Members */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Our Team Text Card */}
        <div className="p-6 text-center flex flex-col justify-center bg-white rounded-lg shadow-lg mb-8">
          <h3 className="text-[#1842B6] text-lg font-semibold uppercase mb-2">Our Team</h3>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our <br/><span className="text-[#1842B6]">Smart People.</span></h1>
          <p className="text-gray-600 mb-6">
            With a diverse range of expertise and commitment to excellence, our team is dedicated to delivering
            innovative marketing solutions that drive results!
          </p>
          <button className="bg-[#1842B6] text-white px-6 py-2 rounded-lg">View All</button>
        </div>

        {/* Team Member Cards */}
        {/* Team Member Card 1 */}
        <div className="p-6 text-center">
          <img
            src="https://via.placeholder.com/150x225"
            alt="Jonathan Andrew"
            className="w-32 h-auto mx-auto mb-4 object-cover rounded-lg"
            style={{ width: '385px', height: '386px' }}
          />
          <div>
            <h3 className="text-xl font-semibold">Jonathan Andrew</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#1842B6] text-sm">CEO Vigomerge</p>
              <div className="flex space-x-4">
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member Card 2 */}
        <div className="p-6 text-center">
          <img
            src="https://via.placeholder.com/150x225"
            alt="Sarah Keihl"
            className="w-32 h-auto mx-auto mb-4 object-cover rounded-lg"
            style={{ width: '385px', height: '386px' }}
          />
          <div>
            <h3 className="text-xl font-semibold">Sarah Keihl</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#1842B6] text-sm">Creative Director</p>
              <div className="flex space-x-4">
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member Card 3 */}
        <div className="p-6 text-center">
          <img
            src="https://via.placeholder.com/150x225"
            alt="Michael Smith"
            className="w-32 h-auto mx-auto mb-4 object-cover rounded-lg"
            style={{ width: '385px', height: '386px' }}
          />
          <div>
            <h3 className="text-xl font-semibold">Michael Smith</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#1842B6] text-sm">SMO Vigomerge</p>
              <div className="flex space-x-4">
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member Card 4 */}
        <div className="p-6 text-center">
          <img
            src="https://via.placeholder.com/150x225"
            alt="Jessica Wong"
            className="w-32 h-auto mx-auto mb-4 object-cover rounded-lg"
            style={{ width: '385px', height: '386px' }}
          />
          <div>
            <h3 className="text-xl font-semibold">Jessica Wong</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#1842B6] text-sm">Content Marketing</p>
              <div className="flex space-x-4">
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Team Member Card 5 */}
        <div className="p-6 text-center">
          <img
            src="https://via.placeholder.com/150x225"
            alt="Martin Lee"
            className="w-32 h-auto mx-auto mb-4 object-cover rounded-lg"
            style={{ width: '385px', height: '386px' }}
          />
          <div>
            <h3 className="text-xl font-semibold">Martin Lee</h3>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[#1842B6] text-sm">Marketing Analytics</p>
              <div className="flex space-x-4">
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="" className="text-gray-500 hover:text-[#1842B6]">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
