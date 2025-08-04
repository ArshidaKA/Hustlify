import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // change if deployed
});

// // FormData will be passed directly in frontend
// export const createBlog = (formData) => {
//   return API.post("/blogs/add", formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//   });
// };

export const fetchBlogs = () => API.get("/blogs");
