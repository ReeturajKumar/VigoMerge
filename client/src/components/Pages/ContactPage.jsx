import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import contactImage from '../../assets/C11.avif'; // Ensure correct image path

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [successMessage, setSuccessMessage] = useState(''); // State for success message
  const [showOverlay, setShowOverlay] = useState(false); // State for overlay
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', { // Adjust URL as necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setShowOverlay(true); // Show overlay
        setSuccessMessage('Thank you for your message. Our team will connect with you shortly.'); // Show success message
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        console.error('Error submitting contact form');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    if (showOverlay) {
      const timer = setTimeout(() => {
        navigate('/'); // Redirect to home page after 3 seconds
      }, 3000);
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [showOverlay, navigate]);

  return (
    <section className="bg-gradient-to-r from-[#EDF2F4] to-[#E0E7FF] py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto mt-10 flex flex-col lg:flex-row items-center justify-between lg:h-[600px]">
        <div className="w-full lg:w-1/2 h-64 lg:h-full">
          <img 
            src={contactImage} 
            alt="Contact Us" 
            className="w-full h-full object-cover "
          />
        </div>

        <div className="w-full lg:w-1/2 p-8 lg:p-10 flex justify-center items-center h-auto lg:h-full">
          <div className="w-full lg:w-[90%]">
            <h2 className="text-4xl font-bold text-center text-[#1842B6] mb-6 mt-7">
              Get in Touch with Us
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Have questions or inquiries? Fill out the form below and our team will get back to you promptly.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-[#1842B6] focus:border-[#1842B6] transition duration-200 ease-in-out"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-[#1842B6] focus:border-[#1842B6] transition duration-200 ease-in-out"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-[#1842B6] focus:border-[#1842B6] transition duration-200 ease-in-out"
                  placeholder="How can we help you?"
                  required
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:ring-[#1842B6] focus:border-[#1842B6] transition duration-200 ease-in-out"
                  placeholder="Your message here..."
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full inline-flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1842B6] hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-200 ease-in-out"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Overlay for success message */}
      {showOverlay && (
        <div className="fixed inset-0 bg-gradient-to-r from-[#EDF2F4] to-[#b4b9cb] flex items-center justify-center z-50">
          <div className=" p-6 text-center">
            <h2 className="text-3xl font-bold text-[#1842B6] mb-4">
              Thank you for your message!
            </h2>
            <p className='text-2xl font-bold text-[#1842B6]'>Our team will connect with you shortly.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactPage;
