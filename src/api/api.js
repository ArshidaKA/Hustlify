import axios from "axios";

const API = axios.create({
  baseURL: "https://hustlify-backend.onrender.com/api", // change if deployed
});

// // FormData will be passed directly in frontend
// export const createBlog = (formData) => {
//   return API.post("/blogs/add", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
// };

export const fetchBlogs = () => API.get("/blogs");
export const fetchBlogById = (id) => API.get(`/blogs/${id}`);
