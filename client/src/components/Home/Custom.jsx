import { Link } from 'react-router-dom';

const Custom = () => {
  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Background image applied here */}
        <div
          className="relative bg-cover bg-center py-16 px-4"
          style={{
            backgroundImage:
              "url('https://nypost.com/wp-content/uploads/sites/2/2024/01/stock-exchange-market-chart-stock-75163613.jpg?quality=75&strip=all')",
          }}
        >
          <div className="absolute inset-0 bg-[0a222d] opacity-50"></div>
          <div className="relative z-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Request a Customized Solution for Your Business!
            </h2>
            <p className="text-lg mb-8">
              Every business is unique. Request a tailored solution crafted
              specifically for your organization's challenges and goals.
            </p>
            <Link to="/contact-us">
              <button className="bg-[#1842B6] text-white font-semibold py-3 px-8 rounded transition-colors">
                CONTACT US
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom;
