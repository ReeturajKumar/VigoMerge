import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection

const Contact = () => {
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
      [e.target.id]: e.target.value,
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
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-bold mb-4">Contact Us</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="subject">
            Subject
          </label>
          <input
            type="text" // Changed type to text
            id="subject" // Updated the id
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Your Subject"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows="4"
            placeholder="Your Message"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>

      {/* Overlay for success message */}
      {showOverlay && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-[#1842B6] mb-4">
              Thank you for your message!
            </h2>
            <p className='text-xl font-semibold text-gray-700'>{successMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
