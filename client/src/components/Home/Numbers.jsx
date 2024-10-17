import { useState, useEffect, useRef } from 'react';

const Numbers = () => {
  const [customers, setCustomers] = useState(0);
  const [experience, setExperience] = useState(0);
  const [offices, setOffices] = useState(0);
  const [projects, setProjects] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const countUp = (setValue, finalValue, duration) => {
      let start = 0;
      const increment = Math.ceil(finalValue / (duration / 50));
      const timer = setInterval(() => {
        start += increment;
        if (start >= finalValue) {
          setValue(finalValue);
          clearInterval(timer);
        } else {
          setValue(start);
        }
      }, 50);
    };

    countUp(setCustomers, 20, 2000);
    countUp(setExperience, 7, 2000);
    countUp(setOffices, 2, 2000);
    countUp(setProjects, 25, 2000);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="pt-6 pb-6 px-4 mt-2 bg-black">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">{customers}+</h2>
            <p className="text-white">Satisfied Customers</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">{experience}+</h2>
            <p className="text-white">Years Experience</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">{offices}+</h2>
            <p className="text-white">Branch Offices</p>
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white">{projects}+</h2>
            <p className="text-white">Projects Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Numbers;
