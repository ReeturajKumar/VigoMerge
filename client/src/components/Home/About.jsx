import banner from "../../assets/banner2.png";
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const About = () => {
  const [count1, setCount1] = useState(0); // For Satisfied Customers
  const [count2, setCount2] = useState(0); // For Years Experience
  const [count3, setCount3] = useState(0); // For Projects Completed
  const ref = useRef(null);

  const finalValues = [500, 10, 40];
  const duration = 2000;

  useEffect(() => {
    let observer;

    const countUp = (finalValue, setter) => {
      const start = 0;
      const end = finalValue;
      const range = end - start;
      const stepTime = Math.abs(Math.floor(duration / range));
      
      let current = start;
      const timer = setInterval(() => {
        current += 1;
        setter(current);
        if (current === end) clearInterval(timer);
      }, stepTime);
    };

    if (ref.current) {
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            countUp(finalValues[0], setCount1);
            countUp(finalValues[1], setCount2);
            countUp(finalValues[2], setCount3);
            observer.unobserve(ref.current);
          }
        });
      });

      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] pt-10 pb-16 px-4 mt-5">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 md:py-18 p-4 rounded-md h-auto flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
          <img
            src={banner}
            alt="Hero section illustration"
            className="w-full h-auto max-w-xs md:max-w-md"
            style={{ maxHeight: "500px" }}
          />
        </div>

        <div className="md:w-1/2 w-full text-center md:text-left md:pl-10" ref={ref}>
          <h3 className="text-sm font-semibold text-[#1842B6] mb-2">
            About Us
          </h3>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">
            Your Trusted Advisors in{" "}
            <span className="text-[#1842B6]">Business Success.</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6">
            We understand the challenges and complexities that businesses face
            in todays dynamic marketplace. Thats why we offer a comprehensive
            suite of consulting services. Founded on the principles of
            innovation, integrity, and excellence, we are a team of seasoned
            professionals.
          </p>

          {/* Replacing <a> with <Link> */}
          <Link to="/service">
            <button className="px-6 py-3 bg-[#1842B6] text-white rounded-full mb-6 md:mb-8 text-sm sm:text-base">
              READ MORE
            </button>
          </Link>

          <div className="flex justify-center md:justify-start space-x-6 sm:space-x-8 pb-9">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                {count1}+
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Satisfied Customers
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                {count2}+
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold">
                {count3}+
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
