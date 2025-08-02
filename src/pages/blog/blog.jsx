import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  { id:1,
    title: "Migrating to Hustlify 101",
    author: "Arshida KA",
    date: "Jul 28, 2025",
    image: "https://static.vecteezy.com/system/resources/thumbnails/067/145/918/small/business-professionals-reviewing-charts-in-a-modern-office-colleagues-analyzing-data-in-a-boardroom-asian-businesspeople-discussing-financial-reports-photo.JPG",
  },

  {id:2,
    title: "Leadership Lessons from Sales Experts",
    author: "Neha R",
    date: "Jul 22, 2025",
    image: "https://static.vecteezy.com/system/resources/thumbnails/067/145/918/small/business-professionals-reviewing-charts-in-a-modern-office-colleagues-analyzing-data-in-a-boardroom-asian-businesspeople-discussing-financial-reports-photo.JPG",
  },
  {id:3,
    title: "Mental Models for Peak Performance",
    author: "Arun V",
    date: "Jul 20, 2025",
    image: "https://static.vecteezy.com/system/resources/thumbnails/067/145/918/small/business-professionals-reviewing-charts-in-a-modern-office-colleagues-analyzing-data-in-a-boardroom-asian-businesspeople-discussing-financial-reports-photo.JPG",
  },
  {id:4,
    title: "What is Wireframing?",
    author: "Sana I",
    date: "Jul 18, 2025",
    image: "https://static.vecteezy.com/system/resources/thumbnails/067/145/918/small/business-professionals-reviewing-charts-in-a-modern-office-colleagues-analyzing-data-in-a-boardroom-asian-businesspeople-discussing-financial-reports-photo.JPG",
  },
      { id:5,

    title: "Building Your Sales Stack",
    author: "Rahul M",
    date: "Jul 25, 2025",
    image: "https://img.freepik.com/free-photo/sales-sell-selling-commerce-costs-profit-retail-concept_53876-132327.jpg?semt=ais_hybrid&w=740",
  },
  {
    id:6,
    title: "How Collaboration Builds Better Creators",
    author: "Irfan H",
    date: "Jul 15, 2025",
    image: "https://img.freepik.com/free-photo/sales-sell-selling-commerce-costs-profit-retail-concept_53876-132327.jpg?semt=ais_hybrid&w=740",
  },
];

const BlogPage = () => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen text-gray-900 font-sans">
      {/* Featured Post */}
      <section className="relative w-full max-w-7xl mx-auto px-4 py-10">
        <div className="relative h-[450px] overflow-hidden rounded-xl shadow-md">
          <img
            src="https://img.freepik.com/free-photo/sales-sell-selling-commerce-costs-profit-retail-concept_53876-132327.jpg?semt=ais_hybrid&w=740"
            alt="Featured Blog"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent flex flex-col justify-end p-8">
            <p className="text-sm text-yellow-600 uppercase mb-2 font-semibold">Featured</p>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Breaking Into Sales Strategy: Advice from Hustlify Leader
            </h1>
            <p className="text-gray-800 mt-2 max-w-xl text-sm">
              Learn proven frameworks and real-world tactics for mastering high-income skills through Hustlify.
            </p>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent blog posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          

          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition"
            >                      <Link to={`/blog/${blog.id}`} className="block">

              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 group-hover:text-yellow-600 transition">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">
                  By {blog.author} · {blog.date}
                </p>
              </div>
                        </Link>

            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
