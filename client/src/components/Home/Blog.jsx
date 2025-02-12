import { Link } from 'react-router-dom'; // Import Link
import img1 from '../../assets/B1.png';
import img2 from '../../assets/B2.png';
import img3 from '../../assets/B3.png';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: img1,
      category: "Interactive Content",
      title: "Unlocking the Power of Content Marketing: Strategies for Success",
      date: "April 26, 2024",
      link: "/blog/1", // Add a valid link for navigation
    },
    {
      id: 2,
      image: img2,
      category: "Digital Marketing",
      title: "Unlocking the Power of Content Marketing: Strategies for Success",
      date: "April 26, 2024",
      link: "/blog/2", // Add a valid link for navigation
    },
    {
      id: 3,
      image: img3,
      category: "Marketing Tools",
      title: "Unlocking the Power of Content Marketing: Strategies for Success",
      date: "April 26, 2024",
      link: "/blog/3", // Add a valid link for navigation
    },
  ];

  return (
    <section className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-[#1842B6] text-sm md:text-lg font-semibold uppercase mb-2">
            Blogs
          </h3>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Recent Articles & News
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gradient-to-r from-[#E1E8FE] to-[#E0E7FF] overflow-hidden">
              <div className="relative">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-[#1842B6] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {blog.category}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                <div className="flex justify-between items-center text-gray-500 text-sm mt-2">
                  <span>{blog.date}</span>
                  <Link to={blog.link} className="text-[#1842B6] hover:text-blue-600 flex items-center">
                    Read More <span className="ml-1">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/blog" // Replace href with to
            className="bg-[#1842B6] text-white px-8 py-3 rounded-full text-sm font-semibold transition-colors hover:bg-[#1842B6]"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
