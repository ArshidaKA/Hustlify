import React from "react";
import { useParams } from "react-router-dom";

const blogs = [
  { id: 1, title: "Migrating to Hustlify 101", author: "Arshida KA", date: "Jul 28, 2025", image: "https://static.vecteezy.com/system/resources/thumbnails/067/145/918/small/business-professionals-reviewing-charts-in-a-modern-office-colleagues-analyzing-data-in-a-boardroom-asian-businesspeople-discussing-financial-reports-photo.JPG" },
  { id: 2, title: "Leadership Lessons from Sales Experts", author: "Neha R", date: "Jul 22, 2025", image: "https://static.vecteezy.com/system/resources/thumbnails/067/145/918/small/business-professionals-reviewing-charts-in-a-modern-office-colleagues-analyzing-data-in-a-boardroom-asian-businesspeople-discussing-financial-reports-photo.JPG" },
  { id: 3, title: "Mental Models for Peak Performance", author: "Arun V", date: "Jul 20, 2025", image: "https://static.vecteezy.com/system/resources/thumbnails/067/145/918/small/business-professionals-reviewing-charts-in-a-modern-office-colleagues-analyzing-data-in-a-boardroom-asian-businesspeople-discussing-financial-reports-photo.JPG" },
  { id: 4, title: "What is Wireframing?", author: "Sana I", date: "Jul 18, 2025", image: "https://static.vecteezy.com/system/resources/thumbnails/067/145/918/small/business-professionals-reviewing-charts-in-a-modern-office-colleagues-analyzing-data-in-a-boardroom-asian-businesspeople-discussing-financial-reports-photo.JPG" },
  { id: 5, title: "Building Your Sales Stack", author: "Rahul M", date: "Jul 25, 2025", image: "https://img.freepik.com/free-photo/sales-sell-selling-commerce-costs-profit-retail-concept_53876-132327.jpg?semt=ais_hybrid&w=740" },
  { id: 6, title: "How Collaboration Builds Better Creators", author: "Irfan H", date: "Jul 15, 2025", image: "https://img.freepik.com/free-photo/sales-sell-selling-commerce-costs-profit-retail-concept_53876-132327.jpg?semt=ais_hybrid&w=740" },
];

const BlogDetail = () => {
  const { id } = useParams();
  const blogitem = blogs.find((blog) => blog.id === parseInt(id));

  // if (!blogitem) return <div className="p-8">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={blogitem.image}
        alt={blogitem.title}
        className="w-full h-96 object-cover rounded-xl mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{blogitem.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {blogitem.author} · {blogitem.date}
      </p>
      <p className="text-gray-700 text-lg whitespace-pre-line">
        {blogitem.content || "No content available for this blog."}
      </p>
    </div>
  );
};

export default BlogDetail;
