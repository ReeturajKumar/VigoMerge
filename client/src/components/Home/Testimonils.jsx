import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/T1.png';
import img2 from '../../assets/T2.png';
import img3 from '../../assets/T3.png';
import img4 from '../../assets/T4.jpg';
import img5 from '../../assets/T5.png';
import img6 from '../../assets/T6.png';
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from 'react';

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ bottom: '-30px' }}>
        <ul className="custom-dots">{dots}</ul>
      </div>
    ),
  };


  //RPA
  const testimonials = [
    {
      name: "Amarjeet Roy",
      designation: "Customer",
      feedback: "What's a talented person they are... congratulations 🎉 to all team members..",
      image: img1,
      rating: 5,
    },
    {
      name: "Shubham Tiwari",
      designation: "Customer",
      feedback: "Vigomerge exceeded expectations with their customized solutions and professional service.",
      image: img2,
      rating: 5,
    },
    {
      name: "Pradeep kumar Ray",
      designation: "Customer",
      feedback: "Vigomerge delivered software perfectly aligned with our industry-specific challenges.",
      image: img3,
      rating: 5,
    },
    {
      name: "Abhang Gonekar",
      designation: "Customer",
      feedback: "They made cloud migration seamless, with zero disruptions to our operations.",
      image: img4,
      rating: 5,
    },
    {
      name: "Vijay Ray",
      designation: "Customer",
      feedback: "Our mobile app was delivered on time, enhancing our customer experience.",
      image: img5,
      rating: 5,
    },
    {
      name: "Shrawan Bhosale",
      designation: "Customer",
      feedback: "Vigomerge's Big Data services transformed how we analyze and utilize large datasets.",
      image: img6,
      rating: 5,
    },
  ];

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const ref = useRef(null);
  
  const finalValues = [20, 5]; 
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

  const numberCountAnimation = {
    initial: { y: 30, opacity: 0 }, // Start position and opacity for counting
    animate: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section: Text Content on Left, Stats on Right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
          {/* Text content on the left */}
          <div className="text-left mb-6 md:mb-0"
          >
            <h3 className="text-[#1842B6] text-sm md:text-lg font-semibold uppercase mb-1 md:mb-2">
              Testimonials
            </h3>
            <h2 className="text-4xl md:text-4xl font-extrabold text-gray-900">
              What our customers are saying about us?
            </h2>
          </div>

          {/* Stats on the right (flex inline with gap) */}
          <motion.div 
            ref={ref} // Attach ref here
            className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-12"
          >
            {/* Satisfied Customers */}
            <div className="text-left sm:text-right">
              <motion.h2 
                variants={numberCountAnimation} 
                initial="initial" 
                animate={count1 ? "animate" : "initial"} 
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                {count1}+
              </motion.h2>
              <p className="text-gray-500 text-sm md:text-base">Satisfied Customers</p>
            </div>
            {/* Overall Rating */}
            <div className="text-left sm:text-right">
              <motion.h2 
                variants={numberCountAnimation} 
                initial="initial" 
                animate={count2 ? "animate" : "initial"} 
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                {count2}
              </motion.h2>
              <p className="text-gray-500 text-sm md:text-base">Overall Rating</p>
            </div>
          </motion.div>
        </div>

        {/* Slider */}
        <div>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-4 md:p-6 rounded-lg mx-2">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mr-4"
                    />
                    <div className="text-left">
                      <h3 className="text-lg md:text-xl font-semibold">{testimonial.name}</h3>
                      <p className="text-[#1842B6] text-xs md:text-sm">{testimonial.designation}</p>
                    </div>
                  </div>

                  {/* Right side: Rating */}
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}
                      />
                    ))}
                  </div>
                </div>

                {/* Feedback text */}
                <p className="text-gray-600 text-sm md:text-base mt-4">{testimonial.feedback}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
