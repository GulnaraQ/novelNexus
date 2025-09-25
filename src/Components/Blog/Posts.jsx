import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const Posts = () => {
  const blogCategory = ["All blog", "Trends", "Event", "Authors"];
  const [blogs, setBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All blog");
  const url = import.meta.env.VITE_BACKEND_URL + "/blogs";

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setBlogs(data);
    });
  }, []);

  // FILTER
  const filteredBlogs =
    activeCategory === "All blog"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <div className="container mx-auto px-6 py-[100px]">
      {/* Başlıq */}
      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="font-bold text-3xl md:text-4xl lg:text-5xl/[60px] text-center text-[#d37643] lg:w-[60%] mx-auto"
      >
        Explore our latest book related blog posts.
      </motion.h1>

      {/* Category Buttons */}
      <motion.div
        className="flex gap-4 items-center justify-between w-fit mx-auto my-[50px]"
        initial={{ x: 100, opacity: 0 }} // sağdan
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {blogCategory?.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 text-white duration-300 ${
              activeCategory === category
                ? "bg-[#d37643]"
                : "bg-[#008186] cursor-pointer"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Blog */}
      <motion.div
        key={activeCategory}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
      >
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(({ id, img, name, date, title }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img src={img} alt={name} />
              <div className="p-4">
                <Link
                  to={`/blog/${id}`}
                  className="font-semibold text-[20px] text-[#098489]"
                >
                  {title}
                </Link>
                <div className="flex justify-between items-center gap-5 mt-6">
                  <div>
                    <h4 className="text-[#d46e37]">{name}</h4>
                    <p className="text-gray-400 text-[14px] mt-1">{date}</p>
                  </div>
                  <div className="flex gap-3 items-center font-semibold text-[#098489] duration-300 hover:gap-2">
                    <Link to={`/blog/${id}`}>Read more</Link> <FaArrowRight />
                  </div>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 text-lg">
            No blogs found in this category.
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default Posts;
