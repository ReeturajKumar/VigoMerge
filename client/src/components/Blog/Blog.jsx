import { useState } from "react";
import img1 from "../../assets/B1.png";
import img2 from "../../assets/B2.png";
import img3 from "../../assets/B3.png";
import Case from './caseStudies';

const Blog = () => {
  const [showCount, setShowCount] = useState(3); // Start with 3 blogs

  const blogs = [
    {
      id: 1,
      image: img1,
      category: "Interactive Content",
      title: "Unlocking the Power of Content Marketing: Strategies for Success",
      date: "April 26, 2024",
      link: "",
    },
    {
      id: 2,
      image: img2,
      category: "Digital Marketing",
      title: "Unlocking the Power of Content Marketing: Strategies for Success",
      date: "April 26, 2024",
      link: "",
    },
    {
      id: 3,
      image: img3,
      category: "Marketing Tools",
      title: "Unlocking the Power of Content Marketing: Strategies for Success",
      date: "April 26, 2024",
      link: "",
    },
    {
      id: 4,
      image: img1,
      category: "Interactive Content",
      title: "The Future of Content Marketing: What's Next?",
      date: "April 27, 2024",
      link: "",
    },
    {
      id: 5,
      image: img2,
      category: "Digital Marketing",
      title: "Maximizing Your Reach: Social Media Strategies",
      date: "April 28, 2024",
      link: "",
    },
    {
      id: 6,
      image: img3,
      category: "Marketing Tools",
      title: "The Best Tools for Content Creators in 2024",
      date: "April 29, 2024",
      link: "",
    },
  ];

  // Determine the blogs to show based on the current showCount
  const displayedBlogs = blogs.slice(0, showCount);

  const handleShowMore = () => {
    setShowCount(prevCount => prevCount + 3); // Show 3 more blogs
  };

  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-left">
            Recent Articles & News
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {displayedBlogs.map((blog) => (
            <div key={blog.id} className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] overflow-hidden">
              {/* Blog Image */}
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                {/* Category Tag */}
                <span className="absolute top-3 left-3 bg-[#1842B6] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              {/* Blog Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>
                <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                  <span>{blog.date}</span>
                  <a
                    href={blog.link}
                    className="text-[#1842B6] hover:text-blue-600 flex items-center"
                  >
                    Read More <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        {showCount < blogs.length && (
          <div className="mt-12 text-right">
            <button
              onClick={handleShowMore} // Toggle state on click
              className="bg-[#1842B6] text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors"
            >
              View More Posts
            </button>
          </div>
        )}
        <Case />
      </div>
    </section>
  );
};

export default Blog;
