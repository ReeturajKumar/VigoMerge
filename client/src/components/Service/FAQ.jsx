import { useState } from 'react';
import Question from '../../utils/FAQ';
import { TiMinus } from "react-icons/ti";
import { HiPlusCircle } from "react-icons/hi";

const FAQ = () => {
  const [open, setOpen] = useState(0); // Initialize with the first question open
  const [visibleCount, setVisibleCount] = useState(6); // State to control visible FAQs
  
  const handleToggle = (index) => {
    setOpen(open === index ? -1 : index); // Toggle the clicked question; -1 means none is open
  };

  const handleViewMore = () => {
    setVisibleCount(prevCount => prevCount + 4); // Increase the visible count by 4
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-start">
        
        {/* Heading and Description */}
        <div className="mb-12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-left mb-4">Everything You {" "}
            <span className="text-[#1842B6]">Need to Know</span>
          </h2>
          <p className="text-left text-base md:text-lg mb-8">
            Here are some answers to the questions we get asked most often about our services and solutions.
          </p>
        </div>

        {/* FAQ Items - 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full px-2 sm:px-6 lg:px-12">
          {Question.slice(0, visibleCount).map((step, i) => (
            <div key={i} className="border rounded-md mb-4 overflow-hidden w-full"> {/* Set a fixed width */}
              <button
                onClick={() => handleToggle(i)}
                className={`w-full flex justify-between items-center p-4 transition-colors duration-300 ${open === i ? 'bg-[#1842B6] text-white' : 'bg-tertiary text-black'}`}
              >
                <div className="flex items-center w-full">
                  <span className="text-secondary font-extrabold text-xl md:text-2xl mr-4">{step.number}</span>
                  <h3 className="text-base md:text-lg font-semibold text-left flex-1">{step.question}</h3>
                </div>
                <div className=" text-black border p-1.5 rounded-full flex-shrink-0">
                  {open === i ? <TiMinus /> : <HiPlusCircle />}
                </div>
              </button>

              {/* Conditionally render the answer */}
              {open === i && (
                <div className="p-4">
                  <p className="text-sm md:text-base">{step.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < Question.length && (
          <div className="mt-6 w-full flex justify-end">
            <button
              onClick={handleViewMore}
              className="text-[#1842B6] font-semibold text-lg"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FAQ;
